import AdvancedSearch from "./AdvancedSearch";
import DeferredValueexample from "./DeferredValueExample";
import PaginationExample from "./PaginationExample";
import TransitionExample from "./TransitionExample";

const Home = () => {
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center flex-row gap-2">
        {/* useTransition */}
        <TransitionExample />
        {/* useDeferredValue */}
        <DeferredValueexample />
        {/* 고급 사용 */}
        <AdvancedSearch />
      </div>
      <PaginationExample />
    </div>
  );
};
export default Home;
