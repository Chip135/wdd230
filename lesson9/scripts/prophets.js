const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });



function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birth = document.createElement('p');
    let death = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Protrate of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    birth.textContent = `Born in ${prophet.birthplace} on ${prophet.birthdate}`;
    death.textContent = `Died on ${prophet.death}`;

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birth);
    if (prophet.death == null){
        
    }else{
        card.appendChild(death);
    }
    document.querySelector('div.cards').appendChild(card);
}