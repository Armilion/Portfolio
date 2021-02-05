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
});
