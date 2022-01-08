import { Box } from '../../../icons/transactions/Box'
import { Clothes } from '../../../icons/transactions/Clothes'
import { Enter } from '../../../icons/transactions/Enter'
import { Entertainment } from '../../../icons/transactions/Entertainment'
import { Exit } from '../../../icons/transactions/Exit'
import { Food } from '../../../icons/transactions/Food'
import { Health } from '../../../icons/transactions/Health'
import { Home } from '../../../icons/transactions/Home'
import { Transports } from '../../../icons/transactions/Transports'
import { Transaction, TransactionType } from '../../types'
import './TransactionItem.css'

export type TransactionProps = {
    data: Transaction
}

export const TransactionItem = ({ data }: TransactionProps) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const date = `${data.date.getDay()} ${monthNames[data.date.getMonth()]}`

    const icon = () => {
        switch (data.type) {
            case TransactionType.HOME:
                return <Home />
            case TransactionType.FOOD:
                return <Food />
            case TransactionType.SERVICES:
                return <Box />
            case TransactionType.CLOTHING:
                return <Clothes />
            case TransactionType.HEALTH:
                return <Health />
            case TransactionType.TRANSPORT:
                return <Transports />
            case TransactionType.ENTERTAINMENT:
                return <Entertainment />
            case TransactionType.MISCELLANEOUS:
                return <Box />
            default:
                return <Box />
        }
    }

    return (
        <div className="transaction-item">
            <div className="transaction-icon">
                {data.value >= 0 ? (
                    <Enter className="enter" />
                ) : (
                    <Exit className="exit" />
                )}
            </div>
            <div className="transaction-description">{data.descritpion}</div>
            <div className="transaction-type">
                <div className="transaction-type-icon">{icon()}</div>
                <div>{data.type.toLowerCase()}</div>
            </div>
            <div className="transaction-date">{date}</div>
            <div
                className={`transaction-value ${
                    data.value >= 0 ? 'positive' : 'negative'
                }`}
            >
                {data.value >= 0
                    ? `+ € ${data.value}`
                    : `- € ${Math.abs(data.value)}`}
            </div>
        </div>
    )
}
