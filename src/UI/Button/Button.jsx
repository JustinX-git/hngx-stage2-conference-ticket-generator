import "./Button.css";

const Button = ({ value,action,hue, onBtnClick}) => {
  const selectedClass = hue === "light" ? " selected" : "";

  const btnClickhandler = ()=>{
    onBtnClick(action)
  }
  return (
    <>
      <button aria-label={value} tabIndex={0} className={`footer-button${selectedClass}`} onClick={btnClickhandler}>
        {value}
      </button>
    </>
  );
}

export default Button;
