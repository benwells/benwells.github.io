function DealController ($scope) {

  $scope.Door = function() {
    this.path = "img/";
    this.ext = ".png";
  }
  
  $scope.doors;

  $scope.hovered;

  $scope.badThing;
  $scope.goodThing;
  $scope.thingsArray;
  $scope.randomNum;
  $scope.thingsArray;

  $scope.init = function() {
    $scope.doors = [];
    $scope.badThing = '<p class="bounceInUp animated">BAD THING</p>';
    $scope.goodThing = '<p class="bounceInUp animated">GOOD THING</p>';
    $scope.thingsArray = [$scope.badThing,$scope.badThing,$scope.badThing];
    $scope.randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    $scope.thingsArray[$scope.randomNum] = $scope.goodThing;

    $scope.door1 = new $scope.Door();
    $scope.door1.ind = 1;
    $scope.door1.id = "door1";

    $scope.door2 = new $scope.Door();
    $scope.door2.ind = 2;
    $scope.door2.id = "door2";
    $scope.door3 = new $scope.Door();
    $scope.door3.ind = 3;
    $scope.door3.id = "door3"

    $scope.doors.push($scope.door1);
    $scope.doors.push($scope.door2);
    $scope.doors.push($scope.door3);
  }

  $scope.hov = function(item) {
    $scope.hovered = item;
  }

  $scope.clickHandler = function(item){
    item.clicked = true;
    angular.element('#' + item.id).replaceWith($scope.thingsArray[item.ind - 1]);
  }
}