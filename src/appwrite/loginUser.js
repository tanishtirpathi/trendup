import authService from "./auth";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await authService.loginUser({ email, password });
    return response;
  } catch (err) {
    throw err;
  }
};
