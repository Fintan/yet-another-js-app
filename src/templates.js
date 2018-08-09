// import { html } from 'lit-html';
import { html, render } from 'lit-html/lib/lit-extended'

export const searchTemplate = data => `
    <div class='search-view'>
        <a href="./#list">Search for Avengers..</a>
    </div>
`;

export const listTemplate = data => `
    <div class='list-view'>
        <div>Images:</div>
        <div class="thumbs">
            ${data.map(item=> {
                return thumbnailTemplate(item);
            }).join('')}
        </div>
    </div>
    <a id="moreBtn" href="#">More..</a>
`;

export const thumbnailTemplate = item => `
    <a class="thumbnails" href="${item.images.downsized.url}">
        <figure>
            <img src="${item.images.fixed_height_small_still.url}" alt="${item.title}">
        </figure>
    </a>
`;

export const detailTemplate = item => `
    <div class="detail-view">
        <title>${item.title}</title>
        <figure>
            <img src="${item.images.downsized.url}" alt="${item.title}">
        </figure>
    </div>
`;


export const litSearchTemplate = data => html`
    <div class='search-view'>
        <a href="./#list">Search for Avengers..</a>
    </div>
`;

export const litListTemplate = (data, emitter) => html`
    <div class='list-view'>
        <div>Images:</div>
        <div class="thumbs">
            ${data.map((item, index) => litThumbnailTemplate(item, index, emitter))}
        </div>
    </div>
    <a id="moreBtn" href="#" on-click=${(e) => {
        emitter.emit('FETCH_APPEND');
        e.preventDefault();
    }}>More..</a>
`;

export const litThumbnailTemplate = (item, index, emitter) => html`
    <a class="thumbnails" href='#detail/${index}'>
        <figure>
            <img src="${item.images.fixed_height_small_still.url}" alt="${item.title}">
        </figure>
    </a>
`;

export const litDetailTemplate = item => html`
    <div class="detail-view">
        <title>${item.title}</title>
        <figure>
            <img src="${item.images.downsized.url}" alt="${item.title}">
        </figure>
    </div>
`;