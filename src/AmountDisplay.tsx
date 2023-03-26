type allDataType = {
  amount: number;
  description: string;
  type: string;
}[];

function AmountDisplay({
  data,
  expense,
  income,
}: {
  data: allDataType;
  income: number;
  expense: number;
}) {
  return (
    <div className="flex mt-4 ">
      <div className="grow border border-solid rounded-lg border-white p-4 mr-4">
        <p>Expense</p>
        <h2 className="font-bold text-red-700">${expense}</h2>
      </div>
      <div className="grow border border-solid rounded-lg border-white p-4">
        <p>Income</p>
        <h2 className="font-bold text-green-700">${income}</h2>
      </div>
    </div>
  );
}

export default AmountDisplay;
