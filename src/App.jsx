import GridGame from "./tasks/MagicCard";
import Pagination from "./tasks/Pagination";
import ProgressBar from "./tasks/ProgressBar";
import StarRating from "./tasks/StarRating";
import TrafficLight from "./tasks/TrafficLight";

const App = () => {
  return (
    <div>
      <StarRating/>
      <Pagination/>
      <TrafficLight />
      <GridGame />
      <ProgressBar/>
    </div>
  );
};

export default App;
