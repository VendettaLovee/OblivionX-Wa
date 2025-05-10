let handler = async (m, { zuu, reply, args }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  try {
    const data = zuu.chats[id].messages
    const online = Object.values(data).map(item => item.key.participant)
    
    const uniqueOnline = online.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    
    reply('┌─〔 Daftar Online 〕\n' + uniqueOnline.map(v => '├ @' + v.replace(/@.+/, '')).join('\n') + '\n└────')
   
  } catch (e) {
    m.reply('Tidak ada, cuman lu doang')
  }
}

handler.command = ['listonline']

module.exports = handler