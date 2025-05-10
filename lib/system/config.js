/**

 # ========================================
 * Bot By : Zuunotfound
 * github : https://github.com/Zuunotfound
 * Repo : OblivionX
 * type : Case & Plugin 
 # ========================================
 
 **/

const fs = require('fs')
const {
    color
} = require('../../lib/simple')
const getver = require("../../package.json")

//owner
global.owner = ['6283890875133']
global.nomerowner = ["6283890875133"]
global.waiter = 6283890875133

//sticker
global.packname = 'OblivionX - zuu'
global.author = 'OblivionX'

// biarin
global.urldb = '';

// thumbnail
global.thumurl = "https://h.top4top.io/p_3411m52f81.jpg"
global.thumurl2 = "https://i.top4top.io/p_3411ewbx71.jpg"
global.thumurl3 = "https://j.top4top.io/p_3411hw1jk1.jpg"

//saluran
global.urls = "https://whatsapp.com/channel/0029VbACugX6rsQyHw0Wvr1g"
global.ids = "120363399204776509@newsletter"
global.idsaluran = "120363399204776509@newsletter"
global.nems = "©2025 - zuu"
// pterodactyl panel
global.domain = '' // isi domain
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//Linode
global.apilinode = "" //Token Linode
global.apitokendo = "" //Token DigitalOcean
    
global.listsewa = `[ EMPTY ]`

//ElevenLabsApi
global.KEY = "sk_f60e2dc541f6d2aeb89ebb948d11ac12d1b26adba177686c"
global.IDVOICE = "GET ON elevenlabs.io"

//messages reply
global.mess = {
    done: '*`[ OBLIVIONX ] : Request completed !`*',
    owner: '*`[ OBLIVIONX ] : For an owner only`*',
    private: '*`[ OBLIVIONX ] : In Private only`*',
    group: '*`[ OBLIVIONX ] : Only available in group`*',
    wait: '*`[ OBLIVIONX ] : Request processed..`*',
    error: '*`[ OBLIVIONX ] : Error try again later`*',
    admin: '*`[ OBLIVIONX ] : You are not an admin`*',
    botAdmin: '*`[ OBLIVIONX ] : Your bot is not an admin`*',
    premium: '*`[ OBLIVIONX ] : You not a premium user`*',
    jadibot: '*`[ OBLIVIONX ] : You not a jadibot user`*',
    ban: "*`[ OBLIVIONX ] You acces has Banned.`*",
}

global.title = "OblivionX - BreakerVoid"
global.body = "ʀᴏᴀᴅ ᴛᴏ ɢʟᴏʀʏ"
global.filename = "𝐎𝐁𝐋𝐈𝐕𝐈𝐎𝐍𝐗 - 𝐁𝐫𝐞𝐚𝐤𝐞𝐫𝐕𝐨𝐢𝐝"
global.jpegfile = "𝐎𝐁𝐋𝐈𝐕𝐈𝐎𝐍𝐗 - 𝐙𝐔𝐔"
global.botname = "𝐎𝐁𝐋𝐈𝐕𝐈𝐎𝐍𝐗"
global.ownername = "zuu hitam"
global.version = getver.version

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})