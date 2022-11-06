import "./App.css";
import { useState, useEffect, createRef } from "react";
import Card from "./components/Card";

const App = () => {
  const cardIds = [1, 2, 3, 4];
  const [unClickedCardIds, setUnClickedCardIds] = useState(cardIds);

  const refs = cardIds.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (
      unClickedCardIds.length > 0 &&
      unClickedCardIds.length < cardIds.length
    ) {
      //scroll to highest unClickedCardId
      const highestId = Math.min(...unClickedCardIds);
      refs[highestId].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [unClickedCardIds]);

  return (
    <div className="App">
      <header className="header">header of the page</header>
      {cardIds.map((cardId) => (
        <Card
          key={cardId + "card"}
          cardId={cardId}
          unClickedCardIds={unClickedCardIds}
          setUnClickedCardIds={setUnClickedCardIds}
          ref={refs[cardId]}
        />
      ))}
    </div>
  );
};

export default App;
