import User from '../model/user-schema.js'

const getUsers = async (request,response) => {
    try {
        let user = await User.find();
        response.json(user);
    } catch (error) {
        response.json({message: error.message})
    }
}

export default getUsers