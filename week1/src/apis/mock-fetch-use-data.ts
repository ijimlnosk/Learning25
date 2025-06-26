export const fetchUserData = async (userId: number) => {
  return new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: `User ${userId}` }), 1000)
  );
};
