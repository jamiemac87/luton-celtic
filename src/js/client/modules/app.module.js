'use strict';
define(['jquery', 'events'], function ($, Events) {
  var _mainContent, _body;

  //Initialise
  var init = function () {
    _body = $('body').length > 0 ? $('body') : null;
    _mainContent = $('.main-content').length > 0 ? $('.main-content') : null;

    _body == null ? console.error('body not found') : '';
    _mainContent == null ? console.error('main content not found') : '';

    _setupEventHooks();
  };

  var _setupEventHooks = function () {
    $(document).on(Events.OPEN_MENU, function (e) {
      _onOpenMenu();
    });

    $(document).on(Events.CLOSE_MENU, function (e) {
      _onCloseMenu();
    });
  };

  var _onOpenMenu = function () {
    _body && _body.addClass('stop-scroll');
    _mainContent && _mainContent.find('.main-content__overlay').addClass('is-visible');
  };

  var _onCloseMenu = function () {
    _body && _body.removeClass('stop-scroll');
    _mainContent && _mainContent.find('.main-content__overlay').removeClass('is-visible');
  };

  return {
    __$init: init
  }
});