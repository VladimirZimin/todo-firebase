import axios from "axios";
import { transformReceivingData } from "./helpers";

export const sendNewTask = async (task) => {
  try {
    const data = await axios.post(
      "https://e-shop-e774b-default-rtdb.firebaseio.com/todos.json",
      task
    );
    console.log("data:", data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const data = await axios.delete(
      `https://e-shop-e774b-default-rtdb.firebaseio.com/todos/${id}.json`
    );
    console.log("data:", data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const receivingData = async () => {
  try {
    const { data } = await axios.get(
      "https://e-shop-e774b-default-rtdb.firebaseio.com/todos.json"
    );
    // console.log("data:", data);
    return transformReceivingData(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
