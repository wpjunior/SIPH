$(function() {
    $('#main-menu li ul') .parent() .children('a') .addClass('has-submenu');
	
    $('#main-menu li').hoverIntent(function() {
	$(this) .children('ul') .stop(true, true) .slideDown(100);
    }, function() {
	$(this) .children('ul') .stop(true,true) .slideUp(80);
    });
	
    $('#main-menu li') .find('li.current-menu-item') .parents('li') .addClass('current-parent');
    $('#main-menu li ul li ul') .parent() .addClass('sub-has-sub');
    $('#main-menu li ul').hide();
    
});
