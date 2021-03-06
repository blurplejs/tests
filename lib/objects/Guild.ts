import Snowflake from './Snowflake'
import Channel from './Channel'
import Role from './Role'
import Emoji from './Emoji'
import GuildMember from './GuildMember'
import PresenceUpdate from './PresenceUpdate'
import { createFakeableDiscordObject } from './AbstractObject'
import * as faker from 'faker'
import Factory from '../factory'

enum DefaultMessageNotificationLevel {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1
}

enum ExplicitContentFilterLevel {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLES = 1,
    ALL_MEMBERS = 2
}

enum MFALevel {
    NONE = 0,
    ELEVATED = 1
}

enum VerificationLevel {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4
}

// @see https://discordapp.com/developers/docs/resources/guild#guild-object
type Options = {
    id: Snowflake,
    name: string,
    icon?: string,
    splash?: string,
    owner?: boolean,
    owner_id: Snowflake,
    permissions?: number,
    region: string
    afk_channel_id: Snowflake | undefined,
    afk_timeout: number,
    embed_enabled?: boolean,
    embed_channel_id?: Snowflake,
    verification_level: number,
    default_message_notifications: number,
    explicit_content_filter: number,
    roles: Role[],
    emojis: Emoji[],
    features: string[],
    mfa_level: number,
    application_id: Snowflake | undefined,
    widget_enabled?: boolean,
    widget_channel_id?: Snowflake,
    system_channel_id: Snowflake | undefined,
    joined_at?: number,
    large?: boolean,
    unavailable?: boolean,
    member_count?: number,
    voice_states?: number[],
    members?: GuildMember[],
    channels?: Channel[],
    presences?: PresenceUpdate[]  
}

function fakeGuildData (options: Partial<Options>) {
    let id = options.id ? options.id : Snowflake.create()
    let position = 0

    return {
        id,
        name: faker.internet.domainWord(),
        owner_id: Snowflake.create(),
        region: faker.random.locale(),
        afk_channel_id: undefined,
        afk_timeout: 900,
        verification_level: 0,
        default_message_notifications: 0,
        explicit_content_filter: 0,
        roles: [new Role({ id, name: '@everyone' })].concat(new Factory(Role, faker.random.number(5)).create()),
        emojis: new Factory(Emoji, faker.random.number(5)).create(),
        features: [],
        mfa_level: 0,
        application_id: undefined,
        system_channel_id: undefined,
        channels: new Factory(Channel, faker.random.number({ min: 1, max: 10 })).create(() => ({ guild_id: id, position: position++ }))
    }
}

export default class Guild extends createFakeableDiscordObject<Options>('guild', fakeGuildData) {

    static MessageNotificationLevel = DefaultMessageNotificationLevel
    static ExplicitContentFilterLevel = ExplicitContentFilterLevel
    static MFALevel = MFALevel
    static VerificationLevel = VerificationLevel

}
