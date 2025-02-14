import { useState, useEffect } from "react";
import "./Input.css";

const Input = ({ label, type, name, placeholder, error }) => {
  const [inputValue, setInputValue] = useState(() => {
    return localStorage.getItem(name) || "";
  });

  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem(name, newValue);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue !== null) setInputValue(storedValue);
  }, [name]);

  let renderedInput = null;
  if (type === "textarea") {
    renderedInput = (
      <textarea
        aria-label={`Optional. Input a special request`}
        maxLength={50}
        className="atendee-input textarea"
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeHandler}
        tabIndex={0}
      />
    );
  } else {
    renderedInput = (
      <input
        aria-label={`Required. Input your ${name}`}
        className={`atendee-input${error ? " invalid" : ""}${name === "email" ? " email" : ""}`}
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeHandler}
        tabIndex={0}
      />
    );
  }

  return (
    <>
      <div className="input-wrapper">
        <label className="atendee-input-label">{label}</label>
        {error && <span role="alert" aria-live="assertive" aria-label={error} className="error">{error}</span>}
        {renderedInput}
      </div>
    </>
  );
};

export default Input;
