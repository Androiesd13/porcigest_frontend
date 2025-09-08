import Link from "next/link";
import { useState } from "react";

interface ItemNavProps {
  label: string;
  path: string;
  icon: React.ReactNode;
    }

const ItemNav = ({ label, path, icon }: ItemNavProps) => {
  return (
    <li>
      <Link href={path} className="flex items-center flex-col-reverse">
        {label} {icon}
      </Link>
    </li>
  );
};

export default ItemNav;
