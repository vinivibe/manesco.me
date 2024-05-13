"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
      <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
          Marcos de Sucesso
          </Typography>

        <div className=" flex text-center flex-row items-center justify-center p-4 gap-4">
          <Typography variant="h3" color="blue-gray" className="mb-4">
           Aumento de <br /> 30% no NPS <br /> engajamento e suporte ao cliente.
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-4">
          Expansão de Equipe  <br /> Crescimento de 50% na equipe 
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-4">
           Redução de Churn de Clientes <br /> 25% no churn <br /> 
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
