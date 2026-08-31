function sapphireCommand(command, category, access, description, usage = command) {
  return {
    command: `/${command}`,
    source: "Sapphire",
    access,
    platform: ["Discord"],
    status: "Active",
    category,
    description,
    usage: `/${usage}`,
    accessNote: "Permissions configurable in Sapphire",
  };
}

const sapphireCommands = [
  // General
  sapphireCommand("permissions", "General", "Owner", "Manages the permissions for other users using Sapphire.", "permissions [roles <add|remove> <role1> [role2] ...]"),
  sapphireCommand("list", "General", "Everyone", "Lists all commands or features available.", "list <commands|features>"),
  sapphireCommand("enable", "General", "Owner", "Enables a feature.", "enable <feature>"),
  sapphireCommand("disable", "General", "Owner", "Disables a feature.", "disable <feature>"),
  sapphireCommand("config", "General", "Owner", "Configures the bot.", "config [notfound|wrongusage|noperms|prefix [<add|remove> <prefix>]]"),
  sapphireCommand("info", "General", "Everyone", "Displays general bot information."),
  sapphireCommand("ping", "General", "Everyone", "Gives information about Sapphire's current ping."),

  // Auto Moderation
  sapphireCommand("automoderation", "Auto Moderation", "Owner", "Displays information about Sapphire's auto moderation feature."),

  // Information
  sapphireCommand("emojiinfo", "Information", "Everyone", "Gets information about all emojis or a specific emoji.", "emojiinfo [emoji]"),
  sapphireCommand("bannerinfo", "Information", "Everyone", "Displays a user's banner.", "bannerinfo [user]"),
  sapphireCommand("avatarinfo", "Information", "Everyone", "Displays a user's avatar.", "avatarinfo [user]"),
  sapphireCommand("guildbannerinfo", "Information", "Everyone", "Displays the guild's banner."),
  sapphireCommand("guildmembercount", "Information", "Everyone", "Displays the guild's member count."),
  sapphireCommand("guildinfo", "Information", "Everyone", "Gets information about a guild.", "guildinfo [guild invite]"),
  sapphireCommand("guildchannelcount", "Information", "Everyone", "Displays the guild's channel count."),
  sapphireCommand("roleinfo", "Information", "Everyone", "Gets information about all roles or a specific role.", "roleinfo [role]"),
  sapphireCommand("guildiconinfo", "Information", "Everyone", "Displays the guild's icon."),
  sapphireCommand("guildsplashinfo", "Information", "Everyone", "Displays the guild's discovery splash."),
  sapphireCommand("stickerpackinfo", "Information", "Everyone", "Gets information about all sticker packs or a specific sticker pack.", "stickerpackinfo [sticker pack]"),
  sapphireCommand("stickerinfo", "Information", "Everyone", "Gets information about all stickers or a specific sticker.", "stickerinfo [sticker]"),
  sapphireCommand("searchdocumentation", "Information", "Everyone", "Searches Sapphire's official documentation.", "searchdocumentation <query>"),
  sapphireCommand("userinfo", "Information", "Everyone", "Gets information about a user.", "userinfo [user]"),
  sapphireCommand("channelinfo", "Information", "Everyone", "Gets information about all channels or a specific channel.", "channelinfo [channel]"),

  // Interactions
  sapphireCommand("interactions", "Interactions", "Owner", "Displays information about how to create custom interactions with Sapphire."),
  sapphireCommand("transfer-slash-commands-to-cb", "Interactions", "Owner", "Transfers all slash commands from Sapphire to your custom branded bot."),

  // Join Roles
  sapphireCommand("joinroles", "Join Roles", "Owner", "Manages Join Roles.", "joinroles [sync|[user] <add|remove> <role1> [role2] ...]"),

  // Logging
  sapphireCommand("log", "Logging", "Owner", "Manages logging.", "log [<set <channel>|remove> <type1> [type2] ...>|<ignore <user1|role1|channel1> [user2|role2|channel2] ...>]"),

  // Messages
  sapphireCommand("sendtemplate", "Messages", "Moderator", "Sends a message template into a specific channel.", "sendtemplate [[channel|webhook url] <template name>]"),
  sapphireCommand("sendmessage", "Messages", "Moderator", "Sends a message into a specific channel.", "sendmessage [channel] <message>"),

  // Moderation
  sapphireCommand("archive", "Moderation", "Moderator", "Creates a message history of a user or channel.", "archive <user|channel> [user|channel] [count]"),
  sapphireCommand("ban", "Moderation", "Moderator", "Bans a user from the guild.", "ban [user] [duration] [reason] [-r|(a|n)]"),
  sapphireCommand("casesplit", "Moderation", "Moderator", "Splits a mass case into two cases: one for the specified user and one for everyone else.", "casesplit <id> <@user|userid>"),
  sapphireCommand("caseupdate", "Moderation", "Moderator", "Updates a case.", "caseupdate [case id] [reason|time [reason]]"),
  sapphireCommand("block-appeal-user", "Moderation", "Moderator", "Blocks a user from submitting appeals.", "block-appeal-user <user> [reason] [duration]"),
  sapphireCommand("caselist", "Moderation", "Moderator", "Gets a list of the newest cases, including cases for specified users.", "caselist [user] [user]"),
  sapphireCommand("caseinfo", "Moderation", "Moderator", "Gets information about a case.", "caseinfo [case id]"),
  sapphireCommand("casedelete", "Moderation", "Moderator", "Deletes a case.", "casedelete <case id>"),
  sapphireCommand("caseclose", "Moderation", "Moderator", "Closes a case.", "caseclose <case id> [reason]"),
  sapphireCommand("lock", "Moderation", "Moderator", "Locks a text or voice channel. Voice users are disconnected; optional flags can revoke view or thread permissions or suppress the info message.", "lock [channel] [reason] [+(v|t|s)]"),
  sapphireCommand("kick", "Moderation", "Moderator", "Kicks a user from the guild.", "kick [user] [reason] [-r|(a|n)]"),
  sapphireCommand("lockall", "Moderation", "Moderator", "Locks all channels configured in the Sapphire dashboard.", "lockall [reason] [+(v|t|s)]"),
  sapphireCommand("joinguardwhitelist", "Moderation", "Moderator", "Adds or removes users from the Join Guard whitelist, or lists whitelisted users.", "joinguardwhitelist <add|remove|list> [userid]"),
  sapphireCommand("linkcaseview", "Moderation", "Moderator", "Links this server's case view with another server so both can view each other's moderation cases.", "linkcaseview [serverid]"),
  sapphireCommand("massmute", "Moderation", "Moderator", "Mutes multiple users at once; duration and reason can be set after execution.", "massmute <user1> [user2] ..."),
  sapphireCommand("masswarn", "Moderation", "Moderator", "Warns multiple users at once; duration and reason can be set after execution.", "masswarn <user1> [user2] ..."),
  sapphireCommand("massban", "Moderation", "Moderator", "Bans multiple users at once; duration and reason can be set after execution.", "massban <user1> [user2] ..."),
  sapphireCommand("message-histories", "Moderation", "Moderator", "Gets all message histories or those belonging to a specific user.", "message-histories [user]"),
  sapphireCommand("mute", "Moderation", "Moderator", "Mutes a user.", "mute [user] [duration] [reason] [-r|(a|n)]"),
  sapphireCommand("masskick", "Moderation", "Moderator", "Kicks multiple users at once; a reason can be set after execution.", "masskick <user1> [user2] ..."),
  sapphireCommand("namekick", "Moderation", "Moderator", "Kicks users whose username or nickname matches a name. Use -f to search the full name.", "namekick <name> [-f]"),
  sapphireCommand("namewarn", "Moderation", "Moderator", "Warns users whose username or nickname matches a name. Use -f to search the full name.", "namewarn <name> [-f]"),
  sapphireCommand("namemute", "Moderation", "Moderator", "Mutes users whose username or nickname matches a name. Use -f to search the full name.", "namemute <name> [-f]"),
  sapphireCommand("purge", "Moderation", "Moderator", "Deletes messages by count, age, matching content, message range, and optionally user.", "purge <count|time|message url/id> [between second message url/id|user] [user]"),
  sapphireCommand("nameban", "Moderation", "Moderator", "Bans users whose username or nickname matches a name. Use -f to search the full name.", "nameban <name> [-f]"),
  sapphireCommand("prune", "Moderation", "Moderator", "Prunes members inactive for 1–30 days, optionally limited to specified roles.", "prune <time ago> [[role1] [role2] ...] [reason]"),
  sapphireCommand("report-ignoreall", "Moderation", "Moderator", "Ignores all open reports in the server without notifying reporters."),
  sapphireCommand("restore-appeal-messages", "Moderation", "Moderator", "Restores appeal submission information messages if they were deleted."),
  sapphireCommand("report-blacklist", "Moderation", "Moderator", "Blocks users from using the report command.", "report-blacklist <show|add|remove> [user id]"),
  sapphireCommand("report", "Moderation", "Everyone", "Reports a user to the server's moderation team.", "report <user|message url> <reason> [comment]"),
  sapphireCommand("report-sendmissing", "Moderation", "Moderator", "Restores accidentally deleted report information messages."),
  sapphireCommand("predefinedreasons", "Moderation", "Owner", "Manages predefined reasons for moderation punishments."),
  sapphireCommand("timemute", "Moderation", "Moderator", "Mutes users based on when their account was created or when they joined.", "timemute <created|joined> <time ago> [duration] [reason]"),
  sapphireCommand("timeban", "Moderation", "Moderator", "Bans users based on when their account was created or when they joined.", "timeban <created|joined> <time ago> [duration] [reason]"),
  sapphireCommand("timekick", "Moderation", "Moderator", "Kicks users based on when their account was created or when they joined.", "timekick <created|joined> <time ago> [reason]"),
  sapphireCommand("setslowmode", "Moderation", "Moderator", "Sets channel slow mode. Sapphire's built-in help does not provide additional details."),
  sapphireCommand("setproof", "Moderation", "Moderator", "Sapphire's built-in help does not provide a description for this command."),
  sapphireCommand("send-to-appeal", "Moderation", "Moderator", "Sends a message to a user who submitted an appeal.", "send-to-appeal [message] [anonymous]"),
  sapphireCommand("unlock", "Moderation", "Moderator", "Unlocks a text or voice channel. Add +s to suppress the information message.", "unlock [channel] [reason] [+s]"),
  sapphireCommand("unblock-appeal-user", "Moderation", "Moderator", "Unblocks a user from submitting appeals.", "unblock-appeal-user <user>"),
  sapphireCommand("timewarn", "Moderation", "Moderator", "Warns users based on when their account was created or when they joined.", "timewarn <created|joined> <time ago> [reason]"),
  sapphireCommand("unmute", "Moderation", "Moderator", "Closes all mutes for a user.", "unmute <user> [reason]"),
  sapphireCommand("unban", "Moderation", "Moderator", "Unbans a user from the guild.", "unban <user> [reason]"),
  sapphireCommand("unlockall", "Moderation", "Moderator", "Unlocks all locked channels. Optional flags limit the action to lockall channels or suppress the info message.", "unlockall [reason] [+l|s]"),
  sapphireCommand("warn", "Moderation", "Moderator", "Warns a user.", "warn [user] [duration] [reason] [-r|(a|n)]"),
  sapphireCommand("usernotes", "Moderation", "Moderator", "Gets all notes about a user or adds a note.", "usernotes <user> [note to add]"),
  sapphireCommand("unwarn", "Moderation", "Moderator", "Closes all warnings for a user.", "unwarn <user>"),
  sapphireCommand("warns", "Moderation", "Moderator", "Gets all warnings about a user.", "warns [user]"),

  // Reaction Roles
  sapphireCommand("reactionroles", "Reaction Roles", "Owner", "Manages Reaction Roles.", "reactionroles [<message url> [delete|reversed|roles [mode|add <role1> [role2] ...|remove [role1] [role2] ...]|maxreacts <number>]|add <emoji> <role1> [role2] ...|remove <emoji> [role1] [role2] ...]"),
  sapphireCommand("reactionrolesconfig", "Reaction Roles", "Owner", "Configures Reaction Roles.", "reactionrolesconfig [autoreact]"),
];
