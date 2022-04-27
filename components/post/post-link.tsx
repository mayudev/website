import Link from "next/link";
import { PropsWithChildren } from "react";

export default function BlogLink({
  children,
  href,
}: PropsWithChildren<{
  href: string;
}>) {
  // Internal link
  if (href.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  }

  // Section link
  const isSectionLink = href.startsWith("#");

  if (isSectionLink) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
