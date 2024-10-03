export default interface SolidityEvent {
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
    eventSignature: string
    eventSignatureFull: string
    eventName: string
    topicMap: {
        [x: string]: string
        from: string
        to: string
    }
    dataMap: {
        [x: string]: string
        value: string
    }
}
