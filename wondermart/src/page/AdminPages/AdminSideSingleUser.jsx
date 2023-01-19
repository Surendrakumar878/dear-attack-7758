import user from "../AdminAssets/user.png";
import "../../Components/AdminStyles/AdminSideSingleAdminPage.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const AdminSideSingleUser = ({ username, email, id }) => {

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
                    <EditIcon fontSize="130%" cursor="pointer" />
                </div>
                <div className="color_red"><DeleteIcon fontSize="130%" cursor="pointer" /></div>
            </div>
        </div>
    );
};

export { AdminSideSingleUser };