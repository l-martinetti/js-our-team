const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// Funzione che genera ciascuna card

function memberCard (member) {
  const {name, role, email, img} = member;
  const card = `<div class="card d-flex justify-between">
                <div class="left-img">
                    <img src="assets/${img}" alt="${name}">
                </div>
                <div class="right-info">
                    <h4>${name}</h4>
                    <p class="text-white">${role}</p>
                    <p class="text-blue">${email}</p>
                </div>
            </div>`;

  return card
}

//Funzione che aggiunge le card all'HTML

function addCards(arr) {
  const cardContainer = document.querySelector(".team-members");
  let cards = "";
  for (let member of arr) {
    cards += memberCard(member);
  }
  return cardContainer.innerHTML = cards
}

addCards(teamMembers);