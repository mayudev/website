import Link from "next/link";
import React from "react";

export default function Tags({ tags }: { tags: string[] }) {
  const build = () =>
    tags.map((tag, i) => {
      return (
        <React.Fragment key={tag}>
          <Link href={"/tags/" + tag}>{tag}</Link>
          {i != tags.length - 1 && ", "}
        </React.Fragment>
      );
    });

  return <div>Tags: {build()}</div>;
}
