import { Transactions } from '../../components/transactions/Transactions'
import './styles.css'

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <Transactions startDate={new Date()} endDate={new Date()} />
            </div>
        </div>
    )
}

export default Home
