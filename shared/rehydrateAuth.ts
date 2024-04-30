export const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem("apodex");
    const userData = localStorage.getItem("userData");
    if (serializedState === null || userData === null) {
      return undefined;
    }
    return {
      auth: {
        isAuth: true,
        user: JSON.parse(userData),
        status: "base",
      },
    };
  } catch (err) {
    return undefined;
  }
};
