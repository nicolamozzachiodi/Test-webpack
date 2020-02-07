import slick from 'slick-carousel';
import $ from 'jquery';

import apiKey from './apiKey';

function changePages () {   
    $(document).on('click', '.post', function (e) {
        apiKey.getPost($(e.currentTarget).data('id'));
    });

    $(document).on('click', '.return-home', function () {
        location.replace(window.location.origin);
    });
}

export default changePages;