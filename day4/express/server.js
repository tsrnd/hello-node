var express      = require('express');
var fs  = require('fs');
var  bodyParser = require('body-parser');
var  cookieParser = require('cookie-parser');
var  multer = require('multer');
var  path = require('path');
var app = express();
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }));

multer_upload = multer({ storage : multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname+'/tmp');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }})
});
single_upload = multer_upload.single('file');
multi_upload = multer_upload.array('files', 10);

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   console.log("Cookies: ", req.cookies)
   res.send('<h1>Hello GET</h1>');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})


app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/index1.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index1.htm" );
 })

app.post('/file_upload', function (req, res) {
    single_upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        if (req.file != null) {
            console.log(req.file)
            if (req.file.mimetype != '') {
                type = req.file.mimetype.split('/')[1]
            }
            fs.rename(req.file.path, req.file.path+'.'+type, function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
            response = {
                message:'File uploaded successfully',
                filename:req.file.filename +'.'+type
            };
            res.end( JSON.stringify( response ) );
        }
        res.end( JSON.stringify({
            message:'No file choosen',
        }));
    });

})

app.post('/multi_file_upload', function (req, res) {
    multi_upload(req,res,function(err) {
        var responses = []
        if(err) {
            return res.end("Error uploading file.");
        }
        req.files.forEach(file => {
            console.log(file)
            if (file.mimetype != '') {
                type = file.mimetype.split('/')[1]
            }
            fs.rename(file.path, file.path+'.'+type, function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
            responses.push({
                message: 'File ' + file.originalname + ' uploaded successfully',
                filename:file.filename +'.'+type
            });
        });
        res.end( JSON.stringify( responses ) );

    });
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})
