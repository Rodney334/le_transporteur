import { StaticImageData } from "next/image";

export type ServiceCardProps = {
  iconImage: StaticImageData | string;
  titre: string;
  description: string;
  id: string | number;
  cardImage: StaticImageData | string;
};
