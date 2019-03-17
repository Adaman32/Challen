	var date = new Date();

//determining which time to show - UTC or CTZ
	if(utc){
		var sec = date.getUTCSeconds();
		var min = date.getUTCMinutes();
		var hour = date.getUTCHours();
	}
	else{
		var sec = date.getSeconds();
		var min = date.getMinutes();
		var hour = date.getHours();
	}

	//setting up the initial position of each clock arm
	TweenMax.set(document.getElementById('clockSeconds'), {rotation: sec*6});
	TweenMax.set(document.getElementById('clockMinutes'), {rotation: min*360/60});
	TweenMax.set(document.getElementById('clockHours'), {rotation: hour*360/12 + .5*min});

	// updating time
	function updateTime(){
		// moving the three arms of the clock
		var timeline = new TimelineMax();
		timeline.to(document.getElementById('clockSeconds'), 1, {rotation: "+=" + 6})
				.to(document.getElementById('clockMinutes'), 1, {rotation: "+=" + 0.1})
				.to(document.getElementById('clockHours'), 1, {rotation: "+=" + 6/3600});
	}

	// UPDATING TIME EVERY SECOND
	setInterval(updateTime, 1000);

// the switching between timezones is done below
	var utcButton = document.getElementById('utcBut');
	utcButton.addEventListener('click', switchZone);

	function switchZone(){
		if (utc) {
			utc=false;  // if timezone is utc - change button, boolean that determines what to display, and headline
			utcButton.innerHTML = "Show UTC Time";
			document.getElementById('tz').innerHTML = "Current Time Zone";
		}else{
			utc=true;
			utcButton.innerHTML = "Show current timezone";
			document.getElementById('tz').innerHTML = "UTC";
		}
		if(utc){
			var hour = date.getUTCHours();
		}
		else{
			var hour = date.getHours();
		}
		//moving the hour arm of analog clock to the right position
		TweenMax.set(document.getElementById('clockHours'), {rotation: hour*360/12 + .5*min});
	}