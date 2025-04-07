import authService from "./auth";

export const signupUser = async ({ name, email, password }) => {
  try {
    const response = await authService.createAccount({ name, email, password });
    return response;
  } catch (err) {
    throw err;
  }
};
