import { DataMap, RawData, TopicMap } from './parts'

export interface SolidityLog {
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
    rawData: DataMap
    abi: unknown
    topicList: string[]
    data: string
}

export interface SolidityEvent {
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
    rawData: RawData
    abi: unknown
    eventSignature: string
    eventSignatureFull: string
    eventName: string
    topicMap: TopicMap
    dataMap: DataMap
}

export interface Solidity {
    timeStamp: number
    triggerName: string
    latestSolidifiedBlockNumber: number
}
