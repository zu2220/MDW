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

        const token = await createAccessToken ({id: authSaved._id})
        res.cookie("token", token)
        res.json({
            id: authSaved._id,
            email: authSaved.email,
            createAt: authSaved.createdAt,
            updateAt: authSaved.updatedAt
        })

        // res.json(authSaved)
        // res.send('Registro')
    }catch(error){
        console.log(error);
    }
}
export const login = async (req,res)=>{
    const {email, password} = req.body

    try{
        const userFound = await Auth.findOne({email})
        if(!userFound) return res.status(400).json({message: "Email not founded"});
        
        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({message: "Incorrect password"});

        const token = await createAccessToken ({id: userFound._id})
        res.cookie("token", token)
        res.json({
            id: userFound._id,
            email: userFound.email,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        
        })
    }catch(error){console.log(error)}
}
export const logout = async (req,res)=>{
    res.cookie("token","", {
        expires: new Date(0),
    })
    return res.sendStatus(200)
}