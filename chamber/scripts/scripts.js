//Hamburger botton toggle for the small screen view
function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById('hambutton');
x.onclick = toggleMenu;


//Current date for the Header
const datefieldUK = document.querySelector("#currentdate");

const now = new Date();

const fulldateUK = new
Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//Footer

const d = new Date();
const year = d.getFullYear();

document.getElementById("copyrightsymbol").innerHTML = `&copy2022`;

document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

//Time since last visit

const today = new Date();
const dslvisit = document.querySelector(".days");

localStorage.setItem("lastvisit", now);
const msperday = 24 * 60 * 60 * 1000;
let lvisit = window.localStorage.getItem("lastvisit");
lvisit = Date.parse(lvisit);

let dayssince = (today.getTime() - lvisit) / msperday;

dayssince = Math.ceil(dayssince);

if (dayssince <= 1) {
    dslvisit.innerHTML = `Time since last visit: ${dayssince} day.`
} else { 
    dslvisit.innerHTML = `Time since last visit: ${dayssince} days.`};

// Regular Exprestion

const string = document.querySelector(".btitle");
const regex = new RegExp('[a-zA-Z_\ -]{7,}');
const isexisting = regex.test(string);