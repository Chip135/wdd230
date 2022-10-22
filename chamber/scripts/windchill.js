const t = document.querySelector(".temp");
const s = document.querySelector(".windspeed");
const temp = parseInt(t.textContent);
const speed = parseInt(s.textContent);
console.log(temp);
console.log(speed);

function windchill(speed, temp){
    if (temp <= 50 && speed > 3){
    const feeltemp = document.querySelector(".windchill");
        
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    wc = Math.floor(wc);

    wc = (wc > temp) ? temp : wc;

    console.log(wc);
        
    feeltemp.innerHTML = wc;

    
}else{
    const feeltemp = document.querySelector(".windchill");
    feeltemp.innerHTML = 'N/A';
}}

windchill(speed, temp);