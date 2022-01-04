import Header from '../../components/header/header'
import { Transactions } from '../../components/transactions/Transactions'
import './styles.css'

function Home() {
    return (
        <div>
            <Header />
            <div className="home-content">
                <Transactions startDate={new Date()} endDate={new Date()} />
            </div>
        </div>
    )
}

export default Home
