/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZwU3hxVjJYMWdwZFdjWGg0aVI3Z0Q0YXVuQmJSYlBCaTNFTEZYaG8zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2k5dm01SjlxcjZ6TjY4cDlZaWFKRWxNb01TNUR6b25CcUl5NE9kU3JBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRWRIeDhlSGJNa0h6a2VHMVpuY0dyTUFpNWJhVWlNUjh6YXY3V0tsVVdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxWHVVM0RNdUtGZ1o1WHpEOEFSbjdjRURDbmhOZmE3RkFWeWZVbFk5dWxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGV0JXNWNTa2pwOG5MOUlUb0ZBVzJUeDlqTW5IUnVqUjlBMXRTcmcvSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJyRkpzUnFiZ3F3ZG5hSUl6dC9lNUorMDdBdjkyTGZXTS9zZDRYZEtmVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEw2TG9ZcWR2OGRJNUhuTjFiTXBmWThGYzVnZURFQ0JNK1Iwai9lTEIxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHlFc3dOc0pnM0RPMUdmcHgzclVHeW1LUXJzSzBxcmlhMDdJM0NaYXREcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ0S0pqenVsUTJDNEl6cUh0TGI1OGFKUjRZZlMwd0tPWUE3WXhTRzlzdDl2cS9ubGhSOFhDZDZZbjduTHM1TFh4anREdFBZcExSbkJsYktJblg2bkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJJR0lEZ3VISDF3OXhwaTExZ0NlcFdBai9JNSswNEl5UkdVUlNtWmlCOUtZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0ODM0MzMyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRjQxNDA0NUQ4NjBCNkNDMDlCN0I1NkJEQTk0NDc5NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNjI1MjkxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NDgzNDMzMjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjFFQjhFRjE4MUM2NEZFQzE5M0RBNTQzRkQwMjM3NzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDYyNTI5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzQ4MzQzMzI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgyM0VBNDhFNzRBMjdCN0ZBN0Q3NDE3M0I0NjcxMzZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA2MjUzMjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlRXTEpYVjIyIiwibWUiOnsiaWQiOiIyNTQ3NDgzNDMzMjk6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1MTcxNTc4NTg3OTU4ODoyQGxpZCIsIm5hbWUiOiJNci5UZWNoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWHI1Uk1RKzlmaHdnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKU1k1ZjBRa05sdm9kSjdzeXh3bExIWWpCclNIQmhsaWk0NVJXVkZkdnpRPSIsImFjY291bnRTaWduYXR1cmUiOiJIdEd0bllSbEhRekN0V1pCbHd4TUFDYlQ1b3RhVGdvVWE0UDNhL1ZlcHNpTnVDM2s2VWwrRkQ2dm16MkxsK0xiZksyK2pNYk56dWVLaWVPNHVzOFpBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid0ZIZGdjbkp2aGVMdHhjNzJrbHVTSWJMQWJ6YnpDQmUwR2hjYWx0dnIyakkwczVyWGl1cjdIcXZlZFpDZ05UcDhvOVZVaDZSamwyekhLWUpLeS9nRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDgzNDMzMjk6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTVW1PWDlFSkRaYjZIU2U3TXNjSlN4Mkl3YTBod1laWW91T1VWbFJYYjgwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA2MjUyODgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWphIn0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254748343329';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
