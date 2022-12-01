var data = $.csv.sportsref_basketball(csv);
var teams = $.csv.nba2022UTC(csv);
// put each player into an object to be called later
function playerstats(data){
    for(let i=1; i=data.length; i++){
        let firstname=data[i][2];
        let lastname=data[i][3];
        let team=data[i][5];
        let position=data[i][4];
        let rank=data[i][1];
        const stats = new Player(firstname, lastname, team, position, rank);
        console.log(stats.firstname);
        console.log(stats.lastname);
        console.log(stats.team);
        console.log(stats.position);
        console.log(stats.rank);
    }
}
class Player{
    constructor(firstname, lastname, team, position, rank){
        this._firstname = firstname;
        this._lastname = lastname;
        this._team = team;
        this._position = position;
        this._rank = rank;
    }
    get firstname(){
        return this._firstname;
    }
    set firstname(newfirstname){
        this._firstname = newfirstname;
    }
    get lastname(){
        return this._lastname;
    }
    set lastname(newlastname){
        this._lastname = newlastname;
    }
    get team(){
        return this._team;
    }
    set team(newteam){
        this._team = newteam;
    }
    get position(){
        return this._position;
    }
    set position(newposition){
        this._position = newposition;
    }
    get rank(){
        return this._rank;
    }
    set rank(newrank){
        this._rank = newrank;
    }
}
// assign each team a column in an array where the row is the date they play
for(let i=1; i=teams.length; i++){
if (teams[i][5]=="Boston Celtics"||teams[i][6]=="Boston Celtics"){
    let schedule[i][1] = teams[i][3]}
if (teams[i][5]=="Philadelphia 76ers"||teams[i][6]=="Philadelphia 76ers"){
    let schedule[i][2] = teams[i][3]}
if (teams[i][5]=="Golden State Warriors"||teams[i][6]=="Golden State Warriors"){
     let schedule[i][3] = teams[i][3]}
if (teams[i][5]=="Los Angeles Lakers"||teams[i][6]=="Los Angeles Lakers"){
    let schedule[i][4] = teams[i][3]}
if (teams[i][5]=="Detroit Pistons"||teams[i][6]=="Detroit Pistons"){
    let schedule[i][5] = teams[i][3]}
if (teams[i][5]=="Orlando Magic"||teams[i][6]=="Orlando Magic"){
    let schedule[i][6] = teams[i][3]}
if (teams[i][5]=="Indiana Pacers"||teams[i][6]=="Indiana Pacers"){
    let schedule[i][7] = teams[i][3]}
if (teams[i][5]=="Washington Wizards"||teams[i][6]=="Washington Wizards"){
    let schedule[i][8] = teams[i][3]}
if (teams[i][5]=="Atlanta Hawks"||teams[i][6]=="Atlanta Hawks"){
    let schedule[i][9] = teams[i][3]}
if (teams[i][5]=="Houston Rockets"||teams[i][6]=="Houston Rockets"){
    let schedule[i][10] = teams[i][3]}
if (teams[i][5]=="Brooklyn Nets"||teams[i][6]=="Brooklyn Nets"){
    let schedule[i][11] = teams[i][3]}
if (teams[i][5]=="New Orleans Pelicans"||teams[i][6]=="New Orleans Pelicans"){
    let schedule[i][12] = teams[i][3]}
if (teams[i][5]=="Miami Heat"||teams[i][6]=="Miami Heat"){
    let schedule[i][13] = teams[i][3]}
if (teams[i][5]=="Chicago Bulls"||teams[i][6]=="Chicago Bulls"){
    let schedule[i][14] = teams[i][3]}
if (teams[i][5]=="Toronto Raptors"||teams[i][6]=="Toronto Raptors"){
     let schedule[i][15] = teams[i][3]}
if (teams[i][5]=="Cleveland Cavaliers"||teams[i][6]=="Cleveland Cavaliers"){
     let schedule[i][16] = teams[i][3]}
if (teams[i][5]=="Memphis Grizzlies"||teams[i][6]=="Memphis Grizzlies"){
    let schedule[i][17] = teams[i][3]}
if (teams[i][5]=="New York Knicks"||teams[i][6]=="New York Knicks"){
    let schedule[i][18] = teams[i][3]}
if (teams[i][5]=="Minnesota Timberwolves"||teams[i][6]=="Minnesota Timberwolves"){
    let schedule[i][19] = teams[i][3]}
if (teams[i][5]=="Oklahoma City Thunder"||teams[i][6]=="Oklahoma City Thunder"){
    let schedule[i][20] = teams[i][3]}
if (teams[i][5]=="San Antonio Spurs"||teams[i][6]=="San Antonio Spurs"){
    let schedule[i][21] = teams[i][3]}
if (teams[i][5]=="Charlotte Hornets"||teams[i][6]=="Charlotte Hornets"){
    let schedule[i][22] = teams[i][3]}
if (teams[i][5]=="Utah Jazz"||teams[i][6]=="Utah Jazz"){
    let schedule[i][23] = teams[i][3]}
if (teams[i][5]=="Denver Nuggets"||teams[i][6]=="Denver Nuggets"){
    let schedule[i][24] = teams[i][3]}
if (teams[i][5]=="Phoenix Suns"||teams[i][6]=="Phoenix Suns"){
    let schedule[i][25] = teams[i][3]}
if (teams[i][5]=="Dallas Mavericks"||teams[i][6]=="Dallas Mavericks"){
    let schedule[i][26] = teams[i][3]}
if (teams[i][5]=="Sacramento Kings"||teams[i][6]=="Sacramento Kings"){
    let schedule[i][27] = teams[i][3]}
if (teams[i][5]=="Portland Trail Blazers"||teams[i][6]=="Portland Trail Blazers"){
    let schedule[i][28] = teams[i][3]}
if (teams[i][5]=="Milwaukee Bucks"||teams[i][6]=="Milwaukee Bucks"){
    let schedule[i][29] = teams[i][3]}
if (teams[i][5]=="LA Clippers"||teams[i][6]=="LA Clippers"){
    let schedule[i][30] = teams[i][3]}
}

let pointguard = document.getElementbyId("pointguard").value;
//do same for other positions

let pgobj = Player.find(pgobj => pgobj.id=pointguard)
//finds object that corresponds to the player's name, still need the same for other positions

let objteam = pgobj.team






