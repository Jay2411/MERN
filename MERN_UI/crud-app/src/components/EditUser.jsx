import {FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography} from '@material-ui/core'
import { useEffect, useState } from 'react'
import {editUser, getUsers} from '../Service/api'
import {useHistory, useParams} from 'react-router-dom'

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'2% 0 0 25%',
        '& > *':{
            marginTop:'1%'
        }
    } 
})

const initialValues = {
    name: "",
    age: "",
    number: ""
}

const EditUser = () => {
    const [ user, setUser ] = useState(initialValues)
    const { name, age, number } = user;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(()=>{
        loadUserData();
    }, []);


    const loadUserData = async() => {
        const response = await getUsers(id);
        setUser(response.data)
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const editUserDetail = async () => {
        await editUser(id, user);
        history.goBack('./all')
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant='h3'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='age' value={age}/>
            </FormControl>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='number' value={number}/>
            </FormControl>
            <Button variant='contained' onClick={() => editUserDetail()} color='primary'>Add User</Button>
        </FormGroup>
    )
}
export default EditUser