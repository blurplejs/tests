import EventType from './EventType'

// @see https://discordapp.com/developers/docs/topics/gateway#guild-role-create
export type PayloadType = {}

export class GuildRoleCreate extends EventType<PayloadType> {

    constructor () {
        super()
    }

    get payload () {
        return {}
    }

}
