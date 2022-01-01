import { useAppDispatch } from '../../app/hooks'
import { fetchTransactions } from './fetchTransactions'

export function Transactions() {
    // Get the current `status`:
    const dispatch = useAppDispatch()

    // When clicked, dispatch `fetchTodos`:
    dispatch(fetchTransactions())

    return <div>Transactions</div>
}
