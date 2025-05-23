import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

async function getData(id: string) {
  // mimick 2 seconds delay foe getData api call
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  // if no data is found, return a 404 not found
  if (!data) {
    return notFound();
  }

  return data;
}

// to deploy this as SSG we need to know all urls therefore param before depolyment, needed for the build
export async function generateStaticParams() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
    },
  });

  return data.map((item) => {
    return {
      id: item.id,
    };
  });
}

export default async function PostIdPage({ params }: { params: Params }) {
  const { id } = await params;
  //console.log("Params: ", id);

  const data = await getData(id);
  //console.log("Data: ", data);

  return (
    <div className="max-w-7xl mx-auto py-8 px-0">
      <Link className={buttonVariants({ variant: "secondary" })} href="/">
        Back to posts
      </Link>

      <div className="mb-8 mt-6 px-2">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          {data?.title}
        </h1>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={data.authorImage}
                alt={data.authorName}
                fill
                className="object-cover"
              />
            </div>

            <p className="font-medium">{data.authorName}</p>
          </div>

          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(data.createdAt)}
          </p>
        </div>
      </div>

      <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <Card>
        <CardContent>
          <p className="text-gray-700">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
