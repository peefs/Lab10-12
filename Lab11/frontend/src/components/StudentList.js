import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Student List</h2>
      {students.length === 0 ? (
        <p className="text-gray-500">No students added yet.</p>
      ) : (
        <ul className="student-list">
          {students.map((student, index) => (
            <li key={index}>
              <div className="student-info">
                <span className="font-bold">{student.name}</span>
                <span>Course: {student.course}</span>
                <span>Grade: {student.grade}</span>
              </div>
              <div className="student-actions">
                <button
                  onClick={() => deleteStudent(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;