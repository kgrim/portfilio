import { LinkType } from "@/interfaces/linkType";
import Link from "next/link";

export function SingleLink({ urlLabel, url, altText, icon }: LinkType) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href={`/posts/${url}`} className="hover:underline">
        {urlLabel}
      </Link>
    </section>
  );
}
