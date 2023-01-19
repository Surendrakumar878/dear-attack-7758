import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Components/AdminStyles/AdminSideHomePage.css";
import { getUsers } from "../../Redux/adminReducer/action";
import { AdminSideNavbar } from "../../page/AdminPages/AdminSideNavbar";
import { AdminSideSingleAdminPage } from "../../page/AdminPages/AdminSideSingleAdminPage";

const AdminSideHomePage = () => {

    const dispatch = useDispatch();
    const admins = useSelector((store) => store.adminReducer.users);
    console.log("store admins:", admins);

    useEffect(()=>{
        if(admins.length === 0){
            dispatch(getUsers());
        }
    },[admins.length,dispatch]);


    return (
        <div className="adminHomeContainer">
            <div>
                <AdminSideNavbar/>
            </div>
            <div className="admin_grid_container">
                {
                    admins.length && admins.map((item) => {
                       return (
                            <AdminSideSingleAdminPage
                                key={item.id} 
                                username={item.username}
                                email={item.email}
                                adminID={item.adminID}
                            />
                       );
                    })
                }
            </div>
        </div>
    );
};

export {AdminSideHomePage};