angular.module('mean.system').controller('AgendasController', ['$scope', 'Global', 'Agendas', 'ezfb', '$routeParams', '$location', '$http',
    function($scope, Global, Agendas, ezfb, $routeParams, $location, $http) {
        
        $scope.byParties = true;
        $scope.byScore = true;
        var start = new Date();
        start.setMilliseconds(-86400000*365*1.5);
        $scope.range = {"startValue": start, "endValue": new Date()};
        $scope.embed = $location.absUrl();
        $scope.display = {
            "general" : false,
            "share" : false,
            "whatIsAgenda": false,
            "memberDetails" : false,
            "embed" : false
        };


        $scope.query = function(param) {
            $scope.loading = true;
            // if(!$scope.$$phase) {
            //   $scope.$apply();
            // }
            range = param ? param : '';
            Agendas.getAgenda($routeParams.agendaId, range, function(agenda) {
                $scope.agenda = agenda;
                $scope.initAgendasChart();
               
            });
        };

        $scope.initAgendasChart = function() {//display data by parties or by members
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
        if (!partyIndex || partyIndex === undefined){
           $scope.byParties = true; 
           $scope.partyId = $scope.partyName = $scope.party = null;
        }
        else{
            $scope.byParties = false;
            if (!isNaN(partyIndex))//click on chart
                $scope.party = $scope.agenda.parties[partyIndex];
            partyId = $scope.party.absolute_url.match(/\d{1,2}/);
            if (partyId){
                $scope.partyId = parseInt(partyId[0]);
                $scope.partyName = $scope.party.name;
            }
        }
        $scope.initAgendasChart();
    };

    $scope.showMemberDetails = function(memberIndex){  
        $scope.member = $scope.partyMembers[memberIndex];
        Agendas.getInfo("/member/" + $scope.member.id, function(memberDetails){
            $scope.memberDetails = memberDetails;
            $scope.memberLinks();
            $scope.memberPosition = 370 + memberIndex*25 + "px";
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
        if ($scope.chart)
            $scope.chart.showLoading('טוען נתונים...');
        range = "";
        range += rangeObj.startValue.getFullYear().toString()+("0" + (rangeObj.startValue.getMonth() + 1)).slice(-2);
        range += "-" + rangeObj.endValue.getFullYear().toString()+("0" + (rangeObj.endValue.getMonth() + 1)).slice(-2);
        if (rangeObj !== $scope.range){
            $scope.query(range);
            $scope.range = rangeObj;
        }
            
    };


    $scope.memberLinks = function(){
        $scope.fbLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("facebook.com") > -1); })[0];
        $scope.twitterLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("twitter.com") > -1); })[0];
        $scope.knessetLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("knesset.gov.il") > -1); })[0];
        $scope.youtubeLink = $scope.memberDetails.links.filter(function(x){return (x.url.indexOf("youtube.com") > -1); })[0];
    };

    $scope.export = function(){
        $scope.addTitleToExport();
        $scope.chart.exportChart();
    };

    $scope.addTitleToExport = function(){
        $scope.chart.options.title.text = $scope.agenda.name;
        
        start = parseInt($scope.range.startValue.getMonth()) + 1 + "/" + $scope.range.startValue.getFullYear();
        end = parseInt($scope.range.endValue.getMonth()) + 1 + "/" + $scope.range.endValue.getFullYear();
        $scope.chart.options.subtitle.text = end + " - " + start;
    }

    $scope.toggleDisplay = function(name){
        value = $scope.display[name];
        angular.forEach($scope.display, function(k,v){
            $scope.display[v] = false;
        });
        $scope.display[name] = !value;
        $scope.display.general = !value;
    };

    $scope.facebook = function(){
        $scope.addTitleToExport();
        svg = $scope.chart.getSVG();
        canvas = document.getElementById('canvas');
        canvg(canvas, svg);
        if (canvas.getContext) {
            $scope.chartImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        }
        $http.post('/saveImage', {"data": $scope.chartImage})
        .success(function(data, status, headers, config){
            ezfb.ui({
                method: 'feed',
                name: $scope.agenda.name,
                picture: $location.host() + ":" + $location.port() + data,
                link: $scope.embed,
                caption: '',
                description: $scope.agenda.description,
            }).then(function(res) {
                $scope.toggleDisplay('facebook');
            })
        });
        

    }
 }

]);