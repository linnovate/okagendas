var request = require('request');

exports.getit = function(req, res) {
//     ranges = req.query.ranges !== '' ? "?ranges=" + req.query.ranges : "";
//     request('http://oknesset.org/api/v2/agenda/' + req.params.agendaId + ranges, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.send(body);
//         }
//     });
// }
    
    var body = {
        "absolute_url": "/agenda/61/",
        "description": "\u05d7\u05d9\u05e0\u05d5\u05da \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9 \u05d0\u05d9\u05db\u05d5\u05ea\u05d9 \u05d4\u05de\u05d5\u05e9\u05ea\u05ea \u05e2\u05dc \u05e2\u05e8\u05db\u05d9\u05dd \u05d4\u05d5\u05de\u05e0\u05d9\u05e1\u05d8\u05d9\u05dd- \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05d9\u05dd \u05d1\u05d6\u05d9\u05e7\u05d4 \u05dc\u05ea\u05e8\u05d1\u05d5\u05ea\u05dd \u05e9\u05dc \u05d4\u05d9\u05dc\u05d3\u05d9\u05dd \u05d1\u05e8\u05d5\u05d7 \u05de\u05d2\u05d9\u05dc\u05ea \u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea, \u05d5\u05de\u05d8\u05e8\u05d5\u05ea \u05d7\u05d5\u05e7 \u05d4\u05d7\u05d9\u05e0\u05d5\u05da \u05d4\u05de\u05de\u05dc\u05db\u05ea\u05d9. \u05de\u05e2\u05e8\u05db\u05ea \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05ea \u05d2\u05de\u05d9\u05e9\u05d4 \u05d4\u05de\u05d0\u05de\u05d9\u05e0\u05d4 \u05d1\u05d4\u05e0\u05d4\u05d2\u05d5\u05ea \u05d1\u05ea\u05d9 \u05d4\u05e1\u05e4\u05e8 \u05d5\u05de\u05e2\u05e0\u05d9\u05e7\u05d4 \u05dc\u05d4\u05dd \u05d0\u05d7\u05e8\u05d9\u05d5\u05ea \u05d5\u05e1\u05de\u05db\u05d5\u05ea \u05d1\u05ea\u05d7\u05d5\u05de\u05d9 \u05de\u05e9\u05d0\u05d1\u05d9\u05dd \u05d5\u05db\u05d5\u05d7 \u05d0\u05d3\u05dd, \u05e2\u05dc \u05d9\u05e1\u05d5\u05d3 \u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05d9\u05e2\u05d3\u05d9\u05dd \u05dc\u05d0\u05d5\u05de\u05d9\u05d9\u05dd \u05e9\u05d0\u05d5\u05ea\u05dd \u05ea\u05e7\u05d1\u05e2 \u05de\u05d5\u05e2\u05e6\u05d4 \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05dc\u05d7\u05d9\u05e0\u05d5\u05da. \u05d7\u05d9\u05e0\u05d5\u05da \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9 \u05d0\u05d9\u05db\u05d5\u05ea\u05d9 \u05d4\u05de\u05d5\u05e9\u05da \u05d0\u05ea \u05d4\u05d8\u05d5\u05d1\u05d9\u05dd \u05d1\u05d9\u05d5\u05ea\u05e8 \u05dc\u05e2\u05e9\u05d9\u05d9\u05d4 \u05d4\u05d7\u05d9\u05e0\u05d5\u05db\u05d9\u05ea, \u05d5\u05de\u05d1\u05d8\u05d9\u05d7 \u05ea\u05e7\u05e6\u05d5\u05d1 \u05e9\u05e7\u05d5\u05e3 \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05e0\u05d9 \u05dc\u05d1\u05ea\u05d9 \u05d4\u05e1\u05e4\u05e8 \u05db\u05d3\u05d9 \u05dc\u05d4\u05e2\u05e0\u05d9\u05e7 \u05d4\u05d6\u05d3\u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05d5\u05d4 \u05dc\u05db\u05dc \u05d9\u05dc\u05d3\u05d4 \u05d5\u05d9\u05dc\u05d3.\r\n\r\nhttp://www.hinuch.org.il/209142/about",
        "editors": [{
            "absolute_url": "/users/%D7%97%D7%99%D7%A0%D7%95%D7%9A%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99/",
            "avatar": "http://www.gravatar.com/avatar/45aa30763106b392981030cfe9a64d8a/?s=48",
            "username": "\u05d7\u05d9\u05e0\u05d5\u05da \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9"
        }],
        "id": 61,
        "image": "/media/agendas/61.jpg",
        "members": [{
            "absolute_url": "/member/773/%D7%90%D7%91%D7%99%D7%92%D7%93%D7%95%D7%A8-%D7%99%D7%A6%D7%97%D7%A7%D7%99/",
            "id": 773,
            "name": "\u05d0\u05d1\u05d9\u05d2\u05d3\u05d5\u05e8 \u05d9\u05e6\u05d7\u05e7\u05d9",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 109,
            "score": 50,
            "volume": 50
        }, {
            "absolute_url": "/member/214/%D7%90%D7%91%D7%99%D7%92%D7%93%D7%95%D7%A8-%D7%9C%D7%99%D7%91%D7%A8%D7%9E%D7%9F/",
            "id": 214,
            "name": "\u05d0\u05d1\u05d9\u05d2\u05d3\u05d5\u05e8 \u05dc\u05d9\u05d1\u05e8\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 138,
            "score": 80,
            "volume": 50
        }, {
            "absolute_url": "/member/870/%D7%90%D7%91%D7%99-%D7%95%D7%95%D7%A8%D7%A6%D7%9E%D7%9F/",
            "id": 870,
            "name": "\u05d0\u05d1\u05d9 \u05d5\u05d5\u05e8\u05e6\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 35,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/771/%D7%90%D7%91%D7%99-%D7%9E%D7%A9%D7%94-%D7%93%D7%99%D7%9B%D7%98%D7%A8/",
            "id": 771,
            "name": "\u05d0\u05d1\u05d9 (\u05de\u05e9\u05d4) \u05d3\u05d9\u05db\u05d8\u05e8",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 111,
            "score": 10,
            "volume": 10
        }, {
            "absolute_url": "/member/797/%D7%90%D7%91%D7%99%D7%A9%D7%99-%D7%91%D7%A8%D7%95%D7%95%D7%A8%D7%9E%D7%9F/",
            "id": 797,
            "name": "\u05d0\u05d1\u05d9\u05e9\u05d9 \u05d1\u05e8\u05d5\u05d5\u05e8\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 95,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/800/%D7%90%D7%91%D7%A8%D7%94%D7%99%D7%9D-%D7%A6%D7%A8%D7%A6%D7%95%D7%A8/",
            "id": 800,
            "name": "\u05d0\u05d1\u05e8\u05d4\u05d9\u05dd \u05e6\u05e8\u05e6\u05d5\u05e8",
            "numvotes": 0,
            "party": " \u05e8\u05e2\u201d\u05de-\u05ea\u05e2\u201d\u05dc",
            "party_id": 23,
            "party_url": "/party/23/",
            "rank": 94,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/852/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%90%D7%91%D7%99-%D7%93%D7%95%D7%90%D7%9F/",
            "id": 852,
            "name": "\u05d0\u05d1\u05e8\u05d4\u05dd (\u05d0\u05d1\u05d9) \u05d3\u05d5\u05d0\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 50,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/784/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%9E%D7%99%D7%9B%D7%90%D7%9C%D7%99/",
            "id": 784,
            "name": "\u05d0\u05d1\u05e8\u05d4\u05dd \u05de\u05d9\u05db\u05d0\u05dc\u05d9",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 103,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/28/%D7%90%D7%94%D7%95%D7%93-%D7%91%D7%A8%D7%A7/",
            "id": 28,
            "name": "\u05d0\u05d4\u05d5\u05d3 \u05d1\u05e8\u05e7",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "party_id": 13,
            "party_url": "/party/13/",
            "rank": 173,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/830/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%90%D7%A7%D7%95%D7%A0%D7%99%D7%A1/",
            "id": 830,
            "name": "\u05d0\u05d5\u05e4\u05d9\u05e8 \u05d0\u05e7\u05d5\u05e0\u05d9\u05e1",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 72,
            "score": 60,
            "volume": 30
        }, {
            "absolute_url": "/member/100/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%A4%D7%99%D7%A0%D7%A1-%D7%A4%D7%96/",
            "id": 100,
            "name": "\u05d0\u05d5\u05e4\u05d9\u05e8 \u05e4\u05d9\u05e0\u05e1-\u05e4\u05d6",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 3,
            "party_url": "/party/3/",
            "rank": 156,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/845/%D7%90%D7%95%D7%A8%D7%99-%D7%90%D7%95%D7%A8%D7%91%D7%9A/",
            "id": 845,
            "name": "\u05d0\u05d5\u05e8\u05d9 \u05d0\u05d5\u05e8\u05d1\u05da",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 57,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/713/%D7%90%D7%95%D7%A8%D7%99-%D7%99%D7%94%D7%95%D7%93%D7%94-%D7%90%D7%A8%D7%99%D7%90%D7%9C/",
            "id": 713,
            "name": "\u05d0\u05d5\u05e8\u05d9 \u05d9\u05d4\u05d5\u05d3\u05d4 \u05d0\u05e8\u05d9\u05d0\u05dc",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 132,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/814/%D7%90%D7%95%D7%A8%D7%99-%D7%9E%D7%A7%D7%9C%D7%91/",
            "id": 814,
            "name": "\u05d0\u05d5\u05e8\u05d9 \u05de\u05e7\u05dc\u05d1",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 86,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/822/%D7%90%D7%95%D7%A8%D7%99%D7%AA-%D7%96%D7%95%D7%90%D7%A8%D7%A5/",
            "id": 822,
            "name": "\u05d0\u05d5\u05e8\u05d9\u05ea \u05d6\u05d5\u05d0\u05e8\u05e5",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 80,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/717/%D7%90%D7%95%D7%A8%D7%99%D7%AA-%D7%A0%D7%95%D7%A7%D7%93/",
            "id": 717,
            "name": "\u05d0\u05d5\u05e8\u05d9\u05ea \u05e0\u05d5\u05e7\u05d3",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "party_id": 13,
            "party_url": "/party/13/",
            "rank": 131,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/884/%D7%90%D7%95%D7%A8%D7%99%D7%AA-%D7%A1%D7%98%D7%A8%D7%95%D7%A7/",
            "id": 884,
            "name": "\u05d0\u05d5\u05e8\u05d9\u05ea \u05e1\u05d8\u05e8\u05d5\u05e7",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 21,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/832/%D7%90%D7%95%D7%A8%D7%9C%D7%99-%D7%9C%D7%95%D7%99-%D7%90%D7%91%D7%A7%D7%A1%D7%99%D7%A1/",
            "id": 832,
            "name": "\u05d0\u05d5\u05e8\u05dc\u05d9 \u05dc\u05d5\u05d9-\u05d0\u05d1\u05e7\u05e1\u05d9\u05e1",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 70,
            "score": 10,
            "volume": 20
        }, {
            "absolute_url": "/member/208/%D7%90%D7%97%D7%9E%D7%93-%D7%98%D7%99%D7%91%D7%99/",
            "id": 208,
            "name": "\u05d0\u05d7\u05de\u05d3 \u05d8\u05d9\u05d1\u05d9",
            "numvotes": 0,
            "party": " \u05e8\u05e2\u201d\u05de-\u05ea\u05e2\u201d\u05dc",
            "party_id": 23,
            "party_url": "/party/23/",
            "rank": 142,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/230/%D7%90%D7%99%D7%95%D7%91-%D7%A7%D7%A8%D7%90/",
            "id": 230,
            "name": "\u05d0\u05d9\u05d5\u05d1 \u05e7\u05e8\u05d0",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 135,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/904/%D7%90%D7%99%D7%99%D7%9C%D7%AA-%D7%A9%D7%A7%D7%93/",
            "id": 904,
            "name": "\u05d0\u05d9\u05d9\u05dc\u05ea \u05e9\u05e7\u05d3",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 1,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/200/%D7%90%D7%99%D7%9C%D7%9F-%D7%92%D7%99%D7%9C%D7%90%D7%95%D7%9F/",
            "id": 200,
            "name": "\u05d0\u05d9\u05dc\u05df \u05d2\u05d9\u05dc\u05d0\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 20,
            "party_url": "/party/20/",
            "rank": 146,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/901/%D7%90%D7%99%D7%A6%D7%99%D7%A7-%D7%A9%D7%9E%D7%95%D7%9C%D7%99/",
            "id": 901,
            "name": "\u05d0\u05d9\u05e6\u05d9\u05e7 \u05e9\u05de\u05d5\u05dc\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 4,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/64/%D7%90%D7%99%D7%AA%D7%9F-%D7%9B%D7%91%D7%9C/",
            "id": 64,
            "name": "\u05d0\u05d9\u05ea\u05df \u05db\u05d1\u05dc",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 167,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/854/%D7%90%D7%9B%D7%A8%D7%9D-%D7%97%D7%A1%D7%95%D7%9F/",
            "id": 854,
            "name": "\u05d0\u05db\u05e8\u05dd \u05d7\u05e1\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 48,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/730/%D7%90%D7%9C%D7%99-%D7%90%D7%A4%D7%9C%D7%9C%D7%95/",
            "id": 730,
            "name": "\u05d0\u05dc\u05d9 \u05d0\u05e4\u05dc\u05dc\u05d5",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 124,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/863/%D7%90%D7%9C%D7%99-%D7%91%D7%9F-%D7%93%D7%94%D7%9F/",
            "id": 863,
            "name": "\u05d0\u05dc\u05d9 \u05d1\u05df-\u05d3\u05d4\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 42,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/63/%D7%90%D7%9C%D7%99%D7%94%D7%95-%D7%99%D7%A9%D7%99/",
            "id": 63,
            "name": "\u05d0\u05dc\u05d9\u05d4\u05d5 \u05d9\u05e9\u05d9",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 168,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/785/%D7%90%D7%9C%D7%9B%D7%A1-%D7%9E%D7%99%D7%9C%D7%A8/",
            "id": 785,
            "name": "\u05d0\u05dc\u05db\u05e1 \u05de\u05d9\u05dc\u05e8",
            "numvotes": 0,
            "party": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 5,
            "party_url": "/party/5/",
            "rank": 102,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/899/%D7%90%D7%9C%D7%A2%D7%96%D7%A8-%D7%A9%D7%98%D7%A8%D7%9F/",
            "id": 899,
            "name": "\u05d0\u05dc\u05e2\u05d6\u05e8 \u05e9\u05d8\u05e8\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "party_id": 21,
            "party_url": "/party/21/",
            "rank": 6,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/210/%D7%90%D7%9E%D7%A0%D7%95%D7%9F-%D7%9B%D7%94%D7%9F/",
            "id": 210,
            "name": "\u05d0\u05de\u05e0\u05d5\u05df \u05db\u05d4\u05df",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 141,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/834/%D7%90%D7%A0%D7%A1%D7%98%D7%A1%D7%99%D7%94-%D7%9E%D7%99%D7%9B%D7%90%D7%9C%D7%99/",
            "id": 834,
            "name": "\u05d0\u05e0\u05e1\u05d8\u05e1\u05d9\u05d4 \u05de\u05d9\u05db\u05d0\u05dc\u05d9",
            "numvotes": 0,
            "party": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 5,
            "party_url": "/party/5/",
            "rank": 68,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/882/%D7%90%D7%A8%D7%90%D7%9C-%D7%9E%D7%A8%D7%92%D7%9C%D7%99%D7%AA/",
            "id": 882,
            "name": "\u05d0\u05e8\u05d0\u05dc \u05de\u05e8\u05d2\u05dc\u05d9\u05ea",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 23,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/791/%D7%90%D7%A8%D7%99%D7%90%D7%9C-%D7%90%D7%98%D7%99%D7%90%D7%A1/",
            "id": 791,
            "name": "\u05d0\u05e8\u05d9\u05d0\u05dc \u05d0\u05d8\u05d9\u05d0\u05e1",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 98,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/752/%D7%90%D7%A8%D7%99%D7%94-%D7%90%D7%9C%D7%93%D7%93/",
            "id": 752,
            "name": "\u05d0\u05e8\u05d9\u05d4 \u05d0\u05dc\u05d3\u05d3",
            "numvotes": 0,
            "party": "\u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9",
            "party_id": 1,
            "party_url": "/party/1/",
            "rank": 116,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/821/%D7%90%D7%A8%D7%99%D7%94-%D7%91%D7%99%D7%91%D7%99/",
            "id": 821,
            "name": "\u05d0\u05e8\u05d9\u05d4 \u05d1\u05d9\u05d1\u05d9",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 81,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/41/%D7%90%D7%A8%D7%99%D7%94-%D7%93%D7%A8%D7%A2%D7%99/",
            "id": 41,
            "name": "\u05d0\u05e8\u05d9\u05d4 \u05d3\u05e8\u05e2\u05d9",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 171,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/867/%D7%91%D7%90%D7%A1%D7%9C-%D7%92%D7%98%D7%90%D7%A1/",
            "id": 867,
            "name": "\u05d1\u05d0\u05e1\u05dc \u05d2\u05d8\u05d0\u05e1",
            "numvotes": 0,
            "party": "\u05d1\u05e8\u05d9\u05ea \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea",
            "party_id": 24,
            "party_url": "/party/24/",
            "rank": 38,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/872/%D7%91%D7%95%D7%A2%D7%96-%D7%98%D7%95%D7%A4%D7%95%D7%A8%D7%95%D7%91%D7%A1%D7%A7%D7%99/",
            "id": 872,
            "name": "\u05d1\u05d5\u05e2\u05d6 \u05d8\u05d5\u05e4\u05d5\u05e8\u05d5\u05d1\u05e1\u05e7\u05d9",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 33,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/90/%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F-%D7%A0%D7%AA%D7%A0%D7%99%D7%94%D7%95/",
            "id": 90,
            "name": "\u05d1\u05e0\u05d9\u05de\u05d9\u05df \u05e0\u05ea\u05e0\u05d9\u05d4\u05d5",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 160,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/20/%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F-%D7%A4%D7%95%D7%90%D7%93-%D7%91%D7%9F-%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8/",
            "id": 20,
            "name": "\u05d1\u05e0\u05d9\u05de\u05d9\u05df (\u05e4\u05d5\u05d0\u05d3) \u05d1\u05df-\u05d0\u05dc\u05d9\u05e2\u05d6\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 174,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/725/%D7%92%D7%93%D7%A2%D7%95%D7%9F-%D7%A1%D7%A2%D7%A8/",
            "id": 725,
            "name": "\u05d2\u05d3\u05e2\u05d5\u05df \u05e1\u05e2\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 127,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/96/%D7%92%D7%93%D7%A2%D7%95%D7%9F-%D7%A2%D7%96%D7%A8%D7%90/",
            "id": 96,
            "name": "\u05d2\u05d3\u05e2\u05d5\u05df \u05e2\u05d6\u05e8\u05d0",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 157,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/723/%D7%92%D7%99%D7%9C%D7%94-%D7%92%D7%9E%D7%9C%D7%99%D7%90%D7%9C/",
            "id": 723,
            "name": "\u05d2\u05d9\u05dc\u05d4 \u05d2\u05de\u05dc\u05d9\u05d0\u05dc",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 129,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/734/%D7%92%D7%9C%D7%A2%D7%93-%D7%90%D7%A8%D7%93%D7%9F/",
            "id": 734,
            "name": "\u05d2\u05dc\u05e2\u05d3 \u05d0\u05e8\u05d3\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 122,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/756/%D7%92%D7%9E%D7%90%D7%9C-%D7%96%D7%97%D7%90%D7%9C%D7%A7%D7%94/",
            "id": 756,
            "name": "\u05d2`\u05de\u05d0\u05dc \u05d6\u05d7\u05d0\u05dc\u05e7\u05d4",
            "numvotes": 0,
            "party": "\u05d1\u05e8\u05d9\u05ea \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea",
            "party_id": 24,
            "party_url": "/party/24/",
            "rank": 114,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/780/%D7%93%D7%91-%D7%97%D7%A0%D7%99%D7%9F/",
            "id": 780,
            "name": "\u05d3\u05d1 \u05d7\u05e0\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d7\u05d6\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05dc\u05d5\u05dd \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05df",
            "party_id": 22,
            "party_url": "/party/22/",
            "rank": 106,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/877/%D7%93%D7%91-%D7%9C%D7%99%D7%A4%D7%9E%D7%9F/",
            "id": 877,
            "name": "\u05d3\u05d1 \u05dc\u05d9\u05e4\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 28,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/7/%D7%93%D7%95%D7%93-%D7%90%D7%96%D7%95%D7%9C%D7%90%D7%99/",
            "id": 7,
            "name": "\u05d3\u05d5\u05d3 \u05d0\u05d6\u05d5\u05dc\u05d0\u05d9",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 180,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/890/%D7%93%D7%95%D7%93-%D7%A6%D7%95%D7%A8/",
            "id": 890,
            "name": "\u05d3\u05d5\u05d3 \u05e6\u05d5\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "party_id": 21,
            "party_url": "/party/21/",
            "rank": 15,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/805/%D7%93%D7%95%D7%93-%D7%A8%D7%95%D7%AA%D7%9D/",
            "id": 805,
            "name": "\u05d3\u05d5\u05d3 \u05e8\u05d5\u05ea\u05dd",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 91,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/851/%D7%93%D7%95%D7%A8%D7%95%D7%9F-%D7%90%D7%91%D7%99%D7%98%D7%9C/",
            "id": 851,
            "name": "\u05d3\u05d5\u05e8\u05d5\u05df \u05d0\u05d1\u05d9\u05d8\u05dc",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 51,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/8/%D7%93%D7%9C%D7%99%D7%94-%D7%90%D7%99%D7%A6%D7%99%D7%A7/",
            "id": 8,
            "name": "\u05d3\u05dc\u05d9\u05d4 \u05d0\u05d9\u05e6\u05d9\u05e7",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 179,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/88/%D7%93%D7%9F-%D7%9E%D7%A8%D7%99%D7%93%D7%95%D7%A8/",
            "id": 88,
            "name": "\u05d3\u05df \u05de\u05e8\u05d9\u05d3\u05d5\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 161,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/833/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%90%D7%99%D7%9C%D7%95%D7%9F/",
            "id": 833,
            "name": "\u05d3\u05e0\u05d9\u05d0\u05dc \u05d0\u05d9\u05dc\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 5,
            "party_url": "/party/5/",
            "rank": 69,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/836/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%91%D7%9F-%D7%A1%D7%99%D7%9E%D7%95%D7%9F/",
            "id": 836,
            "name": "\u05d3\u05e0\u05d9\u05d0\u05dc \u05d1\u05df-\u05e1\u05d9\u05de\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 3,
            "party_url": "/party/3/",
            "rank": 66,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/847/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%94%D7%A8%D7%A9%D7%A7%D7%95%D7%91%D7%99%D7%A5/",
            "id": 847,
            "name": "\u05d3\u05e0\u05d9\u05d0\u05dc \u05d4\u05e8\u05e9\u05e7\u05d5\u05d1\u05d9\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 12,
            "party_url": "/party/12/",
            "rank": 55,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/828/%D7%93%D7%A0%D7%99-%D7%93%D7%A0%D7%95%D7%9F/",
            "id": 828,
            "name": "\u05d3\u05e0\u05d9 \u05d3\u05e0\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 74,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/768/%D7%96%D7%90%D7%91-%D7%90%D7%9C%D7%A7%D7%99%D7%9F/",
            "id": 768,
            "name": "\u05d6\u05d0\u05d1 \u05d0\u05dc\u05e7\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 112,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/16/%D7%96%D7%90%D7%91-%D7%91%D7%95%D7%99%D7%9D/",
            "id": 16,
            "name": "\u05d6\u05d0\u05d1 \u05d1\u05d5\u05d9\u05dd",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 175,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/817/%D7%96%D7%90%D7%91-%D7%91%D7%99%D7%9C%D7%A1%D7%A7%D7%99/",
            "id": 817,
            "name": "\u05d6\u05d0\u05d1 \u05d1\u05d9\u05dc\u05e1\u05e7\u05d9",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 85,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/14/%D7%96%D7%90%D7%91-%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F--%D7%91%D7%92%D7%99%D7%9F/",
            "id": 14,
            "name": "\u05d6\u05d0\u05d1 \u05d1\u05e0\u05d9\u05de\u05d9\u05df  \u05d1\u05d2\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 176,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/194/%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F-%D7%90%D7%95%D7%A8%D7%9C%D7%91/",
            "id": 194,
            "name": "\u05d6\u05d1\u05d5\u05dc\u05d5\u05df \u05d0\u05d5\u05e8\u05dc\u05d1",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 12,
            "party_url": "/party/12/",
            "rank": 148,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/893/%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F-%D7%9B%D7%9C%D7%A4%D7%94/",
            "id": 893,
            "name": "\u05d6\u05d1\u05d5\u05dc\u05d5\u05df \u05db\u05dc\u05e4\u05d4",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 12,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/201/%D7%96%D7%94%D7%91%D7%94-%D7%92%D7%9C%D7%90%D7%95%D7%9F/",
            "id": 201,
            "name": "\u05d6\u05d4\u05d1\u05d4 \u05d2\u05dc\u05d0\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 20,
            "party_url": "/party/20/",
            "rank": 145,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/5/%D7%97%D7%99%D7%99%D7%9D-%D7%90%D7%95%D7%A8%D7%95%D7%9F/",
            "id": 5,
            "name": "\u05d7\u05d9\u05d9\u05dd \u05d0\u05d5\u05e8\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 11,
            "party_url": "/party/11/",
            "rank": 181,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/795/%D7%97%D7%99%D7%99%D7%9D-%D7%90%D7%9E%D7%A1%D7%9C%D7%9D/",
            "id": 795,
            "name": "\u05d7\u05d9\u05d9\u05dd \u05d0\u05de\u05e1\u05dc\u05dd",
            "numvotes": 0,
            "party": "\u05e9\"\u05e1",
            "party_id": 7,
            "party_url": "/party/7/",
            "rank": 96,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/212/%D7%97%D7%99%D7%99%D7%9D-%D7%9B%D7%A5/",
            "id": 212,
            "name": "\u05d7\u05d9\u05d9\u05dd \u05db\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 140,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/115/%D7%97%D7%99%D7%99%D7%9D-%D7%A8%D7%9E%D7%95%D7%9F/",
            "id": 115,
            "name": "\u05d7\u05d9\u05d9\u05dd \u05e8\u05de\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 152,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/865/%D7%97%D7%99%D7%9C%D7%99%D7%A7-%D7%91%D7%A8/",
            "id": 865,
            "name": "\u05d7\u05d9\u05dc\u05d9\u05e7 \u05d1\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 40,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/837/%D7%97%D7%9E%D7%93-%D7%A2%D7%9E%D7%90%D7%A8/",
            "id": 837,
            "name": "\u05d7\u05de\u05d3 \u05e2\u05de\u05d0\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 65,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/789/%D7%97%D7%A0%D7%90-%D7%A1%D7%95%D7%99%D7%99%D7%93/",
            "id": 789,
            "name": "\u05d7\u05e0\u05d0 \u05e1\u05d5\u05d9\u05d9\u05d3",
            "numvotes": 0,
            "party": "\u05d7\u05d6\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05dc\u05d5\u05dd \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05df",
            "party_id": 22,
            "party_url": "/party/22/",
            "rank": 100,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/846/%D7%97%D7%A0%D7%99%D7%9F-%D7%96%D7%95%D7%A2%D7%91%D7%99/",
            "id": 846,
            "name": "\u05d7\u05e0\u05d9\u05df \u05d6\u05d5\u05e2\u05d1\u05d9",
            "numvotes": 0,
            "party": "\u05d1\u05e8\u05d9\u05ea \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea",
            "party_id": 24,
            "party_url": "/party/24/",
            "rank": 56,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/857/%D7%98%D7%9C%D7%91-%D7%90%D7%91%D7%95-%D7%A2%D7%A8%D7%90%D7%A8/",
            "id": 857,
            "name": "\u05d8\u05dc\u05d1 \u05d0\u05d1\u05d5 \u05e2\u05e8\u05d0\u05e8",
            "numvotes": 0,
            "party": " \u05e8\u05e2\u201d\u05de-\u05ea\u05e2\u201d\u05dc",
            "party_id": 23,
            "party_url": "/party/23/",
            "rank": 47,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/13/%D7%98%D7%9C%D7%91-%D7%90%D7%9C%D7%A1%D7%90%D7%A0%D7%A2/",
            "id": 13,
            "name": "\u05d8\u05dc\u05d1 \u05d0\u05dc\u05e1\u05d0\u05e0\u05e2",
            "numvotes": 0,
            "party": "\u05e8\u05e2\"\u05de-\u05ea\u05e2\"\u05dc",
            "party_id": 10,
            "party_url": "/party/10/",
            "rank": 177,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/878/%D7%99%D7%90%D7%99%D7%A8-%D7%9C%D7%A4%D7%99%D7%93/",
            "id": 878,
            "name": "\u05d9\u05d0\u05d9\u05e8 \u05dc\u05e4\u05d9\u05d3",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 27,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/902/%D7%99%D7%90%D7%99%D7%A8-%D7%A9%D7%9E%D7%99%D7%A8/",
            "id": 902,
            "name": "\u05d9\u05d0\u05d9\u05e8 \u05e9\u05de\u05d9\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 3,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/772/%D7%99%D7%95%D7%90%D7%9C-%D7%97%D7%A1%D7%95%D7%9F/",
            "id": 772,
            "name": "\u05d9\u05d5\u05d0\u05dc \u05d7\u05e1\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 110,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/897/%D7%99%D7%95%D7%90%D7%9C-%D7%A8%D7%96%D7%91%D7%95%D7%96%D7%95%D7%91/",
            "id": 897,
            "name": "\u05d9\u05d5\u05d0\u05dc \u05e8\u05d6\u05d1\u05d5\u05d6\u05d5\u05d1",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 8,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/853/%D7%99%D7%95%D7%91%D7%9C-%D7%A6%D7%9C%D7%A0%D7%A8/",
            "id": 853,
            "name": "\u05d9\u05d5\u05d1\u05dc \u05e6\u05dc\u05e0\u05e8",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 49,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/695/%D7%99%D7%95%D7%91%D7%9C-%D7%A9%D7%98%D7%99%D7%99%D7%A0%D7%99%D7%A5/",
            "id": 695,
            "name": "\u05d9\u05d5\u05d1\u05dc \u05e9\u05d8\u05d9\u05d9\u05e0\u05d9\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 134,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/809/%D7%99%D7%95%D7%97%D7%A0%D7%9F-%D7%A4%D7%9C%D7%A1%D7%A0%D7%A8/",
            "id": 809,
            "name": "\u05d9\u05d5\u05d7\u05e0\u05df \u05e4\u05dc\u05e1\u05e0\u05e8",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 89,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/848/%D7%99%D7%95%D7%9C%D7%99%D7%94-%D7%A9%D7%9E%D7%90%D7%9C%D7%95%D7%91-%D7%91%D7%A8%D7%A7%D7%95%D7%91%D7%99%D7%A5/",
            "id": 848,
            "name": "\u05d9\u05d5\u05dc\u05d9\u05d4 \u05e9\u05de\u05d0\u05dc\u05d5\u05d1 \u05d1\u05e8\u05e7\u05d5\u05d1\u05d9\u05e5`",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 54,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/1/%D7%99%D7%95%D7%9C%D7%99-%D7%99%D7%95%D7%90%D7%9C-%D7%90%D7%93%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F/",
            "id": 1,
            "name": "\u05d9\u05d5\u05dc\u05d9 - \u05d9\u05d5\u05d0\u05dc \u05d0\u05d3\u05dc\u05e9\u05d8\u05d9\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 182,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/697/%D7%99%D7%95%D7%9C%D7%99-%D7%AA%D7%9E%D7%99%D7%A8/",
            "id": 697,
            "name": "\u05d9\u05d5\u05dc\u05d9 \u05ea\u05de\u05d9\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 3,
            "party_url": "/party/3/",
            "rank": 133,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/898/%D7%99%D7%95%D7%A0%D7%99-%D7%A9%D7%98%D7%91%D7%95%D7%9F/",
            "id": 898,
            "name": "\u05d9\u05d5\u05e0\u05d9 \u05e9\u05d8\u05d1\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 7,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/824/%D7%99%D7%95%D7%A1%D7%99-%D7%A4%D7%9C%D7%93/",
            "id": 824,
            "name": "\u05d9\u05d5\u05e1\u05d9 \u05e4\u05dc\u05d3",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 78,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/868/%D7%99%D7%A2%D7%9C-%D7%92%D7%A8%D7%9E%D7%9F/",
            "id": 868,
            "name": "\u05d9\u05e2\u05dc \u05d2\u05e8\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 37,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/728/%D7%99%D7%A2%D7%A7%D7%91-%D7%90%D7%93%D7%A8%D7%99/",
            "id": 728,
            "name": "\u05d9\u05e2\u05e7\u05d1 \u05d0\u05d3\u05e8\u05d9",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 125,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/861/%D7%99%D7%A2%D7%A7%D7%91-%D7%90%D7%A9%D7%A8/",
            "id": 861,
            "name": "\u05d9\u05e2\u05e7\u05d1 \u05d0\u05e9\u05e8",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 44,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/840/%D7%99%D7%A2%D7%A7%D7%91-%D7%9B%D7%A6%D7%9C%D7%94-%D7%9B%D7%A5/",
            "id": 840,
            "name": "\u05d9\u05e2\u05e7\u05d1 (\u05db\u05e6\u05dc`\u05d4) \u05db\u201d\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9",
            "party_id": 1,
            "party_url": "/party/1/",
            "rank": 62,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/216/%D7%99%D7%A2%D7%A7%D7%91-%D7%9C%D7%99%D7%A6%D7%9E%D7%9F/",
            "id": 216,
            "name": "\u05d9\u05e2\u05e7\u05d1 \u05dc\u05d9\u05e6\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 137,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/751/%D7%99%D7%A2%D7%A7%D7%91-%D7%9E%D7%A8%D7%92%D7%99/",
            "id": 751,
            "name": "\u05d9\u05e2\u05e7\u05d1 \u05de\u05e8\u05d2\u05d9",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 117,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/887/%D7%99%D7%A2%D7%A7%D7%91-%D7%A4%D7%A8%D7%99/",
            "id": 887,
            "name": "\u05d9\u05e2\u05e7\u05d1 \u05e4\u05e8\u05d9",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 18,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/894/%D7%99%D7%A4%D7%A2%D7%AA-%D7%A7%D7%A8%D7%99%D7%91/",
            "id": 894,
            "name": "\u05d9\u05e4\u05e2\u05ea \u05e7\u05e8\u05d9\u05d1",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 11,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/790/%D7%99%D7%A6%D7%97%D7%A7-%D7%90%D7%94%D7%A8%D7%95%D7%A0%D7%95%D7%91%D7%99%D7%A5/",
            "id": 790,
            "name": "\u05d9\u05e6\u05d7\u05e7 \u05d0\u05d4\u05e8\u05d5\u05e0\u05d5\u05d1\u05d9\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 99,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/740/%D7%99%D7%A6%D7%97%D7%A7-%D7%94%D7%A8%D7%A6%D7%95%D7%92/",
            "id": 740,
            "name": "\u05d9\u05e6\u05d7\u05e7 \u05d4\u05e8\u05e6\u05d5\u05d2",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 118,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/50/%D7%99%D7%A6%D7%97%D7%A7-%D7%95%D7%A7%D7%A0%D7%99%D7%9F/",
            "id": 50,
            "name": "\u05d9\u05e6\u05d7\u05e7 \u05d5\u05e7\u05e0\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 169,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/65/%D7%99%D7%A6%D7%97%D7%A7-%D7%9B%D7%94%D7%9F/",
            "id": 65,
            "name": "\u05d9\u05e6\u05d7\u05e7 \u05db\u05d4\u05df",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 166,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/826/%D7%99%D7%A8%D7%99%D7%91-%D7%9C%D7%95%D7%99%D7%9F/",
            "id": 826,
            "name": "\u05d9\u05e8\u05d9\u05d1 \u05dc\u05d5\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 76,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/754/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%90%D7%99%D7%99%D7%9B%D7%9C%D7%A8/",
            "id": 754,
            "name": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d0\u05d9\u05d9\u05db\u05dc\u05e8",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 115,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/781/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%97%D7%A1%D7%95%D7%9F/",
            "id": 781,
            "name": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d7\u05e1\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 25,
            "party_url": "/party/25/",
            "rank": 105,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/69/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%9B%D7%A5/",
            "id": 69,
            "name": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05db\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 165,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/829/%D7%9B%D7%A8%D7%9E%D7%9C-%D7%A9%D7%90%D7%9E%D7%94/",
            "id": 829,
            "name": "\u05db\u05e8\u05de\u05dc \u05e9\u05d0\u05de\u05d4",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 73,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/738/%D7%9C%D7%90%D7%94-%D7%A0%D7%A1/",
            "id": 738,
            "name": "\u05dc\u05d0\u05d4 \u05e0\u05e1",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 120,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/802/%D7%9C%D7%99%D7%94-%D7%A9%D7%9E%D7%98%D7%95%D7%91/",
            "id": 802,
            "name": "\u05dc\u05d9\u05d4 \u05e9\u05de\u05d8\u05d5\u05d1",
            "numvotes": 0,
            "party": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 5,
            "party_url": "/party/5/",
            "rank": 93,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/70/%D7%9C%D7%99%D7%9E%D7%95%D7%A8-%D7%9C%D7%91%D7%A0%D7%AA/",
            "id": 70,
            "name": "\u05dc\u05d9\u05de\u05d5\u05e8 \u05dc\u05d1\u05e0\u05ea",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 164,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/874/%D7%9E%D7%90%D7%99%D7%A8-%D7%9B%D7%94%D7%9F/",
            "id": 874,
            "name": "\u05de\u05d0\u05d9\u05e8 \u05db\u05d4\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 31,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/103/%D7%9E%D7%90%D7%99%D7%A8-%D7%A4%D7%A8%D7%95%D7%A9/",
            "id": 103,
            "name": "\u05de\u05d0\u05d9\u05e8 \u05e4\u05e8\u05d5\u05e9",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 155,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/119/%D7%9E%D7%90%D7%99%D7%A8-%D7%A9%D7%98%D7%A8%D7%99%D7%AA/",
            "id": 119,
            "name": "\u05de\u05d0\u05d9\u05e8 \u05e9\u05d8\u05e8\u05d9\u05ea",
            "numvotes": 0,
            "party": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "party_id": 21,
            "party_url": "/party/21/",
            "rank": 151,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/727/%D7%9E%D7%92%D7%9C%D7%99-%D7%95%D7%94%D7%91%D7%94/",
            "id": 727,
            "name": "\u05de\u05d2\u05dc\u05d9 \u05d5\u05d4\u05d1\u05d4",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 126,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/197/%D7%9E%D7%95%D7%97%D7%9E%D7%93-%D7%91%D7%A8%D7%9B%D7%94/",
            "id": 197,
            "name": "\u05de\u05d5\u05d7\u05de\u05d3 \u05d1\u05e8\u05db\u05d4",
            "numvotes": 0,
            "party": "\u05d7\u05d6\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05dc\u05d5\u05dd \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05df",
            "party_id": 22,
            "party_url": "/party/22/",
            "rank": 147,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/9/%D7%9E%D7%99%D7%9B%D7%90%D7%9C-%D7%90%D7%99%D7%AA%D7%9F/",
            "id": 9,
            "name": "\u05de\u05d9\u05db\u05d0\u05dc \u05d0\u05d9\u05ea\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 178,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/841/%D7%9E%D7%99%D7%9B%D7%90%D7%9C-%D7%91%D7%9F-%D7%90%D7%A8%D7%99/",
            "id": 841,
            "name": "\u05de\u05d9\u05db\u05d0\u05dc \u05d1\u05df-\u05d0\u05e8\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9",
            "party_id": 1,
            "party_url": "/party/1/",
            "rank": 61,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/862/%D7%9E%D7%99%D7%9B%D7%9C-%D7%91%D7%99%D7%A8%D7%9F/",
            "id": 862,
            "name": "\u05de\u05d9\u05db\u05dc \u05d1\u05d9\u05e8\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 43,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/895/%D7%9E%D7%99%D7%9B%D7%9C-%D7%A8%D7%95%D7%96%D7%99%D7%9F/",
            "id": 895,
            "name": "\u05de\u05d9\u05db\u05dc \u05e8\u05d5\u05d6\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 20,
            "party_url": "/party/20/",
            "rank": 10,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/876/%D7%9E%D7%99%D7%A7%D7%99-%D7%9C%D7%95%D7%99/",
            "id": 876,
            "name": "\u05de\u05d9\u05e7\u05d9 \u05dc\u05d5\u05d9",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 29,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/896/%D7%9E%D7%99%D7%A7%D7%99-%D7%A8%D7%95%D7%96%D7%A0%D7%98%D7%9C/",
            "id": 896,
            "name": "\u05de\u05d9\u05e7\u05d9 \u05e8\u05d5\u05d6\u05e0\u05d8\u05dc",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 9,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/831/%D7%9E%D7%99%D7%A8%D7%99-%D7%A8%D7%92%D7%91/",
            "id": 831,
            "name": "\u05de\u05d9\u05e8\u05d9 \u05e8\u05d2\u05d1",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 71,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/839/%D7%9E%D7%A0%D7%97%D7%9D-%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8-%D7%9E%D7%95%D7%96%D7%A1/",
            "id": 839,
            "name": "\u05de\u05e0\u05d7\u05dd \u05d0\u05dc\u05d9\u05e2\u05d6\u05e8 \u05de\u05d5\u05d6\u05e1",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 63,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/844/%D7%9E%D7%A1%D7%A2%D7%95%D7%93-%D7%92%D7%A0%D7%90%D7%99%D7%9D/",
            "id": 844,
            "name": "\u05de\u05e1\u05e2\u05d5\u05d3 \u05d2\u05e0\u05d0\u05d9\u05dd",
            "numvotes": 0,
            "party": " \u05e8\u05e2\u201d\u05de-\u05ea\u05e2\u201d\u05dc",
            "party_id": 23,
            "party_url": "/party/23/",
            "rank": 58,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/881/%D7%9E%D7%A8%D7%91-%D7%9E%D7%99%D7%9B%D7%90%D7%9C%D7%99/",
            "id": 881,
            "name": "\u05de\u05e8\u05d1 \u05de\u05d9\u05db\u05d0\u05dc\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 24,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/873/%D7%9E%D7%A8%D7%93%D7%9B%D7%99-%D7%99%D7%95%D7%92%D7%91/",
            "id": 873,
            "name": "\u05de\u05e8\u05d3\u05db\u05d9 \u05d9\u05d5\u05d2\u05d1",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 32,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/91/%D7%9E%D7%A8%D7%99%D7%A0%D7%94-%D7%A1%D7%95%D7%9C%D7%95%D7%93%D7%A7%D7%99%D7%9F/",
            "id": 91,
            "name": "\u05de\u05e8\u05d9\u05e0\u05d4 \u05e1\u05d5\u05dc\u05d5\u05d3\u05e7\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 159,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/35/%D7%9E%D7%A9%D7%94-%D7%92%D7%A4%D7%A0%D7%99/",
            "id": 35,
            "name": "\u05de\u05e9\u05d4 \u05d2\u05e4\u05e0\u05d9",
            "numvotes": 0,
            "party": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "party_id": 19,
            "party_url": "/party/19/",
            "rank": 172,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/885/%D7%9E%D7%A9%D7%94-%D7%96%D7%9C%D7%9E%D7%9F-%D7%A4%D7%99%D7%99%D7%92%D7%9C%D7%99%D7%9F/",
            "id": 885,
            "name": "\u05de\u05e9\u05d4 \u05d6\u05dc\u05de\u05df \u05e4\u05d9\u05d9\u05d2\u05dc\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 20,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/823/%D7%9E%D7%A9%D7%94-%D7%99%D7%A2%D7%9C%D7%95%D7%9F/",
            "id": 823,
            "name": "\u05de\u05e9\u05d4 \u05d9\u05e2\u05dc\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 79,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/731/%D7%9E%D7%A9%D7%94-%D7%9B%D7%97%D7%9C%D7%95%D7%9F/",
            "id": 731,
            "name": "\u05de\u05e9\u05d4 \u05db\u05d7\u05dc\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 123,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/838/%D7%9E%D7%A9%D7%94-%D7%9E%D7%95%D7%A5-%D7%9E%D7%98%D7%9C%D7%95%D7%9F/",
            "id": 838,
            "name": "\u05de\u05e9\u05d4 \u05de\u05d5\u05e5 \u05de\u05d8\u05dc\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 5,
            "party_url": "/party/5/",
            "rank": 64,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/880/%D7%9E%D7%A9%D7%94-%D7%9E%D7%96%D7%A8%D7%97%D7%99/",
            "id": 880,
            "name": "\u05de\u05e9\u05d4 \u05de\u05d6\u05e8\u05d7\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 25,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/222/%D7%9E%D7%A9%D7%95%D7%9C%D7%9D-%D7%A0%D7%94%D7%A8%D7%99/",
            "id": 222,
            "name": "\u05de\u05e9\u05d5\u05dc\u05dd \u05e0\u05d4\u05e8\u05d9",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 136,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/204/%D7%9E%D7%AA%D7%9F-%D7%95%D7%99%D7%9C%D7%A0%D7%90%D7%99/",
            "id": 204,
            "name": "\u05de\u05ea\u05df \u05d5\u05d9\u05dc\u05e0\u05d0\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "party_id": 13,
            "party_url": "/party/13/",
            "rank": 144,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/818/%D7%A0%D7%97%D7%9E%D7%9F-%D7%A9%D7%99/",
            "id": 818,
            "name": "\u05e0\u05d7\u05de\u05df \u05e9\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 84,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/850/%D7%A0%D7%99%D7%A0%D7%95-%D7%90%D7%91%D7%A1%D7%93%D7%96%D7%94/",
            "id": 850,
            "name": "\u05e0\u05d9\u05e0\u05d5 \u05d0\u05d1\u05e1\u05d3\u05d6\u05d4",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 52,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/92/%D7%A0%D7%99%D7%A1%D7%9F-%D7%A1%D7%9C%D7%95%D7%9E%D7%99%D7%A0%D7%A1%D7%A7%D7%99/",
            "id": 92,
            "name": "\u05e0\u05d9\u05e1\u05df \u05e1\u05dc\u05d5\u05de\u05d9\u05e0\u05e1\u05e7\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 158,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/843/%D7%A0%D7%99%D7%A6%D7%9F-%D7%94%D7%95%D7%A8%D7%95%D7%91%D7%99%D7%A5/",
            "id": 843,
            "name": "\u05e0\u05d9\u05e6\u05df \u05d4\u05d5\u05e8\u05d5\u05d1\u05d9\u05e5",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 20,
            "party_url": "/party/20/",
            "rank": 59,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/206/%D7%A0%D7%A1%D7%99%D7%9D-%D7%96%D7%90%D7%91/",
            "id": 206,
            "name": "\u05e0\u05e1\u05d9\u05dd \u05d6\u05d0\u05d1",
            "numvotes": 0,
            "party": "\u05e9\u201d\u05e1",
            "party_id": 18,
            "party_url": "/party/18/",
            "rank": 143,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/864/%D7%A0%D7%A4%D7%AA%D7%9C%D7%99-%D7%91%D7%A0%D7%98/",
            "id": 864,
            "name": "\u05e0\u05e4\u05ea\u05dc\u05d9 \u05d1\u05e0\u05d8",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 41,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/78/%D7%A1%D7%95%D7%A4%D7%94-%D7%9C%D7%A0%D7%93%D7%91%D7%A8/",
            "id": 78,
            "name": "\u05e1\u05d5\u05e4\u05d4 \u05dc\u05e0\u05d3\u05d1\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 162,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/786/%D7%A1%D7%98%D7%A1-%D7%9E%D7%99%D7%A1%D7%96%D7%A0%D7%99%D7%A7%D7%95%D7%91/",
            "id": 786,
            "name": "\u05e1\u05d8\u05e1 \u05de\u05d9\u05e1\u05d6`\u05e0\u05d9\u05e7\u05d5\u05d1",
            "numvotes": 0,
            "party": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 5,
            "party_url": "/party/5/",
            "rank": 101,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/122/%D7%A1%D7%99%D7%9C%D7%91%D7%9F-%D7%A9%D7%9C%D7%95%D7%9D/",
            "id": 122,
            "name": "\u05e1\u05d9\u05dc\u05d1\u05df \u05e9\u05dc\u05d5\u05dd",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 150,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/807/%D7%A1%D7%A2%D7%99%D7%93-%D7%A0%D7%A4%D7%90%D7%A2/",
            "id": 807,
            "name": "\u05e1\u05e2\u05d9\u05d3 \u05e0\u05e4\u05d0\u05e2",
            "numvotes": 0,
            "party": "\u05d1\u05dc\"\u05d3",
            "party_id": 9,
            "party_url": "/party/9/",
            "rank": 90,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/903/%D7%A1%D7%AA%D7%99%D7%95-%D7%A9%D7%A4%D7%99%D7%A8/",
            "id": 903,
            "name": "\u05e1\u05ea\u05d9\u05d5 \u05e9\u05e4\u05d9\u05e8",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 2,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/891/%D7%A2%D7%93%D7%99-%D7%A7%D7%95%D7%9C/",
            "id": 891,
            "name": "\u05e2\u05d3\u05d9 \u05e7\u05d5\u05dc",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 14,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/77/%D7%A2%D7%95%D7%96%D7%99-%D7%9C%D7%A0%D7%93%D7%90%D7%95/",
            "id": 77,
            "name": "\u05e2\u05d5\u05d6\u05d9 \u05dc\u05e0\u05d3\u05d0\u05d5",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 163,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/849/%D7%A2%D7%99%D7%A0%D7%AA-%D7%95%D7%99%D7%9C%D7%A3/",
            "id": 849,
            "name": "\u05e2\u05d9\u05e0\u05ea \u05d5\u05d9\u05dc\u05e3",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "party_id": 13,
            "party_url": "/party/13/",
            "rank": 53,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/888/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99-%D7%A4%D7%A8%D7%99%D7%92/",
            "id": 888,
            "name": "\u05e2\u05d9\u05e1\u05d0\u05d5\u05d5\u05d9 \u05e4\u05e8\u05d9\u05d2`",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 20,
            "party_url": "/party/20/",
            "rank": 17,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/875/%D7%A2%D7%9C%D7%99%D7%96%D7%94-%D7%9C%D7%91%D7%99%D7%90/",
            "id": 875,
            "name": "\u05e2\u05dc\u05d9\u05d6\u05d4 \u05dc\u05d1\u05d9\u05d0",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 30,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/105/%D7%A2%D7%9E%D7%99%D7%A8-%D7%A4%D7%A8%D7%A5/",
            "id": 105,
            "name": "\u05e2\u05de\u05d9\u05e8 \u05e4\u05e8\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "party_id": 21,
            "party_url": "/party/21/",
            "rank": 154,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/866/%D7%A2%D7%9E%D7%A8-%D7%91%D7%A8-%D7%9C%D7%91/",
            "id": 866,
            "name": "\u05e2\u05de\u05e8 \u05d1\u05e8-\u05dc\u05d1",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 39,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/739/%D7%A2%D7%9E%D7%A8%D7%9D-%D7%9E%D7%A6%D7%A0%D7%A2/",
            "id": 739,
            "name": "\u05e2\u05de\u05e8\u05dd \u05de\u05e6\u05e0\u05e2",
            "numvotes": 0,
            "party": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "party_id": 21,
            "party_url": "/party/21/",
            "rank": 119,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/842/%D7%A2%D7%A4%D7%95-%D7%90%D7%92%D7%91%D7%90%D7%A8%D7%99%D7%94/",
            "id": 842,
            "name": "\u05e2\u05e4\u05d5 \u05d0\u05d2\u05d1\u05d0\u05e8\u05d9\u05d4",
            "numvotes": 0,
            "party": "\u05d7\u05d6\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05dc\u05d5\u05dd \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05df",
            "party_id": 22,
            "party_url": "/party/22/",
            "rank": 60,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/900/%D7%A2%D7%A4%D7%A8-%D7%A9%D7%9C%D7%97/",
            "id": 900,
            "name": "\u05e2\u05e4\u05e8 \u05e9\u05dc\u05d7",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 5,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/776/%D7%A2%D7%AA%D7%A0%D7%99%D7%90%D7%9C-%D7%A9%D7%A0%D7%9C%D7%A8/",
            "id": 776,
            "name": "\u05e2\u05ea\u05e0\u05d9\u05d0\u05dc \u05e9\u05e0\u05dc\u05e8",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 107,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/835/%D7%A4%D7%90%D7%99%D7%A0%D7%94-%D7%A4%D7%A0%D7%99%D7%94-%D7%A7%D7%99%D7%A8%D7%A9%D7%A0%D7%91%D7%90%D7%95%D7%9D/",
            "id": 835,
            "name": "\u05e4\u05d0\u05d9\u05e0\u05d4 (\u05e4\u05e0\u05d9\u05d4) \u05e7\u05d9\u05e8\u05e9\u05e0\u05d1\u05d0\u05d5\u05dd",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 67,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/905/%D7%A4%D7%A0%D7%99%D7%A0%D7%94-%D7%AA%D7%9E%D7%A0%D7%95-%D7%A9%D7%98%D7%94/",
            "id": 905,
            "name": "\u05e4\u05e0\u05d9\u05e0\u05d4 \u05ea\u05de\u05e0\u05d5-\u05e9\u05d8\u05d4",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 0,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/45/%D7%A6%D7%97%D7%99-%D7%94%D7%A0%D7%92%D7%91%D7%99/",
            "id": 45,
            "name": "\u05e6\u05d7\u05d9 \u05d4\u05e0\u05d2\u05d1\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 170,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/827/%D7%A6%D7%99%D7%95%D7%9F-%D7%A4%D7%99%D7%A0%D7%99%D7%90%D7%9F/",
            "id": 827,
            "name": "\u05e6\u05d9\u05d5\u05df \u05e4\u05d9\u05e0\u05d9\u05d0\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "party_id": 2,
            "party_url": "/party/2/",
            "rank": 75,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/825/%D7%A6%D7%99%D7%A4%D7%99-%D7%97%D7%95%D7%98%D7%95%D7%91%D7%9C%D7%99/",
            "id": 825,
            "name": "\u05e6\u05d9\u05e4\u05d9 \u05d7\u05d5\u05d8\u05d5\u05d1\u05dc\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 77,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/213/%D7%A6%D7%99%D7%A4%D7%99-%D7%9C%D7%91%D7%A0%D7%99/",
            "id": 213,
            "name": "\u05e6\u05d9\u05e4\u05d9 \u05dc\u05d1\u05e0\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "party_id": 21,
            "party_url": "/party/21/",
            "rank": 139,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/860/%D7%A7%D7%90%D7%A8%D7%99%D7%9F-%D7%90%D7%9C%D7%94%D7%A8%D7%A8/",
            "id": 860,
            "name": "\u05e7\u05d0\u05e8\u05d9\u05df \u05d0\u05dc\u05d4\u05e8\u05e8",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 45,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/114/%D7%A8%D7%90%D7%95%D7%91%D7%9F-%D7%A8%D7%99%D7%91%D7%9C%D7%99%D7%9F/",
            "id": 114,
            "name": "\u05e8\u05d0\u05d5\u05d1\u05df \u05e8\u05d9\u05d1\u05dc\u05d9\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 153,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/758/%D7%A8%D7%90%D7%9C%D7%91-%D7%9E%D7%92%D7%90%D7%93%D7%9C%D7%94/",
            "id": 758,
            "name": "\u05e8\u05d0\u05dc\u05d1 \u05de\u05d2`\u05d0\u05d3\u05dc\u05d4",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 3,
            "party_url": "/party/3/",
            "rank": 113,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/793/%D7%A8%D7%95%D7%91%D7%A8%D7%98-%D7%90%D7%99%D7%9C%D7%98%D7%95%D7%91/",
            "id": 793,
            "name": "\u05e8\u05d5\u05d1\u05e8\u05d8 \u05d0\u05d9\u05dc\u05d8\u05d5\u05d1",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 97,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/819/%D7%A8%D7%95%D7%91%D7%A8%D7%98-%D7%98%D7%99%D7%91%D7%99%D7%99%D7%91/",
            "id": 819,
            "name": "\u05e8\u05d5\u05d1\u05e8\u05d8 \u05d8\u05d9\u05d1\u05d9\u05d9\u05d1",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 83,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/724/%D7%A8%D7%95%D7%97%D7%9E%D7%94-%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%91%D7%9C%D7%99%D7%9C%D7%90/",
            "id": 724,
            "name": "\u05e8\u05d5\u05d7\u05de\u05d4 \u05d0\u05d1\u05e8\u05d4\u05dd \u05d1\u05dc\u05d9\u05dc\u05d0",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 128,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/735/%D7%A8%D7%95%D7%A0%D7%99-%D7%91%D7%A8-%D7%90%D7%95%D7%9F/",
            "id": 735,
            "name": "\u05e8\u05d5\u05e0\u05d9 \u05d1\u05e8-\u05d0\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 121,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/774/%D7%A8%D7%95%D7%A0%D7%99%D7%AA-%D7%AA%D7%99%D7%A8%D7%95%D7%A9/",
            "id": 774,
            "name": "\u05e8\u05d5\u05e0\u05d9\u05ea \u05ea\u05d9\u05e8\u05d5\u05e9",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 108,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/869/%D7%A8%D7%95%D7%A0%D7%9F-%D7%94%D7%95%D7%A4%D7%9E%D7%9F/",
            "id": 869,
            "name": "\u05e8\u05d5\u05e0\u05df \u05d4\u05d5\u05e4\u05de\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 36,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/892/%D7%A8%D7%95%D7%AA-%D7%A7%D7%9C%D7%93%D7%A8%D7%95%D7%9F/",
            "id": 892,
            "name": "\u05e8\u05d5\u05ea \u05e7\u05dc\u05d3\u05e8\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 13,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/820/%D7%A8%D7%97%D7%9C-%D7%90%D7%93%D7%98%D7%95/",
            "id": 820,
            "name": "\u05e8\u05d7\u05dc \u05d0\u05d3\u05d8\u05d5",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 82,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/889/%D7%A8%D7%99%D7%A0%D7%94-%D7%A4%D7%A8%D7%A0%D7%A7%D7%9C/",
            "id": 889,
            "name": "\u05e8\u05d9\u05e0\u05d4 \u05e4\u05e8\u05e0\u05e7\u05dc",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 16,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/720/%D7%A9%D7%90%D7%95%D7%9C-%D7%9E%D7%95%D7%A4%D7%96/",
            "id": 720,
            "name": "\u05e9\u05d0\u05d5\u05dc \u05de\u05d5\u05e4\u05d6",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 25,
            "party_url": "/party/25/",
            "rank": 130,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/879/%D7%A9%D7%95%D7%9C%D7%99-%D7%9E%D7%95%D7%A2%D7%9C%D7%9D-%D7%A8%D7%A4%D7%90%D7%9C%D7%99/",
            "id": 879,
            "name": "\u05e9\u05d5\u05dc\u05d9 \u05de\u05d5\u05e2\u05dc\u05dd-\u05e8\u05e4\u05d0\u05dc\u05d9",
            "numvotes": 0,
            "party": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "party_id": 17,
            "party_url": "/party/17/",
            "rank": 26,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/804/%D7%A9%D7%99-%D7%97%D7%A8%D7%9E%D7%A9/",
            "id": 804,
            "name": "\u05e9\u05d9 \u05d7\u05e8\u05de\u05e9",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 92,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/886/%D7%A9%D7%99-%D7%A4%D7%99%D7%A8%D7%95%D7%9F/",
            "id": 886,
            "name": "\u05e9\u05d9 \u05e4\u05d9\u05e8\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 19,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/812/%D7%A9%D7%9B%D7%99%D7%91-%D7%A9%D7%A0%D7%90%D7%9F/",
            "id": 812,
            "name": "\u05e9\u05db\u05d9\u05d1 \u05e9\u05e0\u05d0\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "party_id": 13,
            "party_url": "/party/13/",
            "rank": 87,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/123/%D7%A9%D7%9C%D7%95%D7%9D-%D7%A9%D7%9E%D7%97%D7%95%D7%9F/",
            "id": 123,
            "name": "\u05e9\u05dc\u05d5\u05dd \u05e9\u05de\u05d7\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "party_id": 13,
            "party_url": "/party/13/",
            "rank": 149,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/782/%D7%A9%D7%9C%D7%99-%D7%99%D7%97%D7%99%D7%9E%D7%95%D7%91%D7%99%D7%A5/",
            "id": 782,
            "name": "\u05e9\u05dc\u05d9 \u05d9\u05d7\u05d9\u05de\u05d5\u05d1\u05d9\u05e5",
            "numvotes": 0,
            "party": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "party_id": 16,
            "party_url": "/party/16/",
            "rank": 104,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/810/%D7%A9%D7%9C%D7%9E%D7%94-%D7%A0%D7%92%D7%95%D7%A1%D7%94-%D7%9E%D7%95%D7%9C%D7%94/",
            "id": 810,
            "name": "\u05e9\u05dc\u05de\u05d4 (\u05e0\u05d2\u05d5\u05e1\u05d4) \u05de\u05d5\u05dc\u05d4",
            "numvotes": 0,
            "party": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "party_id": 6,
            "party_url": "/party/6/",
            "rank": 88,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/859/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F-%D7%90%D7%95%D7%97%D7%99%D7%95%D7%9F/",
            "id": 859,
            "name": "\u05e9\u05de\u05e2\u05d5\u05df \u05d0\u05d5\u05d7\u05d9\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "party_id": 14,
            "party_url": "/party/14/",
            "rank": 46,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/883/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F-%D7%A1%D7%95%D7%9C%D7%95%D7%9E%D7%95%D7%9F/",
            "id": 883,
            "name": "\u05e9\u05de\u05e2\u05d5\u05df \u05e1\u05d5\u05dc\u05d5\u05de\u05d5\u05df",
            "numvotes": 0,
            "party": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "party_id": 15,
            "party_url": "/party/15/",
            "rank": 22,
            "score": 0,
            "volume": 0
        }, {
            "absolute_url": "/member/871/%D7%AA%D7%9E%D7%A8-%D7%96%D7%A0%D7%93%D7%91%D7%A8%D7%92/",
            "id": 871,
            "name": "\u05ea\u05de\u05e8 \u05d6\u05e0\u05d3\u05d1\u05e8\u05d2",
            "numvotes": 0,
            "party": "\u05de\u05e8\u05e6",
            "party_id": 20,
            "party_url": "/party/20/",
            "rank": 34,
            "score": 0,
            "volume": 0
        }],
        "name": "\u05e7\u05d9\u05d3\u05d5\u05dd \u05d7\u05d9\u05e0\u05d5\u05da \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9 \u05d0\u05d9\u05db\u05d5\u05ea\u05d9",
        "num_followers": 33,
        "parties": [{
            "absolute_url": "/party/14/",
            "name": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3 \u2013 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "score": 19.2,
            "volume": 25.11
        }, {
            "absolute_url": "/party/6/",
            "name": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "score": 11.64,
            "volume": 14.29
        }, {
            "absolute_url": "/party/2/",
            "name": "\u05d4\u05dc\u05d9\u05db\u05d5\u05d3",
            "score": 3.55,
            "volume": 8.53
        }, {
            "absolute_url": "/party/15/",
            "name": "\u05d9\u05e9 \u05e2\u05ea\u05d9\u05d3",
            "score": 0.0,
            "volume": 0.0
        }, {
            "absolute_url": "/party/16/",
            "name": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "score": 4.82,
            "volume": 8.12
        }, {
            "absolute_url": "/party/5/",
            "name": "\u05d9\u05e9\u05e8\u05d0\u05dc \u05d1\u05d9\u05ea\u05e0\u05d5",
            "score": 11.87,
            "volume": 13.91
        }, {
            "absolute_url": "/party/17/",
            "name": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "score": 3.52,
            "volume": 3.62
        }, {
            "absolute_url": "/party/18/",
            "name": "\u05e9\u201d\u05e1",
            "score": 5.17,
            "volume": 23.32
        }, {
            "absolute_url": "/party/7/",
            "name": "\u05e9\"\u05e1",
            "score": 0.0,
            "volume": 0.4
        }, {
            "absolute_url": "/party/3/",
            "name": "\u05d4\u05e2\u05d1\u05d5\u05d3\u05d4",
            "score": 1.22,
            "volume": 4.35
        }, {
            "absolute_url": "/party/19/",
            "name": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "score": 13.47,
            "volume": 24.84
        }, {
            "absolute_url": "/party/21/",
            "name": "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4",
            "score": 2.44,
            "volume": 4.35
        }, {
            "absolute_url": "/party/20/",
            "name": "\u05de\u05e8\u05e6",
            "score": 8.13,
            "volume": 9.42
        }, {
            "absolute_url": "/party/13/",
            "name": "\u05d4\u05e2\u05e6\u05de\u05d0\u05d5\u05ea",
            "score": 10.89,
            "volume": 16.52
        }, {
            "absolute_url": "/party/4/",
            "name": "\u05d9\u05d4\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e8\u05d4",
            "score": 0.0,
            "volume": 0.0
        }, {
            "absolute_url": "/party/8/",
            "name": "\u05d7\u05d3\"\u05e9",
            "score": 0.0,
            "volume": 0.0
        }, {
            "absolute_url": "/party/10/",
            "name": "\u05e8\u05e2\"\u05de-\u05ea\u05e2\"\u05dc",
            "score": 0.0,
            "volume": 1.09
        }, {
            "absolute_url": "/party/22/",
            "name": "\u05d7\u05d6\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05dc\u05d5\u05dd \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05df",
            "score": 4.88,
            "volume": 17.39
        }, {
            "absolute_url": "/party/23/",
            "name": " \u05e8\u05e2\u201d\u05de-\u05ea\u05e2\u201d\u05dc",
            "score": 6.1,
            "volume": 10.87
        }, {
            "absolute_url": "/party/1/",
            "name": "\u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9",
            "score": 15.85,
            "volume": 14.13
        }, {
            "absolute_url": "/party/11/",
            "name": "\u05de\u05e8\u05e6",
            "score": 0.0,
            "volume": 0.0
        }, {
            "absolute_url": "/party/9/",
            "name": "\u05d1\u05dc\"\u05d3",
            "score": 5.15,
            "volume": 7.25
        }, {
            "absolute_url": "/party/24/",
            "name": "\u05d1\u05e8\u05d9\u05ea \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea",
            "score": -2.44,
            "volume": 5.8
        }, {
            "absolute_url": "/party/12/",
            "name": "\u05d4\u05d1\u05d9\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9",
            "score": 23.31,
            "volume": 21.74
        }, {
            "absolute_url": "/party/25/",
            "name": "\u05e7\u05d3\u05d9\u05de\u05d4",
            "score": 12.2,
            "volume": 8.7
        }],
        "public_owner_name": "\u05d7\u05d9\u05e0\u05d5\u05da \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9",
        "ranges": [{}],
        "resource_uri": "/api/v2/agenda/61/",
        "votes": [{
            "id": 4240,
            "importance": 0.0,
            "reasoning": "",
            "score": -1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05de\u05d8\u05e8\u05d5\u05ea \u05d7\u05d9\u05e0\u05d5\u05da), \u05d4\u05ea\u05e9\u05e2\"\u05d0-2011"
        }, {
            "id": 956,
            "importance": 0.0,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d0\u05d9\u05e1\u05d5\u05e8 \u05de\u05db\u05d9\u05e8\u05ea \u05e1\u05e4\u05e8 \u05dc\u05d9\u05de\u05d5\u05d3 \u05d1\u05de\u05d0\u05e8\u05d6), \u05d4\u05ea\u05e9\"\u05e2-2009"
        }, {
            "id": 4296,
            "importance": 0.0,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05d0\u05d9\u05e9\u05d5\u05e8 \u05d4\u05d7\u05d5\u05e7 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df \u05de\u05e1` 14), \u05d4\u05ea\u05e9\u05e2\"\u05d1-2011 "
        }, {
            "id": 4368,
            "importance": 0.0,
            "reasoning": "\u05d0\u05d9\u05df \u05e6\u05d5\u05e8\u05da \u05dc\u05e7\u05d1\u05d5\u05e2 \u05d6\u05d5\u05d8\u05d5\u05ea \u05d1\u05d7\u05d5\u05e7. \u05d4\u05de\u05e0\u05d4\u05dc/\u05ea \u05d5\u05d4\u05de\u05d5\u05e8\u05d9\u05dd \u05d1\u05db\u05dc \u05d1\u05d9\u05ea \u05e1\u05e4\u05e8 \u05e7\u05d5\u05d1\u05e2\u05d9\u05dd \u05d0\u05ea \u05d4\u05e0\u05d4\u05dc\u05d9\u05dd \u05de\u05ea\u05d5\u05da \u05e8\u05d0\u05d9\u05d4 \u05e4\u05d3\u05d2\u05d5\u05d2\u05d9\u05ea. \u05d4\u05e9\u05d9\u05de\u05d5\u05e9 \u05d4\u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9 \u05d1\u05de\u05d9\u05dc\u05d9\u05dd \u05d4\u05e9\u05e8 \u05d9\u05e7\u05d1\u05e2 \u05e8\u05d0\u05d5\u05d9 \u05e9\u05d9\u05d9\u05e4\u05e1\u05e7",
            "score": -1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05dc\u05d0\u05d9\u05e1\u05d5\u05e8 \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05d8\u05dc\u05e4\u05d5\u05e0\u05d9\u05dd \u05e0\u05d9\u05d9\u05d3\u05d9\u05dd \u05d1\u05de\u05d5\u05e1\u05d3\u05d5\u05ea \u05d7\u05d9\u05e0\u05d5\u05da, \u05d4\u05ea\u05e9\"\u05e2-2009"
        }, {
            "id": 4405,
            "importance": 0.0,
            "reasoning": "",
            "score": 0.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d4\u05d1\u05d9\u05d8\u05d5\u05d7 \u05d4\u05dc\u05d0\u05d5\u05de\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df \u05de\u05e1` 135) (\u05de\u05d9\u05de\u05d5\u05df \u05e4\u05e2\u05d5\u05dc\u05d5\u05ea \u05dc\u05e4\u05d9\u05ea\u05d5\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05dc\u05d9\u05dc\u05d3\u05d9\u05dd \u05d1\u05e1\u05d9\u05db\u05d5\u05df), \u05d4\u05ea\u05e9\u05e2\"\u05d1-2011"
        }, {
            "id": 4421,
            "importance": 0.0,
            "reasoning": "\u05d0\u05d9\u05df \u05de\u05d9\u05d3\u05e2",
            "score": 0.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05d4 \u05dc\u05e1\u05d3\u05e8 \u05d4\u05d9\u05d5\u05dd \u05d1\u05e0\u05d5\u05e9\u05d0: \"\u05d4\u05d3\u05d5\"\u05d7 \u05d4\u05e9\u05e0\u05ea\u05d9 \u05e9\u05dc \u05d4\u05de\u05d5\u05e2\u05e6\u05d4 \u05dc\u05e9\u05dc\u05d5\u05dd \u05d4\u05d9\u05dc\u05d3\""
        }, {
            "id": 4429,
            "importance": 0.6,
            "reasoning": "\u05dc\u05d4\u05e1\u05d3\u05e8\u05ea \u05de\u05e2\u05de\u05d3 \u05d4\u05d4\u05d5\u05e8\u05d9\u05dd \u05d1\u05d7\u05d5\u05e7 \u05d9\u05e9 \u05d7\u05e9\u05d9\u05d1\u05d5\u05ea \u05d2\u05d3\u05d5\u05dc\u05d4, \u05d1\u05d3\u05d5\u05de\u05d4 \u05dc\u05d7\u05e7\u05d9\u05e7\u05d4 \u05d1\u05e8\u05d1 \u05de\u05d3\u05d9\u05e0\u05d5\u05ea \u05d4\u05e2\u05d5\u05dc\u05dd \u05d4\u05de\u05e2\u05e8\u05d1\u05d9 \u05e9\u05d1\u05d9\u05e6\u05e2\u05d5 \u05e8\u05e4\u05d5\u05e8\u05de\u05d5\u05ea \u05de\u05d5\u05e6\u05dc\u05d7\u05d5\u05ea \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05d7\u05d9\u05e0\u05d5\u05da. \u05db\u05d9\u05d5\u05d5\u05df \u05e9\u05d0\u05d9\u05df \u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8 \u05e2\u05dc \u05e0\u05d5\u05e1\u05d7 \u05d4\u05d4\u05e6\u05e2\u05d4, \u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e7\u05d1\u05d5\u05e2 \u05e2\u05de\u05d3\u05d4 \u05d1\u05e2\u05e0\u05d9\u05d9\u05df. \u05e0\u05d0 \u05d4\u05e9\u05dc\u05d9\u05de\u05d5 \u05d0\u05ea \u05d4\u05d7\u05e1\u05e8",
            "score": 0.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e0\u05d5\u05e9\u05d0 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05d4 \u05dc\u05e1\u05d3\u05e8-\u05d4\u05d9\u05d5\u05dd \u05d1\u05e0\u05d5\u05e9\u05d0: \"\u05d4\u05e1\u05d3\u05e8\u05ea \u05de\u05e2\u05de\u05d3 \u05d4\u05d5\u05e8\u05d9\u05dd \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05d7\u05d9\u05e0\u05d5\u05da\""
        }, {
            "id": 4691,
            "importance": 0.0,
            "reasoning": "",
            "score": 0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e0\u05d5\u05e9\u05d0 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d4\u05d9\u05d5\u05dd \u05dc\u05e6\u05d9\u05d5\u05df \u05d4\u05de\u05d0\u05d1\u05e7 \u05d1\u05e2\u05d5\u05e0\u05d9, \u05d4\u05ea\u05e9\u05e2\"\u05d1-2011"
        }, {
            "id": 4882,
            "importance": 0.3,
            "reasoning": "",
            "score": -1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d4\u05e9\u05d0\u05dc\u05ea \u05e1\u05e4\u05e8\u05d9 \u05dc\u05d9\u05de\u05d5\u05d3 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d7\u05d5\u05d1\u05ea \u05d4\u05e9\u05d0\u05dc\u05ea \u05e1\u05e4\u05e8\u05d9 \u05dc\u05d9\u05de\u05d5\u05d3), \u05d4\u05ea\u05e9\"\u05e2-2009"
        }, {
            "id": 5000,
            "importance": 0.6,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d4\u05de\u05ea\"\u05dc - \u05de\u05d5\u05e8\u05d4 \u05de\u05d0\u05d1\u05d7\u05df \u05d1\u05ea\u05e4\u05e7\u05d5\u05d3\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05d7\u05d9\u05e0\u05d5\u05da, \u05d4\u05ea\u05e9\"\u05e2-2009"
        }, {
            "id": 5093,
            "importance": 0.3,
            "reasoning": "",
            "score": -0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d9\u05d9\u05e6\u05d5\u05d2 \u05d4\u05e2\u05e8\u05d1\u05d9\u05dd \u05d1\u05d5\u05d5\u05e2\u05d3 \u05d4\u05d7\u05d9\u05e0\u05d5\u05da), \u05d4\u05ea\u05e9\u05e1\"\u05d8-2009"
        }, {
            "id": 5208,
            "importance": 0.6,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e0\u05d5\u05e9\u05d0 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d4\u05ea\u05dc\u05de\u05d9\u05d3 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d0\u05d9\u05e1\u05d5\u05e8 \u05d4\u05ea\u05e0\u05d9\u05d9\u05ea \u05d6\u05db\u05d5\u05ea \u05d4\u05dc\u05d9\u05de\u05d5\u05d3 \u05d1\u05ea\u05e9\u05dc\u05d5\u05dd), \u05d4\u05ea\u05e9\u05e2\"\u05d1-2012"
        }, {
            "id": 5233,
            "importance": 0.3,
            "reasoning": "",
            "score": 0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df \u05de\u05e1` 16) (\u05e1\u05e4\u05e8\u05d9 \u05dc\u05d9\u05de\u05d5\u05d3 \u05de\u05d0\u05d5\u05e9\u05e8\u05d9\u05dd), \u05d4\u05ea\u05e9\u05e2\"\u05d1-2012"
        }, {
            "id": 5295,
            "importance": 0.0,
            "reasoning": "",
            "score": -0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 \u05e9\u05ea\u05e7\u05d1\u05e2 \u05d5\u05e2\u05d3\u05ea \u05d4\u05db\u05e0\u05e1\u05ea - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05e9\u05d5\u05d5\u05d9\u05d5\u05df \u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05e2\u05dd \u05de\u05d5\u05d2\u05d1\u05dc\u05d5\u05ea (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d4\u05d5\u05e8\u05d0\u05d5\u05ea \u05dc\u05e2\u05e0\u05d9\u05d9\u05df \u05de\u05d5\u05e1\u05d3 \u05e2\u05dc-\u05ea\u05d9\u05db\u05d5\u05e0\u05d9 \u05dc\u05d4\u05e9\u05db\u05dc\u05d4 \u05ea\u05d5\u05e8\u05e0\u05d9\u05ea \u05d0\u05d5 \u05d3\u05ea\u05d9\u05ea), \u05d4\u05ea\u05e9\u05e2\"\u05d1-2012"
        }, {
            "id": 3906,
            "importance": 0.6,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d4\u05e8\u05e9\u05d5\u05d9\u05d5\u05ea \u05d4\u05de\u05e7\u05d5\u05de\u05d9\u05d5\u05ea (\u05d9\u05d9\u05e2\u05d5\u05d3 \u05db\u05e1\u05e4\u05d9 \u05d4\u05e7\u05e6\u05d1\u05d5\u05ea \u05d5\u05d4\u05d2\u05e0\u05ea \u05e0\u05db\u05e1\u05d9\u05dd \u05dc\u05de\u05d8\u05e8\u05d5\u05ea \u05d7\u05d9\u05e0\u05d5\u05da) (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d4\u05d7\u05dc\u05ea \u05d4\u05d7\u05d5\u05e7 \u05e2\u05dc \u05d1\u05e2\u05dc \u05de\u05d5\u05e1\u05d3 \u05d7\u05d9\u05e0\u05d5\u05da), \u05d4\u05ea\u05e9\u05e2\"\u05d0-2011 "
        }, {
            "id": 1509,
            "importance": 0.3,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05d0\u05d9\u05e9\u05d5\u05e8 \u05d4\u05d7\u05d5\u05e7 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df \u05de\u05e1` 12), \u05d4\u05ea\u05e9\"\u05e2-2010"
        }, {
            "id": 121,
            "importance": 0.6,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d1\u05d9\u05e7\u05d5\u05e8\u05d9 \u05ea\u05dc\u05de\u05d9\u05d3\u05d9\u05dd \u05d1\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd, \u05d4\u05ea\u05e9\u05e1\"\u05d8-2009    "
        }, {
            "id": 3860,
            "importance": 0.3,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d4\u05de\u05d5\u05d6\u05d9\u05d0\u05d5\u05e0\u05d9\u05dd (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d1\u05d9\u05e7\u05d5\u05e8\u05d9 \u05e0\u05d5\u05e2\u05e8), \u05d4\u05ea\u05e9\u05e2\"\u05d0-2011"
        }, {
            "id": 3796,
            "importance": 1.0,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05d0\u05d9\u05e9\u05d5\u05e8 \u05d4\u05d7\u05d5\u05e7 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d4\u05ea\u05dc\u05de\u05d9\u05d3 (\u05ea\u05d9\u05e7\u05d5\u05df \u05de\u05e1` 3), \u05d4\u05ea\u05e9\u05e2\"\u05d0-2011"
        }, {
            "id": 4376,
            "importance": 0.6,
            "reasoning": "",
            "score": 0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 \u05e9\u05ea\u05e7\u05d1\u05e2 \u05d5\u05e2\u05d3\u05ea \u05d4\u05db\u05e0\u05e1\u05ea - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05de\u05e2\u05e0\u05e7 \u05d9\u05d5\u05d1\u05dc \u05dc\u05e2\u05d5\u05d1\u05d3\u05d9 \u05d4\u05d5\u05e8\u05d0\u05d4 \u05e2\u05d5\u05dc\u05d9\u05dd, \u05d4\u05ea\u05e9\u05e2\"\u05d0-2011"
        }, {
            "id": 2007,
            "importance": 1.0,
            "reasoning": "",
            "score": 0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05de\u05d9\u05e0\u05d5\u05d9 \u05de\u05e0\u05d4\u05dc \u05de\u05d5\u05e1\u05d3 \u05d7\u05d9\u05e0\u05d5\u05da), \u05d4\u05ea\u05e9\u05e2\"\u05d0-2010"
        }, {
            "id": 4334,
            "importance": 0.3,
            "reasoning": "",
            "score": 0.5,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05e4\u05d9\u05e7\u05d5\u05d7 \u05e2\u05dc \u05de\u05d7\u05d9\u05e8 \u05e1\u05e4\u05e8\u05d9 \u05dc\u05d9\u05de\u05d5\u05d3), \u05d4\u05ea\u05e9\u05e2\"\u05d1-2011"
        }, {
            "id": 1163,
            "importance": 0.6,
            "reasoning": "",
            "score": 1.0,
            "title": "\u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d0\u05ea \u05d4\u05e6\u05e2\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05d5\u05d5\u05e2\u05d3\u05d4 - \u05d4\u05e6\u05e2\u05ea \u05d7\u05d5\u05e7 \u05d7\u05d9\u05e0\u05d5\u05da \u05de\u05de\u05dc\u05db\u05ea\u05d9 (\u05ea\u05d9\u05e7\u05d5\u05df - \u05d4\u05d0\u05e8\u05db\u05ea \u05db\u05d4\u05d5\u05e0\u05d4), \u05d4\u05ea\u05e9\"\u05e2-2010"
        }]
    };


    var parties = [];
    var index = 0;
    
    body.parties.forEach(function(party){
        party.index = index;
        parties.push(party);
        index++;
    });

    body.parties = parties;
    // console.log(JSON.parse(body));
    res.send(body);

}
