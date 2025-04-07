// signupUser.js
export const signupUser = async (email, password, name) => {
  try {
    await account.create("unique()", email, password, name);
    alert("Signup successful!");
  } catch (err) {
    alert(err.message);
  }
};
