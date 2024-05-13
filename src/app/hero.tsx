"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8" id="home">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
           Transformando a Jornada do Cliente <br/> em Experiências Excepcionais
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Descubra como minha abordagem criativa e analítica em Customer Success e Product Management pode elevar a experiência do seu cliente ao próximo nível. Conecte-se comigo hoje!
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Seu email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Adicione seu email" size="lg" />
              <Button color="blue" className="w-full px-4 md:w-[12rem]">
                Vamos conversar ?
              </Button>
            </div>
          </div>
         
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={{ src: "https://i.postimg.cc/15nf1fmh/1629211450363.jpg", width: 1024, height: 1024 }}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
