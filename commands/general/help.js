const discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(!args[0]){
            const embed = new discord.MessageEmbed()
            .setTitle("Hull Robotics Society Help")
            .setDescription("You can use `$help <category>` to get additional commands within a specfic category")
            .setColor('#31429a')
    
            .addField('❓`$help`','This Command', true)
            .addField('🛠️`$help admin`','Displays Admin Commands!', true)
            .addField('ℹ️ `$help general`', 'Displays General Commands!', true)
            .addField('🎉`$help fun`', 'Displays Fun Commands!', true)
            message.channel.send({ embeds: [embed] });
        }
    
        if(args[0] === 'admin'){
            const embed = new discord.MessageEmbed()
            .setTitle("Admin Commands")
            .setColor('GREEN')
            message.channel.send({ embeds: [embed] });
        }
    

    
        if(args[0] === 'general'){
            const embed = new discord.MessageEmbed()
            .setTitle("General Comamnds")
            .setColor('GREEN')

            .addField('$buy', 'Sends a link to purchase membership')
            .addField('$links', 'Get all the links')
            .addField('$freeside', 'A link to the Freeside discord server')

            message.channel.send({ embeds: [embed] });
        }
        
        if(args[0] === 'fun'){
            const embed = new discord.MessageEmbed()
            .setTitle("Fun Comamnds")
            .setColor('GREEN')

            .addField('$8ball', 'Answer your deepest questions.')
            message.channel.send({ embeds: [embed] });
        }


        
    }
}



