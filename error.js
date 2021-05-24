 switch (error) {
     case 'NotPlaying':
         message.channel.send(`${client.emotes.error} - text !
         break;
     case 'NotConnected':
         message.channel.send(`${client.emotes.error} - text !
         break;
     case 'UnableToJoin':
         message.channel.send(`${client.emotes.error} - text !
         break;
     case 'VideoUnavailable':
         message.channel.send(`${client.emotes.error} - ${args[0].title} text
         break;
     case 'MusicStarting':
         message.channel.send(`The music is starting... please wait and retry!`);
         break;
     default:
         message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
 };
