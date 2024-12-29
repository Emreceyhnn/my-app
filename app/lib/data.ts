import { sql } from "@vercel/postgres";
import { Invoice } from "./definition";

export async function fetchInvoices() {
  try {
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Invoice>`SELECT * FROM invoices`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
