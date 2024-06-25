import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";

interface IHeader {
  className?: string;
}

export const Header: FC<IHeader> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left peace  */}
        <div className="flex items-center gap-4">
          <Image alt="pizzalogo" src="/logo.png" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкуснее уже некуда
            </p>
          </div>
        </div>
        {/* right peace  */}
        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>
        </div>
      </Container>
    </header>
  );
};
