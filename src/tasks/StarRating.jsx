import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const stars = [1, 2, 3, 4, 5];

const StarRating = () => {
  const [active, setActive] = useState(stars.map(() => false));
  const [reviewArr, setReviewArr] = useState(stars.map(() => 0));
  const [currentStar, setCurrentStar] = useState(-1);
  const [totalReviews, setTotalReviews] = useState(0);

  function handleClick(idx) {
    setActive((prev) => {
      const newActive = [...prev];
      newActive.fill(false);
      newActive.fill(!newActive[idx], 0, idx + 1);
      return newActive;
    });
    setCurrentStar(idx);
  }

  useEffect(() => {
    if (!active[0] || currentStar === -1) return;
    const activeTimer = setTimeout(() => {
      setActive((prev) => {
        const newActive = [...prev];
        newActive.fill(false);
        return newActive;
      });
      alert("Review submitted successfully");

      setReviewArr((prev) => {
        const newReviewArr = [...prev];
        newReviewArr[currentStar]++;
        return newReviewArr;
      });
      setTotalReviews((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(activeTimer);
  }, [active]);

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col justify-center gap-8 items-center">
      <h1 className="text-3xl font-bold pb-4">Star Rating</h1>
      <div className="flex gap-4">
        {stars.map((num, idx) => (
          <Star
            key={idx}
            color="yellow"
            strokeWidth={0.5}
            onClick={() => handleClick(idx)}
            size={40}
            fill={`${active[idx] ? "yellow" : "white"}`}
            className="cursor-pointer"
          />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {reviewArr.map((val, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <p className="text-lg font-semibold">{idx + 1} stars</p>
            <ReviewBar width={totalReviews > 0 ? Math.round(val*100 / totalReviews) : 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewBar = ({ width = 0 }) => {
  return (
    <div className="w-80 flex items-center gap-4">
      <div className="w-60 h-1.5 rounded-md overflow-hidden bg-white">
        <div
          className="h-full bg-yellow-400"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-black text-sm font-semibold">{width}%</p>
    </div>
  );
};

export default StarRating;
