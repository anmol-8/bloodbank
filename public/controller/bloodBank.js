var bloodApp = angular.module("bloodApp", ['ngMaterial', 'ngAnimate']);
bloodApp.controller("bloodCtrl", function ($scope,$mdDialog) {

         //                var vm = this;
   // vm.user = {};
   $scope.bloodGroup;
   $scope.unit;
   $scope.bloodGroupAvailability = [{ group: "A+", unit: 6 }, { group: "A-", unit: 8 }, { group: "B+", unit: 4 }, { group: "B-", unit: 5 }, { group: "O+", unit: 10 }, { group: "O-", unit: 7 }, { group: "AB+", unit: 8 }, { group: "AB-", unit: 2 }];

   //$scope.bloodGroup = [{ group: "A+", id: "1" }, { group: "A-", id: "2" }, { group: "B+", id: "3" }, { group: "B-", id: "4" }, { group: "O+", id: "5" }, { group: "O-", id: "6" }, { group: "AB+", id: "7"}, { group: "AB-", id: "8" }]; 

   $scope.submitData = function (id) {
        $scope.bloodGroupAvailability.forEach(function (row) {
           if (row.group == $scope.bloodGroup) {
               if (Number($scope.unit) <= row.unit) {
                   console.log("This blood group is added to your cart");
$scope.msg =  $scope.unit+" "+"unit of"+" "+$scope.bloodGroup +" ";
$scope.clearedField();
$scope.PopupFuncFor (id,$scope.msg);

                  
               } else {
                   console.log("our stock for this blood group" +" "+row.unit)
$scope.PopupFuncFor (id,$scope.msg);
               }
           } 
           });	
       }

   $scope.PopupFuncFor = function(popupId,msg) {
$scope.resultMsg = msg;
                           $scope.isStrictBarred = true;
                           $mdDialog.show({
                              contentElement : '#'+popupId,
  parent : angular.element(document.body),
                              targetEvent : null,
                              clickOutsideToClose : false
                              });
                              }
      
  $scope.cancel = function() {
      $scope.isStrictBarred = false;
      $mdDialog.cancel();
           }

$scope.clearedField = function(){
$scope.projectForm.$setPristine();
       $scope.projectForm.$setUntouched();
$scope.bloodGroup = '';
   $scope.unit= '';
$scope.cancel();
}

        });