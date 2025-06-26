import { useState, useTransition, type ChangeEvent } from "react";

const TransitionExample = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const newList = Array.from({ length: 10000 }, (_, i) => value + i);
      setList(newList);
    });
  };

  return (
    <div className="h-full">
      <input value={input} onChange={handleChange} placeholder="검색어 입력" />
      <div className="h-[300px] overflow-y-auto">
        {isPending && <p>로딩 중...</p>}
        {list.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default TransitionExample;
