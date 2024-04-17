const Box = ({ num, visible, onClick }) => {
  
  return (
    <button
      onClick={onClick}
      disabled={!visible}
      className="h-16 w-16 rounded-md border-2 cursor-pointer bg-white border-black flex justify-center items-center relative"
    >
      <p className="text-xl font-semibold">{num}</p>
      <div
        className={`h-16 w-16 rounded-md border-2 cursor-pointer border-black bg-black absolute ${
          visible ? "flex" : "hidden"
        }`}
      ></div>
    </button>
  );
};

export default Box