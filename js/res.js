function slider()
	{
		var menu = document.getElementById('menu');
		if(menu.style.display === "none")
		{
			menu.style.display = "block";

		}
		else
		{
			menu.style.display = "none";
		}
	}


var videoplayer = document.getElementById('VideoPlayer');
	var CakeVideo = document.getElementById('CakeVideo');
	// var container=document.getElementById('container');
	function Stopvideo()
	{
		videoplayer.style.display="none";
	}
	function playvideo(file)
	{
		CakeVideo.src=file;
		videoplayer.style.display="block";
		// body.style.background = gray;
	}