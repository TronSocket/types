export default interface Block {
    timeStamp: number
    triggerName: string
    blockNumber: number
    blockHash: string
    transactionSize: number
    latestSolidifiedBlockNumber: number
    transactionList: string[]
}
