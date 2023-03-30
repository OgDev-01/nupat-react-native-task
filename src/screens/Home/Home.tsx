import React, { useState } from "react";
import {
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { Box, HStack } from "native-base";

import Search from "@/components/atoms/Search/Search";
import CategoryPill from "@/components/atoms/CategoryPill/CategoryPill";
import HighlightCard from "@/components/molecules/HighlightCard/HighlightCard";
import { HighlightProduct } from "@/components/molecules/HighlightCard/data";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import { Foods } from "@/components/molecules/ProductCard/data";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Swallow", "Soup", "Snacks", "Noodles"];

    return (
        <ScrollView className="px-5 pt-1 bg-white">
            <Text style={{ fontFamily: "Montserrat Regular" }}>
                Hello Sunday,
            </Text>

            <Text
                className="mt-4 text-3xl text-primary"
                style={{ fontFamily: "Montserrat Bold" }}
            >
                Find Nigeria {"\n"}Food close to you
            </Text>

            <HStack space={3} className="items-center w-full mt-12">
                <Search />
                <TouchableOpacity className="items-center justify-center w-5 h-5 p-5 rounded-lg bg-primary">
                    <Image
                        className="w-5 h-5"
                        resizeMode="contain"
                        source={require("@app/assets/filter.png")}
                    />
                </TouchableOpacity>
            </HStack>

            <Text
                className="mt-6 text-3xl text-black"
                style={{ fontFamily: "Montserrat Medium" }}
            >
                Categories
            </Text>
            <Box className="mt-4">
                <FlatList
                    contentContainerStyle={{ paddingBottom: 2 }}
                    data={categories}
                    renderItem={({ item }) => (
                        <CategoryPill
                            onPress={() => setSelectedCategory(item)}
                            classNames={`${
                                selectedCategory === item
                                    ? "bg-primary text-white"
                                    : ""
                            }`}
                            textClasses={`${
                                selectedCategory === item ? "text-white" : ""
                            }`}
                            text={item}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Box>

            <Box className="mt-6">
                <Text
                    className="mb-4 text-2xl"
                    style={{ fontFamily: "Montserrat Medium" }}
                >
                    Restaurants
                </Text>
                <FlatList
                    data={HighlightProduct}
                    renderItem={({ item }) => <HighlightCard {...item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Box>
            <Box className="mt-5">
                <Text
                    className="mb-4 text-2xl"
                    style={{ fontFamily: "Montserrat Medium" }}
                >
                    Food
                </Text>
                <FlatList
                    data={Foods}
                    renderItem={({ item }) => <ProductCard {...item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Box>
        </ScrollView>
    );
};

export default Home;
