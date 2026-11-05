"use client";

import { useEffect, useState, type FormEvent } from "react";
import { blank, groups, kinds, stages, statuses, type Entry, type Group } from "../lib/pilot";

const views = ["Overview", ...groups] as const;
type View = typeof views[number];
const labels: Record<View,string> = {Overview:"Overview",Pathway:"Program pathway",Outreach:"Partner & employer outreach",Interest:"Interest inbox",Funding:"Grants & funding",Milestones:"Pilot milestones"};
const glyphs = ["◫","◇","↗","▤","◎","⚑"];
const descriptions: Record<Group,string> = {
  Pathway:"Develop the five stages of the student experience.",
  Outreach:"Track college, school, community, and employer relationships.",
  Interest:"Log interest and manage follow-up for students, families, educators, employers, and funders.",
  Funding:"Track opportunities, application deadlines, and awards.",
  Milestones:"Follow design decisions and first-cohort readiness.",
};
const singular: Record<Group,string> = {Pathway:"activity",Outreach:"relationship",Interest:"submission",Funding:"opportunity",Milestones:"milestone"};
function displayDate(date: string) {
  return date ? new Date(date+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}) : "—";
}
function Pill({children}:{children:string}) {
  return <span className={"pill "+(["Established","Complete","Awarded","Ready"].includes(children)?"green":children==="2027"?"violet":"")}>{children}</span>;
}
export default function Workspace() {
  const [view,setView]=useState<View>("Overview");
  const [entries,setEntries]=useState<Entry[]>([]);
  const [ready,setReady]=useState(false);
  const [error,setError]=useState("");
  const [notice,setNotice]=useState("");
  const [phase,setPhase]=useState("All phases");
  const [status,setStatus]=useState("All statuses");
  const [kind,setKind]=useState("All types");
  const [query,setQuery]=useState("");
  const [archived,setArchived]=useState(false);
  const [draft,setDraft]=useState<Entry|null>(null);
  const [busy,setBusy]=useState(false);
  const [formError,setFormError]=useState("");
  async function load() {
    setError("");
    try {
      const response=await fetch("/api/records",{cache:"no-store"});
      if(!response.ok) throw new Error();
      setEntries(await response.json());
      setReady(true);
    } catch {setError("Could not load the workspace. Please retry.");}
  }
  useEffect(()=>{void load();},[]);
  useEffect(()=>{
    if(draft) document.querySelector<HTMLDialogElement>("#editor")?.showModal();
  },[Boolean(draft)]);
  function navigate(next:View, stage="All types") {
    setView(next);setKind(stage);setPhase("All phases");setStatus("All statuses");setQuery("");setArchived(false);setNotice("");
  }
  function edit(entry:Entry) {setFormError("");setDraft(entry);}
  async function save(event:FormEvent<HTMLFormElement>, entry:Entry) {
    event.preventDefault();
    setBusy(true);setFormError("");
    try {
      const response=await fetch("/api/records",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entry)});
      if(!response.ok) {
        const data=await response.json().catch(()=>null) as {error?:string}|null;
        throw new Error(data?.error||"Could not save the record.");
      }
      const saved:Entry=await response.json();
      setEntries(previous=>previous.some(item=>item.id===saved.id)
        ?previous.map(item=>item.id===saved.id?saved:item):[...previous,saved]);
      setDraft(null);setNotice(saved.archived?"Record archived.":"Record saved.");
    } catch (failure) {setFormError(failure instanceof Error?failure.message:"Could not save the record.");}
    finally {setBusy(false);}
  }
  const active=entries.filter(entry=>!entry.archived);
  const count=(group:Group, condition=(entry:Entry)=>!entry.archived)=>entries.filter(entry=>entry.group===group&&condition(entry)).length;
  const visible=entries.filter(entry=>(view==="Overview"
    ?!entry.archived&&entry.next&&!["Complete","Closed","Declined"].includes(entry.status)
    :entry.group===view&&entry.archived===archived)
    &&(phase==="All phases"||phase===entry.phase)
    &&(kind==="All types"||kind===entry.kind)
    &&(status==="All statuses"||status===entry.status)
    &&[entry.title,entry.contact,entry.email,entry.owner,entry.next].join(" ").toLowerCase().includes(query.trim().toLowerCase()))
    .sort((a,b)=>(a.due||"9999").localeCompare(b.due||"9999"));
  return <div className="shell">
    <aside>
      <div className="brand"><img src="/assets/project-interlock-logo.png" alt="Project Interlock" width={896} height={229} /><small>PILOT WORKSPACE</small></div>
      <div className="nav-label">WORKSPACE</div>
      <nav aria-label="Workspace">{views.map((item,i)=><button key={item} aria-current={view===item?"page":undefined} onClick={()=>navigate(item)}><span aria-hidden>{glyphs[i]}</span>{labels[item]}</button>)}</nav>
      <div className="sidefoot"><i/> Boston metro area <small>Private workspace</small></div>
    </aside>
    <main>
      <div className="topline"><span>PROJECT INTERLOCK <b>/</b> {labels[view]}</span><Pill>Design phase</Pill></div>
      {view==="Overview"?<>
        <header className="hero"><div className="eyebrow">BOSTON AREA · 2027 PILOT</div><h1>Pilot command center</h1><p>Build a STEM and AI pathway for Black and Latino students across the diaspora.</p>
          <div className="phase-grid"><div><Pill>Now</Pill><p>Design the pathway, confirm partner roles, recruit employers, and plan the first cohort.</p></div><div><Pill>2027</Pill><p>Target launch for the first Boston-area cohort, subject to funding and readiness.</p></div></div>
        </header>
        <div className="metrics">{([
          ["Outreach","Established partners",count("Outreach",e=>!e.archived&&e.status==="Established")],
          ["Interest","New submissions",count("Interest",e=>!e.archived&&e.status==="New")],
          ["Funding","Open opportunities",count("Funding",e=>!e.archived&&!["Awarded","Declined"].includes(e.status))],
          ["Milestones","Open milestones",count("Milestones",e=>!e.archived&&e.status!=="Complete")]
        ] as const).map(([group,label,value])=><button className="metric" key={group} onClick={()=>navigate(group)}><span>{label}</span><strong>{ready?value:"—"}</strong><b aria-hidden>↗</b></button>)}</div>
        <section className="path-strip"><h2>Program pathway</h2><div>{stages.map((stage,i)=><button key={stage} onClick={()=>navigate("Pathway",stage)}><span>0{i+1}</span>{stage}</button>)}</div></section>
      </>:<header className="heading"><div><div className="eyebrow">PILOT OPERATIONS</div><h1>{labels[view]}</h1><p>{descriptions[view]}</p>{view==="Interest"&&<p>Use this private form to record submissions received through your outreach channels.</p>}</div><button className="primary" disabled={!ready} onClick={()=>edit({...blank(view),...(kind!=="All types"?{kind}:{})})}>+ {view==="Interest"?"Log interest":"Add "+singular[view]}</button></header>}
      <section className="panel">
        <div className="section-head"><div><h2>{view==="Overview"?"Next steps":archived?"Archived records":labels[view]}</h2><p>{view==="Overview"?"Open follow-ups across pilot workstreams. Select a record to update it.":ready?visible.length+" record"+(visible.length===1?"":"s"):""}</p></div>{view!=="Overview"&&<button className="secondary" onClick={()=>setArchived(!archived)}>{archived?"Show active":"Show archive"}</button>}</div>
        <div className="filters">
          <input type="search" aria-label="Search records" placeholder="Search names, contacts, or owners" value={query} onChange={e=>setQuery(e.target.value)}/>
          <select aria-label="Filter by phase" value={phase} onChange={e=>setPhase(e.target.value)}>{["All phases","Now","2027"].map(x=><option key={x}>{x}</option>)}</select>
          {view!=="Overview"&&<><select aria-label="Filter by type" value={kind} onChange={e=>setKind(e.target.value)}>{["All types",...kinds[view]].map(x=><option key={x}>{x}</option>)}</select><select aria-label="Filter by status" value={status} onChange={e=>setStatus(e.target.value)}>{["All statuses",...statuses[view]].map(x=><option key={x}>{x}</option>)}</select></>}
        </div>
        {notice&&<p className="message" role="status">{notice}</p>}
        {error?<div className="empty" role="alert">{error} <button className="secondary" onClick={()=>void load()}>Retry</button></div>:!ready?<p className="empty">Loading workspace…</p>:visible.length===0?<p className="empty">{active.some(e=>e.group===view)||query?"No records match this view.":"No records here yet."}</p>:
        <div className="table-wrap"><table><thead><tr><th>Record</th><th>Phase</th><th>Status</th><th>Contact / owner</th><th>Next step</th><th>{view==="Funding"?"Deadline":"Due"}</th>{view==="Funding"&&<th>Amount</th>}</tr></thead><tbody>
          {visible.map(entry=><tr key={entry.id}><td><button className="row-link" onClick={()=>edit(entry)}>{entry.title}</button><small>{view==="Overview"?entry.group+" · ":""}{entry.kind}</small>{entry.group==="Pathway"&&view==="Pathway"&&entry.notes&&<small>{entry.notes}</small>}</td><td><Pill>{entry.phase}</Pill></td><td><Pill>{entry.status}</Pill></td><td>{entry.contact||entry.email||"—"}<small>{entry.owner||"Unassigned"}</small></td><td>{entry.next||"—"}</td><td className="date">{displayDate(entry.due)}</td>{view==="Funding"&&<td>{entry.amount?"$"+Number(entry.amount).toLocaleString("en-US"):"—"}</td>}</tr>)}
        </tbody></table></div>}
      </section>
      <footer>Project Interlock <span>•</span> Boston-area pilot planning</footer>
    </main>
    {draft&&<dialog id="editor" aria-labelledby="editor-title" onCancel={e=>{e.preventDefault();if(!busy)setDraft(null);}}>
      <form onSubmit={e=>void save(e,draft)}>
        <div className="dialog-head"><div><div className="eyebrow">{labels[draft.group]}</div><h2 id="editor-title">{draft.id?"Edit "+singular[draft.group]:draft.group==="Interest"?"Log interest":"Add "+singular[draft.group]}</h2></div><button type="button" className="secondary" aria-label="Close editor" disabled={busy} onClick={()=>setDraft(null)}>×</button></div>
        <div className="form-fields">
          <label className="full">{draft.group==="Interest"?"Name":"Record name"}<input required maxLength={180} value={draft.title} onChange={e=>setDraft({...draft,title:e.target.value})}/></label>
          {(["kind","phase","status"] as const).map(key=><label key={key}>{key==="kind"?"Type":key==="phase"?"Phase":"Status"}<select value={draft[key]} onChange={e=>setDraft({...draft,[key]:e.target.value})}>{(key==="kind"?kinds[draft.group]:key==="phase"?["Now","2027"]:statuses[draft.group]).map(x=><option key={x}>{x}</option>)}</select></label>)}
          <label>{draft.group==="Funding"?"Deadline":"Due date"}<input type="date" value={draft.due} onChange={e=>setDraft({...draft,due:e.target.value})}/></label>
          {draft.group==="Funding"&&<label>Amount (USD)<input type="number" min="0" step=".01" value={draft.amount} onChange={e=>setDraft({...draft,amount:e.target.value})}/></label>}
          {(["contact","email","owner","next"] as const).map(key=><label key={key}>{({contact:"Contact / organization",email:"Contact email",owner:"Internal owner",next:"Next step"})[key]}<input type={key==="email"?"email":"text"} maxLength={300} value={draft[key]} onChange={e=>setDraft({...draft,[key]:e.target.value})}/></label>)}
          <label className="full">{draft.group==="Interest"?"What are they interested in?":draft.group==="Funding"?"Source URL, eligibility, and notes":"Notes"}<textarea rows={3} maxLength={4000} value={draft.notes} onChange={e=>setDraft({...draft,notes:e.target.value})}/></label>
          {draft.id&&<label className="checkbox full"><input type="checkbox" checked={draft.archived} onChange={e=>setDraft({...draft,archived:e.target.checked})}/> Archive this record</label>}
        </div>
        {formError&&<p className="message" role="alert">{formError}</p>}
        <div className="actions"><button type="button" className="secondary" disabled={busy} onClick={()=>setDraft(null)}>Cancel</button><button className="primary" disabled={busy}>{busy?"Saving…":draft.group==="Interest"&&!draft.id?"Save submission":"Save record"}</button></div>
      </form>
    </dialog>}
  </div>;
}
