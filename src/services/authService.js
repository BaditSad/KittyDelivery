import axios from 'axios';

const API_URL = 'http://localhost:3000/api/mc_auth/';
export const login = async (email, password, remember_me) => {
  try {
    console.log(`Sending login request for email: ${email}`);
    const response = await axios.post(`${API_URL}login`, { email, password, remember_me });
    console.log('Login response:', response.data);

    const { token, user, refreshToken } = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Refresh = refreshToken;
    localStorage.setItem('token', token);
    if (remember_me && refreshToken) {
      // add axios middleware to refresh token
      axios.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && error.response.status === 401) {
            console.log('Refreshing token...');
            const response = await axios.post(`${API_URL}refresh`, { token: localStorage.getItem('token'), refreshToken: localStorage.getItem('refreshToken') });
            console.log('Token refreshed:', response.data);
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('token', response.data.token);
            return axios.request(error.config);
          }
          return Promise.reject(error);
        }
      );
      localStorage.setItem('refreshToken', refreshToken);
    }
    return user;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw new Error('Invalid credentials');
  }
};

export const logout = async () => {
  try {
    console.log('Sending logout request');
    await axios.post(`${API_URL}logout`);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout error:', error.response ? error.response.data : error.message);
    throw new Error('Logout failed');
  }
};

export const register = async (userData) => {
  try {
    console.log('Sending registration request', userData);
    const response = await axios.post(`${API_URL}register`, userData);
    console.log('Registration response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response ? error.response.data : error.message);
    throw new Error('Registration failed');
  }
};
