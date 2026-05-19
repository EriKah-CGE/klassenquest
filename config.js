// ═══════════════════════════════════════════════════════════════
// KLASSENQUEST - KONFIGURATION
// ═══════════════════════════════════════════════════════════════
// Diese Datei einmal ausfüllen, dann nie wieder anfassen!
// Updates der App überschreiben sie nicht.
// ═══════════════════════════════════════════════════════════════

// ─── 1. FIREBASE-KONFIGURATION ─────────────────────────────────
// Aus Firebase Console → Projekteinstellungen → Deine Apps kopieren

window.FIREBASE_CONFIG = {
  apiKey: "DEIN_API_KEY_HIER",
  authDomain: "klassenquest.firebaseapp.com",
  databaseURL: "https://klassenquest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klassenquest",
  storageBucket: "klassenquest.firebasestorage.app",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "DEINE_APP_ID"
};

// ─── 2. PASSWÖRTER ──────────────────────────────────────────────
// Diese sind die Standard-Passwörter. Admins können sie in
// der App unter "Mehr → Passwörter" jederzeit ändern.
// Bei Reset werden wieder diese Werte aktiv.

window.ADMIN_PW   = 'klasse5a';      // ← Klassenlehrer:innen (Admin-Rechte)
window.TEACHER_PW = 'lehrer5a';      // ← Fachlehrer:innen (normales Login)
window.DB_PATH = 'klassenquest_kq7Mq3xPnV9bRtZ2';
