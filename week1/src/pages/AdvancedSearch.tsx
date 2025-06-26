import {
  useDeferredValue,
  useState,
  useTransition,
  type ChangeEvent,
} from "react";

const MOCK_LIST = Array.from({ length: 5000 }, (_, i) => `상품_${i}`);

const AdvancedSearch = () => {
  const [input, setInput] = useState("");
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const deferredInput = useDeferredValue(input);

  // 빠르게 업데이트: 추천어 (짧은 배열)
  const suggestions = ["사과", "바나나", "딸기", "체리"].filter((item) =>
    item.includes(input)
  );

  //느린 작업: 대량 리스트 필터링
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const result = MOCK_LIST.filter((item) => item.includes(value));
      setFilteredList(result);
    });
  };

  return (
    <div className="h-full px-2">
      <p>useTransition, useDeferredValue 고급 사용</p>
      <div className="flex justify-center items-center flex-col">
        <input
          value={input}
          onChange={handleChange}
          placeholder="검색어 입력"
        />
        {/* 빠른 피드백: 추천어 */}
        <div>
          <strong>추천어:</strong>
          {suggestions.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
        <div className="h-[300px] w-[200px] overflow-y-auto border flex justify-center">
          {/* 느린 필터링 상태 표시 */}
          {isPending && <p>대량의 데이터 필터링 중...</p>}

          {/* deferredInput으로 필터링 상태 가시화 */}
          {input !== deferredInput && <p>UI 업데이트 지연 중...</p>}

          {/* 결과 리스트 */}
          <ul>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdvancedSearch;
