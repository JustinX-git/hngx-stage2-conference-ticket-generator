import { useState } from "react";
import Option from "../Option/Option";
import "./Select.css";

const Select = ({ amtSelect, setAmtSelect }) => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <>
      <div
        tabIndex={0}
        className={`ticket-amt-select${isClicked ? " expand" : ""}`}
      >
        <div onClick={clickHandler} tabIndex={0}>
          <p className="selected-amt">{amtSelect}</p>
          <i className={`fas fa-angle-down${isClicked ? " rotate" : ""}`}></i>
        </div>
        <ul className="amt">
          {Array(10)
            .fill(0)
            .map((option, index) => (
              <Option onSelect={setAmtSelect} key={index} id={index} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
