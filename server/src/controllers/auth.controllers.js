import Auth from '../models/auth.models.js'
import bcrypt from 'bcrypt';
import {createAccessToken}  from '../libs/jwt.js'

export const register = async (req,res)=>{
    const {email, password} = req.body
    try{
        const passHash = await bcrypt.hash(password, 10)
        const newAuth = new Auth({
            email,
            password: passHash
        })
        const authSaved = await newAuth.save()

        // const token = await createAccessToken ({id: authSaved._id})
        // res.cookie("token", token)
        // res.json({
        //     id: authSaved._id,
        //     email: authSaved._email,
        //     createAt: authSaved.createdAt,
        //     updateAt: authSaved.updatedAt
        // })

        res.json(authSaved)
        res.send('Registro')
    }catch(error){
        console.log(error);
    }
}
export const login = async (req,res)=>{
    res.send("login")
}
export const logout = async (req,res)=>{
    res.send("logout")
}