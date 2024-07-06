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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_00_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkFsdFJtSmw1YVhNYVU2MlVYVmFlK0tPUko2WFJvbm1MZnQ4RlpGdVFJVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFVOd2sxVEhUa3lOc3hPQ3Z5aEZZZ1wiLFxuICBcInBob25lSWRcIjogXCJkZTQ5M2QwZi01OWNhLTQ1NWUtYTNhNi00M2FjYmFjNTM3YjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMjA2LFxuICAgICAgMjQxLFxuICAgICAgMTIxLFxuICAgICAgMTM4LFxuICAgICAgMTYyLFxuICAgICAgMTgsXG4gICAgICAyMjUsXG4gICAgICAyMjQsXG4gICAgICAyNTIsXG4gICAgICAyMTksXG4gICAgICA0MixcbiAgICAgIDE0NSxcbiAgICAgIDE1OCxcbiAgICAgIDE0MSxcbiAgICAgIDE0NyxcbiAgICAgIDI0NixcbiAgICAgIDIxOSxcbiAgICAgIDI5LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxNSxcbiAgICAgIDEsXG4gICAgICAyNCxcbiAgICAgIDI0MixcbiAgICAgIDIzNSxcbiAgICAgIDM4LFxuICAgICAgMjYsXG4gICAgICAxODksXG4gICAgICAyMDEsXG4gICAgICAyMDEsXG4gICAgICAxODAsXG4gICAgICAyNDMsXG4gICAgICAxMDIsXG4gICAgICA0OCxcbiAgICAgIDIyMCxcbiAgICAgIDQzLFxuICAgICAgMjIsXG4gICAgICA0MSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1MjM4WlZSOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njg2OTE0ODMzOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VvvCdlojwnZaG8J2Wl/CdlovwnZaG8J2WiPCdlopcIixcbiAgICBcImxpZFwiOiBcIjIwODMxNDg4OTcxNTkwMDozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMmgxcDhERUl1U29yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJML2crWW5lRXJpc3J4bmZtVXR1L3ltaE4zVTVxSU03VTJ3LzlEWlhWSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ3ZhYTJvLzllVE9Mem96M05yM2tDMEhnd01YdlR3SzQxeUxNKzBZd3FXeG9pTVR3aE9wVHVtTjZFTUV6ZE1Oa0Nkb2RDTnFSazlmUDQrYTkvY1B4QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ0hEV1dHUW5JZzBPU2ZweVJiUWdsQ2ZLcDR3ZHZSam9pVk1oeGNzaHA4VHJ0eGZ6VkhVRUhpOVAwUWd2c2xEbWpjQTJKWmxQT0lZbVczdFNidmk0QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njg2OTE0ODMzOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjI0MDE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1FVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZNHVYM05nWU9yc016ZlVQWVVzQS9oajd5cTRIa2dIUE9ibjE1OS9iNmRBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg3MTczMTQzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDIwNjQzMjcxMlwifSIKfQ=="  // PUT your SESSION_ID 


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
