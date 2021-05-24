const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {

  if (!message.guild) return;

 
  if (message.content.startsWith('!ban')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
    
      if (member) {
        
        member
          .ban({
            reason: 'เขานิสัยแย่จริงๆ!',
          })
          .then(() => {
            message.reply(`แบน ${user.tag} แล้ว `);
          })
          .catch(err => {

            message.reply('ไม่สามารถแบนสมาชิก');
           console.error(err);
          });
      } else {
        message.reply("ไม่พบผู้ใช้!");
      }
    } else {
    message.reply("คุณไม่ได้ @mention ผู้ใช้ที่จะแบน!");
    }
  }
});
