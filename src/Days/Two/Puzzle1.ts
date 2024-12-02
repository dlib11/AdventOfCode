import { service } from "./Service.ts";
import * as path from "path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "resources", "input.txt");


let totSafe=0;
service.getData(filePath).then(data => {
    data.forEach((value : Number[],index : number) =>{
    let array1 : Number[] = [... value].sort((a,b)=>a-b);
    let array2 : Number[] = [... value].sort((a,b)=>b-a);
    let safe=true;

    if(equals (value , [... value].sort((a,b)=>a-b))){
          // ascending order
        safe = isSafe(value);
    }
    else if(equals(value , array2)){
        // descending order
        safe = isSafe(value);
    }
    else
        safe=false;

    if(safe)
        totSafe++;
    })

    console.log(totSafe);
});

function equals(value: Number[], array: Number[]): boolean {
    if (value.length !== array.length) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== array[i]) {
            return false;
        }
    }
    return true;
}

function isSafe(value:Number[]):boolean{
    let safe_temp=true;
    for (let i = 0; i <value.length; i++) {
        if(Math.abs(value[i]-value[i+1])<1 || Math.abs(value[i]-value[i+1])>3){
            safe_temp=false;
            break;
        }
    }
    return safe_temp;
}