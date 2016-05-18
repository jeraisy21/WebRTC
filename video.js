(function() {
	var video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;

	 navigator.getMedia = navigator.getUserMedia || 
	 					  navigator.webkitGetUserMedia ||
	 					  navigator.mozGetUserMedia ||
	 					  navigator.msGetUserMedia;

	 	// Video Stream

		navigator.getMedia({
			video: true,
			audio: false
		}, function(stream) {
				video.src = vendorUrl.createObjectURL(stream);
				video.play();
		}, function(error) {
			// error throw
		console.log('Running');
		});



})();

