const groups = [
    {
      groupName: "Group A",
      teams: [
        {
          name: "Manchester United",
          logo: "path/to/manchester-united-logo.png"
        },
        {
          name: "Bayern Munich",
          logo: "path/to/bayern-munich-logo.png"
        },
        {
          name: "Real Madrid",
          logo: "path/to/real-madrid-logo.png"
        },
        {
          name: "Barcelona",
          logo: "path/to/barcelona-logo.png"
        },
        {
          name: "Liverpool",
          logo: "path/to/liverpool-logo.png"
        },
        {
          name: "Paris Saint-Germain",
          logo: "path/to/psg-logo.png"
        },
        {
          name: "Juventus",
          logo: "path/to/juventus-logo.png"
        },
        {
          name: "Manchester City",
          logo: "path/to/manchester-city-logo.png"
        }
      ]
    },
    {
      groupName: "Group B",
      teams: [
        {
          name: "Chelsea",
          logo: "path/to/chelsea-logo.png"
        },
        {
          name: "Atletico Madrid",
          logo: "path/to/atletico-madrid-logo.png"
        },
        {
          name: "Borussia Dortmund",
          logo: "path/to/borussia-dortmund-logo.png"
        },
        {
          name: "Inter Milan",
          logo: "path/to/inter-milan-logo.png"
        },
        {
          name: "Ajax",
          logo: "path/to/ajax-logo.png"
        },
        {
          name: "AC Milan",
          logo: "path/to/ac-milan-logo.png"
        },
        {
          name: "Olympique Marseille",
          logo: "path/to/olympique-marseille-logo.png"
        },
        {
          name: "RB Leipzig",
          logo: "path/to/rb-leipzig-logo.png"
        }
      ]
    },
    {
      groupName: "Group C",
      teams: [
        {
          name: "Sevilla",
          logo: "path/to/sevilla-logo.png"
        },
        {
          name: "Porto",
          logo: "path/to/porto-logo.png"
        },
        {
          name: "Zenit Saint Petersburg",
          logo: "path/to/zenit-logo.png"
        },
        {
          name: "Lazio",
          logo: "path/to/lazio-logo.png"
        },
        {
          name: "Atalanta",
          logo: "path/to/atalanta-logo.png"
        },
        {
          name: "Borussia Monchengladbach",
          logo: "path/to/borussia-monchengladbach-logo.png"
        },
        {
          name: "Shakhtar Donetsk",
          logo: "path/to/shakhtar-donetsk-logo.png"
        },
        {
          name: "Olympiacos",
          logo: "path/to/olympiacos-logo.png"
        }
      ]
    },
    {
      groupName: "Group D",
      teams: [
        {
          name: "Ajax",
          logo: "path/to/ajax-logo.png"
        },
        {
          name: "Atalanta",
          logo: "path/to/atalanta-logo.png"
        },
        {
          name: "Lazio",
          logo: "path/to/lazio-logo.png"
        },
        {
          name: "Borussia Monchengladbach",
          logo: "path/to/borussia-monchengladbach-logo.png"
        },
        {
          name: "Shakhtar Donetsk",
          logo: "path/to/shakhtar-donetsk-logo.png"
        },
        {
          name: "Olympiacos",
          logo: "path/to/olympiacos-logo.png"
        },
        {
          name: "Club Brugge",
          logo: "path/to/club-brugge-logo.png"
        },
        {
          name: "Midtjylland",
          logo: "path/to/midtjylland-logo.png"
        }
      ]
    },
    // Diğer grupları buraya ekleyebilirsiniz
  ];

const iconClickImg = document.querySelector(".main__top--ball");
const mainTeamsDiv = document.querySelector(".main__teams");


iconClickImg.addEventListener("click", () =>{
    for (let i = 7; i >= 0; i--) {
        const mainDiv=document.createElement("div");
        mainDiv.className="col-3 gap-5";
        mainDiv.textContent=`GROUP ${String.fromCharCode(72-i)}`;
        groups.map((group)=>{
            const teamDiv=document.createElement("div");
            const teamP=document.createElement("p");
            const teamImg=document.createElement("img");
            
            teamDiv.className="d-flex align-items-baseline h-25"
            teamDiv.appendChild(teamImg);
            teamDiv.appendChild(teamP);

            let rnd = Math.floor(Math.random()*i);
            teamP.textContent=group.teams[rnd].name;
            group.teams.splice(rnd,1);
            mainDiv.appendChild(teamDiv);
            console.log(rnd)
        })

       
        mainTeamsDiv.appendChild(mainDiv);
    }
})