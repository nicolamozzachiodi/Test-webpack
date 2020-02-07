import $ from 'jquery';

import apiKey from './apiKey';
import changePages from './getPostData';
import post from './post';

$(document).ready(function () {
    apiKey.getAllPost();
    changePages();
    post();
});
