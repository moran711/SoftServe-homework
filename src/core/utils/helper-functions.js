export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isOnline() {
  return window.navigator.onLine;
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export function fetchAPI(method, url, data) {
  switch (method) {
    case 'GET':
      console.log('data received');
      break;
    case 'POST':
      console.log('data sent');
      break;
    default:
      console.log('data');
  }
  return true;
}
