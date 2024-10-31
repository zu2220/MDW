import jsonwebtoken from 'jsonwebtoken';
import {SECRET} from '../config.js';

export function createAccessToken(payload){
    return new Promise((resolve,reject)=>{
        jsonwebtoken.sign(
            payload,
            SECRET,
            {
                expiresIn: "1d" //aquí es 1, es decir el numero uno.
            },                  //Yo había puesto la letra i en Maypuscula
            (err,token)=>{      //Por eso no funcionaba
                if(err) reject (err)
                resolve(token)
            }
        )
    })
}