import User from "../model/user-schema.js";

const getUserById = async (request, response) =>{
    const id = request.params.id;
    try {
        const user = await User.findById(id)
        response.json(user);
    } catch (error) {
        response.json({message:error.message});
    }
}

export default getUserById