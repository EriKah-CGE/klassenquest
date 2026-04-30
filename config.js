// ═══════════════════════════════════════════════════════════════
// KLASSENQUEST - KONFIGURATION
// ═══════════════════════════════════════════════════════════════
// Diese Datei einmal ausfüllen, dann nie wieder anfassen!
// Updates der App überschreiben sie nicht.
// ═══════════════════════════════════════════════════════════════

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

// ─── 2. ADMIN-PASSWORT ──────────────────────────────────────────
// Nur Klassenlehrer:innen brauchen das (zum Schüler hinzufügen, Reset, etc.)
// Fachlehrkräfte loggen sich ohne Passwort ein.

window.ADMIN_PW = 'admin1234';
