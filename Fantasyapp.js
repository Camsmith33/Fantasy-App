$(document).ready(function() {
    var myItems;
    $.getJSON('https://webforms.exchange.viterbo.edu/cs/sportsref_basketball.json', function(data) {
        myItems = data.items;
        getteam(data);
       console.log(myItems);
    });
});
$(document).ready(function() {
    var myItem
    $.getJSON('https://raw.githubusercontent.com/Camsmith33/Fantasy-App/main/nba-2022_UTC.json', function(sched) {
        myItem = sched.items;
        findschedule(sched);
        console.log(myItem);
    });
});

class Player {
    constructor(player, team, position, rank) {
        this._player = player;
        this._team = team;
        this._position = position;
        this._rank = rank;
    }
    get player() {
        return this._player;
    }
    set player(newplayer) {
        this._player = newplayer;
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
class Teams {
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
function getteam(data){
    // put each player into an object to be called later
    for (let i = 0; i < data.length; i++){
        let player = data[i].Player;
        let team = data[i].Tm;
        let position = data[i].Pos;
        let rank = data[i].Rk;
        const stats = new Player(player, team, position, rank);
        console.log(stats.player);
        console.log(stats.team);
        console.log(stats.position);
        console.log(stats.rank);
        }
    }
    // assign each date a team so that it can be searched later
    function findschedule(sched){
    for (let i = 0; i < 1230; i++){
        if (sched[i]['Away Team'] == "Boston Celtics" || sched[i]['Home Team'] == "Boston Celtics") {
            let schedule = sched[i].Date;
            let scheduleteam = "BOS";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Philadelphia 76ers" || sched[i]['Home Team'] == "Philadelphia 76ers") {
            let schedule = sched[i].Date;
            let scheduleteam = "PHI";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Golden State Warriors" || sched[i]['Home Team'] == "Golden State Warriors") {
            let schedule = sched[i].Date;
            let scheduleteam = "GSW";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Atlanta Hawks" || sched[i]['Home Team'] == "Atlanta Hawks") {
            let schedule = sched[i].Date;
            let scheduleteam = "ATL";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Brooklyn Nets" || sched[i]['Home Team'] == "Brooklyn Nets") {
            let schedule = sched[i].Date;
            let scheduleteam = "BKN";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Charlotte Hornets" || sched[i]['Home Team'] == "Charlotte Hornets") {
            let schedule = sched[i].Date;
            let scheduleteam = "CHA";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Chicago Bulls" || sched[i]['Home Team'] == "Chicago Bulls") {
            let schedule = sched[i].Date;
            let scheduleteam = "CHI";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Cleveland Cavaliers" || sched[i]['Home Team'] == "Cleveland Cavaliers") {
            let schedule = sched[i].Date;
            let scheduleteam = "CLE";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Dallas Mavericks" || sched[i]['Home Team'] == "Dallas Mavericks") {
            let schedule = sched[i].Date;
            let scheduleteam = "DAL";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Denver Nuggets" || sched[i]['Home Team'] == "Denver Nuggets") {
            let schedule = sched[i].Date;
            let scheduleteam = "DEN";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Detroit Pistons" || sched[i]['Home Team'] == "Detroit Pistons") {
            let schedule = sched[i].Date;
            let scheduleteam = "DET";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Houston Rockets" || sched[i]['Home Team'] == "Houston Rockets") {
            let schedule = sched[i].Date;
            let scheduleteam = "HOU";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Indiana Pacers" || sched[i]['Home Team'] == "Indiana Pacers") {
            let schedule = sched[i].Date;
            let scheduleteam = "IND";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "LA Clippers" || sched[i]['Home Team'] == "LA Clippers") {
            let schedule = sched[i].Date;
            let scheduleteam = "LAC";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Los Angeles Lakers" || sched[i]['Home Team'] == "Los Angeles Lakers") {
            let schedule = sched[i].Date;
            let scheduleteam = "LAL";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Memphis Grizzlies" || sched[i]['Home Team'] == "Memphis Grizzlies") {
            let schedule = sched[i].Date;
            let scheduleteam = "MEM";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Miami Heat" || sched[i]['Home Team'] == "Miami Heat") {
            let schedule = sched[i].Date;
            let scheduleteam = "MIA";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Milwaukee Bucks" || sched[i]['Home Team'] == "Milwaukee Bucks") {
            let schedule = sched[i].Date;
            let scheduleteam = "MIL";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Minnesota Timberwolves" || sched[i]['Home Team'] == "Minnesota Timberwolves") {
            let schedule = sched[i].Date;
            let scheduleteam = "MIN";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "New Orleans Pelicans" || sched[i]['Home Team'] == "New Orleans Pelicans") {
            let schedule = sched[i].Date;
            let scheduleteam = "NOP";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "New York Knicks" || sched[i]['Home Team'] == "New York Knicks") {
            let schedule = sched[i].Date;
            let scheduleteam = "NYK";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Oklahoma City Thunder" || sched[i]['Home Team'] == "Oklahoma City Thunder") {
            let schedule = sched[i].Date;
            let scheduleteam = "OKC";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Orlando Magic" || sched[i]['Home Team'] == "Orlando Magic") {
            let schedule = sched[i].Date;
            let scheduleteam = "ORL";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Phoenix Suns" || sched[i]['Home Team'] == "Phoenix Suns") {
            let schedule = sched[i].Date;
            let scheduleteam = "PHX";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Portland Trail Blazers" || sched[i]['Home Team'] == "Portland Trail Blazers") {
            let schedule = sched[i].Date;
            let scheduleteam = "POR";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Sacramento Kings" || sched[i]['Home Team'] == "Sacramento Kings") {
            let schedule = sched[i].Date;
            let scheduleteam = "SAC";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "San Antonio Spurs" || sched[i]['Home Team'] == "San Antonio Spurs") {
            let schedule = sched[i].Date;
            let scheduleteam = "SAS";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Toronto Raptors" || sched[i]['Home Team'] == "Toronto Raptors") {
            let schedule = sched[i].Date;
            let scheduleteam = "TOR";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Utah Jazz" || sched[i]['Home Team'] == "Utah Jazz") {
            let schedule = sched[i].Date;
            let scheduleteam = "UTA";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        if (sched[i]['Away Team'] == "Washington Wizards" || sched[i]['Home Team'] == "Washington Wizards") {
            let schedule = sched[i].Date;
            let scheduleteam = "WAS";
            const dates = new Teams(schedule, scheduleteam);
            console.log(dates.schedule);
            console.log(dates.scheduleteam);}
        }
    }
//var data = $.csv.toArrays('sportsref_basketball.csv');
//var teams = $.csv.nba2022UTC(csv);
function getroster(data, sched){
    let currentdate = document.getElementById("date");
    const objdate = Teams.filter(Teams => Teams.schedule == currentdate)
    var pointguardout = null;
    var shootingguardout = null;
    var smforwardout = null;
    var forwardout = null;
    var centerout = null;
    var i = 1;
    while (pointguardout == null){
            let playerofinterest = Player.filter(Player => Player.rank == i);  
            if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "PG"){
                var pointguardout = playerofinterest.player}
            var i=i+1
    }
    while (shootingguardout == null){
        let playerofinterest = Player.filter(Player => Player.rank == i);  
        if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "SG"){
            var shootingguardout = playerofinterest.player}
        var i=i+1
    }
    while (smforwardout == null){
        let playerofinterest = Player.filter(Player => Player.rank == i);  
        if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "SF"){
            var smforwardout = playerofinterest.player}
        var i=i+1
    }
    while (forwardout == null){
        let playerofinterest = Player.filter(Player => Player.rank == i);  
        if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "PF"){
            var forwardout = playerofinterest.player}
        var i=i+1
    }
    while (centerout == null){
        let playerofinterest = Player.filter(Player => Player.rank == i);  
        if (playerofinterest.team == objdate.scheduleteam && playerofinterest.position == "C"){
            var centerout = playerofinterest.player}
        var i=i+1
    }
    let output = "Point Guard: " + pointguardout + "<br></br>" + "Shooting Guard: " + shootingguardout + "<br></br>" + "Small Forward: " + smforwardout + "<br></br>" + "Forward: " + forwardout + "<br></br>" + "Center: " + centerout;
    document.getElementById('output').innerHTML = output;
}