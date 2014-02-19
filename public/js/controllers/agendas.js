angular.module('mean.system').controller('AgendasController', ['$scope', 'Global', 'Agendas', '$routeParams',
    function($scope, Global, Agendas, $routeParams) {
        
        $scope.byParties = true;
        $scope.byScore = true;
        $scope.range = {"start": new Date(), "end": new Date(2012, 1, 1)};
        
        $scope.query = function(param) {
            $scope.loading = true;
            if(!$scope.$$phase) {
              $scope.$apply();
            }
            range = param ? param : '';
            Agendas.getAgenda($routeParams.agendaId, range, function(agenda) {
                $scope.agenda = agenda;
                $scope.initAgendasChart();
            });
        };

        $scope.initAgendasChart = function() {//display data by parties or by members
            console.log($scope.agenda);
            $scope.display.memberDetails = false;
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
                $scope.partyMembers = $scope.filterMembers();
                for (var member in $scope.partyMembers){
                    if ($scope.byScore)
                        values.push($scope.partyMembers[member].score);
                    else
                        values.push($scope.partyMembers[member].volume);
                    names.push($scope.partyMembers[member].name);
                }
              
            }
            $scope.agendasChart = {
                byScore : $scope.byScore,
                byParties: $scope.byParties,
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
        if (partyIndex === undefined){
           $scope.byParties = true; 
        }
        else{
            $scope.byParties = false;
            partyId = $scope.agenda.parties[partyIndex].absolute_url.match(/\d{1,2}/);
            if (partyId){
                $scope.partyId = parseInt(partyId[0]);
                $scope.partyName = $scope.agenda.parties[partyIndex].name;
            }
        }
        $scope.initAgendasChart();
    };

    $scope.showMemberDetails = function(memberIndex){  
        $scope.member = $scope.partyMembers[memberIndex];
        Agendas.getInfo("/member/" + $scope.member.id, function(memberDetails){
            $scope.memberDetails = memberDetails;
            $scope.memberLinks();
            $scope.display.memberDetails = true;
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        });
    };

    $scope.filterMembers = function(){
        return $scope.agenda.members.filter(function(member){
          return (member.party_id == $scope.partyId);
        });
     };

    $scope.selectRange = function(rangeObj){
        range = "";
        range += rangeObj.startValue.getFullYear().toString()+("0" + (rangeObj.startValue.getMonth() + 1)).slice(-2);
        range += "-" + rangeObj.endValue.getFullYear().toString()+("0" + (rangeObj.endValue.getMonth() + 1)).slice(-2);
        console.log(range);
        $scope.query(range);
    };

     $scope.display = {
        "share" : false,
        "whatIsAgenda": false,
        "memberDetails" : false
    };

    $scope.memberLinks = function(){
        $scope.fbLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("facebook.com") > -1); })[0];
        $scope.twitterLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("twitter.com") > -1); })[0];
        $scope.knessetLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("knesset.gov.il") > -1); })[0];
        console.log($scope.knessetLink);
    };

    $scope.export = function(){
        $scope.chart.options.title.text = $scope.agenda.name;
        $scope.chart.exportChart();
    };
 }

]);