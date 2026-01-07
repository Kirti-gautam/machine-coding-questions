import { useState } from "react";
import { faqs } from "../../constants/accordian";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [openId, setOpenId] = useState({});
  console.log(faqs);

  const handleOpen = (id) => {
    if (openId[id]) {
      setOpenId((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    } else {
      setOpenId((prev) => ({
        ...prev,
        [id]: true,
      }));
    }
  };
  return (
    <>
      {faqs.map((faq) => (
        <AccordianItem key={faq.id} faq={faq} isOpen={!!openId[faq.id]} handleClick={handleOpen} />
      ))}
    </>
  );
};

export default Accordian;
