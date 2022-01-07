import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/sidebar/Sidebar'
import { useAppSelector } from './app/hooks'
import { selectorTheme } from './app/slicer'
import Navigator from './routes/Navigator'

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
            <BrowserRouter>
                <div className="sidebar-container">
                    <Sidebar />
                    <div className="sidebar-content">
                        <Navigator />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
