import { useState, useTransition } from "react";

const DATA = Array.from({ length: 5000 }, (_, i) => `게시글_${i}`);

const PaginationExample = () => {
  const [page, setPage] = useState(1);
  const [visibleData, setVisibleData] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (nextPage: number) => {
    startTransition(() => {
      setPage(nextPage);
      const start = (nextPage - 1) * 100;
      const end = start + 100;
      setVisibleData(DATA.slice(start, end));
    });
  };

  return (
    <div>
      <h3>{page} 페이지</h3>
      <div className="h-[500px] overflow-y-auto">
        {isPending && <p>페이지 로딩 중...</p>}
        <ul>
          {visibleData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        {Array.from({ length: 50 }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default PaginationExample;
