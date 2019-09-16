// @TODO maybe later we'll just have an index file, in order to simplify import logic?
// looks like rollup has a good codegen features

// import { version } from '../package.json'

// @TODO should we use .json in import?

import allergies from "~/Attribute/Allergy/allergies.json";

import course from "~/Attribute/Course/courses.json";
import cuisine from "~/Attribute/Cuisine/cuisines.json";
import departments from "~/Departments/departments.json";
import diet from "~/Diet/diets.json";
import grocery from "~/Grocery/grocery.json";
import holiday from "~/Attribute/Holiday/holidays.json";

// will crash here, because we have a few ingredients packs...
import ingredients from "~/Ingredients/ingredients.json";
import ingredients1 from "~/Ingredients/ingredients1.json";
import ingredients3 from "~/Ingredients/ingredients3.json";

import favorites from "~/Favorites/favorites.json";
import items from "~/Items/items.json";
// @TODO import sub-stuff like items, etc in order to make fetch works well....

// will crash here, because we need to import another file as well
import mealCalendar from "~/MealCalendar/mealcalendar.json";
import firstVeganGLMC from "~/MealCalendar/First-Vegan-Grocery-List-MC.json";
import measurements from "~/Measurement/measurements.json";

import menu from "~/Menu/menu.json";

import nutritions from "~/Nutrition/nutritions1.json";
import nutritions2 from "~/Nutrition/nutritions2.json";

import users from "~/Users/users.json";
import userGrocery from "~/UserGrocery/userGrocery.json";

import ultimateGroceryList from "~/Grocery/example/ultimate-gl-from-loopback-server-example.json";
import groceryListWithUserRelations from "~/Grocery/example/grocery-with-user-relations.json";
import dbIngredients from "~/Ingredients/example/gs-loopback-sample.json";

import recipes from "~/Recipe4/recipe.json";
import measurementSystems from "~/Units/measurementSystems.json";
import measurementUnits from "~/Units/measurementUnits.json";
import generatedMeasurementSystem from "~/MeasurementSystem/measurementSystem.json";
import generatedMeasurementUnits from "~/MeasurementUnits/measurementUnits.json";

import cookingTimes from "~/CookingTimes/cookingTimes.json";

import cup1 from "~/Cup1/cup1.json";
import halfCup from "~/HalfCup/halfCup.json";
import quaterCup from "~/QuaterCup/quaterCup.json";
import cup18 from "~/Cup1_8/cup1_8.json";
import cup34 from "~/Cup3_4/cup3_4.json";
import dash from "~/Dash/dash.json";
import gallon from "~/Gallon/gallon.json";
import pinch from "~/Pinch/pinch.json";
import pint from "~/Pint/pint.json";
import quart from "~/Quart/quart.json";
import tablespoon from "~/Tablespoon/tablespoon.json";
import teaspoon from "~/Teaspoon/teaspoon.json";

export default {
  allergies,
  course,
  cuisine,
  departments,
  diet,
  grocery,
  holiday,
  ingredients,
  ingredients1,
  ingredients3,
  favorites,
  items,
  mealCalendar,
  firstVeganGLMC,
  measurements,
  menu,
  recipes,
  nutritions,
  nutritions2,
  users,
  userGrocery,
  ultimateGroceryList,
  groceryListWithUserRelations,
  dbIngredients,
  measurementSystems,
  measurementUnits,
  generatedMeasurementSystem,
  generatedMeasurementUnits,
  cookingTimes,
  cup1,
  halfCup,
  quaterCup,
  cup18,
  cup34,
  dash,
  gallon,
  pinch,
  pint,
  quart,
  tablespoon,
  teaspoon
};
