import { StaticImageData } from "next/image"

export type HeroPropsType = {
    image?: StaticImageData | string
    titre?: string
    sousTitre?: string
}