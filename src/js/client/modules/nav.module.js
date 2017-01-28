'use strict';
define(['jquery', 'events'], function ($, Events) {
  var _header, _nav;

  var init = function () {
    _header = $('header').length > 0 ? $('header') : null;
    _nav = $('.nav').length > 0 ? $('.nav') : null;

    _nav == null ? console.error('nav not found') : '';
    _header == null ? console.error('header not found') : '';
  };

  var _openMenu = function () {
    $(document).trigger(Events.OPEN_MENU);
    _header && _header.find('.menu-icon__inner-wrapper').addClass('animate-icon');
    _nav && _nav.addClass('nav--is-visible');
  };

  var _closeMenu = function () {
    _header && _header.find('.menu-icon__inner-wrapper').removeClass('animate-icon');
    _nav && _nav.removeClass('nav--is-visible');
  };

  var toggleMenu = function () {
    if (_nav && _nav.hasClass('nav--is-visible')) {
      _closeMenu();
      return;
    }

    _openMenu();
  };

  return {
    __$init: init,
    toggleMenu: toggleMenu
  }
});
