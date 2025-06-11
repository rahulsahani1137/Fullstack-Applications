import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless"
import * as dotenv from "dotenv"

// Load environment variables from .env
dotenv.config({ path: ".env" })

// Validate environment variables
if (!process.env.DATABASE_URL) {
    throw new Error("Database url is not set in .env");
}

// Main migration function
async function runMigration() {
    try {
        // Create a Neon SQL connection
        const sql = neon(process.env.DATABASE_URL!);
        
        // Initialize Drizzle with the connection
        const db = drizzle(sql);

        // Run migrations from the drizzle folder
        console.log("📂 Running migrations from ./src/drizzle folder");
        await migrate(db, { migrationsFolder: "./src/drizzle" });

        console.log("✅ Database migration completed successfully!");
    } catch (error) {
        console.log("❌ Migration failed:", error);
        process.exit(1)
    }
}

// Run the migratiom
runMigration();