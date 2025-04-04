const InputField = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    );
  };
  
  
  export default InputField;
  