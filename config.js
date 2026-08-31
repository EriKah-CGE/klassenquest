// ═══════════════════════════════════════════════════════════════
// KLASSENQUEST - KONFIGURATION
// ═══════════════════════════════════════════════════════════════
// Diese Datei einmal ausfüllen, dann nie wieder anfassen!
// Updates der App überschreiben sie nicht.
// ═══════════════════════════════════════════════════════════════

// ─── 0. DATEN-MODUS ────────────────────────────────────────────
// 'local'    = Schülerdaten NUR auf dem Gerät (DSGVO-Modus).
//              Abgleich zwischen Kolleg:innen per Export/Import-Datei
//              über die Schulcloud (Mehr → Daten & Sicherung).
// 'firebase' = Live-Sync über Firebase (alter Modus).
// Die Firebase-Zugangsdaten unten bleiben in BEIDEN Modi nötig,
// weil die Plenumsspiele (Fußball, Montagsmaler) sie für anonyme
// Spielrunden mit den Schüler-Tablets verwenden.

window.DATA_MODE = 'local';

// ─── 1. FIREBASE-KONFIGURATION ─────────────────────────────────
// Aus Firebase Console → Projekteinstellungen → Deine Apps kopieren

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB7w0LlNaVFmbBwXZ2LdFbW_pJZRJ69BM0",
  authDomain: "klassenquest.firebaseapp.com",
  databaseURL: "https://klassenquest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klassenquest",
  storageBucket: "klassenquest.firebasestorage.app",
  messagingSenderId: "833383889737",
  appId: "1:833383889737:web:ef3ca74ac3673e972a7898"

};

// ─── 2. PASSWÖRTER ──────────────────────────────────────────────
// Diese sind die Standard-Passwörter. Admins können sie in
// der App unter "Mehr → Passwörter" jederzeit ändern.
// Bei Reset werden wieder diese Werte aktiv.

window.ADMIN_PW   = 'klasse5c';      // ← Klassenlehrer:innen (Admin-Rechte)
window.TEACHER_PW = 'lehrer5c';      // ← Fachlehrer:innen (normales Login)
window.DB_PATH = 'klassenquest_kq7Mq3xPnV9bRtZ2';
