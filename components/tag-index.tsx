import { GetStaticProps } from "next";
import { getUniqueTags } from "../lib/tags";

interface Props {
  tags: string[];
}

export default function TagIndex(props: Props) {
  return (
    <div>
      {props.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
