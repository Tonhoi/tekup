import Link from "next/link";
import Image from "next/image";

import { ArrowIcon } from "@/assets/Icon";

const CardItem = ({ title, src, href }) => {
  return (
    <article className="relative hover:shadow-lg shadow-[0_.125rem_.375rem_rgba(0,0,0,.05)_0_.625rem_1.5rem_rgba(0,0,0,.15)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(.165,.84,.44,1)] rounded overflow-hidden">
      <Link href={href}>
        <figure>
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className="z-0 object-cover w-full h-full"
          />
        </figure>

        <h6 className="p-4 m-4 bg-white shadow-[0px_12px_28px_rgba(0,0,0,0.14)] absolute bottom-0 w-[calc(100%-32px)] rounded-[5px] font-semibold flex justify-between items-center gap-3">
          {title}

          <ArrowIcon className="flex-shrink-0 w-4 h-4" />
        </h6>
      </Link>
    </article>
  );
};

export default CardItem;
