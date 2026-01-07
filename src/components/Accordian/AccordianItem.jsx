const AccordianItem = ({ faq, isOpen, handleClick }) => {
  const { id, title, content } = faq || {};
  return (
    <div className="wrapper">
      <div className="acc-title">
        <p>{title}</p>
        <span onClick={() => handleClick(id)}>{isOpen ? "⬆️" : "⬇️"}</span>
      </div>
      {isOpen && <p>{content}</p>}
    </div>
  );
};

export default AccordianItem;
