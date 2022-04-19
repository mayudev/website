import Image from "next/image";

export function PostImage({ src }: { src: string }) {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <Image
        src={src}
        width="700px"
        height="400px"
        layout="responsive"
        objectFit="contain"
        alt="Cover image"
      />
    </a>
  );
}
