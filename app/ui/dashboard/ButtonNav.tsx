import Link from "next/link";

import { Button } from "@mui/material";
import React from "react";

interface ButtonNavProps{
    path: string,
    icon: React.ReactElement
    text: string
}

const ButtonNav = ({path, icon, text}:ButtonNavProps)=>{
    return (
          <Link href={path}>
          <Button sx={{ maxWidth: "200px" }} color="secondary">
            {icon}
            {text}
          </Button>
        </Link>
    )
}

export default ButtonNav;