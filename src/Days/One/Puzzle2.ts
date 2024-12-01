import { service } from "./Service.ts";
import * as path from "path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "resources", "input.txt");

let array1:Number[]=[];
let array2:Number[]=[];

service.getData(filePath).then(data => {
    data.map(elem => {
        array1.push(elem[0]);
        array2.push(elem[1]);
    });

    let similarity : number=0;

    array1.map(primo => {
        let referenze= array2.filter(secondo =>
            primo==secondo ).length;
        console.log('elemento: ',primo,' referenze: ',referenze);
        similarity+= referenze* (primo as number);
    });
    console.log(similarity);

});
