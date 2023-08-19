

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require('./server.js')
keepAlive()





client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`)
const r = new Discord.RichPresence()
  .setApplicationId('920062050720436256')// الايدي بتاعك
    .setType('PLAYING')
    .setURL('https://discord.gg/p5zf4p4H')// رابط سيرفرك
    .setState('❥ ✦- Name : Noufel  ✤')// اسمك
  
    .setName('✦- ME : Info ✤')// سبها زاي مهيا
    .setDetails('❥ ✦- COUNTRY : 🇩🇿 ✤ ')// بلدك
  
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/994299470323912784/1137246692442374234/1ed0d85af963025d38cc73d233c110ac.gif?width=405&height=375')// حط رابط صوره الى تبيه
    //.setAssetsLargeText('I love life')
    .setAssetsSmallImage('https://media.discordapp.net/attachments/994299470323912784/1137246165109317642/604fc7ac1a35548f288fabea8bbf8e97.jpg?width=405&height=405')// حط رابط صوره الى تبيه
    //.setAssetsSmallText('')
  .addButton('My TIK TOK', 'https://tiktok.com/@p23a')// حط رابط القروب او سيرفر.

  .addButton('My Servers', 'https://discord.gg/p5zf4p4H')// حط رابط سيرفرك  
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" });
})

client.login(process.env.TOKEN)

