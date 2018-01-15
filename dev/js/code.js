$(function(){

	var $dot_1 = $('#news_1').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var $dot_2 = $('#news_2').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var api_1 = $dot_1.data("dotdotdot");
	var api_2 = $dot_2.data("dotdotdot");
	
	$dot_1.on('click', '.readmore', function( e ){
			e.preventDefault();
		
			//	When truncated, restore
			if ( $dot_1.hasClass( 'ddd-truncated' ) )
			{
				api_1.restore();
				$dot_1.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_1.removeClass( 'full-story' );
				api_1.truncate();
				api_1.watch();
			}
		});
	$dot_2.on('click', '.readmore', function( e ){
			e.preventDefault();
			console.dir(this);
			//	When truncated, restore
			if ( $dot_2.hasClass( 'ddd-truncated' ) )
			{
				api_2.restore();
				$dot_2.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_2.removeClass( 'full-story' );
				api_2.truncate();
				api_2.watch();
			}
		});
	
	
	//menu bars
	$('.bars').click(function(){
		$(this).toggleClass('active');
		$(".menu").animate(
			{height: 'toggle'},
			{duration:300}
	)});


	
});

	
