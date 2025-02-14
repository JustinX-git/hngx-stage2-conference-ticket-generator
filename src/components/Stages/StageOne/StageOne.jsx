import TicketType from "./TicketType";
import Select from "../../../UI/Select/Select";
import { useState } from "react";
import "./StageOne.css";

const StageOne = ({ amtSelect, setAmtSelect }) => {
  if (!localStorage.getItem("ticket-type"))
    localStorage.setItem("ticket-type", "Regular");
  if (!localStorage.getItem("ticket-id"))
    localStorage.setItem("ticket-id", "1");
  const [selected, setSelected] = useState(localStorage.getItem("ticket-id"));
  return (
    <>
      <div className="section-title-2">
        <div className="main">
          <div className="heading-2">Techember Fest ”25</div>

          <p className="p">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
        </div>

        <div className="deets">
          <div className="text-2">📍 [Event Location]</div>

          <div className="text-2">| |</div>

          <div className="text-2">March 15, 2025 | 7:00 PM</div>
        </div>
      </div>

      <div className="progress-container-2" />

      <div className="div-2">
        <div className="label">Select Ticket Type:</div>

        <div className="input">
          <div className="radio-button">
            <TicketType
              value={"Free"}
              type={"Regular"}
              tier={"REGULAR ACCESS"}
              id={"1"}
              selected={selected}
              setSelected={setSelected}
            />
            <TicketType
              value={"$150"}
              type={"VIP"}
              tier={"VIP ACCESS"}
              id={"2"}
              selected={selected}
              setSelected={setSelected}
            />
            <TicketType
              value={"$150"}
              type={"VVIP"}
              tier={"VVIP ACCESS"}
              id={"3"}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>

      <div className="div-2">
        <div className="label"> Number of Tickets</div>

        <Select amtSelect={amtSelect} setAmtSelect={setAmtSelect} />
      </div>
    </>
  );
};

export default StageOne;
