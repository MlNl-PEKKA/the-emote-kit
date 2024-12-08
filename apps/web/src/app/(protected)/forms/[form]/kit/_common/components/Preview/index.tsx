"use client";

import { BentoCard } from "../BentoCard";
import type { BentoCardProps } from "../BentoCard";
import { Widget } from "./Widget";

const Preview = () => {
  return (
    <>
      Preview
      <Widget />
    </>
  );
};

const Default = (props: BentoCardProps) => (
  <BentoCard {...props}>
    <Preview />
  </BentoCard>
);

export { Default as Preview };
