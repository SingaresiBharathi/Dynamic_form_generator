import React, { useState } from 'react';

function JSONEditor({ onChange }) {
  const [jsonInput, setJsonInput] = useState('{}'); // Default to an empty JSON object

  // Handle JSON input changes
  const handleChange = (event) => {
    const newJson = event.target.value;
    setJsonInput(newJson);
    onChange(newJson); // Pass the new JSON value to the parent
  };

  return (
    <textarea
      value={jsonInput}
      onChange={handleChange}
      placeholder="Enter JSON schema here"
      rows="15"
      cols="30"
    />
  );
}

export default JSONEditor;
