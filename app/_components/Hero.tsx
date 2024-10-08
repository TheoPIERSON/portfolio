/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/50 border hover:bg-accent/70 border-accent p-1 text-primary font-mono rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col gap-4 m-5 mt-7 md:mt-52 items-center">
      <div className="flex-2 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/130555127?v=4"
          alt="Theo's picture"
          className="w-50 h-auto rounded-full max-w-xs max-md:w-56"
        />
      </div>
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h1 className="font-caption text-5xl text-primary font-bold">Theo Pierson</h1>
        <h2 className="text-3xl font-caption">Développeur web.</h2>
        <h2 className="text-3xl font-caption">Développeur Frontend.</h2>

        <p className="text-base">
          Bonjour, je m'appelle <Code>Theo</Code> et je suis <Code>développeur web</Code> situé dans le nord de la
          France. Ce site me sert de <Code>portfolio</Code>
          et vous permet de visualiser mes création en cliquant sur les <Code>icônes</Code>. <br /> J'aime apprendre et
          créer et je me ferais un plaisir de vous aider où que vous soyez, le travaille à distance ne me pose aucun
          problème! <br />
          Actuellement je travaille avec <Code>NuxtJS</Code> mais je suis également à l'aise avec les autres frameworks
          JavaScript comme <Code>Angular</Code> ou <Code>NextJs</Code>. Je suis également à l'aise avec{" "}
          <Code>JAVA</Code> et son framework <Code>SpringBoot</Code>.
        </p>
      </div>
    </Section>
  );
};
