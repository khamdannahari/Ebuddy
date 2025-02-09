import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const PRIVATE_KEY = ""; // PUT YOUR PRIVATE_KEY HERE

const firebaseConfig = {
  projectId: "ebuddy",
  clientEmail: "firebase-adminsdk@ebuddy-iam.gserviceaccount.com",
  privateKey: PRIVATE_KEY,
  functionsEmulator: "true",
};

const dummyUser = {
  email: "kenny@gmail.com",
  password: "kenny123",
};

const app = initializeApp({
  credential: cert({
    projectId: firebaseConfig.projectId,
    clientEmail: firebaseConfig.clientEmail,
    privateKey: firebaseConfig.privateKey.replace(/\\n/g, "\n"),
  }),
  databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
});

const db = getFirestore(app);
const auth = getAuth(app);

if (firebaseConfig.functionsEmulator === "true") {
  db.settings({
    host: "localhost:8080",
    ssl: false,
  });

  console.log("🔥 Firestore Emulator Connected on localhost:8080");
}

auth
  .createUser(dummyUser)
  .then((userRecord) => {
    console.log("Dummy user successfully created:", userRecord.uid);
  })
  .catch((error) => {
    console.error("Error create dummy user:", error);
  });

export { db, auth };
