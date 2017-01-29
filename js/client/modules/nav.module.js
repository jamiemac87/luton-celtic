'use strict';
define(['jquery', 'events'], function ($, Events) {
  var _header, _nav, _mobileMenuToggleBtn;

  var init = function () {
    _header = $('header').length > 0 ? $('header') : null;
    _nav = $('.nav').length > 0 ? $('.nav') : null;
    _mobileMenuToggleBtn = $('.menu-icon__outer-wrapper').length > 0 ? $('.menu-icon__outer-wrapper') : null;

    _nav == null ? console.error('nav not found') : '';
    _header == null ? console.error('header not found') : '';

    _setupEventHooks();
  };

  var _setupEventHooks = function () {
    $(_mobileMenuToggleBtn).on('click', function () {
      toggleMenu();
    });
  };

  var _openMenu = function () {
    $(document).trigger(Events.OPEN_MENU);
    _header && _header.find('.menu-icon__inner-wrapper').addClass('animate-icon');
    _nav && _nav.addClass('nav--is-visible');
  };

  var _closeMenu = function () {
    $(document).trigger(Events.CLOSE_MENU);
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
