import fs from "fs";

export class service{

    static getData(filePath: string): Promise<Number[][]> {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    reject('Error reading file: ' + err);
                    return;
                }
                const lines = data.split('\n');
                const csvData = lines.map(line => line.split(' ').map(elem => parseInt(elem.trim())));
                resolve(csvData);
            });
        });
    }
}