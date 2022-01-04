import { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { LabelList, Bar, BarChart } from 'recharts'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchTransactions } from './fetchTransactions'
import { dataSelector } from './transactionsSlice'
import { TransactionGroup } from './types'
import './styles.css'
import { Theme } from '../../themes/themes'

const TransactionCard = styled.div`
    background-color: ${(props) => props.theme.surface};
`

export function Transactions() {
    const data = useAppSelector(dataSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    let positiveTransactions: TransactionGroup = { value: 0 }
    let negativeTransactions: TransactionGroup = { value: 0 }
    let transactions: TransactionGroup[] = []

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
    transactions = [positiveTransactions, negativeTransactions]

    const theme: Theme = useTheme() as Theme

    return (
        <TransactionCard className="transaction-card">
            <BarChart
                width={100}
                height={100}
                data={transactions}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
                <Bar dataKey="value" fill={theme.primary}>
                    <LabelList dataKey="value" position="top" />
                </Bar>
            </BarChart>
        </TransactionCard>
    )
}
