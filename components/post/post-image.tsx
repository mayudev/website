import Image from "next/image";
import styled from "styled-components";

export function PostImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width="100%"
      height="64"
      layout="responsive"
      objectFit="contain"
      alt="Cover image"
    />
  );
}
