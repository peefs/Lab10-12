import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course) {
      setMessage("Please fill in all fields.");
      return;
    }
    addStudent({ name, course, grade: grade || "Not assigned" });
    setName("");
    setCourse("");
    setGrade("");
    setMessage("Student added successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="1.00">A</option>
          <option value="1.25">B</option>
          <option value="1.50">C</option>
          <option value="1.75">D</option>
          <option value="2.00">E</option>
        </select>
        <button type="submit" className="add-student-button">
          Add Student
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentForm;