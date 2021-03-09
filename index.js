// grab team search input box
const userTeamSearch = document.getElementById('user-team-search');

const userLeagueSearch = document.getElementById('user-league-search');

// set event listener to team search input box listening for keyup
userTeamSearch.addEventListener("keyup", function(event) {
    // grab the value keyed by the user in the team search input box and convert to lower case
    let teamSearch = event.target.value.toLowerCase();

    // grab all the team names by their class of team
    const allTeamNames = document.getElementsByClassName('team');    

    // for loop to go through all teams
    for(let i = 0; i < allTeamNames.length; i++) {
        // variable for current team to lower case
        const currentTeam = allTeamNames[i].textContent.toLowerCase();

        // split the current team at the "-" to compare against just the team name
        currentTeamSplit = currentTeam.split("-");
    
        // conditional to check if the current team contains the user team search
        if(currentTeamSplit[0].includes(teamSearch)){
            // if so display the team
            allTeamNames[i].style.display = "block";
        } else {
            // if not then don't display the team
            allTeamNames[i].style.display = "none";
        }
    }
});

userLeagueSearch.addEventListener("keyup", function(event) {
    let leagueSearch = event.target.value.toLowerCase();
    
    const allTeamNames = document.getElementsByClassName('team');
    const allLeagues = document.getElementsByClassName('league');

    for(let i = 0; i < allLeagues.length; i++) {
        const currentLeague = allLeagues[i].textContent.toLowerCase();
        if(currentLeague.includes(leagueSearch)) {
            allTeamNames[i].style.display = "block";
        } else {
            allTeamNames[i].style.display = "none";
        }
    }
});