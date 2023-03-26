import { useState } from "react";
import AddPopup from "./AddPopup";

type Data = {
  type: string;
  amount: number;
  description: string;
}[];

function Add({
  data,
  add,
  income,
  expense,
}: {
  data: Data;
  add: Function;
  income: number;
  expense: number;
}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <p className=" text-lg font-bold">Balance: ${income - expense}</p>
        <button
          onClick={() => {
            setShowPopup((pre) => !pre);
          }}
        >
          Add
        </button>
      </div>
      {showPopup && <AddPopup OnClick={add} />}
    </div>
  );
}

export default Add;
