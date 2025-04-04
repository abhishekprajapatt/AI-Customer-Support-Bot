const Button = ({ text, onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  