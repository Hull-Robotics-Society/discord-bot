const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "freeside",
  aliases: ["fs"],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setTitle("Freeside")
      .setColor("ORANGE")
      .setFooter(`Called By: ${message.author.tag}`)
      .setDescription(
        "Freeside is the student run and maintained linux cluster within the University Of Hull Computer Science Department providing Linux administration experience, mentoring and technical advice alongside other peer-led support. It is completely free to all students to join, irrespective of degree pathway."
      )
      .addField(
        "You can join them from below!",
        "https://discord.com/invite/qAZ8dAp"
      );
    message.channel.send({ embeds: [embed] });
  },
};
