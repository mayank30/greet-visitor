"use strict";

module.exports = function (options = null) {
  const defaultOptions = {
    emoji: true,
    morning: "Good Morning",
    noon: "Good Afternoon",
    evening: "Good Evening",
    night: "Good Night",
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
  if (hrs < 12) (icons = "🌞"), (greet = options.morning);
  else if (hrs >= 12 && hrs <= 17) (icons = "🌞"), (greet = options.noon);
  else if (hrs >= 17 && hrs <= 20) (icons = "🌓"), (greet = options.evening);
  else if (hrs >= 20 && hrs <= 24) (icons = "🌒"), (greet = options.night);
  return options.emoji ? `${icons} ${greet}` : greet;
};
