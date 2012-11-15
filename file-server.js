// simple file server version 0.1.1
// Mark Kellett
/*global express require console*/
(function(){
    

    var express = require('express'),
        fs = require('fs'),
        port = process.argv[2] || 3131,
        app = express();

        app.get('*', function(req, res){
          
          fs.readFile('files/' + req.params[0].replace('/', ''), function(error, content){
                var body = '';

                if(error) {
                    res.status(404);
                    body = 'File not found';
                } else {
                    body = content;
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Content-Length', body.length);
                }
                res.end(body, 'utf-8');
          });

        });

        app.listen(port);
        console.log('Listening on port ' + port);

}).call(this);