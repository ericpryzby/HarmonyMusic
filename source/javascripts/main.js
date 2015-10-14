jQuery(document).ready(function($){
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
});

// Menu Items Slidetoggle
$('.sub-menu').click(function() {
  $(this).toggleClass('submenu-open').parent('li').siblings('li').children('h4.submenu-open').removeClass('submenu-open');
  $(this).parent().toggleClass('submenu-open').children('ul').slideToggle(500).end().siblings('.submenu-open').removeClass('submenu-open').children('ul').slideUp(500);
$('html, body').animate({
            scrollTop: (0),
        }, "fast"); 
});

/**
 * cbpHorizontalMenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpHorizontalMenu = (function() {

	var $listItems = $( '#cbp-hrmenu > ul > li' ),
		$menuItems = $listItems.children( 'a' ),
		$body = $( 'body' ),
		current = -1;

	function init() {
		$menuItems.on( 'click', open );
		$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
	}

	function open( event ) {

		if( current !== -1 ) {
			$listItems.eq( current ).removeClass( 'cbp-hropen' );
		}

		var $item = $( event.currentTarget ).parent( 'li' ),
			idx = $item.index();

		if( current === idx ) {
			$item.removeClass( 'cbp-hropen' );
			current = -1;
		}
		else {
			$item.addClass( 'cbp-hropen' );
			current = idx;
			$body.off( 'click' ).on( 'click', close );
		}

		return false;

	}

	function close( event ) {
		$listItems.eq( current ).removeClass( 'cbp-hropen' );
		current = -1;
	}

	return { init : init };

})();

/* Accordion Menu */

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link2');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion2'), false);
});
