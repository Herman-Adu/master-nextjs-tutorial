import { Suspense } from "react";
import { prisma } from "./utils/db";
import { BlogPostCard } from "@/components/general/BlogpostCard";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
}

export default async function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

      <Suspense fallback={<p>hello waiting</p>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

// async function that gets the data
async function BlogPosts() {
  // mimick 2 seconds delay foe getData api call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}

// Blog posts grid with loading state
function BlogPostsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1>BlogPostsGrid</h1>
    </div>
  );
}
