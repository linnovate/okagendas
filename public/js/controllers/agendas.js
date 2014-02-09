angular.module('mean.system').controller('AgendasController', ['$scope', 'Global', 'Agendas', '$routeParams',
    function($scope, Global, Agendas, $routeParams) {
        $scope.loading = true;
        $scope.byParties = true;
        $scope.byScore = true;
        
        $scope.query = function(param) {
            range = param ? param : '';
            Agendas.getAgenda($routeParams.agendaId, range, function(agenda) {
                $scope.agenda = agenda;
                $scope.initAgendasChart();
            });
        };

        $scope.initAgendasChart = function() {//display data by parties or by members
            console.log("initAgendasChart");
            console.log($scope.agenda);

            $scope.loading = true;
            values = [];
            names = [];
            if ($scope.byParties){//display data by parties
                $scope.partyName = "";
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
                data : values
            };
            if(!$scope.$$phase) {
              $scope.$apply();
            }
        };

    $scope.selectParty = function(partyIndex){
        if (!partyIndex){
           $scope.byParties = true; 
        }
        else{
            $scope.byParties = false;
            partyId = $scope.agenda.parties[partyIndex].absolute_url.match(/\d{1,2}/);
            if (partyId){
                $scope.partyId = parseInt(partyId[0]);
                $scope.partyName = $scope.agenda.parties[partyIndex].name
            }
        }
        $scope.initAgendasChart();
    }

    $scope.filterMembers = function(){
        return $scope.agenda.members.filter(function(member){
          return (member.party_id == $scope.partyId);
        });
     };

    $scope.selectRange = function(rangeObj){
        range = "";
        range += rangeObj.startValue.getFullYear().toString()+("0" + (rangeObj.startValue.getMonth() + 1)).slice(-2);
        range += "-" + rangeObj.endValue.getFullYear().toString()+("0" + (rangeObj.endValue.getMonth() + 1)).slice(-2);
        // $scope.query(range);
    };
 }

]);

