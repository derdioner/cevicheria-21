const projectId = "cevicheria-21-app";
const collection = "cevicheria_21_data";
const docId = "tables";

const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${docId}`;

const payload = {
    fields: {
        // daily sales set to empty array
        dailySales: {
            arrayValue: {}
        }
    }
};

for (let i = 1; i <= 28; i++) {
    payload.fields[`mesa_${i}`] = {
        mapValue: {
            fields: {
                id: { integerValue: i.toString() },
                status: { stringValue: 'free' },
                items: { arrayValue: {} },
                total: { doubleValue: 0 }
            }
        }
    };
}

console.log("Wiping database via REST API...");

fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
})
    .then(async res => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`HTTP Error ${res.status}: ${text}`);
        }
        return res.json();
    })
    .then(data => {
        console.log("SUCCESS! DB WIPED.");
    })
    .catch(err => {
        console.error("ERROR:", err.message);
    });
