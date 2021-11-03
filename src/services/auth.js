export const TOKEN_KEY = "@autonomeasy-Token";
export const ID_KEY = "@autonomeasy-Id";

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getId = () => sessionStorage.getItem(ID_KEY);
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const login = (token, id) => {
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(ID_KEY, id);
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
};