"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Estratégias de Customer Success:",
    children:
      "Detalhe como João desenvolve e implementa estratégias inovadoras para garantir o sucesso do cliente, incluindo processos de onboarding criativos e efetivos que melhoram a retenção e a satisfação do cliente.",
  },
  {
    icon: FingerPrintIcon,
    title: "Liderança e Gestão de Equipes",
    children:
      "Explique como a capacidade de liderança de João permite montar e gerenciar equipes de alto desempenho focadas em Customer Success, contribuindo para um ambiente colaborativo e produtivo.",
  },
  {
    icon: SwatchIcon,
    title: "Análise de Dados e Insights do Cliente",
    children:
      "Ilustre como João usa análise de dados para extrair insights profundos que informam as estratégias de negócios e a tomada de decisões, aumentando a eficácia das interações com o cliente e o sucesso dos produtos.",
  },
  {
    icon: HashtagIcon,
    title: "Desenvolvimento e Inovação de Produtos",
    children:
      "Mostre como a experiência de João em colaborar estreitamente com equipes de produto resultou em inovações que melhoraram significativamente a experiência do cliente e o desempenho do produto no mercado.",
  },
  {
    icon: EyeIcon,
    title: "Ferramentas de Customer Success",
    children:
      "Apresente o conhecimento técnico de João com ferramentas específicas de Customer Success, como CustomerX e Movidesk, que ele implementou para otimizar o atendimento e a gestão de clientes.",
  },
  {
    icon: DocumentTextIcon,
    title: "Comunicação e Networking",
    children:
      "Destaque a habilidade de João em comunicar eficazmente com todos os stakeholders, facilitando um entendimento claro das metas e necessidades entre equipes e clientes.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
        minhas especialidades
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
        Como Faço a Diferença
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Em mais de uma década de dedicação ao Customer Success e à gestão de produtos, desenvolvi uma abordagem única que não apenas resolve problemas, mas transforma completamente a experiência do cliente. Descubra abaixo como minhas estratégias específicas e liderança visionária têm sido fundamentais para o crescimento e a satisfação em várias empresas de tecnologia.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
