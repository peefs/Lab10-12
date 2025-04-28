import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000); // Hide success message after 3 seconds
  };

  const deleteStudent = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20breathtaking%20view%20of%20a%20majestic%20waterfall%20cascading%20down%20from%20a%20rocky%20cliff%2C%20surrounded%20by%20lush%20green%20moss%20and%20vegetation.%20The%20scene%20is%20captured%20from%20inside%20a%20cave%2C%20framing%20the%20waterfall%20with%20the%20dark%20rocky%20cave%20entrance.%20The%20sky%20is%20bright%20blue%20with%20wispy%20clouds%2C%20creating%20a%20serene%20and%20peaceful%20atmosphere.&width=1920&height=1080&seq=12345&orientation=landscape')`,
        backgroundSize: "cover", // Ensure the background covers the entire area
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent background repetition
        height: "100vh", // Ensure the background fills the viewport height
        width: "100vw", // Ensure the background fills the viewport width
      }}
    >
      <div
        className="container-box"
        style={{
          maxWidth: "500px", // Reduce the maximum width of the container
          padding: "20px", // Reduce padding inside the container
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Student Recording System</h1>
          <p className="text-gray-600">Manage your student records efficiently</p>
        </div>
        <StudentForm addStudent={addStudent} />
        {successMessage && (
          <div className="success-message mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded flex items-center justify-center">
            <i className="ri-check-line mr-2"></i>
            Student added successfully!
          </div>
        )}
        <StudentList students={students} deleteStudent={deleteStudent} />
      </div>
    </div>
  );
};

export default App;