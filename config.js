const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "-mongodb+srv://test:test@cluster0.lwofaad.mongodb.net/?retryWrites=true&w=majority"
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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_07_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjR1ck5QV1FRMzhVYVJkWkNDOVE5eEZNL3JiU01iOXJMemhvRGlUZDlwa3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDMwODU4NjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQUJERTEwN0U4MDRGRTdEMUJDMzM0NzE4RTM2RTM2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5NDkyNzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmNOUjV1OUlSeHk1Z2s2eHZYRUJGd1wiLFxuICBcInBob25lSWRcIjogXCJlMWRiMGVkMS1hMTY0LTRiMzAtYTkxOS1lYzhkNTU0YTcyY2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxOTMsXG4gICAgICAyMTAsXG4gICAgICAyNyxcbiAgICAgIDc5LFxuICAgICAgMixcbiAgICAgIDg1LFxuICAgICAgMTM5LFxuICAgICAgMTc2LFxuICAgICAgOSxcbiAgICAgIDEzNixcbiAgICAgIDEyMSxcbiAgICAgIDU1LFxuICAgICAgMTkxLFxuICAgICAgMTY4LFxuICAgICAgMzgsXG4gICAgICA0MCxcbiAgICAgIDE2OCxcbiAgICAgIDIwNSxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxODUsXG4gICAgICAxNjMsXG4gICAgICA1MSxcbiAgICAgIDIzNCxcbiAgICAgIDMyLFxuICAgICAgMTk1LFxuICAgICAgMTk3LFxuICAgICAgMzAsXG4gICAgICA0MyxcbiAgICAgIDI2LFxuICAgICAgMjI3LFxuICAgICAgOCxcbiAgICAgIDE3OSxcbiAgICAgIDcxLFxuICAgICAgMjQyLFxuICAgICAgMjcsXG4gICAgICAyMzMsXG4gICAgICAxNzAsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOURDVERQM0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzMDg1ODY2MTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKBseG1l8ujIPCdmYjwnZmK8J2ZovCdmZ7wnZmJXCIsXG4gICAgXCJsaWRcIjogXCIxNzQ3ODgzMjQ2MzQ3Nzg6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmJWNnNzRUVOT21sN01HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLeXpRa1E4eG54ZCtBQXlVSGNZM3AyeWxJdE5Pd1NoTUNGVHpqZ0NJamdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxhMUNzOEtyK0l3WWJYSy90SGxaSlUrNG5mODdBUnZjQ2t0a2s4NWFMVFJKc3lNNGp0cEloRm1IdVpGRWtJVVhkam1LVXBjSFM0NUo5dHI3d1J4dUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRpOFo2L21qSDgybDlRYUI3ZXlleVNhWDJuRzRsdjFpMmU0T3BscyszYkNPZ0c2dkJ1SlRpL3kzVzFjSS9TOGpRMGJUU0srZC84N1J0T2h3ZHkrR0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzMDg1ODY2MTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzk0OTI3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlBT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUFPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOTNtQUt6SVhoU2QvMXpzMkk3blpMMzdTWVN6bUxBYXdHOThHSHhuUW13MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMyNzc1ODI5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "b359d277-4bee-4ecb-b95c-99c06af8ee2c",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "ma5064",
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
