var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/public', express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

app.get('/docs', function(request,response){
    response.render('doc.html');
});

app.get('/slides', function(request,response){
    response.render('ss.html');
});

http.listen(process.env.PORT || 5000, function() {
    console.log("App listening on " + (process.env.PORT || 5000));
});
