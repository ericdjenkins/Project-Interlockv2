import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"Project Interlock | Pilot Workspace",
  description:"Operating workspace for Project Interlock’s 2027 Boston-area pilot.",
};
export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
