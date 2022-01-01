import { api } from '../../data/api/api'
import { Transaction } from './types'

export const fetchTransactions = api<Transaction[], void>(
    'transactions/getTransactions',
    'api/transactions'
)
