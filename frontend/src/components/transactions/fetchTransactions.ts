import { api } from '../../data/api/api'
import { Transaction, TransactionData, TransactionType } from './types'

export const fetchTransactions = api<TransactionData[], Transaction[], void>(
    'transactions/getTransactions',
    'api/transactions',
    (response: TransactionData[]) =>
        response.map((item) => {
            const type = () => {
                switch (item.type) {
                    case TransactionType.HOME:
                        return TransactionType.HOME
                    case TransactionType.FOOD:
                        return TransactionType.FOOD
                    case TransactionType.SERVICES:
                        return TransactionType.SERVICES
                    case TransactionType.CLOTHING:
                        return TransactionType.CLOTHING
                    case TransactionType.HEALTH:
                        return TransactionType.HEALTH
                    case TransactionType.TRANSPORT:
                        return TransactionType.TRANSPORT
                    case TransactionType.ENTERTAINMENT:
                        return TransactionType.ENTERTAINMENT
                    case TransactionType.MISCELLANEOUS:
                        return TransactionType.MISCELLANEOUS
                    default:
                        return TransactionType.MISCELLANEOUS
                }
            }

            return {
                id: item.id,
                type: type(),
                descritpion: item.descritpion,
                value: item.value,
                date: new Date(item.date),
            }
        })
)
