import jsonwebtoken from 'jsonwebtoken';
import {SECRET} from '../config.js';

export function createAccessToken(payload){
    return new Promise((resolve,reject)=>{
        jsonwebtoken.sign(
            payload,
            SECRET,
            {
                expiresIn: "Id"
            },
            (err,token)=>{
                if(err) reject (err)
                resolve(token)
            }
        )
    })
}