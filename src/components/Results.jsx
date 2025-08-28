// components/Results.jsx
import React, { useState, useRef } from 'react';
import { studentDatabase } from '../data/studentDatabase';
import resultImage from '../assets/5.jpg';
import { FaPrint, FaDownload, FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Results = () => {
  const [exam, setExam] = useState('');
  const [course, setCourse] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [resultData, setResultData] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [step, setStep] = useState(1);
  const resultRef = useRef();

  const universityCourses = {
    "BS": ["Computer Science", "Software Engineering", "Electrical Engineering", "Business Administration", "Psychology", "Economics"],
    "BBA": ["Finance", "Marketing", "Human Resource Management", "Supply Chain Management"],
    "MS": ["Computer Science", "Data Science", "Electrical Engineering", "Business Administration"],
    "MPhil": ["Education", "Psychology", "Economics", "Literature"],
    "MBA": ["Executive MBA", "Finance", "Marketing", "Human Resources"],
    "PhD": ["Computer Science", "Electrical Engineering", "Business Administration", "Education", "Psychology"]
  };

  const handleExamSelect = () => {
    if (!exam) { alert('Please select an examination'); return; }
    setStep(2);
  };

  const handleCourseSelect = () => {
    if (!course) { alert('Please select your course'); return; }
    setStep(3);
  };

  const checkResult = () => {
    if (!rollNo) { alert('Please enter roll number'); return; }
    const student = studentDatabase[rollNo];
    if (!student) { alert('Student not found. Please check roll number and try again.'); return; }
    if (student.course !== course) { alert(`Roll number does not belong to ${course} program.`); return; }

    const examResults = student[exam];
    let totalObtained = 0;
    let totalMax = 0;
    const subjectResults = [];

    for (const subject in examResults) {
      const marks = examResults[subject];
      totalObtained += marks.obtained;
      totalMax += marks.max;
      const grade = calculateGrade((marks.obtained / marks.max) * 100);
      const subjectName = subject.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      subjectResults.push({ subject: subjectName, obtained: marks.obtained, max: marks.max, grade });
    }

    const percentage = ((totalObtained / totalMax) * 100).toFixed(2);
    const overallGrade = calculateGrade(percentage);

    setResultData({
      studentInfo: {
        name: student.name,
        rollNo,
        course: student.course,
        class: student.class,
        examType: exam === 'midterm' ? 'Mid-Term Examination 2023' : 'Annual Examination 2023'
      },
      subjectResults,
      totalMarks: `${totalObtained}/${totalMax}`,
      percentage,
      overallGrade,
      totalObtained,
      totalMax
    });

    setShowResult(true);
  };

  const calculateGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    if (percentage >= 40) return 'D';
    return 'E';
  };

  const resetForm = () => {
    setExam('');
    setCourse('');
    setRollNo('');
    setResultData(null);
    setShowResult(false);
    setStep(1);
  };

  const handlePrint = () => {
    const printContent = resultRef.current;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const downloadPDF = () => {
    if (!resultData) return;
    const doc = new jsPDF();

    // Header
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 150);
    doc.text('PARADISE UNIVERSITY PAKISTAN', 105, 20, { align: 'center' });
    doc.setFontSize(16);
    doc.setTextColor(80, 80, 80);
    doc.text('OFFICIAL EXAMINATION RESULT', 105, 30, { align: 'center' });
    doc.setFontSize(14);
    doc.text(resultData.studentInfo.examType, 105, 40, { align: 'center' });

    // Student Info
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${resultData.studentInfo.name}`, 20, 60);
    doc.text(`Roll No: ${resultData.studentInfo.rollNo}`, 20, 70);
    doc.text(`Program: ${resultData.studentInfo.course}`, 20, 80);
    doc.text(`Class: ${resultData.studentInfo.class}`, 20, 90);

    // Table
    const tableColumn = ["Subject", "Obtained", "Max", "Grade"];
    const tableRows = resultData.subjectResults.map(sub => [
      sub.subject, sub.obtained.toString(), sub.max.toString(), sub.grade
    ]);
    tableRows.push(["TOTAL", resultData.totalObtained.toString(), resultData.totalMax.toString(), resultData.overallGrade]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 100,
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    // Summary below table
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Percentage: ${resultData.percentage}%`, 20, finalY);
    doc.text(`Overall Grade: ${resultData.overallGrade}`, 20, finalY + 10);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This is a computer generated result. No signature is required.', 105, finalY + 30, { align: 'center' });
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, finalY + 40, { align: 'center' });

    doc.save(`Result_${resultData.studentInfo.rollNo}.pdf`);
  };

  const StepIndicator = ({ currentStep }) => (
    <div className="step-indicator">
      <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
        <div className="step-number">1</div>
        <div className="step-label">Select Exam</div>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
        <div className="step-number">2</div>
        <div className="step-label">Select Course</div>
      </div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="step-number">3</div>
        <div className="step-label">Enter Details</div>
      </div>
    </div>
  );

  return (
    <section className="section results-section" id="results">
      <div className="container">
        <div className="section-title">
          <h2>Student Results</h2>
          <div className="divider"></div>
          <p>Paradise University Pakistan - Check your examination results</p>
        </div>
        
        <div className="result-container">
          <div className="result-form">
            {showResult && resultData && (
              <div className="result-display-container">
                <div ref={resultRef} className="result-display printable">
                  <div className="result-header">
                    <div className="university-info">
                      <h2>Paradise University Pakistan</h2>
                      <p>Official Examination Result</p>
                    </div>
                    <div className="exam-info">
                      <h3>{resultData.studentInfo.examType}</h3>
                    </div>
                  </div>
                  
                  <div className="student-info">
                    <div className="info-row">
                      <div className="info-item">
                        <span className="label">Name:</span>
                        <span className="value">{resultData.studentInfo.name}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Roll No:</span>
                        <span className="value">{resultData.studentInfo.rollNo}</span>
                      </div>
                    </div>
                    <div className="info-row">
                      <div className="info-item">
                        <span className="label">Program:</span>
                        <span className="value">{resultData.studentInfo.course}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Class:</span>
                        <span className="value">{resultData.studentInfo.class}</span>
                      </div>
                    </div>
                  </div>
                  
                  <table className="result-table">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Obtained Marks</th>
                        <th>Maximum Marks</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultData.subjectResults.map((subject, index) => (
                        <tr key={index}>
                          <td>{subject.subject}</td>
                          <td>{subject.obtained}</td>
                          <td>{subject.max}</td>
                          <td className={`grade-${subject.grade}`}>{subject.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td><strong>TOTAL</strong></td>
                        <td><strong>{resultData.totalObtained}</strong></td>
                        <td><strong>{resultData.totalMax}</strong></td>
                        <td><strong>{resultData.overallGrade}</strong></td>
                      </tr>
                    </tfoot>
                  </table>
                  
                  <div className="result-summary">
                    <div className="summary-item">
                      <span className="label">Total Marks:</span>
                      <span className="value">{resultData.totalMarks}</span>
                    </div>
                    <div className="summary-item">
                      <span className="label">Percentage:</span>
                      <span className="value percentage">{resultData.percentage}%</span>
                    </div>
                    <div className="summary-item">
                      <span className="label">Overall Grade:</span>
                      <span className="value grade">{resultData.overallGrade}</span>
                    </div>
                  </div>
                  
                  <div className="result-footer">
                    <p>This is a computer generated result. No signature is required.</p>
                    <p>Generated on: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="result-actions">
                  <button className="btn btn-print" onClick={handlePrint}>
                    <FaPrint /> Print Result
                  </button>
                  <button className="btn btn-download" onClick={downloadPDF}>
                    <FaDownload /> Download as PDF
                  </button>
                  <button className="btn btn-secondary" onClick={resetForm}>
                    Check Another Result
                  </button>
                </div>
              </div>
            )}
            
            {!showResult && (
              <>
                <h3 className="form-title">Check Your Result</h3>
                <p className="form-subtitle">Follow the steps to view your examination results.</p>
                
                <StepIndicator currentStep={step} />
                
                {step === 1 && (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="exam">Select Examination</label>
                      <select 
                        id="exam" 
                        className="form-control"
                        value={exam}
                        onChange={(e) => setExam(e.target.value)}
                      >
                        <option value="">-- Select Exam --</option>
                        <option value="midterm">Mid-Term Examination 2023</option>
                        <option value="annual">Annual Examination 2023</option>
                      </select>
                    </div>
                    <button className="btn btn-primary" onClick={handleExamSelect}>
                      Next <FaArrowRight />
                    </button>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="course">Select Your Program</label>
                      <select 
                        id="course" 
                        className="form-control"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                      >
                        <option value="">-- Select Program --</option>
                        <optgroup label="Undergraduate Programs">
                          {universityCourses.BS.map((program, index) => (
                            <option key={`BS-${index}`} value={`BS ${program}`}>BS {program}</option>
                          ))}
                          {universityCourses.BBA.map((program, index) => (
                            <option key={`BBA-${index}`} value={`BBA ${program}`}>BBA {program}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Graduate Programs">
                          {universityCourses.MS.map((program, index) => (
                            <option key={`MS-${index}`} value={`MS ${program}`}>MS {program}</option>
                          ))}
                          {universityCourses.MPhil.map((program, index) => (
                            <option key={`MPhil-${index}`} value={`MPhil ${program}`}>MPhil {program}</option>
                          ))}
                          {universityCourses.MBA.map((program, index) => (
                            <option key={`MBA-${index}`} value={`MBA ${program}`}>MBA {program}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Doctoral Programs">
                          {universityCourses.PhD.map((program, index) => (
                            <option key={`PhD-${index}`} value={`PhD ${program}`}>PhD {program}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                    
                    <div className="form-navigation">
                      <button className="btn btn-secondary" onClick={() => setStep(1)}>
                        <FaArrowLeft /> Back
                      </button>
                      <button className="btn btn-primary" onClick={handleCourseSelect}>
                        Next <FaArrowRight />
                      </button>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="form-step">
                    <div className="selected-details">
                      <p><strong>Examination:</strong> {exam === 'midterm' ? 'Mid-Term Examination 2023' : 'Annual Examination 2023'}</p>
                      <p><strong>Program:</strong> {course}</p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="rollno">Enter Roll Number</label>
                      <input 
                        type="text" 
                        id="rollno" 
                        className="form-control" 
                        placeholder="e.g. SPS2023001"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                      />
                    </div>
                    <div className="form-navigation">
                      <button className="btn btn-secondary" onClick={() => setStep(2)}>
                        <FaArrowLeft /> Back
                      </button>
                      <button className="btn btn-primary" onClick={checkResult}>
                        <FaSearch /> Check Result
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          <div className="result-image">
            <img src={resultImage} alt="Students studying" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
