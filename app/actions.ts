"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

/// To-Do add server validation and error handling/ guard programming

export async function handleSubmission(formData: FormData) {
  // get session and user from kinde
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // check for valid authorised user
  if (!user) {
    return redirect("/api/auth/register");
  }

  // get form data from create post form
  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");

  // create prisma mutation, pass in form values and the user
  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user.id,
      authorImage: user.picture as string,
      authorName: user.given_name as string,
    },
  });

  // revalidate cache for out index page every 7200 seconds or everry time i create a new blog
  revalidatePath("/");

  return redirect("/dashboard");
}
