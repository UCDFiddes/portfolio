"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BackArrowIcon from "./icons/back-arrow";
import ExternalLinkIcon from "./icons/external-link";
import LinkIcon from "./icons/link";

type ComponentProps = {
  id: string;

  accentColour: string;
  logoSrc: string;

  title: string;
  href: string;

  description: React.ReactNode;
  content: React.ReactNode;
};
export default function ProjectButton({
  id,

  accentColour,
  logoSrc,

  title,
  href,

  description,
  content,
}: ComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const MotionImage = motion.create(Image);

  return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          layoutId={`${id}-card`}
          className="fixed inset-0 z-50 py-32 px-6 overflow-y-auto"
          style={{ backgroundColor: accentColour }}
        >
          <div className="mx-auto max-w-2xl space-y-8">
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="cursor-pointer"
            >
              <BackArrowIcon />
            </button>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <MotionImage
                  layoutId={`${id}-logo`}
                  src={logoSrc}
                  alt="project logo"
                  height={58}
                  width={196}
                />
                <Link
                  href={href}
                  className="text-3xl font-bold hover:underline inline"
                >
                  <span className="inline">{title}</span>
                  <ExternalLinkIcon />
                </Link>
              </div>
              <div className="space-y-4">{description}</div>

              {content}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          layoutId={`${id}-card`}
          type="button"
          onClick={() => setIsExpanded(true)}
          className="w-full h-64 p-8 flex flex-col justify-between hover:border-foreground border-2 border-transparent cursor-pointer"
          style={{ backgroundColor: accentColour }}
        >
          <MotionImage
            layoutId={`${id}-logo`}
            src={logoSrc}
            alt="project logo"
            height={58}
            width={196}
          />

          <div className="w-full justify-end flex">
            <LinkIcon />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
