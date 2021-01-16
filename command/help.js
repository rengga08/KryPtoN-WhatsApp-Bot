const { MessageType } = require('@adiwajshing/baileys')

module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Menampilkan semua perintah dan deskripsi',
    execute (client, from) {
        const commands = client.cmd.array()
        let text = 'Command di bot ini\n\nPrefix: !\n'
        commands.forEach((cmd) => {
            text += `- *${cmd.name}* ${cmd.aliases ? `(${cmd.aliases})` : ''}\n${cmd.description}\n`
        })
        return client.sendMessage(from, text, MessageType.text)
    }
}
