import $ from 'jquery';
import slick from 'slick-carousel';

import slickConfig from './sliderConfig';

function printElement (postArray) {
    for (let i = 0; i < postArray.length; i++) {
        let post = postArray[i].fields;
        if(post.isNew) {
            $('.evidenza').append(`
            <div data-position="${i}" class="post">
                <img src="${post.image.fields.file.url}" />
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>`);
        } else {
            $('.altri-post').append(`
            <div data-position="${i}" class="post">
                <img src="${post.image.fields.file.url}" />
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
            `)
        }
    }
    $('.evidenza').slick(slickConfig.carouselThreeSlides);
    
}

export default printElement;