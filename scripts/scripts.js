const d = new Date();
const year = d.getFullYear();

document.getElementById("copyrightsymbol").innerHTML = `&copy`;

document.getElementById("lastupdated").textContent = document.lastModified;

document.getElementById("currentyear").innerHTML = year;