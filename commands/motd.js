const Discord = require('discord.js');
module.exports = {
	name: 'motd',
	description: 'its the truth brutha',
	execute(message, args) {
message.channel.send('```/etc/motd:\n  Note: IHAVEROOT has had ROOT here as of the beginning of time\n  >   Just passing through             ___     ______              __    _                _____                    __ ____                 __\n  >   /  _// /_   ____ _ _   __ ___   /   |   / ____/__  __ _____ / /__ (_)____   ____ _ / ___/ ____ ___   ____   / // __ \\ ____   ____   / /_\n  >   / / / __ \\ / __ `/| | / // _ \\ / /| |  / /_   / / / // ___// //_// // __ \\ / __ `/ \\__ \\ / __ `__ \\ / __ \\ / // /_/ // __ \\ / __ \\ / __/\n  > _/ / / / / // /_/ / | |/ //  __// ___ | / __/  / /_/ // /__ / ,<  / // / / // /_/ / ___/ // / / / / // /_/ // // _, _// /_/ // /_/ // /_\n  >/___//_/ /_/ \\__,_/  |___/ \\___//_/  |_|/_/     \\__,_/ \\___//_/|_|/_//_/ /_/ \\__, / /____//_/ /_/ /_/ \\____//_//_/ |_| \\____/ \\____/ \\__/\n  >                                                                            /____/```')
}};