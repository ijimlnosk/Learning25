import DeferredValueexample from "./DeferredValueExample";
import TransitionExample from "./TransitionExample";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-row">
      {/* useTransition */}
      <TransitionExample />
      {/* useDeferredValue */}
      <DeferredValueexample />
    </div>
  );
};
export default Home;
