import styled from 'styled-components'
import './styles.css'

const HeaderRoot = styled.div`
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.onPrimary};
`

const HeaderTitle = styled.h1`
    color: ${(props) => props.theme.onPrimary};
`

function Header() {
    return (
        <HeaderRoot className="header">
            <HeaderTitle className="header-title">Wallet Manager</HeaderTitle>
        </HeaderRoot>
    )
}

export default Header
