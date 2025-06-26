import AdvancedSearch from "./AdvancedSearch";
import DeferredValueexample from "./DeferredValueExample";
import TransitionExample from "./TransitionExample";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-row gap-2">
      {/* useTransition */}
      <TransitionExample />
      {/* useDeferredValue */}
      <DeferredValueexample />
      {/* 고급 사용 */}
      <AdvancedSearch />
    </div>
  );
};
export default Home;
