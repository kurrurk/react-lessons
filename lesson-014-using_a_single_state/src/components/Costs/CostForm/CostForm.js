import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  // const [name, setName] = useState("");
  // const [amount, setAamount] = useState("0.00");
  // const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    date: "",
    description: "",
    amount: "0.00",
  });

  const descriptionChangeHandler = (event) => {
    // не рекомендуется так делать,так как может быть передано не актуальное состояние
    // setUserInput({
    //   ...userInput,
    //   description: event.target.value,
    // });
    // праивльный подход
    setUserInput((previousState) => {
      return {
        ...previousState,
        description: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        date: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            value={userInput.description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2026-01-01"
            max="2026-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button>Добавить расход</button>
          <button>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
