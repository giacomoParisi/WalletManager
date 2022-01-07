import { ReactElement } from 'react'
import { IconProps } from '../../../icons/IconProps'
import './SidebarButton.css'

export type SidebarButtonProps = {
    text: string
    icon: (props: IconProps) => ReactElement
    active: boolean
    onClick: () => void
}

export const SidebarButton = ({
    text,
    icon,
    active,
    onClick,
}: SidebarButtonProps) => {
    const activeSuffix = active ? 'active' : ''

    return (
        <div className={`sidebar-button ${activeSuffix}`} onKeyUp={onClick}>
            {icon({
                className: 'sidebar-icon',
            })}
            <div className="sidebar-text">{text}</div>
        </div>
    )
}

export default SidebarButton
