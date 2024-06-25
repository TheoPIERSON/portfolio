/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3]">
        <a href="https://dad-s-joke-nu.vercel.app/">
          <Card className="w-full p-4 flex flex-col gap-2">Dad Joke randomizer</Card>
        </a>
      </div>
      <div className="flex-[3] ">
        {" "}
        <a href="https://onyx-institut.vercel.app/">
          <Card className="w-full p-4 flex flex-col gap-2">Nails Technician website</Card>
        </a>
      </div>
      <div className="flex-[3] ">
        <a href="https://wat-i-read.vercel.app/">
          {" "}
          <Card className="w-full p-4 flex flex-col gap-2">Wat I Read</Card>
        </a>
      </div>{" "}
      <div className="flex-[3] ">
        <a href="https://rose-nail.vercel.app/">
          <Card className="w-full p-4 flex flex-col gap-2">Rose Nail</Card>
        </a>
      </div>
    </Section>
  );
};
