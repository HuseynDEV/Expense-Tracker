import React, { useContext } from "react";
import { GlobalContext } from "../content/GlobalState";

const Transaction = ({ text, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text} <span>${amount}</span> <button onClick={()=>deleteTransaction(id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
