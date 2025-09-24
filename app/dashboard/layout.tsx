import Header from "../ui/dashboard/Header";
import NavBar from "../ui/dashboard/NavBar"
import NavBarMobile from '../ui/dashboard/NavBarMobile';

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <NavBar/>
      <NavBarMobile/>
      <main className="md:max-w-(--widthApp) mx-auto">{children}</main>
    </>
  );
}