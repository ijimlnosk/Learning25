import { use } from "react";
import { fetchUserData } from "../apis/mock-fetch-use-data";

type Props = {
  userId: number;
};

export const UserProfile = ({ userId }: Props) => {
  /* 
        use: 서버 컴포넌트나 Suspense에서 비동기 하뭇 호출을 동기적으로 사용할 때 쓰는 함수
        기존의 await fetch()나 React Query, SWR 대신 리액트 내부에서 
        서버 fetch 함수를 직접 "Suspense"로 기다리는 용도
    */
  const data = use(fetchUserData(userId));

  return <div>사용자 이름: {data.name}</div>;
};
