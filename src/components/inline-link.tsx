import Link from "next/link";
import ExternalLinkIcon from "./icons/external-link";

type ComponentProps = {
  href: string;
  showIcon?: boolean;
  children: React.ReactNode;
};
export default function InlineLink({
  href,
  showIcon,
  children,
}: ComponentProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline underline-offset-1 ${showIcon ? "whitespace-nowrap" : ""}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon size="small" />}
    </Link>
  );
}
