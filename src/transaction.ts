export type TransactionLog = {
    address: string
    blockHash: string
    blockNumber: number
    data: string
    logIndex: number
    topicList: string[]
    transactionHash: string
    transactionIndex: number
}

export type InternalTransaction = {
    hash: string
    callValue: number
    tokenInfo: unknown
    transferTo_address: string
    data: string
    caller_address: string
    rejected: boolean
    note: string
    extra: string
}

export interface Transaction {
    timeStamp: number
    triggerName: string
    transactionId: string
    blockHash: string
    blockNumber: number
    energyUsage: number
    energyFee: number
    originEnergyUsage: number
    energyUsageTotal: number
    netUsage: number
    netFee: number
    result: string
    contractAddress: string | null
    contractType: string
    feeLimit: number
    contractCallValue: number
    contractResult: string | null
    fromAddress: string
    toAddress: string
    assetName: string | null
    assetAmount: number
    latestSolidifiedBlockNumber: number
    internalTransactionList: InternalTransaction[]
    data: string
    transactionIndex: number
    cumulativeEnergyUsed: number
    preCumulativeLogCount: number
    logList: TransactionLog[]
    energyUnitPrice: number
    extMap: unknown | null
}
