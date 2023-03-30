import { ImageRequireSource } from "react-native";

export type FoodObject = {
    vendorName: string;
    name: string;
    price: number;
    rating: number;
    imgSrc: ImageRequireSource;
};
export const Foods: FoodObject[] = [
    {
        vendorName: "Mama Cass",
        price: 25,
        rating: 4.5,
        imgSrc: require("@app/assets/food-1.png"),
        name: "Jollof Rice"
    },
    {
        vendorName: "Climanjaro",
        price: 25,
        rating: 4.5,
        imgSrc: require("@app/assets/food-2.png"),
        name: "Jollof Beans"
    },
    {
        vendorName: "Shoprite ",
        price: 25,
        rating: 4.5,
        imgSrc: require("@app/assets/food-1.png"),
        name: "Pepperoni Pasta"
    }
];
