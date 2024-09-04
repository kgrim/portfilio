import { getAllLinks } from "@/lib/api";
import { SingleLink } from "./link";

export function Menu() {
  const allLinks = getAllLinks();

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {allLinks.map((singleLink, index) => (
       <SingleLink  key={index}
       url={singleLink.url} 
       urlLabel={singleLink.urlLabel}  
       altText={singleLink.altText}
       icon={singleLink.icon}/>
      ))}

    </section>
  );
}
