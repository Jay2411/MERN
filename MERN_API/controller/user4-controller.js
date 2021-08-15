import User from "../model/user-schema.js";

const editUser = async (request, response) =>{
   const user = request.body;
   const editUser = new User(user);

   try {
       await User.updateOne({_id: request.params.id},editUser)
       response.json(editUser);
   } catch (error) {
    response.json({message:error.message});   
   }
}

export default editUser