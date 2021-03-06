import EventType from './EventType'
import { Channel } from '../objects'

// @see https://discordapp.com/developers/docs/topics/gateway#channel-delete
export type PayloadType = Channel

export class ChannelDelete extends EventType<PayloadType> {

    constructor (protected channel: Channel) {
        super()
    }

    get payload () {
        return this.channel
    }

}
