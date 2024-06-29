// /server/seed.js
import connection from "./db.js";

// Sample data to seed
/* 
    THIS IS A SAMPLE CODE FROM CHATGPT
    YET TO WRITE MINE
*/
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

// Function to seed users
async function seedUsers() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    connection.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [user.username, hashedPassword],
      (err, results) => {
        if (err) {
          console.error("Error inserting user:", err);
        } else {
          console.log("Inserted user:", results.insertId);
        }
      }
    );
  }
}

async function seedDatabase() {
  await seedUsers();
  console.log("Database seeding completed.");
  connection.end();
}

seedDatabase();
