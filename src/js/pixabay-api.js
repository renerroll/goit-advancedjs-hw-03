const API_KEY = '45390731-4de91971590831384ce1e2f20';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
  });
  const url = `${BASE_URL}?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}