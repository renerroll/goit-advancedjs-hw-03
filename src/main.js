import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
	clearGallery,
  showLoader,
  hideLoader,
  showNotification,
} from './js/render-functions.js';

document
  .getElementById('search-form')
  .addEventListener('submit', async event => {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();

    if (!query) {
			clearGallery();
      showNotification('Search query cannot be empty');
      return;
    }

    showLoader();

    fetchImages(query)
      .then(data => {
        if (data.hits.length === 0) {
          showNotification(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          renderGallery(data.hits);
        }
      })
      .catch(error => {
        showNotification('Failed to fetch images');
      })
      .finally(() => {
        hideLoader();
      });
  });