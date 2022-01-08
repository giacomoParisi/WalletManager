/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { fetchTransactions } from '../fetchTransactions'
import { dataSelector } from '../transactionsSlice'
import { TransactionItem } from './item/TransactionItem'
import './TransactionsList.css'

export const TransactionsList = () => {
    const data = useAppSelector(dataSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    return (
        <div className="transactions-list">
            {data.map((item, index) => (
                <TransactionItem data={item} key={index} />
            ))}
        </div>
    )
}
