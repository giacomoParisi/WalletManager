import './Sidebar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SidebarButton, { SidebarButtonProps } from './items/button/SidebarButton'
import { SidebarLogo } from './items/logo/SidebarLogo'
import { Dashboard } from '../icons/Dashboard'
import { IconProps } from '../icons/IconProps'
import { Transactions } from '../icons/Transactions'
import { Destination } from '../../routes/Navigator'

export const Sidebar = () => {
    const location = useLocation()
    const navigator = useNavigate()

    const dashboard = (icon: IconProps) => (
        <Dashboard className={icon.className} />
    )

    const transactions = (icon: IconProps) => (
        <Transactions className={icon.className} />
    )

    const buttons = [
        {
            text: 'Dashboard',
            destination: Destination.DASHBOARD,
            active: location.pathname === Destination.DASHBOARD,
            icon: dashboard,
            onClick: () => navigator(Destination.DASHBOARD),
        },
        {
            text: 'Transactions',
            destination: Destination.TRANSACTIONS,
            active: location.pathname === Destination.TRANSACTIONS,
            icon: transactions,
            onClick: () => navigator(Destination.TRANSACTIONS),
        },
    ]

    return (
        <div className="sidebar">
            <SidebarLogo />
            <div className="sidebar-buttons">
                {buttons.map((item) => (
                    <Link
                        className="link"
                        to={item.destination}
                        key={item.destination}
                    >
                        <SidebarButton
                            text={item.text}
                            active={item.active}
                            icon={item.icon}
                            onClick={item.onClick}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}
