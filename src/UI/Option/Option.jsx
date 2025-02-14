const Option = ({ id, onSelect }) => {
  const onClickHandler = (e) => {
    onSelect(e.target.innerText);
  };

  return (
    <li onClick={onClickHandler} className={`amt-${id + 1}`}>
      {id + 1}
    </li>
  );
};

export default Option;
