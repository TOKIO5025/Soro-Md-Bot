import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['50248019799', 'ＰＲＯＰＩＥＴＡＲＩＯ', true], ['50248019799'], ['50248019799']]
global.mods = []
global.prems = []

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = "" //Ejemplo: +50248019799
global.confirmCode = "" 
global.gataJadibts = true //cambia a false Desactivar en "auto-reconexion" de sub-bots

//---------[ APIS GLOBAL ]---------

global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: 'GataDiosV3' },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api/', key: null }, 
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
popcat: { url: 'https://api.popcat.xyz', key: null }}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = 'zoro-Bot-MD'
global.author = '🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = 'zoro𝘽𝙤𝙩-𝙈𝘿' 
global.vs = '1.9.5'
global.yt = 'https://www.youtube.com/@elrebelde.21'
global.tiktok = 'https://www.tiktok.com/@elrebelde.21'
global.md = 'https://github.com/TOKIO5025'
global.fb = 'https://www.facebook.com/elrebelde21'
global.face = 'https://www.facebook.com/groups/872989990425789/'

global.nna = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A' //Update
global.nna2 = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A' //SoroBot update
global.nnaa = 'https://whatsapp.com/channel/0029Vae6j714Y9loutP3Au29' //soroBot - Test
global.nn = 'https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71' //Grupo del Colaboracion
global.nnntt = 'https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71' //enlace lolibot
global.nnnttt = 'https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71' //A.T.T.M
global.nnntttt = 'https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71' //Grupo ayuda sobre el bot
global.bot = 'wa.me/'
global.redes = [nna, nna2, yt, nn, nnn, nnnt, nnntt, nnnttt, nnntttt, md, tiktok, fb, face]

//------------------------[ Info | Datos ]---------------------------

global.wait = 'Calmao pa estoy procesando😎\n\n> *❗Por favor no hacer spam👏❗*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ✅』\n\n'
global.ag = '『⚠️ 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️』\n\n'
global.iig = '『❕ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 』\n\n'
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n'
global.mg = '『❗️ 𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇❗』\n\n'
global.eeg = '『📩 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 📩』\n\n'
global.eg = '『💚 𝙀𝙓𝙄𝙏𝙊𝙎 💚』\n\n'

//-------------------------[ IMAGEN ]------------------------------
//global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/hNJk.jpg'
global.img2 = 'https://qu.ax/jzhN.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://files.catbox.moe/0c1kzk.jpg'
global.imagen6 = 'https://files.catbox.moe/a8qjsk.jpg'
global.menu18 = 'https://files.catbox.moe/2ap88m.jpg'
global.vid1 = 'https://qu.ax/dcAc.mp4'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]
global.imageUrl = ["https://files.catbox.moe/55xfg4.jpg", "https://files.catbox.moe/eygxf3.jpg", "https://files.catbox.moe/gej5dg.jpg"]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363341523880410@newsletter', 
ch2: '120363341523880410@newsletter', 
ch3: '120363341523880410@newsletter',
ch4: '120363341523880410@newsletter',
ch5: '120363341523880410@newsletter', 
ch6: '120363341523880410@newsletter',
ch7: '120363341523880410@newsletter',
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
