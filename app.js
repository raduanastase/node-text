const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        // console.log('received data: ' + data);
        // const foundItems = /==========\nAtomic Habits([\s\S]*?)==========/g.exec(data);
        // const text = 'abckjalkjdas===aaaaabckljslakdjalksjdasd===';
        // const foundItems = text.matchAll(/abc(.*?)===/g);
        // const foundItems = data.matchAll(/==========\nAtomic Habits: Tiny Changes, Remarkable Results \(James Clear\)([\s\S]*?)==========/g);
        const newData = data.replace(/- Your Highlight on Location .*?[\r\n]/g, '=====')
        /*for (const match of foundItems) {
            console.log(match[1]);
        }*/
        console.log(newData);
        // console.log(foundItems);
        // response.write(data);
        // response.end();
    } else {
        console.log(err);
    }
});