export interface RawData {
    address: string
    topics: string[]
    data: string
}

export interface TopicMap {
    [x: string]: string
    from: string
    to: string
}

export interface DataMap {
    [x: string]: string
    value: string
}
