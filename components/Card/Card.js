import { forwardRef } from "react";
import "./Card.css";

const Card = ({ cardId, unClickedCardIds, setUnClickedCardIds }, ref) => {
  const handleClick = () => {
    setUnClickedCardIds(unClickedCardIds.filter((id) => id != cardId));
  };

  return (
    <article className="card" ref={ref} onClick={handleClick}>
      {cardId}
    </article>
  );
};

export default forwardRef(Card);
