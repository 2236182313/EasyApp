﻿/// <reference path="../Scripts/UIFunctions.js"/>

beforeEach(function () {
    var fixture = '<div id="menu"></div>' +
        '<div id="change-text-form"></div>' +
        '<div id="change-color-form"></div>';

    document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
});

afterEach(function () {
    document.body.removeChild(document.getElementById('menu'));
    document.body.removeChild(document.getElementById('change-text-form'));
    document.body.removeChild(document.getElementById('change-color-form'));
});




describe('Frontend_Context Menu', function () {
    it('ShowDiv fucntion run with no error', function () {
        showDiv();

    });

});