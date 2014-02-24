function CalculatorController($scope) {
  //storage of the calculation string
  $scope.calcString = "";
  $scope.result = "";

  $scope.build = function (e) {
    var elem = angular.element(e.target);
    $scope.construct(elem.html());
  }

  $scope.execute = function(e) {
    var calculation = $scope.calcString;
    try {
      $scope.result = eval(calculation);
      $scope.calcString = ev;
    } catch (e) {
     //what should I do here?
    }
  }

  //for clear button
  $scope.clear = function(e) {
    if ($scope.calcString != ''){
      $scope.calcString = '';
      $scope.result = '';
    }
  }

  $scope.construct = function(e){
    $scope.calcString = $scope.calcString + e;
    $scope.result = $scope.calcString;
  }

  $scope.delete = function() {
    $scope.calcString = $scope.calcString.slice(0,-1)
  }

  $scope.keyup = function(keyEvent) {
      var k = String.fromCharCode(keyEvent.keyCode);

      if (keyEvent.shiftKey && k == 8){ //for *
        $scope.construct("*")
      }
      else if (keyEvent.keyCode == 191){ //for /
        $scope.construct("/")
      }
      else if (k == 9 && keyEvent.shiftKey){ //for (
        $scope.construct("(")
      }
      else if (k == 0 && keyEvent.shiftKey){ //for )
        $scope.construct(")")
      }
      else if (k.toLowerCase() == 'c' || keyEvent.keyCode == 27){ //for c (clear)
        $scope.clear()
      }
      else if (keyEvent.keyCode == 187){  //for plus sign
        $scope.construct("+") 
      }
      else if (keyEvent.keyCode == 13 || keyEvent.keyCode == 187){ //for enter key
        $scope.execute()
      }
      else if (keyEvent.keyCode == 189){ //for minus sign
        $scope.construct("-");
      }
      else if (k.match(/^[\d\+1]+$/g)){  //if key is a number
        $scope.construct(k);
      }
      else if (keyEvent.keyCode == 8){ //for delete
        $scope.delete();
      }
  };
}