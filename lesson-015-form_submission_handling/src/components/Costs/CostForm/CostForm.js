import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAamount] = useState("");
  const [date, setDate] = useState("");

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAamount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: description,
      amount: amount,
      date: new Date(date),
    };
    setAamount("");
    setDate("");
    setDescription("");
    console.log(costData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2026-01-01"
            max="2026-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
