import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCompany, getCompany } from '../../../States/CompanyState';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaIndustry, FaResolving, FaHome } from 'react-icons/fa';
import { logoutUser } from '../../../States/LoginState';
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from 'react-router-dom';

const SideBarDashboard = ({ onSelectMenuItem }) => {
    const company = useSelector(selectCompany);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser());
            navigate('/');
        } catch (error) {
        }
    }
    useEffect(() => {
        dispatch(getCompany());
    }, []);

    /* if (!company || !company[0]) {
        return <div>Loading...</div>;
    } */

    return (
        <>
            <Sidebar collapsed={true} className='container-sidebar'>
                <Menu>
                    <MenuItem icon={<FaHome />} onClick={() => onSelectMenuItem('Home')}></MenuItem>
                    <MenuItem icon={<TimelineRoundedIcon />} onClick={() => onSelectMenuItem('Metrics')}></MenuItem>
                    <MenuItem icon={<WalletRoundedIcon />} onClick={() => onSelectMenuItem('Wallet')}></MenuItem>
                    <MenuItem icon={<FaResolving />} onClick={() => onSelectMenuItem('Consulting')}></MenuItem>
                    <MenuItem icon={<FaIndustry />} onClick={() => onSelectMenuItem('Goals')}></MenuItem>
                    <MenuItem icon={<AccountCircleRoundedIcon />} onClick={() => onSelectMenuItem('Account')}> Account </MenuItem>
                    <MenuItem icon={<LogoutRoundedIcon />} onClick={handleLogout}></MenuItem>
                </Menu>
            </Sidebar>
        </>
        
    );
}

export default SideBarDashboard;
