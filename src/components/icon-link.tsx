import Link from "next/link";

type ComponentProps = {
  href: string;
  icon: React.ReactNode;
};
export default function IconLink({ href, icon }: ComponentProps) {
  return <Link href={href}>{icon}</Link>;
}
