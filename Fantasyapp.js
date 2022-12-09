var data = $.csv.sportsref_basketball(csv);
var teams = $.csv.nba2022UTC(csv);
// put each player into an object to be called later
function playerstats(data) {
    for (let i = 1; i = data.length; i++) {
        let firstname = data[i][2];
        let lastname = data[i][3];
        let team = data[i][5];
        let position = data[i][4];
        let rank = data[i][1];
        const stats = new Player(firstname, lastname, team, position, rank);
        console.log(stats.firstname);
        console.log(stats.lastname);
        console.log(stats.team);
        console.log(stats.position);
        console.log(stats.rank);
    }
}
class Player {
    constructor(firstname, lastname, team, position, rank) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._team = team;
        this._position = position;
        this._rank = rank;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(newfirstname) {
        this._firstname = newfirstname;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(newlastname) {
        this._lastname = newlastname;
    }
    get team() {
        return this._team;
    }
    set team(newteam) {
        this._team = newteam;
    }
    get position() {
        return this._position;
    }
    set position(newposition) {
        this._position = newposition;
    }
    get rank() {
        return this._rank;
    }
    set rank(newrank) {
        this._rank = newrank;
    }
}
class Team {
    constructor(scheduleteam, schedule) {
        this._scheduleteam = scheduleteam
        this._schedule = schedule
    }
    get scheduleteam() {
        return this._scheduleteam;
    }
    set scheduleteam(newscheduleteam) {
        this._scheduleteam = newscheduleteam;
    }
    get schedule() {
        return this._schedule;
    }
    set schedule(newschedule) {
        this._schedule = newschedule;
    }
}


// assign each date a team so that it can be searched later
for (let i = 1; i = teams.length; i++) {
    if (teams[i][5] == "Boston Celtics" || teams[i][6] == "Boston Celtics") {
        let schedule = teams[i][3];
        let scheduleteam = "BOS";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Philadelphia 76ers" || teams[i][6] == "Philadelphia 76ers") {
        let schedule = teams[i][3];
        let scheduleteam = "PHI";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Golden State Warriors" || teams[i][6] == "Golden State Warriors") {
        let schedule = teams[i][3];
        let scheduleteam = "GSW";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Atlanta Hawks" || teams[i][6] == "Atlanta Hawks") {
        let schedule = teams[i][3];
        let scheduleteam = "ATL";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Brooklyn Nets" || teams[i][6] == "Brooklyn Nets") {
        let schedule = teams[i][3];
        let scheduleteam = "BKN";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Charlotte Hornets" || teams[i][6] == "Charlotte Hornets") {
        let schedule = teams[i][3];
        let scheduleteam = "CHA";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Chicago Bulls" || teams[i][6] == "Chicago Bulls") {
        let schedule = teams[i][3];
        let scheduleteam = "CHI";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Cleveland Cavaliers" || teams[i][6] == "Cleveland Cavaliers") {
        let schedule = teams[i][3];
        let scheduleteam = "CLE";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Dallas Mavericks" || teams[i][6] == "Dallas Mavericks") {
        let schedule = teams[i][3];
        let scheduleteam = "DAL";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Denver Nuggets" || teams[i][6] == "Denver Nuggets") {
        let schedule = teams[i][3];
        let scheduleteam = "DEN";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Detroit Pistons" || teams[i][6] == "Detroit Pistons") {
        let schedule = teams[i][3];
        let scheduleteam = "DET";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Houston Rockets" || teams[i][6] == "Houston Rockets") {
        let schedule = teams[i][3];
        let scheduleteam = "HOU";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Indiana Pacers" || teams[i][6] == "Indiana Pacers") {
        let schedule = teams[i][3];
        let scheduleteam = "IND";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Los Angeles Clippers" || teams[i][6] == "Los Angeles Clippers") {
        let schedule = teams[i][3];
        let scheduleteam = "LAC";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Los Angeles Lakers" || teams[i][6] == "Los Angeles Lakers") {
        let schedule = teams[i][3];
        let scheduleteam = "LAL";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Memphis Grizzlies" || teams[i][6] == "Memphis Grizzlies") {
        let schedule = teams[i][3];
        let scheduleteam = "MEM";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Miami Heat" || teams[i][6] == "Miami Heat") {
        let schedule = teams[i][3];
        let scheduleteam = "MIA";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Milwaukee Bucks" || teams[i][6] == "Milwaukee Bucks") {
        let schedule = teams[i][3];
        let scheduleteam = "MIL";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Minnesota Timberwolves" || teams[i][6] == "Minnesota Timberwolves") {
        let schedule = teams[i][3];
        let scheduleteam = "MIN";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "New Orleans Pelicans" || teams[i][6] == "New Orleans Pelicans") {
        let schedule = teams[i][3];
        let scheduleteam = "NOP";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "New York Knicks" || teams[i][6] == "New York Knicks") {
        let schedule = teams[i][3];
        let scheduleteam = "NYK";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Oklahoma City Thunder" || teams[i][6] == "Oklahoma City Thunder") {
        let schedule = teams[i][3];
        let scheduleteam = "OKC";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Orlando Magic" || teams[i][6] == "Orlando Magic") {
        let schedule = teams[i][3];
        let scheduleteam = "ORL";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Phoenix Suns" || teams[i][6] == "Phoenix Suns") {
        let schedule = teams[i][3];
        let scheduleteam = "PHX";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Portland Trail Blazers" || teams[i][6] == "Portland Trail Blazers") {
        let schedule = teams[i][3];
        let scheduleteam = "POR";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Sacramento Kings" || teams[i][6] == "Sacramento Kings") {
        let schedule = teams[i][3];
        let scheduleteam = "SAC";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "San Antonio Spurs" || teams[i][6] == "San Antonio Spurs") {
        let schedule = teams[i][3];
        let scheduleteam = "SAS";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Toronto Raptors" || teams[i][6] == "Toronto Raptors") {
        let schedule = teams[i][3];
        let scheduleteam = "TOR";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Utah Jazz" || teams[i][6] == "Utah Jazz") {
        let schedule = teams[i][3];
        let scheduleteam = "UTA";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    if (teams[i][5] == "Washington Wizards" || teams[i][6] == "Washington Wizards") {
        let schedule = teams[i][3];
        let scheduleteam = "WAS";
        const dates = new Team(schedule, scheduleteam);
        console.log(dates.schedule);
        console.log(dates.scheduleteam);}
    }
function getteam(date){
    let currentdate= document.getElementById("date");
    let objdate = Team.find(objdate =>objdate.schedule = currentdate);
    let objplayer = Player.find(objplayer => objplayer.team = objdate.scheduleteam);
    for (let i = 1; i=teams.length; i++){
    let playerofinterest = Player.find(playerofinterest => playerofinterest.rank = i);
    while (pointguardout == null || shootingguardout == null || smforwardout == null || forwardout == null || centerout == null){   
    if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "PG"){
        let pointguardout = playerofinterest.firstname + " " + playerofinterest.lastname}
    if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "SG"){
        let shootingguardout = playerofinterest.firstname + " " + playerofinterest.lastname}
    if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "SF"){
        let smforwardout = playerofinterest.firstname + " " + playerofinterest.lastname}
    if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "PF"){
        let forwardout = playerofinterest.firstname + " " + playerofinterest.lastname}
    if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "C"){
        let centerout = playerofinterest.firstname + " " + playerofinterest.lastname}
    }
    }
    let output = "Point Guard: " + pointguardout + "<br></br>" + "Shooting Guard: " + shootingguardout + "<br></br>" + "Small Forward: " + smforwardout + "<br></br>" + "Forward: " + forwardout + "<br></br>" + "Center: " + centerout;
    document.getElementById('output').innerHTML = output;
}




