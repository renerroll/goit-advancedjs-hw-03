import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import iconError from '../img/error-icon.svg';

iziToast.settings({
  class: 'custom-toast',
  position: 'topRight',
  maxWidth: 432,
  color: '#FFFFFF',
  titleColor: '#FFFFFF',
  messageColor: '#FFFFFF',
  iconColor: '#FFFFFF',
  displayMode: 1,
});

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = images
    .map(
      image => `
				<a href="${image.largeImageURL}" class="gallery-item">
					<div class="media">
						<img src="${image.webformatURL}" alt="${image.tags}">
					</div>
					<div class="info">
						<p class="info-item"><b>Likes</b><br/> ${image.likes}</p>
						<p class="info-item"><b>Views</b><br/> ${image.views}</p>
						<p class="info-item"><b>Comments</b><br/> ${image.comments}</p>
						<p class="info-item"><b>Downloads</b><br/> ${image.downloads}</p>
					</div>
				</a>
			`
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}

export function showNotification(message) {
  iziToast.error({
    message,
    backgroundColor: '#EF4040',
    iconUrl: iconError,
  });
}