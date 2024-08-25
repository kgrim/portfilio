import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const config = require('../../next.config');
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  let stringifiedRealSlug = JSON.stringify(realSlug);
  let modifiedPath = stringifiedRealSlug.replaceAll(/\$\{basePath\}/gi, config.basePath);
  let endPath = JSON.parse(modifiedPath);
  const fullPath = join(postsDirectory, `${endPath}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);



  return { ...data, slug: endPath, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
