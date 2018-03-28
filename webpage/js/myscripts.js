var app = angular.module('myApp', []);

app.controller('NHLDataCtrl', function($scope, $http, $filter) {
	
	$http.get("https://statsapi.web.nhl.com/api/v1/teams/?hydrate=roster(person(stats(splits=statsSingleSeason)))").then(function (response) {
		$scope.myPlayersData = response.data.teams; 
	});
	
	$http.get("https://statsapi.web.nhl.com/api/v1/teams/?hydrate=stats").then(function (response) {
		$scope.myTeamData = response.data.teams; 
	});
	
	$scope.min = 30;
	
	// filtering players by properties
	$scope.positions = ["Center","Left Wing","Right Wing"];
	$scope.types = ["Forward", "Defenseman", "Goalie"];
	$scope.countries = ["CAN", "USA", "SWE", "FIN", "RUS", "CZE", "SVK", "FRA", "SUI", "ITA", "DNK"];
	
	
    $scope.teamPicker = [
		{ id: 1, display:"New Jersey Devils", pick:"NJD" },
		{ id: 2, display:"New York Islanders", pick:"NYI" },
		{ id: 3, display:"New York Rangers", pick:"NYR" },
		{ id: 4, display:"Philadelphia Flyers", pick:"PHI" },
		{ id: 5, display:"Pittsburgh Penguins", pick:"PIT" },
		{ id: 6, display:"Boston Bruins", pick:"BOS" },
		{ id: 7, display:"Buffalo Sabres", pick:"BUF" },
		{ id: 8, display:"Montréal Canadiens", pick:"MTL" },
		{ id: 9, display:"Ottawa Senators", pick:"OTT" },
		{ id: 10, display:"Toronto Maple Leafs", pick:"TOR" },
		{ id: 12, display:"Carolina Hurricanes", pick:"CAR" },
		{ id: 13, display:"Florida Panthers", pick:"FLA" },
		{ id: 14, display:"Tampa Bay Lightning", pick:"TBL" },
		{ id: 15, display:"Washington Capitals", pick:"WSH" },
		{ id: 16, display:"Chicago Blackhawks", pick:"CHI" },
		{ id: 17, display:"Detroit Red Wings", pick:"DET" },
		{ id: 18, display:"Nashville Predators", pick:"NSH" },
		{ id: 19, display:"St. Louis Blues", pick:"STL" },
		{ id: 20, display:"Calgary Flames", pick:"CGY" },
		{ id: 21, display:"Colorado Avalanche", pick:"COL" },
		{ id: 22, display:"Edmonton Oilers", pick:"EDM" },
		{ id: 23, display:"Vancouver Canucks", pick:"VAN" },
		{ id: 24, display:"Anaheim Ducks", pick:"ANA" },
		{ id: 25, display:"Dallas Stars", pick:"DAL" },
		{ id: 26, display:"Los Angeles Kings", pick:"LAK" },
		{ id: 28, display:"San Jose Sharks", pick:"SJS" },
		{ id: 29, display:"Columbus Blue Jackets", pick:"CBJ" },
		{ id: 30, display:"Minnesota Wild", pick:"MIN" },
		{ id: 52, display:"Winnipeg Jets", pick:"WPG" },
		{ id: 53, display:"Arizona Coyotes", pick:"ARI" },
		{ id: 54, display:"Vegas Golden Knights", pick:"VGK" }
	];
	
	
	
	
});