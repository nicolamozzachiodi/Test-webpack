import $ from 'jquery';
import slick from 'slick-carousel';

import slickConfig from './sliderConfig';

function printElement (postArray) {
    for (let i = 0; i < postArray.length; i++) {
        let post = postArray[i].fields;
        if(post.isNew) {
            $('.evidenza').append(`
            <a href="javascript:void(0)">
                <div data-position="${i}" data-id="${postArray[i].sys.id}" class="post">
                    <img src="${post.image.fields.file.url}" />
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    </div>
                </a>
            `);
                
        } else {
            $('.altri-post').append(`
            <a href="javascript:void(0)">
                <div data-position="${i}" data-id="${postArray[i].sys.id}" class="post">
                    <img src="${post.image.fields.file.url}" />
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                </div>
            </a>    
            `)
        }
    }
    $('.evidenza').slick(slickConfig.carouselThreeSlides);
    
}

export default printElement;