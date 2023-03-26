import { useState } from "react";

function AddPopup({ OnClick }: { OnClick: Function }) {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    type: "",
  });

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.amount && formData.description && formData.type)
      OnClick(formData);
  };

  return (
    <form
      className="mt-4  border rounded-lg border-white p-4 "
      onSubmit={formSubmit}
    >
      <div className="flex flex-col w-full">
        <input
          type="number"
          placeholder="Amount"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, amount: e.target.value });
          }}
          className="h-12 rounded-lg text-center border  border-white "
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, description: e.target.value });
          }}
          className="h-12 border rounded-lg border-white text-center my-4"
        />
      </div>
      <div className="contents text-xl my-4 mt-0">
        <input
          type="radio"
          name="radio"
          id="expense"
          onClick={(e:any) => {
            setFormData({ ...formData, type: e.target.id });
          }}
        />
        <label htmlFor="expense" className="pl-2">
          Expense
        </label>
        <input
          type="radio"
          id="income"
          name="radio"
          className="ml-4"
          onClick={(e:any) => {
            setFormData({ ...formData, type: e.target.id });
          }}
        />
        <label htmlFor="income" className="pl-2">
          Income
        </label>
      </div>
      <div className="flex mt-4 justify-center">
        <button>Add Transaction</button>
      </div>
    </form>
  );
}

export default AddPopup;
