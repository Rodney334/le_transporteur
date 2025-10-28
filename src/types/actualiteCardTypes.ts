import { StaticImageData } from "next/image";

export type ActualiteCardProps = {
  image: StaticImageData | string;
  titre: string;
  description: string;
  id: string | number;
};

export type ActualiteProps = {
  data: ActualiteCardProps[];
};
