import Link from "next/link";
import Image from "next/image";
import Icon from "../../../public/icon.svg";

export default function Nav() {
	return (
		<div className="flex justify-between items-center h-24 px-27">
          <div className="flex items-center gap-x-2">
            <Image src={Icon as string} alt="logo" />
            <span className="text-accent-red font-bold">Todo Daily</span>
          </div>
          <div className="space-x-5">
            <Link href="/" className="text-accent-red">
              Login
            </Link>
            <Link href="/">
              Sign_up
            </Link>
          </div>
        </div>
	)
}