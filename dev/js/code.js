$(function(){
	
	var $dot = $('.news__text').dotdotdot({

	ellipsis: "\u2026 ",
	keep: '.readmore',
	callback: function( isTruncated ) {
		var self = $( this );
		 if (isTruncated) {
		

		} else {
			self.find(".readmore").css("display","none");
		}

	}
        
     
	})
	var api = $dot.data("dotdotdot");
	$dot.on('click', '.readmore', function( e ){
			e.preventDefault();
			//	When truncated, restore
			if ( $dot.hasClass( 'ddd-truncated' ) )
			{
				api.restore();
				$dot.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot.removeClass( 'full-story' );
				api.truncate();
				api.watch();
			}
		}
	);
			
		

	
	function toggleRead(caller) {
    var callerText = $(caller).text();
    var parent = $(caller).closest(".news__text");
		console.log(parent)
    var isTruncated = $(parent).hasClass("ddd-truncated");
		console.log(isTruncated)
		if (isTruncated){
			
			$(parent).find("a").text("&laquo; Read less");
			API.restore(function(){
				$(parent).find("a").text("&laquo; Read less")
			});
			
        // Re-add click function since I guess destroy also removes this
//			$(parent).find("a").click(function () {
//				toggleRead(this);
//			});
		}else{
			$(parent).find("a").html("Read more &raquo;");
			
		}
    
        
    }

	
	

	
});