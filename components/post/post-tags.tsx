import Link from "next/link";

export default function Tags({ tags }: { tags: string[] }) {
  const build = () =>
    tags.map((tag, i) => {
      return (
        <>
          <Link href={"/tags/" + tag} key={tag}>
            {tag}
          </Link>
          {i != tags.length - 1 && ", "}
        </>
      );
    });

  return <div>Tags: {build()}</div>;
}
