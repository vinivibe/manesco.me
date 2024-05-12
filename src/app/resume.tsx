"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: UserGroupIcon,
    children: "Líder experiente, desenvolvendo equipes de alta performance que são motivadas a superar as expectativas e alcançar metas desafiadoras em ambientes competitivos.",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Inovador em processos de onboarding e engajamento do cliente, com projetos implementados que resultaram em aumentos significativos de NPS e satisfação do cliente",
  },
  {
    icon: ChartBarIcon,
    children: "Estrategista em Customer Success, utilizando análise de dados e feedbacks para aprimorar experiências e aumentar o valor percebido pelos clientes.",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Meu Resumo Profissional
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Com mais de uma década de experiência revolucionando a experiência do cliente em tecnologia...
          </Typography>
          <a
            href="https://drive.google.com/uc?export=download&id=11q7T4T_xDFsW9jR6foJtfc_W7po2oKf3"
            download="Curriculum_Joao_Felipe_Manesco.pdf"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Baixe meu curriculum atualizado
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </a>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;



