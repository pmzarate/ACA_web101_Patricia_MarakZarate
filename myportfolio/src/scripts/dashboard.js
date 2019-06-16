'use strict';

// geolocator//

var x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
	x.innerHTML =
		"Latitude: " +
		position.coords.latitude +
		"<br>Longitude: " +
		position.coords.longitude;
}

//to do list//

$(function() {

let $list = $('ul');
    let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  
  });

  //clock
//
/* -- Convert degrees to radians (actually unused here :-) -- */
function deg2rad(d) { return (2 * d / 360) * Math.PI; }
/* -- Progress the clock's hands every once in a while -- */
setInterval(() => {
  let minute = document.getElementById("minute");
  let hour = document.getElementById("hour");
  let second = document.getElementById("second");
  /* -- note retracing by 90 degrees, this is just the way I calculated the hands, the "0" angle is at 3PM, not 12PM, -- */
  let S = new Date().getSeconds() * 6 - 90;
  let M = new Date().getMinutes() * 6 - 90;
  let H = new Date().getHours() * 30 - 90;
  
  second.style.transform = 'rotate(' + S + 'deg)';
  minute.style.transform = 'rotate(' + M + 'deg)';
  hour.style.transform = 'rotate(' + H + 'deg)';
  
}, 10); /* -- update the clock fast enough -- */
/* -- Helps calculate the angle of each hand on the clock -- */
function vec2ang(x, y) {
 angleInRadians = Math.atan2(y, x);
 angleInDegrees = (angleInRadians / Math.PI) * 180.0;
 return angleInDegrees;
}
/* -- Let's calculate position and angle of clock's notches-- */
let nc = document.getElementById("notch-container");
let angle = 0;
let rotate_x = 120;
let rotate_y = 0;
/* -- Calculate the 60 notches for seconds and minutes -- */
for (let i = 0; i < 60; i++) {
  let thin = document.createElement("div");
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  thin.className = "thin";
  thin.style.left = 122 + x + "px";
  thin.style.top = 127 + y + "px";
  thin.style.transform = "rotate(" + r + "deg)";
  nc.appendChild(thin);
  angle +=  (Math.PI / 300) * 10;
}
// reset angle parameters
angle = 0; rotate_x = 120; rotate_y = 0;
/* -- Calculate the thicker notches for hour hand -- */
for (let i = 0; i < 12; i++) {
  let notch = document.createElement("div");
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  notch.className = "notch";
  notch.style.left = 122 + x + "px";
  notch.style.top = 127 + y + "px";
  notch.style.transform = "rotate(" + r + "deg)";
  nc.appendChild(notch);
  angle +=  (Math.PI / 60) * 10;
}
