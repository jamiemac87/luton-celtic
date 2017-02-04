'use strict';
define(['jquery'], function ($) {
  var _venueHireBtn;

  //Initialise
  var init = function () {
    _venueHireBtn = $('.js-venue-hire-btn').length > 0 ? $('.js-venue-hire-btn') : null;
    _venueHireBtn === null ? console.error('body not found') : '';

    _setupEventHooks();
  };

  var _setupEventHooks = function () {
    _venueHireBtn.click(function () {
      _openEmailClient('events@lutonceltic.com');
    });
  };

  var _openEmailClient = function (email, subject) {
    window.location.href = "mailto:" + email;
  };

  return {
    __$init: init
  }
});