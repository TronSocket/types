export interface BlockFilter {
    transactionSize?: number
}

export interface TransactionFilter {
    assetName?: string | null
    assetAmount?: number
    contractType?: string
    fromAddress?: string
    toAddress?: string
}

export interface SolidityFilter {
    contractAddress?: string
    creatorAddress?: string
    originAddress?: string
    eventName?: string
}

export interface EventFilters {
    block: BlockFilter
    contract: SolidityFilter
    solidity: SolidityFilter
    transaction: TransactionFilter
}
