import axios from 'axios';
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

export async function fetchAPI(method, url, data) {

  switch (method) {
    case 'GET':
        try {
        const { data } = await axios({
          method: 'get',
          url,
        });
        return data
        } catch(e) {
          console.error(e.message)
        }
      break;
    case 'POST':
      await fetch(url, {method, body: JSON.stringify(data), headers: {
        'Content-Type': 'application/json'
    },})
      break;
    default:
      console.log('data');
  }
  return true;
}
