import GridGame from "./tasks/MagicCard";
import Pagination from "./tasks/Pagination";
import StarRating from "./tasks/StarRating";
import TrafficLight from "./tasks/TrafficLight";

const App = () => {
  return (
    <div>
      <Pagination/>
      <StarRating/>
      <GridGame />
      <TrafficLight />
    </div>
  );
};

export default App;
