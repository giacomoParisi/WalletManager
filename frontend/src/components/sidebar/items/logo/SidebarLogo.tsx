import { Logo } from '../../../icons/Logo'
import { Menu } from '../../../icons/sidebar/Menu'
import './SidebarLogo.css'

export const SidebarLogo = () => {
    return (
        <div className="logo">
            <Logo className="logo-icon" />
            <div className="logo-name">WalletManager</div>
            <Menu className="menu-icon" />
        </div>
    )
}
