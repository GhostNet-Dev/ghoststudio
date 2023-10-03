import * as http from "http"
import * as fs from "fs";

const filedownload = (masterAddr: string, filename: string, callback :Function) => {
    const file = fs.createWriteStream(filename);
    const url = masterAddr;
    const request = http.get(url, function (response) {
        console.log(file);
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
            callback(true);
        });
    }).on('error', err =>{
        callback(false);
    });
    //console.log(request);
}

const fileExist = (filename: string):boolean => {
    let ret = false;
    if (fs.existsSync(filename)) {
        // File exists in path
        ret = true;
    } else {
        // File doesn't exist in path
        console.log("file doesn't exists");
    }
    return ret;
}

export {filedownload, fileExist}