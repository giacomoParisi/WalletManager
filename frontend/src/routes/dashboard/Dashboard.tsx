import { Transactions } from '../../components/transactions/Transactions'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <Transactions startDate={new Date()} endDate={new Date()} />
            </div>
        </div>
    )
}

export default Dashboard
