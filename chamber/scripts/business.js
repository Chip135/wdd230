const requestURL = 'https://raw.githubusercontent.com/Chip135/wdd230/main/chamber/json/data.json';
const cards = document.querySelector('.grid');

//async function getBusinesses(){
   // const response = await fetch(requestURL);
   // const businesses = await response.json();
  //  businesses.forEach(business => {displayCards})
//}

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayCards);
    });

function displayCards(business){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p')
    let phone = document.createElement('p');
    let url = document.createElement('p');

    portrait.setAttribute('src', business.img);
    portrait.setAttribute('alt', `${business.name} photo.`);
    portrait.setAttribute('loading', 'lazy');

    h2.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.num}`;
    url.textContent = `${business.url}`;

    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(url);
    card.appendChild(phone);

    document.querySelector('div.grid').appendChild(card);
}

const gridBtn = document.querySelector('#grid')
const listBtn = document.querySelector('#list')
const display = document.querySelector('.grid')

gridBtn.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
})