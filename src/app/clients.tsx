"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "gupy",
  "hippo",
  "kenoby",
  "mrm",
  "nexti",
  "talentbrand",
  "unico",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-8">
          Empresas que já trabalharam comigo
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => {
            
            console.log(logo)
            
            return (<Image
              key={key}
              alt={logo}
              width={70}
              height={70}
              className="w-24"
              src={`/logos/${logo}.png`}
            />)
          })}
        </div>
      </div>
    </section>
  );
}

export default Clients;
