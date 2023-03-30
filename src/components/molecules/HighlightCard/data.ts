import { ImageRequireSource } from "react-native";

export type HiglightObject = {
    imgSrc: ImageRequireSource;
    title: string;
    km: number;
    isDeliverable?: boolean;
    rating: number;
};

export const HighlightProduct: HiglightObject[] = [
    {
        imgSrc: require("@app/assets/highlight-1.png"),
        title: "Mama Cass",
        km: 12,
        rating: 4.1,
        isDeliverable: true
    },
    {
        imgSrc: require("@app/assets/highlight-1.png"),
        title: "Fried Fish",
        km: 11,
        rating: 4.6,
        isDeliverable: true
    },
    {
        imgSrc: require("@app/assets/highlight-1.png"),
        title: "Egg Sauce",
        km: 13,
        rating: 43.9,
        isDeliverable: true
    }
];
