import { Work } from "../@types/typings";

import webUiSoup from "../assets/web-uisoup.png";
import mobileUiSoup from "../assets/mobile-uisoup.png";
import webGoldCrown from "../assets/web-goldcrown.png";
import mobileGoldCrown from "../assets/mobile-goldcrown.png";
import webClose from "../assets/web-close.png";

export const works: Work[] = [
  {
    clientName: "UI Soup",
    webScreenshot: webUiSoup,
    mobileScreenshot: mobileUiSoup,
  },
  {
    clientName: "Goldcrown Labs",
    webScreenshot: webGoldCrown,
    mobileScreenshot: mobileGoldCrown,
  },
  {
    clientName: "Close Concierge",
    webScreenshot: webClose,
    mobileScreenshot: mobileUiSoup,
  },
];
