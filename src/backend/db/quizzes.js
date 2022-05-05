import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    id: "1",
    title: "Dairy Farming Quiz",
    totalScore: 25,
    catergoryName: "Dairy Farming Quiz",
    mcqs: [
      {
        _id: uuid(),
        question: "How many compartments does a cow stomach have?",
        options: ["Four", "Five", "Three", "Two"],
        answer: "Four",
      },
      {
        _id: uuid(),
        question: "A dairy cow should have..",
        options: ["Globular body shape", "Triangular body shape", "Rectangular body shape", "None of the above"],
        answer: "Triangular body shape",
      },
      {
        _id: uuid(),
        question: "What is the meaning of skimming of milk?",
        options: ["To increase fat in milk", "To reduce fat from milk", "Increase creame in milk", "All of the above"],
        answer: "To reduce fat from milk",
      },
      {
        _id: uuid(),
        question: "Who is considered as the father of white revolution in India?",
        options: ["Verghese Kurien", "Julia Beatty", "Katherine Belov", "Henri Marie Bouley"],
        answer: "Verghese Kurien",
      },
      {
        _id: uuid(),
        question: "Fat in cow milk in gms...",
        options: ["3.34", "2.35", "4.67", "1.34"],
        answer: "3.34",
      },
    ],
  },
  {
    _id: uuid(),
    id: "2",
    title: "Poultry Farming Quiz",
    totalScore: 25,
    catergoryName: "Poultry Farming Quiz",
    mcqs: [
      {
        _id: uuid(),
        question: "Which is a bird or animal that is raised in largest scale in the world.?",
        options: ["Goat", "Sheep", "Hen", "Turkeys"],
        answer: "Hen",
      },
      {
        _id: uuid(),
        question: "Who is the mother of Broiler Poultry Farming.?",
        options: ["James Harbor", "Wilmer Steel", "William Hanna", "Wilkinson"],
        answer: "Wilmer Steel",
      },
      {
        _id: uuid(),
        question: "What are the type of Chicken Poultry Farming.?",
        options: ["Layers", "Broilers", "A and B", "None of the above"],
        answer: "A and B",
      },
      {
        _id: uuid(),
        question: "Layer Poultry Farming is mainly aimed at.?",
        options: ["Eggs", "Meat", "Quils", "Animal or Bird Fat Oil"],
        answer: "Eggs",
      },
      {
        _id: uuid(),
        question: "What is the ideal temperature for hatching eggs.?",
        options: ["90-95 degree fahrenheit", "95-98 degree fahrenheit", "99-102 degree fahrenheit", "101-103 degree fahrenheit"],
        answer: "99-102 degree fahrenheit",
      },
    ],
    
  },
  {
    _id: uuid(),
    id: "3",
    title: "Fish Farming Quiz",
    totalScore: 25,
    catergoryName: "Fish Farming Quiz",
    mcqs: [
      {
        _id: uuid(),
        question: "The practice of catching the fish only available naturally is known is ____",
        options: ["Monoculture", "Capture fishery", "Polyculture", "Culture fishery"],
        answer: "Capture fishery",
      },
      {
        _id: uuid(),
        question: "Which of the following is not a method of fish preservation?",
        options: ["Chilling", "Baking", "Canning", "Salting"],
        answer: "Baking",
      },
      {
        _id: uuid(),
        question: " Which of the following is a surface feeder?",
        options: ["Catla", "Labeo rohita", "Magur", "Flying fish"],
        answer: "Catla",
      },
      {
        _id: uuid(),
        question: "How many days are required for the fry to grow up to fingerling size",
        options: ["40-60 days", "30-60 days", "25-50 days", "35-50 days"],
        answer: "30-60 days",
      },
      {
        _id: uuid(),
        question: "How much percentage do the Asian countries contribute to Aquaculture?",
        options: ["15%", "35%", "75%", "90%"],
        answer: "90%",
      },
    ],
  },
  {
    _id: uuid(),
    id: "4",
    title: "Forest Farming Quiz",
    totalScore: 25,
    catergoryName: "Forest Farming Quiz",
    mcqs: [
      {
        _id: uuid(),
        question: "Tree density is measured in..",
        options: ["Tree per hectare", "Tree per acre", "Tree per square meter", "Tree per square kilometer"],
        answer: "Tree per hectare",
      },
      {
        _id: uuid(),
        question: "The total forest and tree cover of India as of 2019 is..",
        options: ["33.21%", "24.56%", "27.13%", "25.32%"],
        answer: "24.56%",
      },
      {
        _id: uuid(),
        question: "Which Indian state has highest forest cover?",
        options: ["Chhattisgarh", "Andhra Pradesh", "Assam", "Madhya Pradesh"],
        answer: "Madhya Pradesh",
      },
      {
        _id: uuid(),
        question: " Which is an evergreen tree?",
        options: ["India rosewood", "Eucalyptus", "Neem tree", "All of the above"],
        answer: "All of the above",
      },
      {
        _id: uuid(),
        question: "Which agroforestry tree drains a large amount of ground water?",
        options: ["Eucalyptus", "Mahua", "Subabul", "Sal tree"],
        answer: "Eucalyptus",
      },
    ],
  },
];


