require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 50900,
    SESSION_PREFIX: process.env.SESSION_PREFIX || "SMURF~",
    GC_JID: process.env.GC_JID || "HRdlOPWj9lyBIEfLC3PPU6",
    DATABASE_URL: process.env.DATABASE_URL || "",
    BOT_REPO: process.env.BOT_REPO || "https://github.com/smurf-xmd/Smurf",
    WA_CHANNEL: process.env.WA_CHANNEL || "https://chat.whatsapp.com/HRdlOPWj9lyBIEfLC3PPU6",
    MSG_FOOTER: process.env.MSG_FOOTER || "> *Powered by cyberquest*",
};
