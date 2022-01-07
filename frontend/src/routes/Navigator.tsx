import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Transactions from './transactions/Transactions'

export enum Destination {
    DASHBOARD = '/',
    TRANSACTIONS = '/transactions',
}

export const Navigator = () => (
    <Routes>
        <Route path={Destination.DASHBOARD} element={<Dashboard />} />
        <Route path={Destination.TRANSACTIONS} element={<Transactions />} />
    </Routes>
)

export default Navigator
