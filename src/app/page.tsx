import IconLink from "@/components/icon-link";
import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import InlineLink from "@/components/inline-link";
import ProjectButton from "@/components/project-button";

export const metadata = {
  title: "David Fiddes",
};

export default function Page() {
  return (
    <main className="min-h-screen py-32 px-6">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-4">
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

        <div className="space-y-4">
          <ProjectButton
            id="backpack"
            accentColour="#4F913C"
            logoSrc="/backpack.png"
            title="A website for tracking and analysing player statistics for The Hive."
            href="https://hivebackpack.com"
            description={
              <>
                <p>
                  The platform allows users to explore their statistics, track
                  their progress over time, compare performance through
                  leaderboards, and view detailed game history.
                </p>
                <p>
                  <InlineLink href="https://playhive.com">The Hive</InlineLink>{" "}
                  is a popular Minecraft Bedrock Edition featured server.
                </p>
                <p>
                  I manage the ongoing development and maintenance of the
                  platform, regularly introducing new features and improvements
                  based on user needs and feedback.
                </p>
              </>
            }
            content={
              <>
                <div className="space-y-2">
                  <h2 className="font-bold text-2xl">Frontend</h2>
                  <p>
                    Consists of a website made using{" "}
                    <InlineLink href="https://nextjs.org">Next.js</InlineLink>{" "}
                    deployed on{" "}
                    <InlineLink href="https://workers.cloudflare.com">
                      Cloudflare Workers
                    </InlineLink>{" "}
                    and a discord bot made using{" "}
                    <InlineLink href="https://discord.js.org">
                      discord.js
                    </InlineLink>{" "}
                    deployed on a self-hosted VPS both coded in TypeScript.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-2xl">Backend</h2>
                  <p>
                    A{" "}
                    <InlineLink href="https://www.fastify.io">
                      Fastify
                    </InlineLink>{" "}
                    Node.js server acting as an API handling requests between
                    the frontend and external services. Also includes a
                    collection of jobs used for tracking historical player data.
                  </p>
                </div>
                <div className="space-y-2 col-span-full">
                  <h2 className="font-bold text-2xl">Database</h2>
                  <p>
                    Initially started using{" "}
                    <InlineLink href="https://supabase.com">
                      Supabase
                    </InlineLink>{" "}
                    for storing all data and authenticating users. Now all
                    historical data has been migrated over to a self-hosted{" "}
                    <InlineLink href="https://www.mongodb.com">
                      MongoDB
                    </InlineLink>{" "}
                    instance with profile/player data currently in the process
                    of moving over.
                  </p>
                </div>
                <div className="space-y-2 col-span-full">
                  <h2 className="font-bold text-2xl">
                    A feature im proud of: Game History
                  </h2>
                  <p>
                    A service that requests The Hive up to a million times a day
                    and tracks differences in players statistics to display to
                    the authenticated user. This data can be used to show
                    insights and statistic analysis or it can optionally be
                    shared with other players.
                  </p>
                </div>

                <div className="flex gap-4 flex-wrap col-span-full">
                  <InlineLink href="https://hivebackpack.com" showIcon>
                    Website
                  </InlineLink>
                  <InlineLink href="https://discord.gg/hr6SJjZUnT" showIcon>
                    Discord
                  </InlineLink>
                  <InlineLink
                    href="https://github.com/CubeEdge-Studios/hive-bedrock"
                    showIcon
                  >
                    Hive API Wrapper Code
                  </InlineLink>
                </div>
              </>
            }
          />

          <ProjectButton
            id="button"
            accentColour="#5865F2"
            logoSrc="/button.png"
            title="A Discord bot that allows servers to create interactive buttons."
            href="https://buttonbot.xyz"
            description={
              <>
                <p>
                  Users can create and customise interactive buttons and
                  automate server functionality without needing to write code.
                </p>
                <p>
                  The bot provides a flexible, user-friendly web-based
                  configuration system, allowing servers to tailor features to
                  their needs.
                </p>
              </>
            }
            content={
              <>
                <div className="space-y-2">
                  <h2 className="font-bold text-2xl">Frontend</h2>
                  <p>
                    Consists of a website made using{" "}
                    <InlineLink href="https://reactjs.org">React</InlineLink>{" "}
                    deployed on{" "}
                    <InlineLink href="https://vercel.com">Vercel</InlineLink>.
                    Put simply the dashboard is a complex workflow form telling
                    the bot what to do when.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-2xl">Backend</h2>
                  <p>
                    A discord bot made with{" "}
                    <InlineLink href="https://discord.js.org">
                      discord.js
                    </InlineLink>
                    . On request it does actions based on the config setup by a
                    server using our web dashboard. The backend runs on a
                    self-hosted VPS and data is retrieved from{" "}
                    <InlineLink href="https://supabase.com">
                      Supabase
                    </InlineLink>
                    .
                  </p>
                </div>
                <div className="space-y-2 col-span-full">
                  <h2 className="font-bold text-2xl">What's next?</h2>
                  <p>
                    I am currently in the process of rewriting the frontend to
                    have a cleaner codebase and better accessibility. This
                    should hopefully allow me to work on new functionality and
                    utilize new features available in discord.
                  </p>
                </div>

                <div className="flex gap-4 flex-wrap col-span-full">
                  <InlineLink href="https://buttonbot.xyz" showIcon>
                    Website
                  </InlineLink>
                  <InlineLink href="https://discord.gg/hr6SJjZUnT" showIcon>
                    Discord
                  </InlineLink>
                </div>
              </>
            }
          />
        </div>
      </div>
    </main>
  );
}
