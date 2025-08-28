// components/Results.js
import React, { useState } from 'react';
import resultImage from '../assets/5.jpg';

const Results = () => {
  const [exam, setExam] = useState('');
  const [course, setCourse] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [resultData, setResultData] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [step, setStep] = useState(1); // 1: select exam, 2: select course, 3: enter roll no

  // Available courses at Paradise University Pakistan
  const universityCourses = {
    "BS": [
      "Computer Science", 
      "Software Engineering", 
      "Electrical Engineering",
      "Business Administration",
      "Psychology",
      "Economics"
    ],
    "BBA": [
      "Finance",
      "Marketing",
      "Human Resource Management",
      "Supply Chain Management"
    ],
    "MS": [
      "Computer Science",
      "Data Science",
      "Electrical Engineering",
      "Business Administration"
    ],
    "MPhil": [
      "Education",
      "Psychology",
      "Economics",
      "Literature"
    ],
    "MBA": [
      "Executive MBA",
      "Finance",
      "Marketing",
      "Human Resources"
    ],
    "PhD": [
      "Computer Science",
      "Electrical Engineering",
      "Business Administration",
      "Education",
      "Psychology"
    ]
  };

  // Sample student data with course information
  const studentDatabase = {
    "SPS2023001": {
      name: "Anum Nazeer",
      course: "BS Computer Science",
      class: "Semester 6",
      midterm: {
        english: { obtained: 85, max: 100 },
        programming: { obtained: 92, max: 100 },
        algorithms: { obtained: 88, max: 100 },
        database: { obtained: 90, max: 100 },
        calculus: { obtained: 81, max: 100 }
      },
      annual: {
        english: { obtained: 89, max: 100 },
        programming: { obtained: 95, max: 100 },
        algorithms: { obtained: 91, max: 100 },
        database: { obtained: 93, max: 100 },
        calculus: { obtained: 87, max: 100 }
      }
    },
    "SPS2023002": {
      name: "Komal Fatima",
      course: "BBA Finance",
      class: "Semester 4",
      midterm: {
        accounting: { obtained: 92, max: 100 },
        economics: { obtained: 85, max: 100 },
        finance: { obtained: 89, max: 100 },
        management: { obtained: 94, max: 100 },
        statistics: { obtained: 88, max: 100 }
      },
      annual: {
        accounting: { obtained: 95, max: 100 },
        economics: { obtained: 89, max: 100 },
        finance: { obtained: 92, max: 100 },
        management: { obtained: 97, max: 100 },
        statistics: { obtained: 91, max: 100 }
      }
    },
    "SPS2023003": {
      name: "Hira Ali",
      course: "MS Data Science",
      class: "Semester 2",
      midterm: {
        machine_learning: { obtained: 75, max: 100 },
        statistics: { obtained: 72, max: 100 },
        data_mining: { obtained: 85, max: 100 },
        python: { obtained: 80, max: 100 },
        visualization: { obtained: 78, max: 100 }
      },
      annual: {
        machine_learning: { obtained: 82, max: 100 },
        statistics: { obtained: 78, max: 100 },
        data_mining: { obtained: 88, max: 100 },
        python: { obtained: 85, max: 100 },
        visualization: { obtained: 80, max: 100 }
      }
    },
    "SPS2023004": {
      name: "Ali Ahmed",
      course: "PhD Computer Science",
      class: "Year 2",
      midterm: {
        research_methodology: { obtained: 88, max: 100 },
        advanced_algorithms: { obtained: 85, max: 100 },
        thesis_progress: { obtained: 90, max: 100 }
      },
      annual: {
        research_methodology: { obtained: 92, max: 100 },
        advanced_algorithms: { obtained: 89, max: 100 },
        thesis_progress: { obtained: 95, max: 100 }
      }
    }
  };

  const handleExamSelect = () => {
    if (!exam) {
      alert('Please select an examination');
      return;
    }
    setStep(2);
  };

  const handleCourseSelect = () => {
    if (!course) {
      alert('Please select your course');
      return;
    }
    setStep(3);
  };

  const checkResult = () => {
    if (!rollNo) {
      alert('Please enter roll number');
      return;
    }
    
    const student = studentDatabase[rollNo];
    
    if (!student) {
      alert('Student not found. Please check roll number and try again.');
      return;
    }
    
    // Check if the student's course matches the selected course
    if (student.course !== course) {
      alert(`Roll number does not belong to ${course} program.`);
      return;
    }
    
    // Get the selected exam results
    const examResults = student[exam];
    
    let totalObtained = 0;
    let totalMax = 0;
    const subjectResults = [];
    
    for (const subject in examResults) {
      const marks = examResults[subject];
      totalObtained += marks.obtained;
      totalMax += marks.max;
      
      const grade = calculateGrade(marks.obtained / marks.max * 100);
      
      // Format subject name for display
      const subjectName = subject.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      subjectResults.push({
        subject: subjectName,
        obtained: marks.obtained,
        max: marks.max,
        grade: grade
      });
    }
    
    // Calculate overall percentage and grade
    const percentage = (totalObtained / totalMax * 100).toFixed(2);
    const overallGrade = calculateGrade(percentage);
    
    setResultData({
      studentInfo: {
        name: student.name,
        rollNo: rollNo,
        course: student.course,
        class: student.class
      },
      subjectResults,
      totalMarks: `${totalObtained}/${totalMax}`,
      percentage,
      overallGrade
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

  // Step indicator component
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
            {/* Result Display */}
            {showResult && resultData && (
              <div className="result-display" style={{ marginBottom: '2rem' }}>
                <div className="student-info">
                  <h3>{resultData.studentInfo.name}</h3>
                  <p>Roll No: <strong>{resultData.studentInfo.rollNo}</strong></p>
                  <p>Program: <strong>{resultData.studentInfo.course}</strong></p>
                  <p>Class: <strong>{resultData.studentInfo.class}</strong></p>
                </div>
                
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Obtained</th>
                      <th>Max</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultData.subjectResults.map((subject, index) => (
                      <tr key={index}>
                        <td>{subject.subject}</td>
                        <td>{subject.obtained}</td>
                        <td>{subject.max}</td>
                        <td>{subject.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="result-summary">
                  <p>Total Marks: <strong>{resultData.totalMarks}</strong></p>
                  <p>Percentage: <span className="percentage">{resultData.percentage}%</span></p>
                  <p>Overall Grade: <span className="grade">{resultData.overallGrade}</span></p>
                </div>
                
                <button className="btn btn-secondary" onClick={resetForm} style={{ marginTop: '1rem' }}>
                  Check Another Result
                </button>
              </div>
            )}
            
            {!showResult && (
              <>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Check Your Result</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--gray)' }}>Follow the steps to view your examination results.</p>
                
                {/* Step Indicator */}
                <StepIndicator currentStep={step} />
                
                {/* Step 1: Select Examination */}
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
                    
                    <button className="btn" onClick={handleExamSelect} style={{ width: '100%' }}>
                      Next <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                    </button>
                  </div>
                )}
                
                {/* Step 2: Select Course */}
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
                      <button className="btn btn-secondary" onClick={() => setStep(1)} style={{ marginRight: '1rem' }}>
                        <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }}></i> Back
                      </button>
                      <button className="btn" onClick={handleCourseSelect}>
                        Next <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Enter Roll Number */}
                {step === 3 && (
                  <div className="form-step">
                    <div className="selected-details" style={{ 
                      backgroundColor: '#f8f9fa', 
                      padding: '1rem', 
                      borderRadius: '5px', 
                      marginBottom: '1.5rem' 
                    }}>
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
                      <button className="btn btn-secondary" onClick={() => setStep(2)} style={{ marginRight: '1rem' }}>
                        <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }}></i> Back
                      </button>
                      <button className="btn" onClick={checkResult}>
                        <i className="fas fa-search" style={{ marginRight: '0.5rem' }}></i> Check Result
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