import { Stack, Typography } from "@mui/material";
import { createInvoice } from "@/app/lib/actions";
import { fetchInvoices } from "@/app/lib/data";
export default async function Page() {
  const item = await fetchInvoices();
  console.log(item);
  return (
    <>
      <Typography>aksdasdaskdalskdm mala bak aq</Typography>
    </>
  );
}
