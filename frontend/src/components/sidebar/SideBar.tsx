import styled from 'styled-components'
import menu from '../../assets/images/sidebar/menu.png'
import dashboard from '../../assets/images/sidebar/dashboard.png'
import './styles.css'

const SideBarRoot = styled.div`
    background-color: ${(props) => props.theme.surface};
`

export function SideBar() {
    return (
        <SideBarRoot className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <div className="logo-name">WalletManager</div>
                </div>
                <img className="sidebar-icon" src={menu} alt="" />
            </div>
            <ul className="nav-list">
                <li>
                    <img className="sidebar-icon" src={dashboard} alt="" />{' '}
                    <span>Dashboard</span>
                </li>
            </ul>
        </SideBarRoot>
    )
}
