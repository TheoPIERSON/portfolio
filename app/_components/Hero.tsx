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
    <Section className="flex max-lg:flex-col gap-4 m-5 mt-52 items-center">
      <div className="flex-2 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/130555127?v=4"
          alt="Theo's picture"
          className="w-50 h-auto rounded-full max-w-xs max-md:w-56"
        />
      </div>
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">Theo Pierson</h2>
        <h3 className="text-3xl font-caption">Software developper and stuff.</h3>
        <p className="text-base">
          I love <Code>learning</Code> and <Code>creating</Code>. I also try to create apps sometimes. <br />
          Currently learning <Code>NextJS</Code>
          and will place all my Next apps here. Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
              alt="France's flag"
              style={{ width: 16, height: "auto" }}
            />
            France
          </Code>
          .
        </p>
      </div>
    </Section>
  );
};
