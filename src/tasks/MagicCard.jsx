import { useEffect, useState } from "react";
import Box from "../components/Box";
import { res, shuffleArr } from "../utils/Grid";

const MagicCard = () => {
  const [visibleArr, setVisibleArr] = useState(res.map(() => true));
  const [visibleValues, setVisibleValues] = useState([]);
  const [correctCards, setCorrectCards] = useState(0);
  const [won, setWon] = useState(false);
  const [start, setStart] = useState(false);

  const handleOnClick = (i) => {
    if (visibleValues.length < 2) {
      setVisibleValues((prev) => [...prev, i]);
      setVisibleArr((prev) => {
        const newVisibleArr = [...prev];
        newVisibleArr[i] = false;
        return newVisibleArr;
      });
    }
  };

  useEffect(() => {
    if (visibleValues.length === 2) {
      const i = visibleValues[0];
      const j = visibleValues[1];
      if (res[i] === res[j]) {
        setCorrectCards((prev) => prev + 1);
        setTimeout(() => {
          if (correctCards + 1 === res.length / 2) {
            setWon(true);
          }
          setVisibleArr((prev) => {
            const newArr = [...prev];
            newArr[i] = false;
            newArr[j] = false;
            return newArr;
          });
        }, 1000);
      } else {
        setTimeout(() => {
          setVisibleArr((prev) => {
            const newArr = [...prev];
            newArr[i] = true;
            newArr[j] = true;
            return newArr;
          });
        }, 1000);
      }
      setVisibleValues([]);
    }
  }, [visibleValues]);

  return (
    <div className="w-full h-screen bg-slate-500 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-bold pb-8">Magic Card Game</h1>
      {!start ? (
        <button
          className="px-8 py-2 bg-black rounded-md text-2xl text-white font-semibold"
          onClick={() => setStart(true)}
        >
          Play Game
        </button>
      ) : won ? (
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Congrats!! You've won</p>
          <button
            className="px-8 py-2 bg-black rounded-md text-2xl text-white font-semibold"
            onClick={() => {
              setStart(true);
              setWon(false);
              setVisibleArr(res.map(() => true));
              shuffleArr(res);
              setCorrectCards(0);
            }}
          >
            Play again
          </button>
        </div>
      ) : (
        <div className="mx-auto w-72 h-72 grid grid-cols-4">
          {res.map((val, idx) => (
            <Box
              num={val}
              key={idx}
              visible={visibleArr[idx]}
              onClick={() => handleOnClick(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MagicCard;
