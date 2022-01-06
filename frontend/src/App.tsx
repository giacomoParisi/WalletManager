import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Test from './routes/Test'
import { SideBar } from './components/sidebar/Sidebar'
import { useAppSelector } from './app/hooks'
import { selectorTheme } from './app/slicer'

function App() {
    const theme = useAppSelector(selectorTheme)

    return (
        <div
            style={
                {
                    ...theme.palette,
                } as React.CSSProperties
            }
        >
            <Router>
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
        </div>
    )
}

export default App
