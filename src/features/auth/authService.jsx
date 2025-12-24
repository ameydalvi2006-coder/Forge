export const getUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];

export const findUser = (email, password) =>
  getUsers().find(
    (u) => u.email === email && u.password === password
  );
