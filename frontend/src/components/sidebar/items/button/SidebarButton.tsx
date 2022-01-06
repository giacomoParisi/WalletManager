import { useAppSelector } from '../../../../app/hooks'
import { selectorTheme } from '../../../../app/slicer'
import { Dashboard } from '../../../icons/Dashboard'
import './SidebarButton.css'

export const SidebarButton = () => {
    const theme = useAppSelector(selectorTheme)

    return (
        <div className="sidebar-button">
            <div className="sidebar-button">
                <Dashboard
                    className="sidebar-icon"
                    color={theme.palette['--onBackground']}
                />
                <div className="sidebar-text">Dashboard</div>
            </div>
        </div>
    )
}

export default SidebarButton
