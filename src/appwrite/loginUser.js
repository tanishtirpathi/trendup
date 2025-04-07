// loginUser.js
export const loginUser = async (email, password) => {
  try {
    await account.createEmailSession(email, password);
    alert("Login successful!");
  } catch (err) {
    alert(err.message);
  }
};
