$(document).ready(() => {
	function handleClick(){
		$(document).on("click", ".magnifying-glass", (e) => {
			$(document).off("click", ".magnifying-glass");
			let thumbnail_image = $(e.currentTarget).attr("id");
			$("html").append("<div id='fs-image'><img id='close-button' src='./images/close.png' alt='close zoomed image icon'/><img id='close-button-hover' src='./images/close-hover.png' alt='close zoomed image hover icon'/><img id='zoomed_image' class='fs-images' src='./images/fullscreen/"+thumbnail_image+".jpg'/></div>");
			$("#fs-image").css({"position":"fixed"});
			$("body").css({"filter":"blur(5px)"});
			$("#close-button-hover").click(function(){
				$("#fs-image").remove();
				$("body").css({"filter":"none"});
				handleClick();
			});
		});
	}
	handleClick();


	/*function isInView(elem){
		let scrollElement = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1))? 'body':'html';
		let vpTop = $(scrollElement).scrollTop();
		let vpBottom = vpTop + $(window).height();

		let elemTop = Math.round(($(elem).offset().top));
		let elemBottom = elemTop + $(elem).height();
		return elemTop + 100 < vpBottom;
	}

	function animElem(elem, newClass){
		if(isInView($(elem))){
			if(!($(elem).hasClass(newClass)))
				$(elem).addClass(newClass);
		}
	}

	deviceHasMouse = window.matchMedia("(hover:hover) and (pointer:fine)").matches; // fadeIn on scroll if in view only on computer devices, else fadeIn at the beginning

	let animatedElements = [{tags:["#projects>h2","#about>h2","header h2"], className:"startH2nimation"}, {tags:["#projects>div"], className:"startProjectAnimation"}];
	animatedElements.map((elem) => {
		if(deviceHasMouse)
			elem.tags.map((tag) => animElem(tag, elem.className))
		else
			elem.tags.map((tag) => {
				if(!($(tag).hasClass(elem.className)))
					$(tag).addClass(elem.className);
			});
	});

	if(deviceHasMouse){
		$(window).scroll(() => {
			animatedElements.map((elem) => {
				elem.tags.map((tag) => animElem(tag, elem.className))
			});
		});
	}
	("body").on({
		"touchmove": function(){
			animatedElements.map((elem) => {
				elem.tags.map((tag) => animElem(tag, elem.className))
			});
		}
	});

	$('body').on({
    	'touchmove': function(e) { 
        	console.log($(this).scrollTop()); // Replace this with your code.
    	}
	});*/

});
