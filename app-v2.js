// Inherent variables
const submitDate = new Date("Apr 14, 2022 00:00:00").getTime();
const finishDate = new Date("Aug 1, 2023 00:00:00").getTime();
const now = new Date().getTime();
// const now = new Date("oct 06, 2022 00:00:00").getTime();

// Days that have past variables
const gapSince = now - submitDate;
let daysSince = Math.floor(gapSince / (1000 * 60 * 60 * 24));

// Days to go variables
const gapTill = now - finishDate;
let daysTill = Math.floor(gapTill / (1000 * 60 * 60 * 24)) * -1;

// Completion rate variable
const completionRate = (daysSince / (daysSince + daysTill)) * 100;

// UI manipulation
document.getElementById("number-days").innerHTML = daysSince;

// document.getElementById("subheader").innerHTML = daysTill;
// document.getElementById("temp").innerHTML = Math.round(completionRate);

document.querySelector(".progress").style.width = completionRate * 0.941 + "%";
document.getElementById("completion-rate").innerHTML =
  Math.round(completionRate) + "%";

// Creating a date object
let today = new Date();
let month = today.toLocaleString("default", { month: "short" });
let day = today.getDate();
document.getElementById("todays-date").innerHTML = month + " " + day;
