export const saveToken = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', user);
};

export const getToken = () => {
  return localStorage.getItem('token');
}

export const getUser = () => {
  return localStorage.getItem('user');
};

export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
