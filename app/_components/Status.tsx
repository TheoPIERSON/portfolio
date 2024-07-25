/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import DadJokeLogo from "@/app/assets/images/icon.png";
import OnyxLogo from "@/app/assets/images/logo.png";
import WatIRead from "@/app/assets/images/watiread.png";
import RoseNail from "@/app/assets/images/rosenail.png";

export const Status = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <a className="block" href="https://dad-s-joke-nu.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10" alt="Dad's joke logo" src={DadJokeLogo} />
            <span>Dad Joke randomizer</span>
          </Card>
        </a>
      </div>
      <div>
        <a className="block" href="https://onyx-institut.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10" alt="Onyx Institut logo" src={OnyxLogo} />
            <span>Nails Technician website</span>
          </Card>
        </a>
      </div>
      <div>
        <a className="block" href="https://wat-i-read.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 bg-slate-200 rounded" alt="WAT I READ logo" src={WatIRead} />
            <span> Wat I Read</span>
          </Card>
        </a>
      </div>
      <div>
        <a className="block" href="https://rose-nail.vercel.app/">
          <Card className="w-full p-4 flex items-center gap-2">
            <Image className="w-10 bg-slate-200 rounded" alt="WAT I READ logo" src={RoseNail} />
            <span> Rose Nail</span>
          </Card>
        </a>
      </div>
    </Section>
  );
};
