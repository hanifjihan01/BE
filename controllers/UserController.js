import User from "../models/UserModel.js";

export const getPosts = async(req, res) =>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    }catch(error){
            console.log(error.message);
    }
}

export const getPostId = async(req, res) =>{
    try{
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
            console.log(error.message);
    }
}

export const createPost = async(req, res) =>{
    try{
       await User.create(req.body);
        res.status(201).json({msg: "Created Data"});
    }catch(error){
            console.log(error.message);
    }
}

export const updatePost = async(req, res) =>{
    try{
       await User.update(req.body,{
        where:{
            id:req.params.id
        }
       });
        res.status(200).json({msg:"Update Data"});
    }catch(error){
            console.log(error.message);
    }
}

export const deletePost = async(req, res) =>{
    try{
       await User.destroy({
        where:{
            id:req.params.id
        }
       });
        res.status(200).json({msg: "Deleted Data"});
    }catch(error){
            console.log(error.message);
    }
}
