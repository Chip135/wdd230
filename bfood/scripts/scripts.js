//Hamburger botton toggle for the small screen view

function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById('hambutton');
x.onclick = toggleMenu;

//Footer

const d = new Date();
const year = d.getFullYear();

document.getElementById("copyrightsymbol").innerHTML = `&copy2022`;

document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;