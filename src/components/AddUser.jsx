import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { utils} from '../utils/users';
import { addUser } from "../slice/userSlice";
import { Button, TextField } from './index';

const AddUser = () => {
    const [values, setValues] = useState({ username: '', email: '' ,id: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const checkuser = () => {
    //     users[xyz]
    // }
    const handleAddUser = () => {
        // console.log(values);
        dispatch(addUser({
            id: values.id,
            username: values.username,
            email: values.email
        }));
        setValues({ username: "", email: "" });
        navigate("/");
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label={"Username"}
                inputProps={{ type: "text", placeholder: "......." }}
                value={values.username}
                onChange={(e) => setValues({ ...values, username: e.target.value })}
            />
            <br />
            <TextField
                label={"id"}
                inputProps={{ type: "number", placeholder: "......." }}
                value={values.id}
                onChange={(e) => setValues({ ...values, id: e.target.value })}
            />
            <br />
            <TextField
                label={"Email"}
                inputProps={{ type: "email", placeholder: "xyz@gmail.com......" }}
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    );
}

export default AddUser;