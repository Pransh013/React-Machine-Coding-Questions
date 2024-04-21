import { useState } from "react";
import { products } from "../utils/ProductArray";
import GoToPage from "../components/GoToPage";

const Pagination = () => {

  const [pageNo, setPageNo] = useState(1);

  const itemsPerPage = 10;
  const lastIdx = pageNo * itemsPerPage;
  const firstIdx = lastIdx - itemsPerPage;
  const currProducts = products.slice(firstIdx, lastIdx)

  return (
    <div className="w-full h-screen bg-slate-500 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-bold pb-5">Pagination</h1>
      <div className="grid grid-cols-2 gap-8 px-10 py-4 justify-items-center">
        {currProducts.map((item) => (
          <div className="border w-32 text-center py-2 rounded-md bg-black text-white text-lg font-semibold" key={item}>{item}</div>
        ))}
      </div>
      <GoToPage totalPages={products.length / itemsPerPage} pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  );
}

export default Pagination