import Link from "next/link";

interface ComponentProps {
  href: string;
  icon: React.ReactNode;
}
export default function IconLink({ href, icon }: ComponentProps) {
  return <Link href={href}>{icon}</Link>;
}
