export function authHeader() {
  // return authorization header with jwt token
  const accessToken = localStorage.getItem('access_token');
  debugger;

  if (accessToken) {
    return { 'Authorization': 'Bearer ' + accessToken };
  } else {
    return {};
  }
}