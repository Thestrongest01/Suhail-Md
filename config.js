const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_40_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzZU50THhEdXhoSUNreGx6RlpaT3RHR3lObE9kQ285UzF4SlVxNHd3ckZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTaUhzaXI5NVJWeVhJdnpjMW16RU5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjZTlmMzVhLWY3OTAtNDZjNS1iYWQ1LTJmZWIwNzlmZGIyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICA5NixcbiAgICAgIDI0NCxcbiAgICAgIDEwLFxuICAgICAgMTg1LFxuICAgICAgMjExLFxuICAgICAgMjIyLFxuICAgICAgMzgsXG4gICAgICAxNjUsXG4gICAgICAxMjgsXG4gICAgICAxNjUsXG4gICAgICA2NyxcbiAgICAgIDE4OSxcbiAgICAgIDYxLFxuICAgICAgMjE3LFxuICAgICAgNjYsXG4gICAgICA4NCxcbiAgICAgIDEzOCxcbiAgICAgIDEyMixcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxOTksXG4gICAgICA4NCxcbiAgICAgIDE4MyxcbiAgICAgIDE5NSxcbiAgICAgIDIzMyxcbiAgICAgIDEsXG4gICAgICA4LFxuICAgICAgMTI3LFxuICAgICAgMTYzLFxuICAgICAgMjU0LFxuICAgICAgMjMwLFxuICAgICAgMTkwLFxuICAgICAgMTkwLFxuICAgICAgMTAxLFxuICAgICAgMzksXG4gICAgICAyMDYsXG4gICAgICAyMDUsXG4gICAgICAxMTMsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUNQUEI5Q1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY4NjkxNDgzMzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlb7wnZaI8J2WhvCdlpfwnZaL8J2WhvCdlojwnZaKXCIsXG4gICAgXCJsaWRcIjogXCIyMDgzMTQ4ODk3MTU5MDA6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEtoMXA4REVMeXVwYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyTC9nK1luZUVyaXNyeG5mbVV0dS95bWhOM1U1cUlNN1Uydy85RFpYVkh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInY2VzNkYi8yUDg1ckNIWThYSFFHQWhBbk9SQ3J3aEVPRFpvMXhiSWJPWGhoeVVCM3UzckZpZm9WKzNCOWNuZEVZOW5IUXN1dXI1cmUxNXdEYW1ma0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJaSWNYeURzcytydWdQaVpreFRpOXY5TjBIRmc0eG4yU0xtZENWR2F4WlVRZkxrY2xLaWZIVlZNUm9wcUN4d1J1ck45QnNRaE93SjkydU5EMVRuSGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY4NjkxNDgzMzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI3NjgwMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
