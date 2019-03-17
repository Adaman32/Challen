	// Excuse the disgusting code, but this is the only way 
	// the pre tag will work and display the right ASCII numbers
	var letter = ["     000000000     \n   00:::::::::00   \n 00:::::::::::::00 \n0:::::::000:::::::0\n0::::::0   0::::::0\n0:::::0     0:::::0\n0:::::0     0:::::0\n0:::::0 000 0:::::0\n0:::::0 000 0:::::0\n0:::::0     0:::::0\n0:::::0     0:::::0\n0::::::0   0::::::0\n0:::::::000:::::::0\n 00:::::::::::::00 \n   00:::::::::00   \n     000000000     ","  1111111    \n 1::::::1    \n1:::::::1    \n111:::::1    \n   1::::1    \n   1::::1    \n   1::::1    \n   1::::1    \n   1::::1    \n   1::::1    \n   1::::1    \n   1::::1    \n111::::::111 \n1::::::::::1 \n1::::::::::1 \n111111111111 "," 222222222222222    \n2:::::::::::::::22  \n2::::::222222:::::2 \n2222222     2:::::2 \n            2:::::2 \n            2:::::2 \n         2222::::2  \n    22222::::::22   \n  22::::::::222     \n 2:::::22222        \n2:::::2             \n2:::::2             \n2:::::2       222222\n2::::::2222222:::::2\n2::::::::::::::::::2\n22222222222222222222"," 333333333333333   \n3:::::::::::::::33 \n3::::::33333::::::3\n3333333     3:::::3\n            3:::::3\n            3:::::3\n    33333333:::::3 \n    3:::::::::::3  \n    33333333:::::3 \n            3:::::3\n            3:::::3\n            3:::::3\n3333333     3:::::3\n3::::::33333::::::3\n3:::::::::::::::33 \n 333333333333333   ","       444444444  \n      4::::::::4  \n     4:::::::::4  \n    4::::44::::4  \n   4::::4 4::::4  \n  4::::4  4::::4  \n 4::::4   4::::4  \n4::::444444::::444\n4::::::::::::::::4\n4444444444:::::444\n          4::::4  \n          4::::4  \n          4::::4  \n        44::::::44\n        4::::::::4\n        4444444444","555555555555555555 \n5::::::::::::::::5 \n5::::::::::::::::5 \n5:::::555555555555 \n5:::::5            \n5:::::5            \n5:::::5555555555   \n5:::::::::::::::5  \n555555555555:::::5 \n            5:::::5\n            5:::::5\n5555555     5:::::5\n5::::::55555::::::5\n 55:::::::::::::55 \n   55:::::::::55   \n     555555555     ","        66666666   \n       6::::::6    \n      6::::::6     \n     6::::::6      \n    6::::::6       \n   6::::::6        \n  6::::::6         \n 6::::::::66666    \n6::::::::::::::66  \n6::::::66666:::::6 \n6:::::6     6:::::6\n6:::::6     6:::::6\n6::::::66666::::::6\n 66:::::::::::::66 \n   66:::::::::66   \n     666666666     ","77777777777777777777\n7::::::::::::::::::7\n7::::::::::::::::::7\n777777777777:::::::7\n           7::::::7 \n          7::::::7  \n         7::::::7   \n        7::::::7    \n       7::::::7     \n      7::::::7      \n     7::::::7       \n    7::::::7        \n   7::::::7         \n  7::::::7          \n 7::::::7           \n77777777            ","     888888888     \n   88:::::::::88   \n 88:::::::::::::88 \n8::::::88888::::::8\n8:::::8     8:::::8\n8:::::8     8:::::8\n 8:::::88888:::::8 \n  8:::::::::::::8  \n 8:::::88888:::::8 \n8:::::8     8:::::8\n8:::::8     8:::::8\n8:::::8     8:::::8\n8::::::88888::::::8\n 88:::::::::::::88 \n   88:::::::::88   \n     888888888     ","     999999999     \n   99:::::::::99   \n 99:::::::::::::99 \n9::::::99999::::::9\n9:::::9     9:::::9\n9:::::9     9:::::9\n 9:::::99999::::::9\n  99::::::::::::::9\n    99999::::::::9 \n         9::::::9  \n        9::::::9   \n       9::::::9    \n      9::::::9     \n     9::::::9      \n    9::::::9       \n   99999999        "];

	var seconds = ["  ___   \n / _ \\  \n| | | | \n| | | | \n| |_| | \n \\___/  "," __  \n/_ | \n | | \n | | \n | | \n |_| "," ___   \n|__ \\  \n   ) | \n  / /  \n / /_  \n|____| "," ____   \n|___ \\  \n  __) | \n |__ <  \n ___) | \n|____/  "," _  _    \n| || |   \n| || |_  \n|__   _| \n   | |   \n   |_|   "," _____  \n| ____| \n| |__   \n|___ \\  \n ___) | \n|____/  ","   __   \n  / /   \n / /_   \n| '_ \\  \n| (_) | \n \\___/  "," ______  \n|____  | \n    / /  \n   / /   \n  / /    \n /_/     ","  ___   \n / _ \\  \n| (_) | \n > _ <  \n| (_) | \n \\___/  ","  ___   \n / _ \\  \n| (_) | \n \\__, | \n   / /  \n  /_/   "]

	// DATE Display
	// every var related to date
	var utc = true; //boolean for knowing the timezone
	var analog = false; //boolean for knowing whether to show analog/digital clock

	var date1 = new Date();

	//determining whether UTC or CTZ is displayed
	if(utc){
		var dayOfWeek = date1.getUTCDay();
		var day = date1.getUTCDate();
		var month = date1.getUTCMonth();
		var year = date1.getUTCFullYear();
	}
	else{
		var dayOfWeek = date1.getDay();
		var day = date1.getDate();
		var month = date1.getMonth();
		var year = date1.getFullYear();
	}
	var weekNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// making sure that with first second and third - st, nd and rd are displayed instead of th
	if(day>3){
	document.getElementById('date').innerHTML = weekNames[dayOfWeek] + ', ' + day + 'th of ' + 
		monthNames[month] + ' ' + year;
	}
	else if(day==1 || day==21 || day == 31){
		document.getElementById('date').innerHTML = weekNames[dayOfWeek] + ', ' + day + 'st of '+ monthNames[month] + ' ' + year;
	}	
	else if(day==2 || day==22){
		document.getElementById('date').innerHTML = weekNames[dayOfWeek] + ', ' + day + 'nd of ' + monthNames[month] + ' ' + year;
	}	
	else if(day==3 || day==23){
		document.getElementById('date').innerHTML = weekNames[dayOfWeek] + ', ' + day + 'rd of ' + monthNames[month] + ' ' + year;
	}


	// main app (detect time + loop + print in DOM)
	function updateTime(){
		// date function (settimeout)
		var date = new Date();

		// if two chars, then split (seperate function)
		if(utc){
			var hoursBeforeSplit = date.getUTCHours().toString();
			var minutesBeforeSplit = date.getUTCMinutes().toString();
			var secondsBeforeSplit = date.getUTCSeconds().toString();
		}
		else {
			var hoursBeforeSplit = date.getHours().toString();
			var minutesBeforeSplit = date.getMinutes().toString();
			var secondsBeforeSplit = date.getSeconds().toString();
		}
		// numbers that will be displayed
		var hoursTens, hoursOnes, minutesTens, minuesOnes, secondsTens, secondsOnes;

		//splitting the current time to get numbers that will be displayed
		if(hoursBeforeSplit>9){
			hoursTens = hoursBeforeSplit.charAt(0);
			hoursOnes = hoursBeforeSplit.charAt(1);
		}
		else {
			hoursTens = 0;
			hoursOnes = hoursBeforeSplit;
		}

		if(minutesBeforeSplit>9){
			minutesTens = minutesBeforeSplit.charAt(0);
			minutesOnes = minutesBeforeSplit.charAt(1);
		}
		else{
			minutesTens = 0;
			minutesOnes = minutesBeforeSplit;
		}

		if(secondsBeforeSplit>9){
			secondsTens = secondsBeforeSplit.charAt(0);
			secondsOnes = secondsBeforeSplit.charAt(1);
		}
		else{
			secondsTens = 0;
			secondsOnes = secondsBeforeSplit;
		}


		// printing and transcoding from the array
		document.getElementById('hoursTens').innerHTML = letter[hoursTens];
		document.getElementById('hours').innerHTML = letter[hoursOnes];

		document.getElementById('minutesTens').innerHTML = letter[minutesTens];
		document.getElementById('minutes').innerHTML = letter[minutesOnes];
	
		document.getElementById('secondsTens').innerHTML = seconds[secondsTens];
		document.getElementById('seconds').innerHTML = seconds[secondsOnes];
	}
	//boolean that determines whether seconds are visible or not
	var secondsVisible = true;

	// UPDATING TIME EVERY SECOND
	setInterval(updateTime, 1000);

	var dots1 = document.getElementById('dots1');
	// The 'breathing effect of the colon between hours and minutes'
	var timeLine = new TimelineMax({repeat: -1});
	timeLine.to(dots1, 1, {opacity: 0, ease: Power0.easeInOut},'dots')
			.to(dots1, 1, {opacity: 1, ease: Power0.easeInOut}, 'dots +=1');

	//turning off/on seconds button
	var secondsButton = document.getElementById('secondsBut');
	secondsButton.addEventListener('click', toggleSeconds);

	// switching between analog/digital clock button
	var switchButton = document.getElementById('switchClock');
	switchButton.addEventListener('click', switchClock);

	// function that hides/shows seconds - done through GSAP
	function toggleSeconds(){
		var tl2 = new TimelineMax();
		secondsVisible = !secondsVisible;
		console.log(secondsVisible);
		if(!secondsVisible){
		tl2.to(document.getElementById('secondsTens'), 1, {opacity:0}, 'hiding')
		   .to(document.getElementById('seconds'), 1, {opacity:0}, 'hiding');
		secondsButton.innerHTML = "Show Seconds";
		}
		if(secondsVisible){
			tl2.to(document.getElementById('secondsTens'), 1, {opacity:1}, 'showing')
		   	   .to(document.getElementById('seconds'), 1, {opacity:1}, 'showing');
			secondsButton.innerHTML = "Hide Seconds";
		}
	}


	// animations for switching between clocks
	function switchClock(){
		if(!analog){
			var tl1 = new TimelineMax();
			tl1.to(document.getElementById('asciiClock'), 3, {y: window.screen.height + 1000, ease: Elastic.easeIn}, 'switching')
			   .to(document.getElementById('secondsClock'), 3, {y: window.screen.height + 1000, ease: Elastic.easeIn}, 'switching')
			   .to(document.getElementById('clockBackground'), 3, {opacity:1, ease: Elastic.easeIn.config(1.5, 0.15)}, 'switching2')
			    .to(document.getElementById('clockSeconds'), 3, {opacity:1, ease: Elastic.easeIn.config(1.5, 0.15)}, 'switching2')
			    .to(document.getElementById('clockMinutes'), 3, {opacity: 1, ease: Elastic.easeIn.config(1.5, 0.15)}, 'switching2')
			    .to(document.getElementById('clockHours'), 3, {opacity: 1, ease: Elastic.easeIn.config(1.5, 0.15)}, 'switching2');
			switchButton.innerHTML = "Switch to digital";
			analog = true;
		}
		else{
			var tl1 = new TimelineMax();
			tl1.to(document.getElementById('clockBackground'), 3, {opacity:0, ease: Elastic.easeOut.config(1.5, 0.15)}, 'switching2')
			    .to(document.getElementById('clockSeconds'), 3, {opacity:0, ease: Elastic.easeOut.config(1.5, 0.15)}, 'switching2')
			    .to(document.getElementById('clockMinutes'), 3, {opacity: 0, ease: Elastic.easeOut.config(1.5, 0.15)}, 'switching2')
			    .to(document.getElementById('clockHours'), 3, {opacity: 0, ease: Elastic.easeOut.config(1.5, 0.15)}, 'switching2')
				.to(document.getElementById('asciiClock'), 3, {y: 0, ease: Elastic.easeOut}, 'switching')
			   	.to(document.getElementById('secondsClock'), 3, {y: 0, ease: Elastic.easeOut}, 'switching');
			switchButton.innerHTML = "Switch to analog";
			analog = false;
		}
	}
