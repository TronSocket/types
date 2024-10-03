export default interface ContractLog {
    timeStamp: number
    triggerName: string
    uniqueId: string
    transactionId: string
    contractAddress: string
    callerAddress: string
    originAddress: string
    creatorAddress: string
    blockNumber: number
    blockHash: string
    removed: boolean
    latestSolidifiedBlockNumber: number
    logInfo: unknown
    rawData: {
        address: string
        topics: string[]
        data: string
    }
    abi: unknown
    topicList: string[]
    data: string
}
