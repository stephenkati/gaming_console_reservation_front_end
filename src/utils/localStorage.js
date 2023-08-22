export const saveToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
}

// export const getUser = () => {
//   return localStorage.getItem('user');
// };

export const removeToken = () => {
  localStorage.removeItem('token');
  // localStorage.removeItem('user');
}
