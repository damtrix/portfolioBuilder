import { createUrl, get, isStoredJwt, post, setStoredJwt } from './http';

interface login {
  username: string;
  password: string;
}

export const me = async () => {
  return isStoredJwt()
    ? (await get(createUrl('/api/me')).catch(() => null))?.data
    : null;
};

export const login = async (username: string, password: string) => {
  const result = (
    await post(createUrl('/api/login'), { username, password }).catch(
      () => null
    )
  )?.data;

  if (!result) {
    return alert('Could not login');
  }
  setStoredJwt(result.accessToken);
  return me();
};

export const signup = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const result = (
    await post(createUrl('/api/signup'), {
      username,
      password,
      firstName,
      lastName,
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert('Could not sign up');
  }
  setStoredJwt(result.accessToken);
  return me();
};

export const checkUser = async () => {
  const result = await get(createUrl('/api/check-user')).catch(() => null);

  if (!result) {
    return false;
  }

  return result;
};
