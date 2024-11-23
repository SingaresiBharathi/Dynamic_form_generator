import React from 'react';

function Form({ schema }) {
  // Render form fields based on the provided JSON schema
  const renderFormFields = () => {
    if (!schema || Object.keys(schema).length === 0) return <p>No schema provided.</p>;

    return Object.keys(schema).map((key) => (
      <div key={key} className="form-field">
        <label>{key}</label>
        <input type="text" name={key} />
      </div>
    ));
  };

  return (
    <form>
      {renderFormFields()} {/* Render dynamically generated form fields */}
      <button type="submit">Submit</button> {/* Submit button */}
    </form>
  );
}

export default Form;
