import offer1 from "../images/offers/offer1.png";
import offer2 from "../images/offers/offer2.png";
import offer3 from "../images/offers/offer3.png";

const offers = {
  offer1: {
    image: offer1,
    imgIsFirst: true,
    header: "Purifies indoor spaces of airborne pollutants.",
    pMain: "Anti-Molding, Zero VOC, Odourless and Easy to Clean",
    textColor: "#425E44",
    textBgColor: "#F4EDE6",
  },
  offer2: {
    image: offer2,
    imgIsFirst: false,
    header: "Try our sticker samples before making up your mind!",
    btnText: "Shop our samples",
    btnWidth: "9rem",
    textColor: "#1F1E1E",
    textBgColor: "#E7E3E0",
  },
  offer3: {
    image: offer3,
    imgIsFirst: true,
    header: "Put some colours into your life!",
    pMain: "Find more inspiration on our instagram account",
    pSecondary: "@Palette.eco",
    textColor: "#A36E6C",
    textBgColor: "#DBC6Af",
  },
};

export default offers;
