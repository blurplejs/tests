import EventType from './EventType'

// @see https://discordapp.com/developers/docs/topics/gateway#resumed
export namespace Resumed {

    export type PayloadType = {}

    export class Event extends EventType<PayloadType> {

        constructor () {
            super()
        }

        get payload () {
            return {}
        }
    
    }

}
