import { time } from "console";
import { userAgent } from "next/server";
import { comment } from "postcss";

export const posts = [
  {
    id: 1,
    user: "xXcharlieXx",
    title: "Post 1",
    content: "Bom dia!!! Coloquei uma toca no toby :)",
    image: "/images/dogpost.png",
    isImage: true,
    liked: false,
    time: "2min",
    isCommented: true,
    comments: [
      {
        id: 1,
        user: "mamae_amy",
        content: "Que lindo <3",
        time: "1min",
      },
      {
        id: 2,
        user: "paibobby",
        content: "Que fofura!",
        time: "1min",
      },
    ],
  },
  {
    id: 2,
    user: "mamae_amy",
    title: "Post 2",
    content: "Bom dia flores do dia <3 #flores #natureza #bomdia",
    image: "",
    isImage: false,
    liked: false,
    time: "2h",
    isCommented: true,
    comments: [
      {
        id: 1,
        user: "evemachine",
        content: "bom dia, mamãe!",
        time: "2h",
      },
    ],
  },
  {
    id: 3,
    user: "Fefe",
    title: "Post 3",
    content: "Olá, tudo bem? Vamos trabalhar hoje? #trabalho #homeoffice",
    image: "/images/trabalhando.png",
    isImage: true,
    liked: false,
    time: "1d",
    isCommented: true,
    comments: [
      {
        id: 1,
        user: "xXcharlieXx",
        content: "Vamos sim!",
        time: "1d",
      },
    ],
  },
  {
    id: 4,
    user: "paibobby",
    title: "Post 4",
    content: "Boa noite a todos.",
    image: "",
    isImage: false,
    liked: false,
    time: "1d",
    isCommented: false,
    comments: [],
  },
];
