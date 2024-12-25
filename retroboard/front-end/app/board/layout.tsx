import { Padding } from "@mui/icons-material"
import BoardHeader from "./boardheader/boardheader"
export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <><section style={{padding: "1rem", height: "100%"}}><BoardHeader />{children}</section></>
  }