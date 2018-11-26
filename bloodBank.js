var bloodApp = angular.module("bloodApp", ['ngMaterial', 'ngAnimate']);
						bloodApp.controller("bloodCtrl", function ($scope,$mdDialog) {

          //                var vm = this;
						    // vm.user = {};
						    $scope.bloodGroup;
						    $scope.unit;
							$scope.msgAvail = true;
						    $scope.bloodGroupAvailability = [{ group: "A+", unit: 6 }, { group: "A-", unit: 8 }, { group: "B+", unit: 4 }, { group: "B-", unit: 5 }, { group: "O+", unit: 10 }, { group: "O-", unit: 7 }, { group: "AB+", unit: 8 }, { group: "AB-", unit: 2 }];

						   
          /** SUBMIT DATA **/
						    $scope.submitData = function (id,form) {
						         $scope.bloodGroupAvailability.forEach(function (row) {
						            if (row.group == $scope.bloodGroup) {
						                if (Number($scope.unit) <= row.unit) {
						                    console.log("This blood group is added to your cart");
											$scope.msgAvail = true;
											$scope.msg =  $scope.unit+" "+"unit of"+" "+$scope.bloodGroup +" ";
											$scope.PopupFuncFor (id,$scope.msg);
											$scope.unit = "";
											$scope.bloodGroup = "";
											form.$setPristine();  
			                                form.$setUntouched();
								       } else {
						                    console.log("our stock for this blood group" +" "+row.unit)
											$scope.msgAvail = false;
											$scope.msg = row.unit;
											$scope.PopupFuncFor (id,$scope.msg);
											$scope.unit = "";
											$scope.bloodGroup = "";
											form.$setPristine();  
			                                form.$setUntouched();
							           }
						            } 
						            });										
						        }
				
           /** POPUP **/
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
			
           /**  CANCEL POPUP **/			
						   $scope.cancel = function() {
					       $scope.isStrictBarred = false;
					       $mdDialog.cancel();
				            }
			  
			           
			/**  RESET **/	
							$scope.clearedField = function(projectForm){
							 projectForm.$setPristine();  
			               projectForm.$setUntouched();
								$scope.bloodGroup = '';
							    $scope.unit= '';
								$scope.cancel();
							}
							
					         });
