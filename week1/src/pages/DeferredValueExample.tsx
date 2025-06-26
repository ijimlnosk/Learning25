import { useDeferredValue, useState } from "react";

const DeferredValueexample = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const list = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);
  const filtered = list.filter((item) => item.includes(deferredInput));

  return (
    <div className="h-full">
      <p>useDeferredValue Example</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="h-[300px] w-[200px] overflow-y-auto border flex justify-center items-center flex-col">
        {input !== deferredInput && <p>렌더링 중...</p>}
        {filtered.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default DeferredValueexample;
