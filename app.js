const groups = [
  {
    groupName: "Group A",
    teams: [
      {
        name: "Manchester United",
        logo: "./images/manchester-united-logo.svg"
      },
      {
        name: "Bayern Munich",
        logo: "./images/bayern_munich.svg"
      },
      {
        name: "Real Madrid",
        logo: "./images/real.svg"
      },
      {
        name: "Barcelona",
        logo: "./images/barcelona.svg"
      },
      {
        name: "Liverpool",
        logo: "./images/liverpool.svg"
      },
      {
        name: "Paris Saint-Germain",
        logo: "./images/paris.svg"
      },
      {
        name: "Juventus",
        logo: "./images/juventus.svg"
      },
      {
        name: "Manchester City",
        logo: "./images/manchester_city.svg"
      }
    ]
  },
  {
    groupName: "Group B",
    teams: [
      {
        name: "Chelsea",
        logo: "./images/chelsea-logo-vector.png"
      },
      {
        name: "Atletico Madrid",
        logo: "./images/atletico.svg"
      },
      {
        name: "Borussia Dortmund",
        logo: "./images/dortmund.svg"
      },
      {
        name: "Inter",
        logo: "./images/inter.svg"
      },
      {
        name: "Lille",
        logo: "./images/lille.svg"
      },
      {
        name: "AC Milan",
        logo: "./images/milan.svg"
      },
      {
        name: "Olympique Marseille",
        logo: "./images/marseille.svg"
      },
      {
        name: "FC Copenhangen",
        logo: "./images/copenhagen.svg"
      }
    ]
  },
  {
    groupName: "Group C",
    teams: [
      {
        name: "Sevilla",
        logo: "./images/sevilla.svg"
      },
      {
        name: "Lyon",
        logo: "./images/lyon.svg"
      },
      {
        name: "Zenit Saint Petersburg",
        logo: "./images/zenit.svg"
      },
      {
        name: "Celtic",
        logo: "./images/celtic.svg"
      },
      {
        name: "Arsenal",
        logo: "./images/arsenal.svg"
      },
      {
        name: "Borussia Monchengladbach",
        logo: "./images/monchengladbach.svg"
      },
      {
        name: "Frankfurt",
        logo: "./images/frankfurt.svg"
      },
      {
        name: "Olympiacos",
        logo: "./images/olympiacos.svg"
      }
    ]
  },
  {
    groupName: "Group D",
    teams: [
      {
        name: "Sporting CP",
        logo: "./images/sporting.svg"
      },
      {
        name: "Bayer 04 Leverkusen",
        logo: "./images/leverkusen.svg"
      },
      {
        name: "Galatasaray",
        logo: "./images/gala.svg"
      },
      {
        name: "Club Brugge",
        logo: "./images/brugge.svg"
      },
      {
        name: "FC Salzburg",
        logo: "./images/salzburg.svg"
      },
      {
        name: "Benfica",
        logo: "./images/benfica.svg"
      },
      {
        name: "Rangers",
        logo: "./images/rangers.svg"
      },
      {
        name: "Dynamo Kyiv",
        logo: "./images/dynamo.svg"
      }
    ]
  },
];

const iconClickImg = document.querySelector(".main__top--ball");
const mainTeamsDiv = document.querySelector(".main__teams");


iconClickImg.addEventListener("click", () =>{
    if(mainTeamsDiv.firstChild){
      mainTeamsDiv.innerHTML="";
    }
    arrayWent(groups);
    
   
})


const arrayWent = (groups) =>{
  
  tempGroups = JSON.parse(JSON.stringify(groups));
  for (let i = 8; i >= 1; i--) {
    const mainDiv=document.createElement("div");
    mainDiv.className="col-10 col-sm-6 col-lg-3 mainDivClass";
    const mainDivP=document.createElement("p");
    mainDivP.textContent=`GROUP ${String.fromCharCode(73-i)}`;
    mainDivP.className="mainDivP";
    mainDivP.style.color="#63ABCC";
    mainDiv.appendChild(mainDivP);
    tempGroups.map((group,j)=>{
        
        const teamDiv=document.createElement("div");
        const teamP=document.createElement("h6");
        const teamImg=document.createElement("img");
        
        teamDiv.className="d-flex teamDiv align-items-center gap-2"
        teamP.className="teamP mb-0"
        teamDiv.appendChild(teamImg);

        teamDiv.appendChild(teamP);
        let rnd = Math.floor(Math.random()*i);
        teamP.textContent=group.teams[rnd].name.toUpperCase();
        teamImg.src=group.teams[rnd].logo;
        teamImg.style.width="20px";
        if(j!=3){
          teamDiv.style.borderBottom="1px solid rgba(255, 255, 255, .1)";
        }
        group.teams.splice(rnd,1);
        mainDiv.appendChild(teamDiv);
    })

    mainTeamsDiv.appendChild(mainDiv);
}
}