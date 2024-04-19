import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import ReviewBar from "../components/ReviewBar";

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
    }, 2000);
    return () => clearTimeout(activeTimer);
  }, [active]);

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold pb-8">Star Rating</h1>
      <div className="flex gap-4 border-2 bg-gray-400 rounded-full px-4 py-2">
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
      <p className="text-lg font-semibold pb-6 pt-2">
        {totalReviews} customer ratings
      </p>
      <div className="flex flex-col gap-3">
        {reviewArr.map((val, idx) => (
          <div key={idx} className="w-96 flex items-center justify-between">
            <p className="text-lg font-semibold">{idx + 1} star</p>
            <ReviewBar
              width={
                totalReviews > 0 ? Math.round((val * 100) / totalReviews) : 0
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
