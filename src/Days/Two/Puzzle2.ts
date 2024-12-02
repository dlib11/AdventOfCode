import { service } from "./Service.ts";
import * as path from "path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "resources", "input.txt");


let totSafe=0;
service.getData(filePath).then(data => {
    data.forEach((value : Number[],index : number) =>{
    let safe=true;

    if(equals (value , [... value].sort((a,b)=>a-b))
    || equals (value , [... value].sort((a,b)=>b-a)))
        safe = isSafe(value);
    else
        safe=false;

    let i=0;
    while(!safe && value.length>i){
        let partial1=[...value].slice(0,i);
        let partial2=[...value].slice(i+1);

        let temp = [...partial1,...partial2];
        if(equals (temp , [... temp].sort((a,b)=>a-b))
            || equals (temp , [... temp].sort((a,b)=>b-a)))
            safe = isSafe(temp);
        i++;
    }

    if(safe)
        totSafe++;

   // console.log(index,safe)
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