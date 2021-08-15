import User from "../model/user-schema.js";

const deleteUser = async (request, response) =>{
    try {
        await User.deleteOne({_id: request.params.id});
        response.json("deleted")
    } catch (error) {
    response.json({message:error.message});   
    }
}

export default deleteUser