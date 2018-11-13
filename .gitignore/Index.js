const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("*");

function changing_status() {
    let status = [`${bot.guilds.size} Servers | *help`]
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
}


bot.on("ready", () => {
    console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveurs Number of Users : ${bot.users.size}`);
    setInterval(changing_status, 6000);
});

bot.login('process.env.TOKEN');

bot.on('message', message => {
if (message.content === prefix + "ping"){
	 if(message.channel.type !== 'text') return
    message.channel.send(`L'API a mis: **${Math.floor(bot.ping)} Ms** pour repondre`);
}

if (message.content === prefix + "stats"){
     if(message.channel.type !== 'text') return 

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    
       .setTitle("Stats")
       .setDescription(`${bot.user.username}`)
       .addField("Pseudo",`${user.tag}`, true)
       .addField("Compte créer le",`${message.author.createdAt}`, true)
       .addField("Vous avez rejoins le",`${message.member.joinedAt}`, true)
       .setColor(message.guild.me.highestRole.color)
       .setFooter("0.9.0 | FunPlayers")
       .setThumbnail(message.author.avatarURL)
   message.channel.sendEmbed(embed);  
}

if (message.content === prefix + "stats-bot"){
     if(message.channel.type !== 'text') return 

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    
       .setTitle("Stats Bot")
       .setDescription(`${user.tag}`)
       .addField("Pseudo",`${bot.user.username}`, true)
       .addField("Nombre de serveur",`${bot.guilds.size} Serveur`, true)
       .addField("Nombre d'utilisateur",`${bot.users.size}`, true) 
       .setColor(message.guild.me.highestRole.color)  
       .setFooter("0.9.0 | FunPlayers")
       .setThumbnail(message.author.avatarURL)
   message.channel.sendEmbed(embed);
}
     
if (message.content === prefix + "help"){
     if(message.channel.type !== 'text') return 
var embed = new Discord.RichEmbed()   
       .addField("Help","**Hey, ta besoin d'aide je crois, te voila avec notre equipe on n'a facilité les commandes avec le** `*help [nom du module]` \n \n **Je te mets en bas les help disponible** \n ``*help general`` \n ``*help image`` \n ``*help moderation`` \n \n **J'espere qu'on ta aidé ^-^**", true)
       .setThumbnail(message.author.avatarURL)
   message.channel.send(embed);
}

if (message.content.startsWith('*kick')) {
     if(message.channel.type !== 'text') return
const user = message.mentions.users.first(); 
if (message.member.permissions.has("KICK_MEMBERS"))
if (user) {
const member = message.guild.member(user);
if (member) {


member.kick('Optional reason that will display in the audit logs').then(() => {
message.channel.send(`Vous avez bien kick ${user.tag}`); 
}).catch(err => {
message.channel.send(`Je suis incapable de kicker ${user.tag}`);
console.error(err);
});
 } else {
message.reply('Cet utilisateur ne fait pas partie de cette guilde!'); 
}
} else {
message.reply('Faudrait mentionne le membre avant d\'essayer de le kick!'); 
}
}

if (message.content.startsWith('*ban')) {
     if(message.channel.type !== 'text') return 
const user = message.mentions.users.first();
if (message.member.permissions.has("BAN_MEMBERS"))
if (user) {
const member = message.guild.member(user);
if (member) {


member.ban({
reason: 'They were bad!',
}).then(() => {
message.channel.send(`${user.tag} a bien été ban`);
}).catch(err => {

message.channel.send(`Je suis incapable de bannir ${user.tag}`);
console.error(err); 
});
} else {
message.reply('That user isn\'t in this guild!'); 
}
} else {
message.reply('Faudrait mentionne le memnre avant d\'essayer de le bannir!');
}
}

  if (message.content === prefix + 'avatar') {
      if(message.channel.type !== 'text') return

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()

    .setAuthor(`Voici la photo de profile de ${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor(message.guild.me.highestRole.color)

    message.channel.send(embed)
}

if (message.content === prefix + "help moderation") {
     if(message.channel.type !== 'text') return   
message.channel.send("**Moderation** \n \n `*kick @user`,`*ban @user`,`*purge [Nombre]`");
}

if (message.content === prefix + "help image") {  
       if(message.channel.type !== 'text') return
message.channel.send("**Image** \n \n `*avatar`,`*pets`");
}   

if (message.content === prefix + "help general") {  
     if(message.channel.type !== 'text') return  
message.channel.send("**General** \n \n `*ping`,`*stats`,`*stats-bot`");
}

if (message.content === prefix + "pets") {
     if(message.channel.type !== 'text') return 

  var pets = [

      "https://media.giphy.com/media/3oEduUVL7wX5a1NBXq/giphy.gif",
      "https://media.giphy.com/media/Dcf2hNSaAiLV6/giphy.gif",
      "https://media.giphy.com/media/10ZEx0FoCU2XVm/giphy.gif",
      "https://media.giphy.com/media/vAHZ9rc8rY8zm/giphy.gif",
      "https://media.giphy.com/media/lHsCS3IickU7e/giphy.gif",
      "https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif",
      "https://media.giphy.com/media/1trYyhnI4TGgM/giphy.gif",
      "https://media.giphy.com/media/2ETTlMXeTxfTa/giphy.gif",
      "https://media.giphy.com/media/l0MYRzcWP7cjfNQ2I/giphy.gif",
      "https://media.giphy.com/media/3oKIPCSX4UHmuS41TG/giphy.gif"
  ];

  var gif = pets[Math.floor(Math.random() * pets.length)];

  var pets_embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`:dog: Voici une image mignon :cat:`)
  .setImage(gif)
  .setFooter(`TFS | Tous droits réservés`)
  .setTimestamp()
  message.channel.send(pets_embed);

}   
});

bot.on('guildMemberAdd', member => {
const channel = member.guild.channels.find(ch => ch.name === '✌bienvenue-aurevoir👋');
if (!channel) return;
channel.send(`${member} Bienvenue sur **FunPlayers** :speaking_head:`);
member.addRole("509835315750371359")
})

bot.on('guildMemberRemove', member => {
const channel = member.guild.channels.find(ch => ch.name === '✌bienvenue-aurevoir👋');
if (!channel) return;
channel.send(`${member} A quitté **FunPlayers**`);
});

