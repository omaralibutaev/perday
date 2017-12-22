var perday = document.getElementsByClassName("perday");

function formatDollar(num) {
  var p = num.toFixed(2).split(".");
  return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
    return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  }, "") + "." + p[1];
}

for(var i = 0; i < perday.length; i++) {
	var total  = perday[i].getElementsByClassName('perday-price-total')[0].innerText,
			days   = perday[i].getElementsByClassName('perday-days')[0].innerText;

	perday[i].getElementsByClassName('perday-price')[0].innerText += formatDollar(total/days) + " per day";

}