
const client = require("../index");
const {  DiscordModal, ModalBuilder, ModalField } = require('discord-modal') // Modal and TextInputComponent class

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }

        // Context Menu Handling
        if (interaction.isButton()) {

            if(interaction.customId == "codeOfConduct"){
                interaction.member.roles.add("973646380771979304")
                await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
            }

            if(interaction.customId == "paidModal")
            {
                if(interaction.member.roles.cache.has(`427878753008353292`))
                {
                    await interaction.deferReply({ ephemeral: true })
                    interaction.followUp({ content: 'You already have the paid member role.', ephemeral: true })

                } 
                else{
                    const modal = new ModalBuilder() // We create a Modal
                    .setCustomId('modal-paidmember')
                    .setTitle('Paid Member Discord Access')
                    .addComponents(
                        new ModalField()
                        .setLabel("Student Name")
                        .setStyle("short")
                        .setMin(1)
                        .setPlaceholder("Joe Bloggs")
                        .setCustomId("studentname"),
                        new ModalField()
                        .setLabel("Student Number")
                        .setStyle("short")
                        .setCustomId("studentnumber")
                        .setMin(9)
                        .setMin(9)
                        .setPlaceholder("201801122")
                        )
                        client.modal.open(interaction, modal) 
                }
            }

            if(interaction.customId == "deletemessage")
            {
                await interaction.message.delete();
                await interaction.reply({ content: 'Message has been deleted', ephemeral: true});
            }
        }

        if(interaction.isSelectMenu()) {
            if(interaction.customId == "pronounSelect")
            {
                if(interaction.values.includes("HeHim"))
                { interaction.member.roles.add("851148987271479385")} // Add Foundation
                else{interaction.member.roles.remove("851148987271479385")} // Remove First Year

                if(interaction.values.includes("HeThey"))
                { interaction.member.roles.add("974762127762010162")} // Add First Year
                else{interaction.member.roles.remove("974762127762010162")}

                if(interaction.values.includes("SheHer"))
                { interaction.member.roles.add("851149045241085963")} // Add First Year
                else{interaction.member.roles.remove("851149045241085963")}
                
                if(interaction.values.includes("SheThey"))
                { interaction.member.roles.add("974762040969273404")} // Add First Year
                else{interaction.member.roles.remove("974762040969273404")}

                if(interaction.values.includes("TheyThem"))
                { interaction.member.roles.add("851149362582913074")} // Add First Year
                else{interaction.member.roles.remove("851149362582913074")}

                if(interaction.values.includes("Any"))
                { interaction.member.roles.add("851149407050137631")} 
                else{interaction.member.roles.remove("851149407050137631")}

                
                if(interaction.values.includes("Ask"))
                { interaction.member.roles.add("851149443738107934")} 
                else{interaction.member.roles.remove("851149443738107934")}

                await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
            }
        }
    })