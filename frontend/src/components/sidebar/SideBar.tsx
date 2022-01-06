import './Sidebar.css'
import SidebarButton from './items/button/SidebarButton'
import { SidebarLogo } from './items/logo/SidebarLogo'

// eslint-disable-next-line
export const SideBar = () => {
    return (
        <div className="sidebar">
            <SidebarLogo />
            <div className="sidebar-buttons">
                <SidebarButton />
            </div>
        </div>
    )
}
