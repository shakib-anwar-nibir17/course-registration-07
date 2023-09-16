import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FiDollarSign } from "react-icons/fi";
import { TfiBook } from "react-icons/tfi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [allCards, setAllCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [addedCredit, setAddedCredit] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);

  const handleSelectCards = (card) => {
    const isExist = selectedCards.find((item) => item.id === card.id);
    let credit = card.creditHour;
    if (isExist) {
      return toast.warn("item already exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      selectedCards.forEach((item) => {
        credit = credit + item.creditHour;
      });
      const remaining = 20 - credit;
      if (credit > 20) {
        return toast.warn("credit limit reached", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        setAddedCredit(credit);

        setRemainingCredit(remaining);

        setSelectedCards([...selectedCards, card]);
      }
    }
  };

  return (
    <div className="container flex gap-12 mx-auto mt-8">
      <div>
        <div className="grid gap-5 grid-cols-3">
          {allCards.map((card, index) => (
            <div
              key={index}
              className="w-[400px] rounded-xl space-y-5 p-4 bg-white"
            >
              <img
                className="w-full"
                src={card.cover}
                alt={`This is the image of ${card.title}`}
              />
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-justify">{card.description}</p>
              <div className="flex justify-center gap-4 items-center text-xl">
                <FiDollarSign></FiDollarSign>
                <p>Price: {card.price}</p>
                <TfiBook></TfiBook>
                <p>
                  Credit: <span>{card.creditHour}</span> hr.
                </p>
              </div>
              <div className="mt-auto flex justify-center">
                <button
                  onClick={() => handleSelectCards(card)}
                  className="bg-[#2F80ED] text-white w-3/4 mx-auto p-3 rounded-lg text-bold"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Cart
          selectedCards={selectedCards}
          addedCredit={addedCredit}
          remainingCredit={remainingCredit}
        ></Cart>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cards;
