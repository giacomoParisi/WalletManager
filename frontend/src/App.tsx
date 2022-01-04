import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import Home from './routes/home/Home'
import Test from './routes/Test'
import NavBar from './components/navbar/navbar'
import getTheme from './themes/themeProvider'
import { selectorTheme } from './app/slicer'
import { Theme } from './themes/themes'

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) => (props.theme as Theme).background};
    }
`

function App() {
    const theme = useSelector(selectorTheme)

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <Router>
                <GlobalStyle />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
