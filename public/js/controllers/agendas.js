angular.module('mean.system').controller('AgendasController', ['$scope', 'Global', 'Agendas', '$routeParams',
    function($scope, Global, Agendas, $routeParams) {
        
        $scope.byParties = true;
        $scope.byScore = true;
        
        console.log($routeParams);

        $scope.findOne = function() {
            Agendas.getAgenda($routeParams.agendaId, function(agenda) {
                $scope.agenda = agenda;
                $scope.initAgendasChart();
            });
        };

        $scope.initAgendasChart = function() {//display data by parties or by members
            console.log("initAgendasChart");
           
            values = [];
            names = [];
            if ($scope.byParties){//display data by parties
               
                for (var party in $scope.agenda.parties){
                    if ($scope.byScore)
                        values.push($scope.agenda.parties[party].score);
                    else
                        values.push($scope.agenda.parties[party].volume);
                    names.push($scope.agenda.parties[party].name);
                }
            }
            else{//display data by members
                partyMembers = $scope.filterMembers();

                for (var member in partyMembers){
                    if ($scope.byScore)
                        values.push(partyMembers[member].score);
                    else
                        values.push(partyMembers[member].volume);
                    names.push(partyMembers[member].name);
                }
              
            }
             $scope.agendasChart = {
                byScore : $scope.byScore,
                xAxis :[{
                    categories : names
                }, { // mirror axis on right side
                    opposite: true,
                    linkedTo: 0,
                    categories : names
                }],
                series : [{
                  data: values
                }]
            };
            if(!$scope.$$phase) {
              $scope.$apply();
            }
        };

    $scope.selectParty = function(partyIndex){
        console.log($scope.agenda.parties[partyIndex]);
        $scope.partyId = $scope.agenda.parties[partyIndex] 
        $scope.byParties = false;
        partyId = $scope.agenda.parties[partyIndex].absolute_url.match(/\d{1,2}/)
        if (partyId)
            $scope.partyId = parseInt(partyId[0]);
        console.log($scope.partyId);
        $scope.initAgendasChart();
    }

    $scope.filterMembers = function(){
        return $scope.agenda.members.filter(function(member){
          return (member.party_id == $scope.partyId);
        });
     };
 }

]);



//TODO:
    //1. sort the results  
    //
//Questions:
    //1. what is the fields for score & votes of members?
    //2. what is the opposite votes?
    //3. how to get the dates?
    //4. should we implement only the chart or all the page?

