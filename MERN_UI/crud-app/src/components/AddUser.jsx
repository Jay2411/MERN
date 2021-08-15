import {FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography} from '@material-ui/core'
import { useState } from 'react'
import {addUser} from '../Service/api'
import {useHistory} from 'react-router-dom'

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

const AddUser = () => {
    const [ user, setUser ] = useState(initialValues)
    const { name, age, number } = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const addUserDetail = async () => {
        await addUser(user);
        history.push('./all')
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant='h3'>Add User</Typography>
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
            <Button variant='contained' onClick={() => addUserDetail()} color='primary'>Add User</Button>
        </FormGroup>
    )
}
export default AddUser