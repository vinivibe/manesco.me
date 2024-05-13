"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = useState(1);

  const testimonials = [
    {
      title: "Liderança que Inspira",
      content: "Ter João como parte da nossa equipe na Hippro foi decisivo durante os desafios mais intrincados que enfrentamos. Como um dos fundadores e nosso gestor de produtos, ele não apenas liderou nossa equipe com excepcional habilidade, mas também cultivou uma cultura de empatia e colaboração. Sua liderança não só nos guiou através de complexidades técnicas e operacionais, mas também enfatizou a importância das relações humanas no ambiente de trabalho, enriquecendo nossa experiência profissional e pessoal. A presença e orientação de João foram fundamentais para transformar obstáculos em oportunidades de crescimento e inovação.",
      author: "Marcelo Abreu - Product Manager",
      company: "Founder @ Hippro "
    },
    {
      title: "Inovação em Customer Success",
      content: "João não apenas implementou um sistema de onboarding que reduziu nosso churn em 25%, mas também transformou a maneira como nossa equipe entende e interage com os clientes. Sua abordagem inovadora impactou profundamente nossos processos internos e resultados.",
      author: "Marcus Vaz - Coordenador de Customer Success",
      company: "Customer Success @ TalentBrand."
    },
    {
      title: "Excelência em Estratégia e Análise",
      content: "João possui uma habilidade excepcional de analisar e utilizar dados para desenvolver estratégias eficazes. Seu trabalho conosco levou a melhorias notáveis na satisfação e retenção de clientes, fortalecendo nossa posição no mercado.",
      author: "Lucas Castilho - Head of Customer Success",
      company: "Head of Customer Success @ Gupy"
    }
  ];

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            O Que Meus Colegas Dizem
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Descubra o impacto da minha atuação no dia a dia dos projetos e como transformei os processos de gestão e experiência do cliente nas organizações onde trabalhei. A satisfação e o crescimento profissional dos meus colegas são reflexos do comprometimento e inovação que trago para cada desafio.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {testimonials[active - 1].title}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {testimonials[active - 1].content}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {testimonials[active - 1].author}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {testimonials[active - 1].company}
              </Typography>
              <div className="flex items-center gap-4">
                {testimonials.map((_, index) => (
                  <React.Fragment key={index}>
                    <Avatar
                      variant="rounded"
                      src={`/image/avatar${index + 1}.jpeg`}
                      alt={`avatar${index + 1}`}
                      size="sm"
                      className={`cursor-pointer ${active === index + 1 ? "opacity-100" : "opacity-50"}`}
                      onClick={() => setActive(index + 1)}
                    />
                    {index < testimonials.length - 1 && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpeg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;

