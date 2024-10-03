import Block from './block'
import Solidity from './solidity'
import Transaction from './transaction'
import ContractLog from './contractlog'
import SolidityLog from './soliditylog'
import ContractEvent from './contractevent'
import SolidityEvent from './solidityevent'

export default interface EventTypes {
    block: Block
    transaction: Transaction
    contract: ContractLog | ContractEvent
    solidity: Solidity | SolidityEvent | SolidityLog
}

export type { default as Block } from './block'
export type { default as Solidity } from './solidity'
export type { default as Transaction } from './transaction'
export type { default as ContractLog } from './contractlog'
export type { default as SolidityLog } from './soliditylog'
export type { default as ContractEvent } from './contractevent'
export type { default as SolidityEvent } from './solidityevent'
