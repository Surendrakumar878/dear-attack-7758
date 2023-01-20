import admin from "../AdminAssets/admin.jpg";
import "../AdminStyles/AdminSideSingleAdminPage.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { deleteUser, getUsers } from "../../Redux/adminReducer/action";

const AdminSideSingleAdminPage = ({ username, email, id, adminID }) => {

    const dispatch = useDispatch();
    const toast = useToast();

    const deleteAdminHandler = (id) => {
        dispatch(deleteUser(id))
            .then(() => toast({
                title: 'Admin deleted !',
                description: "We've deleted admin.",
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
                <img src={admin} />
            </div>
            <div>
                <p><span>Name:</span> {username}</p>
                <p><span>Email:</span> {email}</p>
            </div>
            <div className="admin_single_bottom_section">
                <div>
                </div>
                <div className="color_red"><DeleteIcon onClick={() => deleteAdminHandler(id)} fontSize="130%" cursor="pointer" /></div>
            </div>
        </div>
    );
};

export { AdminSideSingleAdminPage };