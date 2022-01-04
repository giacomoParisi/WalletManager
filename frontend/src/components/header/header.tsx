import styled from 'styled-components'

const HeaderDiv = styled.div`
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.onPrimary};
`

function Header() {
    return (
        <HeaderDiv className="container-fluid text-center p-3">
            <h1>Wallet Manager</h1>
        </HeaderDiv>
    )
}

export default Header
