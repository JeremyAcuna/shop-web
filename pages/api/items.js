// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Invertocat Pullover Hoodie",
      price: 60,
      image: "/img/pullover.webp",
      description:
        "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!)",
    },
    {
      id: 1,
      title: "Invertocat 4.0 Shirt",
      price: 15,
      image: "/img/camiseta.webp",
      description:
        "The classic Invertocat shirt gets another major update with the all new 4.0 release featuring brand new colors and a smaller, more simplified Invertocat. Did we mention we also have black-on-black? Because we have black-on-black and it’s low key fire.",
    },
    {
      id: 2,
      title: "Adventure Sticker Pack",
      price: 5,
      image: "/img/stickers.webp",
      description:
        "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
    },
    {
      id: 3,
      title: "Invertocat Hard Cover Journal",
      price: 25,
      image: "/img/journal.webp",
      description: "The perfect place to jot down your ideas and dreams.",
    },
    {
      id: 4,
      title: "Invertocat 2.0 Beanie",
      price: 22,
      image: "/img/beanie.webp",
      description:
        "Keep your head warm and the code flowing with the updated Invertocat 2.0 Beanie in three new colors and an all new puff printed tag. Wear it cuffed or uncuffed, these medium-weight waffle knits are double-layered yet breathable to protect those octocat ears in any weather.",
    },
    {
      id: 5,
      title: "Invertocat Pin",
      price: 10,
      image: "/img/llavero.webp",
      description: '1" Invertocat enamel pin on gold plating',
    },
    {
      id: 6,
      title: "GH Cooler",
      price: 45,
      image: "/img/cooler.webp",
      description:
        "The Arctic Zone® Titan Deep Freeze® 3 Day cooler is a high performance cooler designed to keep items cold for longer periods of time and can keep ice for up to three days. The 30-can capacity cooler has an integrated radiant heat barrier, Cold Block™ base and Therma-Flect® interior radiant barrier.",
    },
  ]);
}
