"use strict";

if (!navigator.geolocation) {} else {
  navigator.geolocation.getCurrentPosition(console.log, console.log);
}