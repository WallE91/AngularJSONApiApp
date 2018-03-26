var app = angular.module('myApp', []);

app.controller('NHLDataCtrl', function($scope, $http, $filter) {
	
	$http.get("https://statsapi.web.nhl.com/api/v1/teams/?hydrate=roster(person(stats(splits=statsSingleSeason)))").then(function (response) {
		$scope.myData = response.data.teams; 
	});
	
	
	// filtering players by properties
	$scope.positions = ["Center","Left Wing","Right Wing"];
	$scope.types = ["Forward", "Defenseman", "Goalie"];
	$scope.countries = ["CAN", "USA", "SWE", "FIN", "RUS", "CZE", "SVK", "FRA", "SUI", "ITA", "DNK"];
	
    $scope.teamPicker = [
		{ display:"New Jersey Devils", pick:"NJD" },
		{ display:"New York Islanders", pick:"NYI" },
		{ display:"New York Rangers", pick:"NYR" },
		{ display:"Philadelphia Flyers", pick:"PHI" },
		{ display:"Pittsburgh Penguins", pick:"PIT" },
		{ display:"Boston Bruins", pick:"BOS" },
		{ display:"Buffalo Sabres", pick:"BUF" },
		{ display:"Montréal Canadiens", pick:"MTL" },
		{ display:"Ottawa Senators", pick:"OTT" },
		{ display:"Toronto Maple Leafs", pick:"TOR" },
		{ display:"Carolina Hurricanes", pick:"CAR" },
		{ display:"Florida Panthers", pick:"FLA" },
		{ display:"Tampa Bay Lightning", pick:"TBL" },
		{ display:"Washington Capitals", pick:"WSH" },
		{ display:"Chicago Blackhawks", pick:"CHI" },
		{ display:"Detroit Red Wings", pick:"DET" },
		{ display:"Nashville Predators", pick:"NSH" },
		{ display:"St. Louis Blues", pick:"STL" },
		{ display:"Calgary Flames", pick:"CGY" },
		{ display:"Colorado Avalanche", pick:"COL" },
		{ display:"Edmonton Oilers", pick:"EDM" },
		{ display:"Vancouver Canucks", pick:"VAN" },
		{ display:"Anaheim Ducks", pick:"ANA" },
		{ display:"Dallas Stars", pick:"DAL" },
		{ display:"Los Angeles Kings", pick:"LAK" },
		{ display:"San Jose Sharks", pick:"SJS" },
		{ display:"Columbus Blue Jackets", pick:"CBJ" },
		{ display:"Minnesota Wild", pick:"MIN" },
		{ display:"Winnipeg Jets", pick:"WPG" },
		{ display:"Arizona Coyotes", pick:"ARI" },
		{ display:"Vegas Golden Knights", pick:"VGK" }
	];
	
	
	
	
});