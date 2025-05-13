import { User } from "../modals/user.modal.js";    

export const registerFunction = async(req , res)=>{
    const {username , password , fullname  ,email}= req.body;
    const newUser = new User({username , password , fullname  ,email}   )

    try {
        await newUser.save()
        res.status(200).json(newUser)
        } catch (error) {
        res.status(500).json({message:error.message})
    }
}