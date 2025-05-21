import { Counter } from "@/components/counter";

type Params = Promise<{ slug: string }>;

export default async function DynamicSlugRoute({ params }: { params: Params }) {
  const { slug } = await params;
  console.log(slug);

  return (
    <>
      <h1>Dynamic Slug Route</h1>
      <p>/{slug}</p>
      <Counter />
    </>
  );
}
