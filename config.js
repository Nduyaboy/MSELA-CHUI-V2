//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chuiofficial03.@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mselachui03/MSELA-CHUI-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KStfBpcFDOi154eVtrz6n1";
global.website = process.env.GURL || "https://chat.whatsapp.com/KStfBpcFDOi154eVtrz6n1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b5e8a490b30177df71db0.jpg";
global.devs = "https://t.me/Mselachui_x";
global.sudo = process.env.SUDO || "255767291817";
global.owner = process.env.OWNER_NUMBER || "243850489910";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b5e8a490b30177df71db0.jpg,https://telegra.ph/file/001964ff948602d0c868f.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hSRnN4eTdtTFE2SUVXbGx2S2YvVXFBREpaYXNwRHJsNG1weiszaXJFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2lYdzhOdHNxMDQ1VmdPMURxWUVaQ1JyaXdJZjIyOW52YzE4MHltWjRWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT0NGMm5XVjhKeERPRllESHVMTU11MXNwaUZzcWlFZFRuUjFFWVJCbDBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVT0JFQVJscUNqbDArZVMrVlhPdG5tQ05yN0VxdHBBeVFOMDdxQXVEQzJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBZDI4UjZTbEVMS0NyaGp1NmQrbW9TOXp1cFNFWE5kY3U2dDR3Sno1M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV3TXBzditsV2dkdld5QkwzeUpuYnlWNjJzUlhFemNwSUlwR1JKZnVqV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0M3OEdQSWVab0hhcDBxeEU0OVZHWlFncVN2OFcxUFBiZXB6M1lFS2xXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjhPVkFIVk1mN3ZjZDYxbmVUdTNIeDVhU1gxSytwaHhGMzF5bWpjZ3F5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRnNlYrTVhMU2xMUmVjNnBPOVRIK083RWNiQ3JlTWxoTE9mOHY4TUxTaVg4L1dGT3VyK1JjSk5kQlZwN1h5cG45eXdFbzhWQW43UTU0Z1h2cUo4N2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6Ikk4UXczVndrYVQyWnJ1d3g5eUw1M0Z1S0o1R2E4dk10NEtORW5PWkpyZmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBUaEl5WjRyUjY2ZXZvSVd3eGFybFEiLCJwaG9uZUlkIjoiY2NkNzMyYjctM2NhZi00NmM2LWFmYjItZTQwMzA1YmVjYTQyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDOU5uUHhmNnpGTTlZV1l0TC9lNGlGT2dBST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJheGRzaDRCbTRwWlo0dEJrVGVQOFV5MjYxR2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTlOUDIyM0giLCJtZSI6eyJpZCI6IjI0Mzg1MDQ4OTkxMDo1NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXFZa01BR0VMaU16clVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoianRGK01jazJTbzJPK0ZaOVFwWFFpNFp6L0owL252U3FoeVBWUGMzbFRXQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib3dxdlhGT1ZmdUpnbytLM1dKZ0V5K2NMNnRjN0VtSGJTVS9HNmo4T2daMTRpNTZOa1pMRGF5c2g5Tk4wZEpGS042ek5pVlpJb3NKWjdWM3dhSUwxQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdYZGJKNW5admtQaUlmNlRCSmJpR1M1TmREb2svVlRLZWpiZC91UDdQZmlRTlNvb204STdRVW1mcDVobjI4MVpiTXB6c203dkx6UVQzQXJzZ2J2UGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzODUwNDg5OTEwOjU0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk3UmZqSEpOa3FOanZoV2ZVS1YwSXVHYy95ZFA1NzBxb2NqMVQzTjVVMWcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwNDEzNTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlp3In0=
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MSELA-CHUI-V2™`",
  author: process.env.PACK_AUTHER || "MSELA-CHUI-V2",
  packname: process.env.PACK_NAME || "C H U I",
  botname: process.env.BOT_NAME || "OMARION NDUYA",
  ownername: process.env.OWNER_NAME || "Omarion nduya",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "C H U I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
