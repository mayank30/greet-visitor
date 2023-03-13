"use strict";

module.exports = function (options = null) {
  const defaultOptions = {
    emoji: true,
    morning: "Good morning",
    noon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
    midnight: "Oh! working late night",
  };
  if (!options) {
    options = {
      ...defaultOptions,
    };
  } else {
    options = {
      ...defaultOptions,
      ...options,
    };
  }
  let myDate = new Date();
  let hrs = myDate.getHours();
  let greet;
  let icons;
  if (hrs >= 0 && hrs <= 3) (icons = "🌚"), (greet = options.midnight);
  else if (hrs >= 3 && hrs <= 12) (icons = "🌞"), (greet = options.morning);
  else if (hrs >= 12 && hrs <= 17) (icons = "🌞"), (greet = options.noon);
  else if (hrs >= 17 && hrs <= 20) (icons = "🌓"), (greet = options.evening);
  else if (hrs >= 20 && hrs <= 23) (icons = "🌒"), (greet = options.night);
  else if (hrs >= 23 && hrs <= 24) (icons = "🌚"), (greet = options.midnight);
  return options.emoji ? `${icons} ${greet}` : greet;
};
