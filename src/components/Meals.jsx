import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./Meals.css";
import {
  INITIAL_STATE,
  postReducer,
  ACTION_TYPES,
} from "../helper/MealsReducer";

const Meals = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchMeals = async () => {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try {
        const response = await axios.get("/api/meals");
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: response });
      } catch (error) {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        console.error("Error fetching data:", error);
      }
    };
    fetchMeals();
  }, []);

  console.log("state:", state);

  return (
    <>
      <h1>Meals</h1>
      {state.post.data && state.post.data.meals.length > 0 ? (
        <ul>
          {state.post.data.meals.map((meal, index) => (
            <li key={meal.id}>
              <h3>{meal.name}</h3>
              {meal.ingredients.map((ing, ingInd) => (
                <p key={ingInd}>{`${ing.name} - ${ing.calorie}`}</p>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data to show</p>
      )}
    </>
  );
};
export default Meals;
