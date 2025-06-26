import { Suspense, useState, useTransition } from "react";
import { UserProfile } from "../components/UserProfile";

const TransitionWithSuspense = () => {
  const [userId, setUserId] = useState(1);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setUserId((prev) => prev + 1);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>다음 사용자 로드</button>
      <div>
        {isPending && <p>Transition 중...</p>}
        <Suspense fallback={<p>데이터 로딩 중...</p>}>
          <UserProfile userId={userId} />
        </Suspense>
      </div>
    </div>
  );
};
export default TransitionWithSuspense;
