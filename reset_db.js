import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import fs from 'fs';
const envFile = fs.readFileSync('public/env.js', 'utf8');

// Extremely hacky way to evaluate the env file vars so we can use them in this node script
// The env file exports const firebaseConfig = {...}
const matches = envFile.match(/const\s+firebaseConfig\s*=\s*({[\s\S]*?});/);
if (!matches) {
    console.error("Could not find firebase config in env.js");
    process.exit(1);
}

// Evaluate the string to an object (not safe for prod but fine here)
const firebaseConfig = eval('(' + matches[1] + ')');


console.log("Config loaded:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DB_COLLECTION = "cevicheria_21_data";
const DB_DOC_ID = "tables";

async function resetDB() {
    console.log("Starting DB reset for all tables and sales history...");
    try {
        const initialData = {};
        for (let i = 1; i <= 28; i++) {
            initialData[`mesa_${i}`] = {
                id: i,
                status: 'free',
                items: [],
                total: 0
            };
        }
        initialData.dailySales = [];

        const docRef = doc(db, DB_COLLECTION, DB_DOC_ID);
        await setDoc(docRef, initialData);
        console.log("✅ DATABASE WIPED SUCCESSFULLY. ALL TABLES ARE FREE.");
        process.exit(0);
    } catch (e) {
        console.error("❌ FAILED TO WIPE DB:", e);
        process.exit(1);
    }
}

resetDB();
