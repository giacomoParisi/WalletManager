export type TransactionData = {
    id: string
    type: string
    descritpion: string
    value: number
    date: string
}

export enum TransactionType {
    HOME = 'HOME',
    FOOD = 'FOOD',
    SERVICES = 'SERVICES',
    CLOTHING = 'CLOTHING',
    HEALTH = 'HEALTH',
    TRANSPORT = 'TRANSPORT',
    ENTERTAINMENT = 'ENTERTAINMENT',
    MISCELLANEOUS = 'MISCELLANEOUS',
}

export type Transaction = {
    id: string
    type: TransactionType
    descritpion: string
    value: number
    date: Date
}

export type TransactionGroup = {
    value: number
}

export type TransactionState = {
    loading: boolean
    error: string | null
    data: Transaction[]
}
