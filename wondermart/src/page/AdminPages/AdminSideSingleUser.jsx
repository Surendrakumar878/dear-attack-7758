import user from "../AdminAssets/user.png";
import "../AdminStyles/AdminSideSingleAdminPage.css";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { deleteUser, getUsers } from "../../Redux/adminReducer/action";

const AdminSideSingleUser = ({ username, email, id }) => {

    const dispatch = useDispatch();
    const toast = useToast();

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
            .then(() => toast({
                title: 'User deleted !',
                description: "We've deleted user.",
                status: 'success',
                duration: 1500,
                position: "top",
                isClosable: true,
            }))
            .then(() => dispatch(getUsers()));
    };


    return (
        <div className="single_admin_container">
            <div>
                <img src={user} />
            </div>
            <div>
                <p><span>Name:</span> {username}</p>
                <p><span>Email:</span> {email}</p>
            </div>
            <div className="admin_single_bottom_section">
                <div>
                </div>
                <div className="color_red"><DeleteIcon onClick={() => deleteUserHandler(id)} fontSize="130%" cursor="pointer" /></div>
            </div>
        </div>
    );
};

export { AdminSideSingleUser };