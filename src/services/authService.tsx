import axios from 'axios';

// const url = "http://localhost:3000";
const url = "https://api-imperial.azurewebsites.net"

interface LoginData {
  login: string;
  password: string;
}

const authService = {
  login: (username: string, password: string) => {
    const data: LoginData = { login: username, password };
    return axios.post(`${url}/auth/login`, data);
  }
};

export default authService;