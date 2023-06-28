import { IGiveawayEmbedOptions, IGiveawayButtonOptions } from '../types/configurations'

/**
 * An object that contains an information about a giveaway.
 * @typedef {object} IGiveaway<DatabaseType>
 * @prop {number} id The ID of the giveaway.
 * @prop {string} prize The prize of the giveaway.
 * @prop {string} time The time of the giveaway.
 * @prop {GiveawayState} state The state of the giveaway.
 * @prop {number} winnersCount The number of possible winners in the giveaway.
 * @prop {number} startTimestamp The timestamp when the giveaway started.
 * @prop {boolean} isEnded Determines if the giveaway was ended in the database.
 * @prop {number} endTimestamp The timestamp when the giveaway ended.
 * @prop {string} hostMemberID The ID of the host member.
 * @prop {string} channelID The ID of the channel where the giveaway is held.
 * @prop {string} messageID The ID of the giveaway message.
 * @prop {string} messageURL The URL of the giveaway message.
 * @prop {string} guildID The ID of the guild where the giveaway is held.
 * @prop {number} entries The number of giveaway entries.
 * @prop {string[]} entriesArray The array of user IDs of users that have entered the giveaway.
 * @prop {IGiveawayMessageProps} messageProps The message data properties for embeds and buttons.
 *
 * @template TDatabaseType The database type that will be used in the module.
 */
export interface IGiveaway {

    /**
     * Giveaway ID.
     * @type {number}
     */
    id: number

    /**
     * Giveaway prize.
     * @type {string}
     */
    prize: string

    /**
     * Giveaway time.
     * @type {string}
     */
    time: string

    /**
     * Giveaway state
     * @type {GiveawayState}
     */
    state: GiveawayState

    /**
     * Number of possible winners in the giveaway.
     * @type {number}
     */
    winnersCount: number

    /**
     * Giveaway end timestamp.
     * @type {number}
     */
    startTimestamp: number

    /**
     * Determines if the giveaway was ended in database.
     * @type {boolean}
     */
    isEnded: boolean

    /**
     * Giveaway end timestamp.
     * @type {number}
     */
    endTimestamp: number

    /**
     * Giveaway host member ID.
     * @type {string}
     */
    hostMemberID: string

    /**
     * Giveaway channel ID.
     * @type {string}
     */
    channelID: string

    /**
     * Giveaway message ID.
     * @type {string}
     */
    messageID: string

    /**
     * Giveaway message URL.
     * @type {string}
     */
    messageURL?: string

    /**
     * Giveaway guild ID.
     * @type {string}
     */
    guildID: string

    /**
     * Number of giveaway entries.
     * @type {number}
     */
    entries: number

    /**
     * Array of user IDs of users that have entered the giveaway.
     * @type {string[]}
     */
    entriesArray: string[]

    /**
     * Message data properties for embeds and buttons.
     * @type {IGiveawayMessageProps}
     */
    messageProps?: IGiveawayMessageProps
}

/**
 * An interface containing embed objects for various giveaway reroll cases.
 * @typedef {object} IGiveawayRerollEmbeds
 * @prop {IGiveawayEmbedOptions} onlyHostCanReroll The options for the embed when only the host can reroll.
 * @prop {IGiveawayEmbedOptions} newGiveawayMessage The options for the embed when sending a new giveaway message.
 * @prop {IGiveawayEmbedOptions} successMessage The options for the embed when the giveaway is successful.
 */

/**
 * An interface containing embed objects for various giveaway finish cases.
 * @typedef {object} IGiveawayFinishEmbeds
 * @prop {IGiveawayEmbedOptions} newGiveawayMessage The options for the embed when sending a new giveaway message.
 * @prop {IGiveawayEmbedOptions} endMessage The options for the embed when the giveaway has ended.
 * @prop {IGiveawayEmbedOptions} noWinners The options for the embed when there are no winners for the giveaway.
 *
 * @prop {IGiveawayEmbedOptions} noWinnersEndMessage
 * The options for the embed when there are no winners for the giveaway and it has ended.
 */

/**
 * An interface that contains the data properties for embeds and buttons.
 * @typedef {object} IGiveawayMessageProps
 * @prop {IGiveawayEmbeds} embeds The embed objects for the giveaway message.
 * @prop {IGiveawayButtons} buttons The button objects for the giveaway message.
 */
export interface IGiveawayMessageProps {

    /**
     * The embed objects for the giveaway message.
     * @type {IGiveawayEmbeds}
     */
    embeds: IGiveawayEmbeds

    /**
     * The button objects for the giveaway message.
     * @type {IGiveawayMessageButtons}
     */
    buttons: IGiveawayMessageButtons
}

/**
 * An interface containing different types of giveaway embeds in the IGiveaways class.
 * @typedef {object} IGiveawayEmbeds
 * @prop {IGiveawayEmbedOptions} start Message embed data for cases when the giveaway has started.
 * @prop {IGiveawayRerollEmbeds} reroll Message embed data for cases when rerolling the giveaway.
 * @prop {IGiveawayFinishEmbeds} finish Message embed data for cases when the giveaway has finished.
 */
export interface IGiveawayEmbeds {

    /**
     * Message embed data for cases when the giveaway has started.
     * @type {IGiveawayEmbedOptions}
     */
    start: IGiveawayEmbedOptions

    /**
     * Message embed data for cases when rerolling the giveaway.
     * @type {IGiveawayRerollEmbeds}
     */
    reroll: Record<
        'onlyHostCanReroll' | 'newGiveawayMessage' | 'successMessage',
        IGiveawayEmbedOptions
    >

    /**
     * Message embed data for cases when the giveaway has finished.
     * @type {IGiveawayFinishEmbeds}
     */
    finish: Record<
        'newGiveawayMessage' | 'endMessage' | 'noWinners' | 'noWinnersEndMessage',
        IGiveawayEmbedOptions
    >
}

/**
 * An object that contains the giveaway buttons that may be set up.
 * @typedef {object} IGiveawayMessageButtons
 * @prop {IGiveawayButtonOptions} joinGiveawayButton The options for the join giveaway button.
 * @prop {IGiveawayButtonOptions} rerollButton The options for the reroll button.
 * @prop {IGiveawayButtonOptions} goToMessageButton The options for the go to message button.
 */
export type IGiveawayMessageButtons = Record<
    'joinGiveawayButton' | 'rerollButton' | 'goToMessageButton',
    IGiveawayButtonOptions
>

/**
 * An object that contains an information about a giveaway without internal props.
 * @typedef {object} GiveawayWithoutInternalProps
 * @prop {number} id The ID of the giveaway.
 * @prop {string} prize The prize of the giveaway.
 * @prop {string} time The time of the giveaway.
 * @prop {number} winnersCount The number of possible winners in the giveaway.
 * @prop {number} startTimestamp The timestamp when the giveaway started.
 * @prop {number} endTimestamp The timestamp when the giveaway ended.
 * @prop {string} hostMemberID The ID of the host member.
 * @prop {string} channelID The ID of the channel where the giveaway is held.
 * @prop {string} messageID The ID of the giveaway message.
 * @prop {string} messageURL The URL of the giveaway message.
 * @prop {string} guildID The ID of the guild where the giveaway is held.
 * @prop {string[]} entriesArray The array of user IDs of users that have entered the giveaway.
 * @prop {IGiveawayMessageProps} messageProps The message data properties for embeds and buttons.
 */
export type GiveawayWithoutInternalProps = Omit<
    Record<keyof IGiveaway, string>,
    'entriesArray' | 'state' | 'isEnded'
>

/**
 * An enum that determines the state of a giveaway.
 * @typedef {number} GiveawayState
 * @prop {number} STARTED The giveaway has started.
 * @prop {number} ENDED The giveaway has ended.
 */
export enum GiveawayState {
    STARTED = 1,
    ENDED = 2
}
