import Header from "../ui/dashboard/Header";
import NavBar from "../ui/dashboard/NavBar"

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <NavBar/>
      <main className="max-w-4xl mx-auto">{children}</main>
    </>
  );
}