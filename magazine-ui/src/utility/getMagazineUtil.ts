import { BASE_API_URL } from "../constant/appConstant";
import { Magazine, SubscriptionsType } from "../types/appTypes";

export const getMagazineList = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}magazine`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
