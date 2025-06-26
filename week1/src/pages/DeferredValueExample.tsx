import { useDeferredValue, useState } from "react";

const DeferredValueexample = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const list = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);
  const filtered = list.filter((item) => item.includes(deferredInput));

  return (
    <div className="h-full">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="h-[300px] overflow-y-auto">
        {input !== deferredInput && <p>렌더링 중...</p>}
        {filtered.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default DeferredValueexample;
