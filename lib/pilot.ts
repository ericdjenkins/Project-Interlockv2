export const groups = ["Pathway", "Outreach", "Interest", "Funding", "Milestones"] as const;
export type Group = typeof groups[number];
export const stages = ["Learn", "Support", "Mentor", "Experience", "Launch"];
export const kinds: Record<Group, string[]> = {
  Pathway: stages,
  Outreach: ["College partner", "Recruiting partner", "Employer", "School", "Community organization"],
  Interest: ["Student", "Family", "Educator", "Employer", "Funder"],
  Funding: ["Grant", "Sponsorship", "Donation", "In-kind"],
  Milestones: ["Partner readiness", "Recruitment", "Funding", "Cohort readiness", "Delivery"],
};
export const statuses: Record<Group, string[]> = {
  Pathway: ["Planning", "In progress", "Ready", "Complete"],
  Outreach: ["Prospect", "Contacted", "In discussion", "Established", "Recruiting", "On hold"],
  Interest: ["New", "In review", "Followed up", "Closed"],
  Funding: ["Prospect", "Qualified", "Preparing", "Submitted", "Awarded", "Declined"],
  Milestones: ["Planned", "In progress", "Blocked", "Complete"],
};
export type Entry = {
  id: string; group: Group; kind: string; title: string; status: string;
  phase: "Now" | "2027"; owner: string; contact: string; email: string;
  next: string; due: string; notes: string; amount: string; archived: boolean;
};
export function blank(group: Group): Entry {
  return {id:"",group,kind:kinds[group][0],title:"",status:statuses[group][0],phase:"Now",
    owner:"",contact:"",email:"",next:"",due:"",notes:"",amount:"",archived:false};
}
function seed(id: string, group: Group, title: string, values: Partial<Entry>): Entry {
  return {...blank(group),id,title,...values};
}
export const seeds: Entry[] = [
  seed("middlesex","Outreach","Middlesex Community College",{status:"Established",next:"Confirm pilot pathway and identify a campus point of contact."}),
  seed("umass","Outreach","UMass Lowell",{status:"Established",next:"Outline potential transfer and STEM engagement activities."}),
  seed("north-shore","Outreach","North Shore Community College",{kind:"Recruiting partner",status:"Recruiting",next:"Coordinate outreach channels for prospective students."}),
  ...stages.map((kind,i)=>seed("stage-"+i,"Pathway",[
    "STEM and AI foundations","Completion support","Mentor matching","Work-based learning","Transfer and career launch"
  ][i],{kind,next:[
    "Map learning objectives with college partners.","Define the supports students may need to stay enrolled and complete the program.",
    "Draft mentor roles, screening, and matching criteria.","Identify employer hosts and define internship and project expectations.",
    "Map transfer, internship-to-hire, and job placement options."
  ][i],notes:[
    "2027 target: Offer a STEM and AI readiness pathway.","2027 target: Connect students to scholarships and practical supports.",
    "2027 target: Match students with STEM mentors.","2027 target: Offer hands-on projects and internship opportunities.",
    "2027 target: Support transfer and entry into STEM careers."
  ][i]})),
  seed("partner-readiness","Milestones","Confirm pilot partner roles",{next:"Document college and employer responsibilities."}),
  seed("cohort-plan","Milestones","Define first-cohort plan",{kind:"Cohort readiness",next:"Set draft cohort size, eligibility, recruitment, and support needs."}),
  seed("cohort-launch","Milestones","Launch first cohort",{kind:"Delivery",phase:"2027",next:"Confirm readiness, funding, and the launch window."}),
];
