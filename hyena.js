
var app = angular.module('hyApp', []);
app.controller('hyCtrl', function($scope) {
    $scope.listquery = '';
	console.log("Setting names");
    $scope.list = ["Abhinav", "A M Publishers", "Academe Research Journals", "Academia Publishing", "Academic and Business Research Institute", "Academic Journals", "Academic Journals, Inc.","Academic Journals and Research ACJAR"];
});



