var factList = [
  "Only about 20 percent of what goes in your recycle bin is actually recycled. 80 percent ends up in landfills",
  "In 1984, an accident at a pesticide plant in Bhopal, India, released a deadly gas, polluting the air.At least 8,000 people died within days. Hundreds of thousands more were permanently injured.",
  "The air inside your house can be polluted. Air and carpet cleaners, insect sprays, and cigarettes are all sources of indoor air pollution.",
  "About 11 million cars were designed to cheat air pollution tests.",
  "Approximately 100 billion cardboard boxes are produced each year in the U.S.",
  "The study by the World Bank and the Institute for Health Metrics and Evaluation (IHME) calculated the economic cost of air pollution. It found that air pollution led to one in 10 deaths in 2013, which cost the global economy about $225 billion in lost labour income.",
  "On average, it costs $30 per ton to recycle trash, $50 to send it to the landfill and $65 to $75 to incinerate it",
  "In 2010, paper recycling had increased over 89% since 1990.",
  "Aluminum can be recycled forever without any loss of quality.",
  "Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count === factList.length) {
    count = 0;
  }
}

var send = document.getElementById("send");
var sent_message = document.getElementById("sent_message");

if (send) {
  send.addEventListener("click", displayMessage);
}

function displayMessage() {
  sent_message.innerHTML = "thank you. we will get back to you";
}
