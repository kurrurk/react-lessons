import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [name, setName] = useState("");
  const [amount, setAamount] = useState("0.00");
  const [date, setDate] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(date);
  };

  const amountChangeHandler = (event) => {
    setAamount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
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
          <button>Добавить расход</button>
          <button>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
