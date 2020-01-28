import $ from 'jquery';

import apiKey from './apiKey';
import changePages from './findPostData'

$(document).ready(function () {
    apiKey();
    changePages();
});
