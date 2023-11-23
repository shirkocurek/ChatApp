import LogoImage from "@logos/Globalchatlogo.png";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="overflow-hidden" prefetch={false}>
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          className="flex items-center justify-center"
          ratio={16 / 9}
        >
          <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert"
            width={500}
            height={500}
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
