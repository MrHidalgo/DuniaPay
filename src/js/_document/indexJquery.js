

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
		// ==========================================
  };
  initJquery();
});

