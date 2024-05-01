import React from "react";
import Link from "next/link";
import HeaderImage from "@/public/icons/header-icon.png";
import Image from "next/image";

const PeachIcon = ({...props}) => {
  return (
    <Link
      href="/"
      className="text-2xl font-semibold"
      {...props}
    >
      <Image src={HeaderImage} alt="header-icon" width={132} height={37}/>
    </Link>
  )
}

export { PeachIcon }