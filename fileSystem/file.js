var fs = require("fs");

fs.writeFile('example.txt', 'this is example file.', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("file creat successfully");
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else  {
                console.log(file);
            }
        });
    }
});


fs.rename('example.txt', 'example_2.txt', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("rename file successfully.")
    }
});

fs.appendFile('example_2.txt', "append data example", (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("append data successfully.")
    }
});

fs.unlink('example_2.txt', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("delete file successfully.")
    }
});

fs.mkdir('mkdir1', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("folder mkdir1 create successfully.");
        fs.rmdir('mkdir1', (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("delete folder mkdir1 successfully.");
            }
        });
    }
});

fs.mkdir('mkdir2', (err) => {
    if(err) {
        console.log(err);
    } else {
        fs.writeFile('./mkdir2/example.txt', (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("create file successfully.");
            }
        })
    }
});

fs.readdir('mkdir2', (err, files) => {
    if(err){
        console.log(err);
    } else {
        for(let file of files) {
            fs.unlink('./mkdir2/' + file, (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Successfully delete" + file);
                }
            });
        }
    }
});
