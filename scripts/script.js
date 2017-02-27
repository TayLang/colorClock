/*************************************************/
//WELCOME TO TAYLOR'S TOTALLY NOT SHITTY COLOR CLOCK
/*************************************************/


/*********/
//FUNCTIONS
/*********/

var getCurrentTime = function() {
	var currentTime = new Date();
	if (currentTime.getHours() < 10) {
		var hours = '0' + currentTime.getHours()
	}
	else {
		hours = currentTime.getHours()
	}
	if (currentTime.getMinutes() < 10) {
		var minutes = '0' + currentTime.getMinutes()
	}
	else {
		minutes = currentTime.getMinutes()
	}	
	if (currentTime.getSeconds() < 10) {
		var seconds = '0' + currentTime.getSeconds()
	}
	else {
		seconds = currentTime.getSeconds()
	}
	var time = hours + ":" + minutes + ":" + seconds;
	return time;
}

var containerNode = document.querySelector(".container")


var renderTime = function() {
	var time = getCurrentTime()
	var timeHTMLStr = ''
	timeHTMLStr += '<div class = "timeNode">'
	timeHTMLStr += time
	timeHTMLStr += '</div>'
	containerNode.innerHTML = timeHTMLStr
}




setInterval(renderTime, 1000)