import { CardProps } from "./components/home/Card"
import MasterCWB2 from "@/app/assets/hostings/MasterCWB2.jpg"
import MabuCWB05 from "@/app/assets/hostings/MabuCWB05.jpg"
import VitoriaKing from "@/app/assets/hostings/VitoriaKing.jpg"
import AltaReggia from "@/app/assets/hostings/AltaReggia.jpg"
import IntercityBatelCuritiba from "@/app/assets/hostings/IntercityBatelCuritiba.jpg"
import GrandeMercure from "@/app/assets/hostings/GrandeMercure.webp"
import NacionalInnSorocaba from "@/app/assets/hostings/NacionalInnSorocaba.jpg"
import Novotel from "@/app/assets/hostings/Novotel.webp"

export const homePageInfo: CardProps[] = [
  {
    name: "Hotel Master Curitiba",
    coverImage: MasterCWB2.src,
    link: "https://hospedaeventos.com.br/hoteis/hotel-master-curitiba/",
    location: "Curitiba | PR",
    minPrice: 182,
  },
  {
    name: "Mabu Curitiba Business",
    coverImage: MabuCWB05.src,
    link: "https://hospedaeventos.com.br/hoteis/mabu-curitiba-business/",
    location: "Curitiba | PR",
    minPrice: 218,
  },
  {
    name: "Vitória Hotel Express Dom Pedro Test Nome Grande Segundo King",
    coverImage: VitoriaKing.src,
    link: "https://hospedaeventos.com.br/hoteis/vitoria-hotel-express-dom-pedro/",
    location: "Campinas | SP",
  },
  {
    name: "Alta Reggia Plaza Hotel",
    coverImage: AltaReggia.src,
    link: "https://hospedaeventos.com.br/hoteis/alta-reggia-plaza-hotel-esgotado/",
    location: "Curitiba | PR",
    minPrice: 211,
    soldOff: true
  },
  {
    name: "Nacional Inn Sorocaba",
    coverImage: NacionalInnSorocaba.src,
    link: "https://hospedaeventos.com.br/hoteis/nacional-inn-sorocaba/",
    location: "Sorocaba | SP ",
    minPrice: 211,
  },
  {
    name: "Intercity Batel Curitiba",
    coverImage: IntercityBatelCuritiba.src,
    link: "https://hospedaeventos.com.br/hoteis/intercity-batel-curitiba/",
    location: "Curitiba | PR",
    minPrice: 298,
  },
  {
    name: "Grand Mercure Curitiba Rayon",
    coverImage: GrandeMercure.src,
    link: "https://hospedaeventos.com.br/hoteis/intercity-batel-curitiba/",
    location: "Curitiba | PR",
    minPrice: 383,
  },
  {
    name: "Novotel Curitiba Batel",
    coverImage: Novotel.src,
    link: "https://hospedaeventos.com.br/hoteis/novotel-curitiba-batel/",
    location: "Curitiba | PR",
    minPrice: 391,
  },
]
