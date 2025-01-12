//base by DGXeon
//recode by ꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: THUGN1F1CENT" //ur yt chanel name
global.socialm = "IG:" //ur github or insta name
global.location = "Africa,Nigeria,Delta state" //ur location

//new
global.botname = '꧁ 𝕺𝖗𝖊𝖐𝖎 𝖒𝖉 ꧂' //ur bot name
global.ownernumber = '2347059237476' //ur owner number
global.ownername = '꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01"// DON'T CHANGE 
global.wagc = "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01"// DON'T CHANGE
global.themeemoji = '🧸'
global.wm = "꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥"
global.botscript = 'https://github.com/DEMONST3R-CODER/OREKI-MD' //script link
global.packname = "Oreki MD"
global.author = "꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥"
global.creator = "2347059237476@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2347059237476"] // Premium User
global.hituet = 0

//bot set
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: '*You have exhausted your limits!*',
    done: '*Successful*',
    error: '*Error!*',
    success: '*Powered by thugnificent Tech™*'
}
//thumbnail
global.thumb = fs.readFileSync('./T-Media/theme/Oreki.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
