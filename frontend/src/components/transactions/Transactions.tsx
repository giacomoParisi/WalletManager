import { useEffect } from 'react'
import styled from 'styled-components'
import { PieChart, Pie, Legend } from 'recharts'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchTransactions } from './fetchTransactions'
import { dataSelector } from './transactionsSlice'
import { TransactionGroup } from './types'
import './styles.css'

type TransactionsProps = {
    startDate: Date
    endDate: Date
}

const TransactionCard = styled.div`
    background-color: ${(props) => props.theme.surface};
`

const dateLabel = (start: Date, end: Date) => {
    const startMonth = start.getUTCMonth() + 1
    const startYear = start.getUTCFullYear()
    const endMonth = end.getUTCMonth() + 1
    const endYear = end.getUTCFullYear()

    if (startMonth === endMonth && startYear === endYear) {
        return start.toLocaleString('en', { month: 'long' })
    }

    return ''
}

export function Transactions({ startDate, endDate }: TransactionsProps) {
    const data = useAppSelector(dataSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    let positiveTransactions: TransactionGroup = { value: 0 }
    let negativeTransactions: TransactionGroup = { value: 0 }
    let transactions = []

    positiveTransactions = {
        value: data
            .filter((item) => item.value >= 0)
            .reduce((previous, current) => previous + current.value, 0),
    } as TransactionGroup

    negativeTransactions = {
        value: data
            .filter((item) => item.value < 0)
            .reduce((previous, current) => previous + current.value, 0),
    } as TransactionGroup

    transactions = [
        {
            value: positiveTransactions.value,
            fill: '#1cba46',
            name: positiveTransactions.value,
        },
        {
            value: negativeTransactions.value,
            fill: '#ba1f1c',
            name: Math.abs(negativeTransactions.value),
        },
    ]

    return (
        <TransactionCard className="transaction-card">
            <h4 className="transaction-period">
                {dateLabel(startDate, endDate)}
            </h4>
            <PieChart className="transaction-chart" width={220} height={200}>
                <Pie
                    data={transactions}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                />
                <Legend
                    verticalAlign="middle"
                    align="right"
                    layout="vertical"
                    height={36}
                />
            </PieChart>
        </TransactionCard>
    )
}
