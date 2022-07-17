import { User } from "screens/project-list/search-panel";
const localStorageKey = "__auth__provider_token";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

/**
 * 登录
 * @param data 用户名和密码
 */
export const login = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

/**
 * 注册
 * @param data 用户名和密码
 */
export const register = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

/**
 * 注销
 * @returns
 */
export const logout = () => window.localStorage.removeItem(localStorageKey);
