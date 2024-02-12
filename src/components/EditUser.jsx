import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../slice/userSlice";
import { Button, TextField } from './index';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((store) => store.user);
  // console.log(params.id, typeof params.id);
  const existingUser = users.filter((user) => user.id === params.id);
  const { username, email } = existingUser[0];
  const [values, setValues] = useState({ username: username, email: email });
  
  const handleEditUser = () => {
    dispatch(editUser({
      id: params.id,
      username: values.username,
      email: values.email
    }));
    setValues({ username: '', email: '' });
    navigate("/");
  }
  
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField 
        label={"Username"}
        inputProps={{ type: "text", placeholder: "John Doe" }}
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
      />
      <br />
      <TextField 
        label={"Email"}
        inputProps={{ type: "email", placeholder: "johndoe@gmail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser;