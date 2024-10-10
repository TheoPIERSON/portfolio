/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import DadJokeLogo from "@/app/assets/images/icon.png";
import OnyxLogo from "@/app/assets/images/logo.png";
import WatIRead from "@/app/assets/images/watiread.png";
import RoseNail from "@/app/assets/images/rosenail.png";
import Mighty from "@/app/assets/images/mighty-coaching.png";
import ChefPro from "@/app/assets/images/chef-pro.png";
import DoBronx from "@/app/assets/images/logo copy.png";
import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";

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
export const Status = () => {
  return (
    <Section className="md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <a className="block" href="https://do-bronx-mma.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 h-10 object-contain bg-slate-50 rounded-xl" alt="Chef-pro-360 logo" src={DoBronx} />
            <span>Do Bronx MMA</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>NuxtJs</Code>
        </h1>
      </div>
      <div>
        <a className="block" href="https://chef-pro-360.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 h-10 " alt="Chef-pro-360 logo" src={ChefPro} />
            <span>Chef Pro 360</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>NextJs</Code>
        </h1>
      </div>
      <div>
        <a className="block" href="https://onyx-institut.com/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 h-10 " alt="Onyx Institut logo" src={OnyxLogo} />
            <span>Onyx Institut</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>Angular</Code>
          <span> </span>
          <Code>SpringBoot</Code>
        </h1>
      </div>
      <div>
        <a className="block" href="https://mighty-coaching.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 h-10 " alt="Mighty logo" src={Mighty} />
            <span> Mighty Coaching</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>Angular</Code>
        </h1>
      </div>
      <div>
        <a className="block" href="https://dad-s-joke-nu.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 h-10 " alt="Dad's joke logo" src={DadJokeLogo} />
            <span>Dad Joke randomizer</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>NextJs</Code>
        </h1>
      </div>

      <div>
        <a className="block" href="https://wat-i-read.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 h-10  bg-slate-200 rounded" alt="WAT I READ logo" src={WatIRead} />
            <span> Wat I Read</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>NextJs</Code>
        </h1>
      </div>
      <div>
        <a className="block" href="https://rose-nail.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10" alt="Rose Nail logo" src={RoseNail} />
            <span> Rose Nail</span>
          </Card>
        </a>
        <h1 className="mt-2">
          <Code>Angular</Code>
        </h1>
      </div>
    </Section>
  );
};
