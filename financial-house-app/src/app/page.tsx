import { LoginForm } from "@/components/LoginForm"

export default function Home() {
  const mainSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  }
  return (
    <main className="main-section" style={mainSectionStyle}>
      <LoginForm />
    </main>
  )
}
