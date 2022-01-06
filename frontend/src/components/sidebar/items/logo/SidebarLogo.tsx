import { useAppSelector } from '../../../../app/hooks'
import { selectorTheme } from '../../../../app/slicer'
import { Logo } from '../../../icons/Logo'
import { Menu } from '../../../icons/Menu'
import './SidebarLogo.css'

export const SidebarLogo = () => {
    const theme = useAppSelector(selectorTheme)
    return (
        <div className="logo">
            <Logo
                className="logo-icon"
                color={theme.palette['--onBackground']}
            />
            <div className="logo-name">WalletManager</div>
            <Menu
                className="menu-icon"
                color={theme.palette['--onBackground']}
            />
        </div>
    )
}
