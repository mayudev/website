import Image from "next/image";

export function PostImage({ src }: { src: string }) {
  return (
    <div>
      <Image
        src={src}
        width="100%"
        height="64"
        layout="responsive"
        objectFit="contain"
        alt="Cover image"
      />
    </div>
  );
}
