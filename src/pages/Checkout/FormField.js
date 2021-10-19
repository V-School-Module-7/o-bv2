const FormField = ({ label, type, name, placeholder, required }) => {
    return (
      <div className="checkoutSpan">
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} placeholder={placeholder} required />
      </div>
    );
  };
  
  export default FormField;