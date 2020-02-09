import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

const MealList = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = itemData => {
    const isFavorite = favMeals.some(meal => meal.id === itemData.id);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <Text>CategoryMealsScreen</Text>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
