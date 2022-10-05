const daysSinceWrapper = () => {
  const submitDate = new Date("Apr 14, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = now - submitDate;
  var daysSince = Math.floor(gap / (1000 * 60 * 60 * 24));
  document.getElementById("number-days").innerHTML = daysSince;
  return daysSince;
};
const daysTillWrapper = () => {
  const finishDate = new Date("Mar 14, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = now - finishDate;
  var daysTill = Math.floor(gap / (1000 * 60 * 60 * 24));
  document.getElementById("subheader").innerHTML = daysTill *= -1;
  return daysTill;
};
daysSinceWrapper();
daysTillWrapper();

const completionRate = () => {
  document.getElementById("temp").innerHTML = Math.round(
    (daysSinceWrapper() / (daysSinceWrapper() + daysTillWrapper())) * 100
  );
};
completionRate();

timingLogic();

document.querySelector(".progress").style.width = "50% !important";
