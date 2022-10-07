//Hamburger botton toggle for the small screen view
function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById('hambutton');
x.onclick = toggleMenu;


//Current date for the Header
const datefieldUK = document.querySelector(".currentdate");

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