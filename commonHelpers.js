import{i as a,S as l}from"./assets/vendor-96ed78f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="45390731-4de91971590831384ce1e2f20",u="https://pixabay.com/api/";async function f(o){const s=new URLSearchParams({key:d,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o}),n=`${u}?${s}`;return fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const m="/goit-advancedjs-hw-03/assets/error-icon-0541dd81.svg";a.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function h(o){const s=document.getElementById("gallery");s.innerHTML=o.map(t=>`
				<a href="${t.largeImageURL}" class="gallery-item">
					<div class="media">
						<img src="${t.webformatURL}" alt="${t.tags}">
					</div>
					<div class="info">
						<p class="info-item"><b>Likes</b><br/> ${t.likes}</p>
						<p class="info-item"><b>Views</b><br/> ${t.views}</p>
						<p class="info-item"><b>Comments</b><br/> ${t.comments}</p>
						<p class="info-item"><b>Downloads</b><br/> ${t.downloads}</p>
					</div>
				</a>
			`).join(""),new l(".gallery a").refresh()}function y(){const o=document.getElementById("gallery");o.innerHTML=""}function p(){document.getElementById("loader").classList.remove("hidden")}function g(){document.getElementById("loader").classList.add("hidden")}function c(o){a.error({message:o,backgroundColor:"#EF4040",iconUrl:m})}document.getElementById("search-form").addEventListener("submit",async o=>{o.preventDefault();const s=document.getElementById("search-input").value.trim();if(!s){y(),c("Search query cannot be empty");return}p(),f(s).then(n=>{n.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):h(n.hits)}).catch(n=>{c("Failed to fetch images")}).finally(()=>{g()})});
//# sourceMappingURL=commonHelpers.js.map
