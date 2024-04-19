const ReviewBar = ({ width = 0 }) => {
  return (
    <div className="w-80 flex items-center justify-between px-3">
      <div className="w-64 h-3 rounded-md overflow-hidden bg-white">
        <div
          className="h-full bg-yellow-400"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-black text-sm font-semibold">{width}%</p>
    </div>
  );
};

export default ReviewBar