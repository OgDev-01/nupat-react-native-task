import { ImageRequireSource } from "react-native";

export type slideOjects = {
    title: string;
    desc: string;
    imgSrc: ImageRequireSource;
    id: string;
};

export const Slides: slideOjects[] = [
    {
        id: "1",
        title: "Give Your Location",
        desc: "Help us find the best of Nigerian Restaurants close to you by giving us access to your location.",
        imgSrc: require("@app/assets/location.png")
    },
    {
        id: "2",
        title: "Place your Order",
        desc: "Find your desired Nigerian meal and place your orders",
        imgSrc: require("@app/assets/order.png")
    },
    {
        id: "3",
        title: "Get Delivery",
        desc: "Get your food delivered and enjoy your meal with friends and family",
        imgSrc: require("@app/assets/delivery.png")
    }
];
