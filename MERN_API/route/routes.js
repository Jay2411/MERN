import express from 'express';
import getUsers from '../controller/user2-controller.js';
import addUser from '../controller/user-controller.js';
import getUserById from '../controller/user3-controller.js';
import editUser from '../controller/user4-controller.js';
import deleteUser from '../controller/user5-controller.js';

const route = express.Router();

route.get('/', getUsers)
route.post('/add', addUser)
route.get('/:id',getUserById)
route.put('/:id', editUser)
route.delete('/:id', deleteUser)


export default route;