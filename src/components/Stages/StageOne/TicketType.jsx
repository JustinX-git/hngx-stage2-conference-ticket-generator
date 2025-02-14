import "./TicketType.css"
const  TicketType = ({value,type,tier,id,selected,setSelected}) =>{
            const clickHandler = () =>{
                  localStorage.setItem("ticket-type",type) 
                  localStorage.setItem("ticket-id",id) 
                  setSelected(id);
            }
  return (
    <>
              <div tabIndex={0} className={`radio${selected === id ? " selected" : ""}`} id={`radio-${id}`} onClick={clickHandler}>
                <button className="button-1">{value}</button>
                <div className="sec">
                  <button className="text-wrapper">{tier}</button>

                  <button className="button-2">20/52</button>
                </div>
              </div>
    </>
  );
}

export default TicketType;
