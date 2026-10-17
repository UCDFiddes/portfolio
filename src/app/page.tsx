import IconLink from "@/components/icon-link";
import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export default function Page() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">David Fiddes</h1>
          <p className="font-normal">
            I enjoy turning ideas into things people can use. As a Computer
            Science student, I love building software, exploring new ideas, and
            taking on challenges. I’m always learning along the way and looking
            for ways to make my projects better.
          </p>
          <div className="flex gap-4">
            <IconLink
              href="https://github.com/ucdfiddes"
              icon={<GithubIcon />}
            />
            <IconLink
              href="mailto:david.fiddes@gmail.com"
              icon={<EmailIcon />}
            />
            <IconLink
              href="https://www.linkedin.com/in/david-fiddes"
              icon={<LinkedInIcon />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
