import { useEffect, useState } from "react";

type Data = {
  type: String;
  amount: number;
  description: String;
}[];

const mapData = (data: Data) => {
  return data.map((item, index) => {
    return (
      <div
        className={`flex rounded-lg my-4 border flex-col border-white p-4 ${
          item.type === "income"
            ? `border-r-green-700 border-r-4`
            : `border-r-red-700 border-r-4`
        } `}
        key={index}
      >
        <div className="flex items-center justify-between ">
          <p className="font-bold">{item.description}</p>
          <p className="ml-4">${item.amount}</p>
        </div>
      </div>
    );
  });
};
`git remote add origin https://github.com/MianFaizanAmir0053/Budget-App.git`;

function Transactions({ data }: { data: Data }) {
  const [search, setSearch] = useState([] as Data);
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Search = e.target.value;
    setKeyword(Search);
    const filteredData = data.filter((item) => {
      return item.description
        .toLowerCase()
        .trim()
        .includes(keyword.toLowerCase());
    });
    if (Search.length === 0) return setSearch(data);
    setSearch(filteredData);
  };

  useEffect(() => {
    setSearch(data);
  }, [data]);

  return (
    <div className="flex flex-col mt-4">
      <p className="font-bold">Transactions</p>
      <input
        className="p-4 rounded-lg  my-4"
        type="search"
        name="Search"
        placeholder="Search"
        onChange={searchHandler}
        value={keyword}
      />
      {mapData(search.length > 0 ? search : data)}
    </div>
  );
}

export default Transactions;
