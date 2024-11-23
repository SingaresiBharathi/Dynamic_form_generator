import React, { useState } from 'react';
import './App.css'; // Import the styling
import JSONEditor from './JSONEditor'; // Import JSONEditor component
import Form from './Form'; // Import the Form component

function App() {
  const [jsonData, setJsonData] = useState({}); // State to hold the form schema

  // Handle JSON changes from the editor
  const handleJsonChange = (newJson) => {
    try {
      // Try to parse the JSON from the editor input
      const parsedJson = JSON.parse(newJson);
      setJsonData(parsedJson); // Update the state with the parsed JSON
    } catch (error) {
      console.error('Invalid JSON:', error); // Log error for invalid JSON
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Form Generator</h1>
      <p>Generate forms dynamically based on JSON schema!</p>

      {/* Container for both the JSON editor and generated form */}
      <div className="container">
        {/* Left: JSON Schema Editor */}
        <div className="json-editor">
          <h3>JSON Schema Editor</h3>
          <JSONEditor onChange={handleJsonChange} />
        </div>

        {/* Right: Generated Form */}
        <div className="generated-form">
          <h3>Generated Form</h3>
          <Form schema={jsonData} />
        </div>
      </div>
    </div>
  );
}

export default App;
