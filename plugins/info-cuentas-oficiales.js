let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』\`

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (𝙇𝙤𝙡𝙞𝘽𝙤𝙩)\`
> *${bot}*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
\`『 ᴳᶦᵗᴴᵘᵇ ᵒᶠᶦᶜᶦᵃˡ 』\`   
* *${md}* 

\`『 ᴳʳᵘᵖᵒ ᵒᶠᶦᶜᶦᵃˡ ¹ 』\`   
* *${nn}* 

\`『  ᴳʳᵘᵖᵒ ᵒᶠᶦᶜᶦᵃˡ ²  』\`   
* *${nnn}* 

\`『  ᶜᵃⁿᵃˡ ᵈᵉ ᵂʰᵃᵗˢᴬᵖᵖ / ᵘᵖᵈᵃᵗᵉ  』\`   
* *${nna}* 

\`『  ᵃˢᶦˢᵗᵉⁿᶜᶦᵃ ᵖᵃʳᵃ ᵘˢᵘᵃʳᶦᵒˢ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* *${fb}* 

\`『  ᵀᶦᵏᵀᵒᵏ 』\`   
* *${tiktok}* 

\`『  ʸᵒᵘᵀᵘᵇᵉ 』\`   
* *${yt}* 

\`『  ᴳʳᵘᵖᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* *${face}* 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`『 ⱽᶦˢᶦᵗᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵉⁿˡᵃᶜᵉˢ ᵒᶠᶦᶜᶦᵃˡᵉˢ ᵉⁿ ᵘⁿ ᵘⁿᶦᶜᵒ ˡᵘᵍᵃʳ 』\`   
• https://atom.bio/tokiophonk233

${wm}`
await conn.reply(m.chat, str, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})}
//conn.sendFile(m.chat, media, 'loli.mp4', str, fkontak)}
handler.help = ['cuentaoficial']
handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentas|cuentaofc|cuentaoficial$/i
handler.register = true
export default handler
