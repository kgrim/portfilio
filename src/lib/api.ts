import { LandingType } from "@/interfaces/landingType";
import { LinkType } from "@/interfaces/linkType";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const config = require('../../next.config');

const linksDirectory = join(process.cwd(), "_links");
const landingDirectory = join(process.cwd(), "_landing");

export function getLinksSlugs() {
  return fs.readdirSync(linksDirectory);
}

export function getLinkBySlug(slug: string) {

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(linksDirectory, `${realSlug}.md`);

  const data = getRealData(fullPath);
  data.logoUrl = replaceBasePath(data?.url);

  return data as LinkType;
}

export function getAllLinks(): LinkType[] {
  const slugs = getLinksSlugs();
  const links = slugs
    .map((slug) => getLinkBySlug(slug));
  return links;
}

export function getLandingData(){

  const landing = fs.readdirSync(landingDirectory);
  const fullPath = join(landingDirectory, landing[0]);

  const data = getRealData(fullPath);
  data.logoUrl = replaceBasePath(data?.logoUrl);

  return data as LandingType;
}

function getRealData(fullPath : string = "")
{
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data;
}

export function replaceBasePath(url : string){
  return url?.replaceAll(/\$\{basePath\}/gi, config.basePath)
}