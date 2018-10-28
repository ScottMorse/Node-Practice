let http = require('http')
let url = require('url')
let fileSys = require('fs')
let formidable = require('formidable')

let dateModule = require('./modules/module1')
let sqlCom = require('./modules/sqlCom')

let urlQuery
http.createServer((request,response) => {
    urlQuery = url.parse(request.url, true).query
    console.log(urlQuery)

    // if(request.url == '/fileupload'){
    //     const uploadForm = new formidable.IncomingForm();
    //     uploadForm.parse(request, (err, fields, files) => {
    //         const tempPath = files.filetoupload.path
    //         const newPath = '~/node-practice-files/' + files.filetoupload.name
    //         fileSys.rename(tempPath, newPath, function (err) {
    //             if (err) throw err;
    //             response.write('File uploaded');
    //             response.end();
    //         });
    //         response.write('File uploaded');
    //         console.log('uploaded')
    //         response.end();
    //     });
    // }


    // else{
        fileSys.readFile('index.html',(err,data) => {
            response.writeHead(200, {'Content-Type':'text/html'})
            response.write(data)
            console.log('> HTTP Status 200')
            response.write(dateModule.myDateTime())
            response.end()
        })
    // }
}).listen(8000)