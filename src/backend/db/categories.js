import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    id: "1",
    categoryName: "Poultry Farming Quiz",
    description: "Play this quiz if you know well about poultry farming",
    questions: "5",
    image:
      "https://agridata.ec.europa.eu/extensions/CommonImages/eggs-poultry.png",
  },
  {
    _id: uuid(),
    id: "2",
    categoryName: "Dairy Farming Quiz",
    description: "Play this quiz if you know well about dairy farming",
    questions: "5",
    image:
      "https://static9.depositphotos.com/1052036/1116/v/600/depositphotos_11165090-stock-illustration-dairy-farm.jpg",
  },
  {
    _id: uuid(),
    id: "3",
    categoryName: "Fish Farming Quiz",
    description: "Play this quiz if you know well about fish farming",
    questions: "5",
    image:
      "https://us.123rf.com/450wm/ylivdesign/ylivdesign2006/ylivdesign200602338/149522148-fish-farm-pool-icon-isometric-style.jpg?ver=6",
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
