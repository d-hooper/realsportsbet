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

// !SECTION

// SECTION LOGIC

//NOTE - Select team
function getTeam(number) {
  return players.filter(player => player.teamNumber == number)
}

function calculateTeamSkill(number) {
  let team = getTeam(number)
  let skill = 0
  team.forEach(player => skill += player.skill)
  return skill
}

// NOTE - Random team generation

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1
}

function createRandomTeams() {
  players.forEach(player => player.teamNumber = randomNumber())
  createTeams()
}

// NOTE -  Bet and Bank updates

function placeBet(teamNumber, amount) {
  if (teamNumber == 1) {
    if (bank >= amount) {
      bank -= amount
      returnAmount(1, amount)
      return
    }
    else {
      window.alert('You do not have enough money for this bet!')
    }
  }

  if (bank >= amount) {
    bank -= amount
    returnAmount(2, amount)
  }
  else {
    window.alert('You do not have enough money for this bet!')
  }
}

function returnAmount(teamNumber, amount) {
  if (teamNumber == 1) {
    if (calculateTeamSkill(1) > calculateTeamSkill(2)) {
      bank += (amount * 2)
      drawBankValue()
      console.log('gained amount:', amount, 'new bank value:', bank)
      return
    }
  }
  if (calculateTeamSkill(2) > calculateTeamSkill(1)) {
    bank += (amount * 2)
    drawBankValue()
    console.log('gained amount:', amount, 'new bank value:', bank)
    return
  }
  console.log('lost amount:', amount, 'bank value:', bank)
  drawBankValue()
  checkBank()
}

//NOTE - Bank check and reset

function checkBank() {
  if (bank <= 0) {
    window.alert('You are all out of money!!!')
    window.confirm('Would you like to play again?')
    resetBank()
    createRandomTeams()
  }
}

function resetBank() {
  bank = 100
}

// !SECTION

// SECTION DRAW / UPDATE

//NOTE - Create teams
// old function version -- unused
const drawTeam1 = () => {
  let emojis = ''
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 1) {
      team1.push(player);
      emojis += player.emoji
    }
  }
  let team1Elem = document.getElementById('1')
  team1Elem.innerText = emojis

}

const createTeam = (teamNumber) => {
  let emojis = ''
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == teamNumber) {
      emojis += player.emoji
    }
  }
  let teamElem = document.getElementById(teamNumber)
  teamElem.innerText = emojis
}

const createTeams = () => {
  createTeam(1)
  createTeam(2)
}

//NOTE - Draw new bank value
function drawBankValue() {
  let bankValue = bank
  let bankValueElem = document.getElementById('bankValue')
  bankValueElem.innerText = bank.toFixed(2)
  createRandomTeams()
}

// !SECTION

// SECTION PAGE LOAD

createTeams()

// !SECTION 