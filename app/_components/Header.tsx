import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex item-baseline">
        <h1 className="text-lg font-bold text-primary">theopierson</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-1 md:gap-2">
          <Link
            href="https://github.com/TheoPIERSON"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foregound" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/theo-pierson-5bab87216/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={12} className="text-foregound" />
          </Link>
          <h2>thheopierson@gmail.com</h2>
        </ul>
      </Section>
    </header>
  );
};
