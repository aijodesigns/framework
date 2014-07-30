$(document).ready(function(){

	// Layout Specific Styles

	// Adding Cross-browser first and last child support
	$("li:first-child").addClass("first");
	$("li:last-child").addClass("last");

	/* ================================================================================================
			Spotlight
	================================================================================================ */

	$("#spotlight ul").addClass("slider");

	if( $('#spotlight').length > 0 )
	{

		/* ==== data-cycle settings ==== */
		$('#spotlight ul').attr({
			"data-cycle-timeout":			8500,
			"data-cycle-slides":			"li",
			"data-cycle-auto-height":		"900:360",
			"data-cycle-pause-on-hover":	true,
			"data-cycle-pager":				".example-pager",
			"data-cycle-prev":				".cycle-prev",
			"data-cycle-next":				".cycle-next"
		});

		$('#spotlight ul').cycle();

		$('#spotlight ul').after('<span class="cycle-prev"></span><div class="cycle-pager"></div><span class="cycle-next"></span>');

	} // end spotlight if length statement

	/* ================================================================================================
	jQuery Dropdown
	the definition of your unordered list  ex. "nav ul" or "ul.dropdown"
	================================================================================================*/
	
	$("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" ");

}); // end document ready

