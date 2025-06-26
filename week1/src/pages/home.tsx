import AdvancedSearch from "./AdvancedSearch";
import DeferredValueexample from "./DeferredValueExample";
import PaginationExample from "./PaginationExample";
import TransitionExample from "./TransitionExample";
import TransitionWithSuspense from "./TransitionWithSuspense";

const Home = () => {
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center flex-row gap-2">
        {/* useTransition */}
        <TransitionExample />
        {/* useDeferredValue */}
        <DeferredValueexample />
        {/* 검색 자동완성 + 딜레이된 대량 필터링 */}
        <AdvancedSearch />
      </div>
      {/* Pagination + Transition API */}
      <PaginationExample />
      <div className="p-4">
        <TransitionWithSuspense />
      </div>
    </div>
  );
};
export default Home;
