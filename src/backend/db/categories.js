import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    id: "1",
    categoryName: "Dairy Farming Quiz",
    description: "Play this quiz if you know well about dairy farming",
    questions: "5",
    image:
      "https://file.removal.ai/preview/tmp-627280ccf1817.png",
  },
  {
    _id: uuid(),
    id: "2",
    categoryName: "Poultry Farming Quiz",
    description: "Play this quiz if you know well about poultry farming",
    questions: "5",
    image:
      "https://agridata.ec.europa.eu/extensions/CommonImages/eggs-poultry.png",
  },
  {
    _id: uuid(),
    id: "3",
    categoryName: "Fish Farming Quiz",
    description: "Play this quiz if you know well about fish farming",
    questions: "5",
    image:
      "https://o.remove.bg/downloads/4a78d1d2-b126-49a5-9020-7180919bf2fb/149522148-fish-farm-pool-icon-isometric-style-removebg-preview.png",
  },
  {
    _id: uuid(),
    id: "4",
    categoryName: "Forest Farming Quiz",
    description: "Play this quiz if you know well about forestry farming",
    questions: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5LHxegkQBPq_LQE4ABmmyWeHNukKb1lrA&usqp=CAU",
  },
];
