var app=angular.module('myApp',[]);

app.controller('myController', ['$scope', function($scope){
	$scope.Hobbies=[]
	$scope.firstName=''
	$scope.lastName=''
	$scope.discription=''
	$scope.yourDetails=function(fname,lname,desc,hobby){

		//i didn't use this line because of line break don't work!!! i don't know why!!!
		/*$scope.output='First Name: '+fname+'<br/>Last Name: '+ lname +'<br/>Discription: '+ desc+'<br/>Hobbies: '+hobby;*/ 
		$scope.firstname='First Name: '+fname;
		$scope.lastname='Last Name: ' +lname;
		$scope.discrip='Discription: '+desc;
		$scope.hobbies='Hobbies: '+hobby;

	}

	$scope.addHobby = function () {
        $scope.errortext = "";
        if (!$scope.newHobby) {return;}
        if ($scope.Hobbies.indexOf($scope.newHobby) == -1) {
            $scope.Hobbies.push($scope.newHobby);
        } else {
            $scope.errortext = "This hobby is already in your hobbies list.";
        }
    }
    $scope.removeHobby = function (x) {
        $scope.errortext = "";
        $scope.Hobbies.splice(x, 1);
    }
}]);