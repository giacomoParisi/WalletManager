import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import Home from './routes/home/Home'
import Test from './routes/Test'
import getTheme from './themes/themeProvider'
import { selectorTheme } from './app/slicer'
import { Theme } from './themes/themes'
import { SideBar } from './components/sidebar/SideBar'

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) => (props.theme as Theme).background};
      // eslint-disable-next-line max-len
      font-family: system-ui
    }
`

function App() {
    const theme = useSelector(selectorTheme)

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <Router>
                <GlobalStyle />
                <div className="sidebar-container">
                    <SideBar />
                    <div className="sidebar-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/test" element={<Test />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App
