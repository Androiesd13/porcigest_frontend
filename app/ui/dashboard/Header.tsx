import { LogoutOutlined } from "@mui/icons-material";

import Link from "next/link";
import Image from "next/image";

export default function () {
  return (
    <header className="max-w-(--widthApp) mx-auto flex justify-between h-20 items-center">
      <div id="logo" className="flex gap-1 items-center">
        <Image src="/logo.jpg" width={80} height={80} alt="logo de porcigest" className="rounded-full" />
        <h3 className="text-2xl">Porcigest</h3>
      </div>
      <div id="profile-user" className="flex gap-2">
        <span>nombre de usuario</span>
        <img src={undefined} />
        <div id="logout" className="flex items-center gap-1 font-semibold">
          <Link href="/">
            {" "}
            <span>Logout</span>
            <LogoutOutlined />
          </Link>
        </div>
      </div>
    </header>
  );
}
