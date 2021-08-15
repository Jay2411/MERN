import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@material-ui/core";
import { useEffect, useState } from "react"
import { getUsers, deleteUser } from "../Service/api"
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '2% 0 0 5%'
    },
    thead: {
        '& > *': {
            background: 'black',
            color: 'white',
            fontSize: 18
        }
    }
})

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data)
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell><b>ID</b></TableCell>
                    <TableCell><b>Name</b></TableCell>
                    <TableCell><b>Age</b></TableCell>
                    <TableCell><b>Number</b></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.number}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default AllUsers