var today = new Date;
var Future0 = new Date;
var ThisYear = 2010;

var FutureMonth = 8; // start at 0
var FutureDate = 21;
var faraevent = "<a href=\"http://www.civfanatics.com/marketplace/\">Civilization Vn";

Future0.setMonth(FutureMonth, FutureDate);
Future0.setFullYear(ThisYear);

var today1 = Date.parse(today);
var future1 = Date.parse(Future0);
var secleft = future1 - today1;
var miliday = 24 * 60 * 60 * 1000;
var daysleft = secleft/miliday;
var daysleftint = Math.round(daysleft);

if (daysleftint > 1) {
	document.write("<a href=\"http://www.civfanatics.com/marketplace\">Pre-order Civ5: <strong>", daysleftint, "</strong> days left to release<\/a>");
} else if (daysleftint == 1) {
	document.write(faraevent, " is coming out tomorrow!!<\/a>");
} else if (today1 == future1) {
	document.write(faraevent, " is coming out TODAY!!!<\/a>");
} else {
	document.write("<a href=\"http://astore.amazon.com/civilizationfana\"><strong>CivFanatics Marketplace<\/strong><\/a>");
}
//document.write("<br /><a href=\"http://www.amazon.com/gp/product/B0038TT8QM?ie=UTF8&tag=civilizationfana&linkCode=as2&camp=1789&creative=390957&creativeASIN=B0038TT8QM\">Amazon.com</a> | <a href=\"http://www.amazon.co.uk/gp/product/B003ELORWE?ie=UTF8&tag=civilizationf-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=B003ELORWE\">Amazon UK</a> | <a href=\"http://www.amazon.de/gp/product/B003KYGS6S?ie=UTF8&tag=civilizatio07-21&linkCode=as2&camp=1638&creative=19454&creativeASIN=B003KYGS6S\">Amazon DE</a>");