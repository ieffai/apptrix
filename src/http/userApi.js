import { $authHost, $host } from '.';

export const loginService = async (username, password) => {
  try {
    const response = await $host.post('/', { username, password });
    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

export const refreshService = async () => {
  try {
    const response = await $host.post('/refresh/', {
      withCredentials: true,
      refresh: localStorage.getItem('refresh'),
    });
    localStorage.setItem('access', response.data.access);
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

export const logoutService = async () => {
  try {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

export const fetchUsersService = async () => {
  try {
    const { data } = await $authHost.get('/users', {
      params: {
        fields: 'id,name,login,email',
      },
    });
    return data;
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};
