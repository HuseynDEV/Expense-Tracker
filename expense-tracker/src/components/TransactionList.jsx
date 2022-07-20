import React, {useContext} from "react";
import { GlobalContext } from "../content/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {

const {transactions}=useContext(GlobalContext)


  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
       {
        transactions.map(transaction=>(
            <Transaction id={transaction.id} text={transaction.text} amount={transaction.amount} />
        ))
       }
      </ul>
    </>
  );
};

export default TransactionList;
