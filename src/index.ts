import { Block } from './block'
import { Transaction } from './transaction'
import { ContractLog, ContractEvent } from './contract'
import { Solidity, SolidityEvent, SolidityLog } from './solidity'

export * from './block'
export * from './filter'
export * from './contract'
export * from './solidity'
export * from './transaction'

export interface EventTypes {
    block: Block
    transaction: Transaction
    contract: ContractLog | ContractEvent
    solidity: Solidity | SolidityEvent | SolidityLog
}
