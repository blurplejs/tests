import EventType from './EventType'

// @see https://discordapp.com/developers/docs/topics/gateway#guild-members-chunk
export namespace GuildMembersChunk {

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