export function authHeader() {
  // return authorization header with jwt token
  const accessToken = JSON.parse(localStorage.getItem('auth_user')).access_token;

  if (accessToken) {
    return { 'Authorization': 'JWT ' + accessToken };
  } else {
    return {};
  }
}