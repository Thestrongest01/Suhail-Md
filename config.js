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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_36_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVjWC9DdS8ySzNaZ1JqUWI5Si9TblpRU2x2YWRRMXdqMmFaYnRaNXFBc1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhOU2ZBSnJ0UVRXNkVYdkVNM0NUVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg5ZTk4YzUtZjkxMC00NjdhLTk0NmQtMzVjZDQ2MTJkMDEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTc5LFxuICAgICAgMTczLFxuICAgICAgMTgsXG4gICAgICAxOTQsXG4gICAgICA3LFxuICAgICAgMzUsXG4gICAgICA4NyxcbiAgICAgIDEwMixcbiAgICAgIDE5MyxcbiAgICAgIDYyLFxuICAgICAgMTMxLFxuICAgICAgMTY3LFxuICAgICAgMTE2LFxuICAgICAgMTI0LFxuICAgICAgMjQ0LFxuICAgICAgMTc0LFxuICAgICAgMTAyLFxuICAgICAgMTkxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNDksXG4gICAgICAxMjgsXG4gICAgICAxMTIsXG4gICAgICAxMTEsXG4gICAgICAyMDEsXG4gICAgICAyMTQsXG4gICAgICAxNDMsXG4gICAgICAxNDcsXG4gICAgICAxNTcsXG4gICAgICAyMDUsXG4gICAgICAwLFxuICAgICAgNTcsXG4gICAgICAyNDYsXG4gICAgICAxNjEsXG4gICAgICA5MCxcbiAgICAgIDE2LFxuICAgICAgNjUsXG4gICAgICAxNCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMzI1QTQ1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njg2OTE0ODMzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VvvCdlojwnZaG8J2Wl/CdlovwnZaG8J2WiPCdlopcIixcbiAgICBcImxpZFwiOiBcIjIwODMxNDg4OTcxNTkwMDozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR2gxcDhERVBxRHBMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJML2crWW5lRXJpc3J4bmZtVXR1L3ltaE4zVTVxSU03VTJ3LzlEWlhWSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibkdQMUpXbXF5bWlrdFd6OG5DUVdEMmdaZXdLMTNMOS83L0VxMnZlVEl0eVN2M3dJV0I3bk9yV2xXVkMrdWpTRVRGOVpHYm0yQXo1aVNFOWVCVW5aQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMFFnZlRxNWJITjZsODRjVVA4TmYwaGNMZ0N0RngycitqblNhVFR1d0pYWTFTVXk0bGJmTVdQUjZxNWc1S2VlQ2Z5NWh3WllwVTVBcVVOV3dDMGQyQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njg2OTE0ODMzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjU0OTc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
