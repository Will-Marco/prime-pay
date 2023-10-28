import { AiFillStar } from "react-icons/ai";
import { BsFillSendFill, BsShieldFillCheck } from "react-icons/bs";

export const navigationLink = [
  {
    id: "home",
    title: "Bosh sahifa",
  },
  {
    id: "features",
    title: "Xizmatlar",
  },
  {
    id: "product",
    title: "Mahsulotlar",
  },
  {
    id: "clients",
    title: "Mijozlar",
  },
];

export const statistics = [
  {
    id: 1,
    title: "Foydalanuvchi Faol",
    value: "9300+",
  },
  {
    id: 2,
    title: "Kompaniya Homiyligida",
    value: "100+",
  },
  {
    id: 3,
    title: "Tranzaksiya",
    value: "110M+",
  },
];

export const features = [
  {
    id: 1,
    icon: (
      <AiFillStar
        className={`w-[50%] h-[50%] object-contain icons text-blue text-white`}
      />
    ),
    title: "Mukofotlar",
    content:
      "Eng yaxshi kredit kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi.",
  },
  {
    id: 2,
    icon: (
      <BsShieldFillCheck
        className={`w-[50%] h-[50%] object-contain icons text-white`}
      />
    ),
    title: "100% Himoyalangan",
    content:
      "Ma'lumotlaringiz va tranzaksiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun choralar.",
  },
  {
    id: 3,
    icon: (
      <BsFillSendFill
        className={`w-[50%] h-[50%] object-contain icons text-white`}
      />
    ),
    title: "Balansni o'tkazish",
    content:
      "Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
  },
];
