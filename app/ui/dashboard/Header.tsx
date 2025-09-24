"use client"
import { LogoutOutlined} from '@mui/icons-material';
import { Box } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

import Link from "next/link";
import Image from "next/image";
import IconButton from '@mui/material/IconButton';


export default function () {
  return (
    <header className="max-w-(--widthApp) mx-auto flex justify-between h-20 items-center">
      <div id="logo" className="flex gap-1 items-center">
        <Image
          src="/logo.jpg"
          width={80}
          height={80}
          alt="logo de porcigest"
          className="rounded-full"
        />
        <div>
          <h3 className="text-2xl">Porcigest</h3>
          <span id="name-user-responsive" className="block md:hidden">
            Usuario
          </span>
        </div>
      </div>
      <div id="profile-user" className="flex gap-2">
        <span className="hidden md:block">Usuario</span>
        <img src={undefined} />
        <div id="logout" className="flex items-center gap-1 font-semibold">
          <Box display={{ xs: "none", md: "block" }}>
            <Link href="/">
              {" "}
              <span>Logout</span>
              <LogoutOutlined />
            </Link>
          </Box>
        </div>
      </div>
      <div id="menu-navbar" className="block md:hidden">
          <IconButton onClick={()=> {

          }}>
            <MenuOutlined/>
          </IconButton>
      </div>
    </header>
  );
}
