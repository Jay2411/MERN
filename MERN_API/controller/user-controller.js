import User from '../model/user-schema.js'

const addUser = async (request,response)=>{
    const user = request.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        response.json(newUser);
    } catch (error) {
        response.json({message: error.message})
    }
}

export default addUser
