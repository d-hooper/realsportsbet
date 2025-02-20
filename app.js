// SECTION STATE

let bank = 100

const players = [
  { teamNumber: randomNumber(), emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: randomNumber(), emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: randomNumber(), emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: randomNumber(), emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-LamarandomNumber()" },
  { teamNumber: randomNumber(), emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: randomNumber(), emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: randomNumber(), emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: randomNumber(), emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: randomNumber(), emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: randomNumber(), emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: randomNumber(), emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: randomNumber(), emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: randomNumber(), emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: randomNumber(), emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: randomNumber(), emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: randomNumber(), emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: randomNumber(), emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. BackslashinfourandomNumber()th V" },
  { teamNumber: randomNumber(), emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: randomNumber(), emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: randomNumber(), emoji: '🐅', skill: 100, name: "Tiger" },
]

const teams =[
    {
      team: players.filter(player => player.teamNumber == 1),
      skillLevel: 0
    },
    {
      team: players.filter(player => player.teamNumber == 2),
      skillLevel: 0
    }
  ]

let selectedTeam

// !SECTION

// SECTION LOGIC

// NOTE - Random teams

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1
}

function createRandomTeams() {
  players.forEach(player => player.teamNumber = randomNumber())
  createTeams()
}

// NOTE - Bank value updates
function betAmount(amount) {
  if (amount <= bank) {
    bank -= amount
    returnAmount(amount)
  }
  else {
    window.alert('You do not have enough money for this bet!')
  }
}

function selectTeamForBet(teamNumber, amount) {
  if (teamNumber == 1) {
    selectedTeam = teams[0]
    calculateSkillTotal()
    betAmount(amount)
    drawBankValue()
    checkBank()
    createRandomTeams()
    resetSkillLevel()
    
  }
  else {
    selectedTeam = teams[1]
    calculateSkillTotal()
    betAmount(amount)
    drawBankValue()
    checkBank()
    createRandomTeams()
    resetSkillLevel()
  }
}

function returnAmount(amount) {
  if (teams[0].skillLevel > teams[1].skillLevel) {
    bank += (amount * 2)
    return console.log('gained amount', amount, 'new bank value', bank)
  }
  return console.log('lost amount', amount, 'bank value', bank)
}


//NOTE -Skill value calculations

function calculateSkillTotal() {
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    console.log(team)
    for (let index = 0; index < teams[i].team.length; index++) {
      const player = teams[i].team[index];
      team.skillLevel += player.skill
    }
    console.log('Team', i + 1, 'Total skill level:', team.skillLevel); 
  } 
}

function resetSkillLevel() {
  teams.forEach(team => team.skillLevel = 0)
}

//NOTE - Bank at 0 / Reset

function checkBank() {
  if (bank <= 0){
    drawBankValue()
    window.alert('You have run out of money!!!')
    window.confirm('Would you like to play again?')
    resetGame()
    return
  }
  return
}

function resetGame() {
  bank = 100
  selectedTeam = undefined
  createRandomTeams()
  drawBankValue()
}

// !SECTION

// SECTION DRAW / UPDATE

//NOTE - Create teams
const drawTeam1 = () => {
  let emojis = ''
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 1) {
      team1.push(player);
      emojis += player.emoji
    }
  }
  team1Elem = document.getElementById('1')
  team1Elem.innerText = emojis

}

const createTeam = (teamNumber) => {
  let emojis = ''
  let currentTeam = []
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == teamNumber) {
      currentTeam.push(player)
      emojis += player.emoji
    }
  }
  teamElem = document.getElementById(teamNumber)
  teamElem.innerText = emojis
}

const createTeams = () => {
  createTeam(1)
  createTeam(2)
}

//NOTE - Draw updated bank value 
function drawBankValue() {
  let bankValue = bank
  console.log('Bank:', bankValue)
  bankValueElem = document.getElementById('bankValue')
  bankValueElem.innerText = bankValue.toFixed(2)
}

// !SECTION

// SECTION PAGE LOAD

createTeams()

// !SECTION 