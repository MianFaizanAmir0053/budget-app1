import { useState } from "react";
import Add from "./Add";
import AmountDisplay from "./AmountDisplay";

import "./App.css";
import Transactions from "./Transactions";

type allDataType = {
  amount: number;
  description: string;
  type: string;
}[];

type dataStateType = {
  amount: number;
  description: string;
  type: string;
};

const calculateAmount = (data: allDataType) => {
  let expense = 0;
  let income = 0;
  data.forEach((item) => {
    if (item.type === "expense") {
      expense += +item.amount;
    } else {
      income += +item.amount;
    }
  });
  return { expense, income };
};

function App() {
  const [dataState, funDataState] = useState([] as allDataType);
  const { expense, income } = calculateAmount(dataState);

  const addData = (data: dataStateType) => {
    funDataState((pre) => [...pre, data]);
  };

  return (
    <div className="flex">
      <div className="mx-auto mt-4">
        <h1>Expense Tracker</h1>
        <Add data={dataState} add={addData} expense={expense} income={income} />
        <AmountDisplay data={dataState} expense={expense} income={income} />
        <Transactions data={dataState} />
      </div>
    </div>
  );
}

export default App;
