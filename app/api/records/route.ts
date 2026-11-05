import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { records } from "../../../db/schema";
import { blank, groups, kinds, seeds, statuses, type Entry } from "../../../lib/pilot";

export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await getDb().select().from(records);
  const entries = new Map(seeds.map(entry => [entry.id, entry]));
  for (const row of rows) entries.set(row.id, JSON.parse(row.payload));
  return Response.json([...entries.values()], {headers: {"Cache-Control": "no-store"}});
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({error:"Request origin is not allowed."},{status:403});
  }
  let input: Partial<Entry>;
  try { input = await request.json(); } catch {
    return Response.json({error:"Invalid record."},{status:400});
  }
  if (!input?.group || !groups.includes(input.group) || typeof input.title !== "string" || !input.title.trim()
      || !input.kind || !kinds[input.group].includes(input.kind) || !input.status || !statuses[input.group].includes(input.status)
      || (input.phase !== "Now" && input.phase !== "2027")) {
    return Response.json({error:"Enter a name and select a valid type, phase, and status."},{status:400});
  }
  const entry = blank(input.group);
  for (const key of ["title","owner","contact","email","next","due","notes","amount"] as const) {
    if (typeof input[key] === "string") entry[key] = input[key].trim().slice(0, 4000);
  }
  if (entry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
    return Response.json({error:"Enter a valid email address."},{status:400});
  }
  const db = getDb();
  if (input.id) {
    const existing = await db.select().from(records).where(eq(records.id,input.id)).get();
    const prior = existing ? JSON.parse(existing.payload) as Entry : seeds.find(item=>item.id===input.id);
    if (!prior || prior.group !== input.group) return Response.json({error:"Record not found."},{status:404});
  }
  Object.assign(entry,{id:input.id || crypto.randomUUID(),kind:input.kind,status:input.status,phase:input.phase,archived:input.archived===true});
  const row = {id:entry.id,payload:JSON.stringify(entry)};
  await db.insert(records).values(row).onConflictDoUpdate({target:records.id,set:{payload:row.payload}});
  return Response.json(entry);
}
