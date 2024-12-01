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
    array1.sort((a, b) => a as number - (b as number));
    array2.sort((a, b) => a as number - (b as number));

    let totalDistance : number=0;

    while(array1.length>0){
        let numb1  =array1.shift() ?? 0;
        let numb2 = array2.shift() ?? 0;

        totalDistance+= Math.abs( (numb1 as number) - (numb2 as number));
        console.log(numb1,' ',numb2, totalDistance);
    }

    console.log(totalDistance);
});
