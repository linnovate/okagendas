var request = require('request');

exports.getit = function(req, res) {
    ranges = req.query.ranges !== '' ? "?ranges=" + req.query.ranges : "";
    request('http://oknesset.org/api/v2/agenda/' + req.params.agendaId + ranges, 
        function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
};

exports.getInfo = function(req, res){
    request('http://oknesset.org/api/v2/' + req.params.resource + "/" + req.params.id, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
};

exports.saveImage = function(req, res){
	var fs = require('fs'),
	fileName = "/tmp/"+  new Date().getTime()+".png",
	base64Data = req.body.data.split(',')[1]
	fs.writeFile(process.cwd() +'/public' + fileName, base64Data, 'base64', function(err) {
		if (err){
			console.log(err);
			throw err;
		}
		res.send(fileName)
	});
}
