"use-client";
import { sql } from "@vercel/postgres";
import { invoices } from "./placeholder-data";

const client = await sql.connect();

export async function createInvoice() {
  const invoice = await Promise.all(
    invoices.map(
      (item) =>
        client.sql`INSERT INTO invoices(name,isTrue) VALUES(${item.name},${item.isTrue})`
    )
  );

  //   try {
  //     await sql`
  //       INSERT INTO invoices (id, name, isTrue)
  //       VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  //     `;
  //   } catch (error) {
  //     // If a database error occurs, return a more specific error.
  //     return {
  //       message: "Database Error: Failed to Create Invoice.",
  //     };
  //   }
  return invoice;
}
