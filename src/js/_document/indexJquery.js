

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
  /**
   *
   */
  $('body').on('click', (ev) => {
    const className = ".header__profile, .transfer__box-drop";

    if (!$(ev.target).closest(className).length) {
      $('.header__profile-drop').fadeOut(300);
      $('.transfer__box-dropdown').slideUp(300);

    }
  });

  /**
   *
   */
  const initAsideBtn = () => {
    $('.aside__nav-link').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.aside__nav-link').removeClass('is-active');
      elem.addClass('is-active');
    });
  };


  /**
   *
   */
  const initAsideMenu = () => {
    $('.aside__menu-btn').on('click', (ev) => {
      $(ev.currentTarget).toggleClass('is-active');
      $('body').toggleClass('is-menu-open');
    });
    $('.sidebar__info-btn').on('click', () => {
      $('.aside__menu-btn').removeClass('is-active');
      $('body').removeClass('is-menu-open');
    });
  };


  /**
   *
   */
  const initSidebarBtn = () => {
    $('.sidebar__nav-link').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.sidebar__nav-link').removeClass('is-active');
      elem.addClass('is-active');
    });
  };


  /**
   *
   */
  const initHeaderProfileDropDown = () => {
    $('.header__profile').on('click', (ev) => {
      $(ev.currentTarget).find('.header__profile-drop').fadeToggle(300);
    });
  };


  /**
   *
   */
  const initTransferDropDown = () => {
    $('[transfer-btn-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget),
        parentElem = elem.closest('.transfer__box-drop');

      $('.transfer__box-dropdown').slideUp(300);
      parentElem.find('.transfer__box-dropdown').slideToggle(300);
    });
    $('.transfer__box-dropdown a').on('click', (ev) => {
      const elem = $(ev.currentTarget),
        parentElem = elem.closest('.transfer__box-drop'),
        insertNode = parentElem.find('[transfer-btn-js]'),
        currencyName = elem.find('p').text(),
        imgSrc = elem.find('img').attr('src');

      insertNode.find('p').html(currencyName);
      insertNode.find('img').attr('src', imgSrc);

      parentElem.find('.transfer__box-dropdown').slideToggle(300);
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
		// ==========================================

    // lib
		// ==========================================

    // callback
    initAsideBtn();
    initAsideMenu();
    initSidebarBtn();
    initHeaderProfileDropDown();
    initTransferDropDown();
		// ==========================================
  };
  initJquery();
});

