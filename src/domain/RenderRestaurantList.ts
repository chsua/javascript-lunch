import { RestaurantList } from "../components/MainPage/RestaurantList";
import { $ } from "../until/ControlDom";
import { FilterSort } from "./FilterSort";
import { RestaurantData } from "./RestaurantData";

export const RenderRestaurantList = {
  render() {
    const restaurantListContainer = $(
      ".restaurant-list-container"
    ) as HTMLDataListElement;
    restaurantListContainer.innerHTML = this.getRestaurantForShow(
      this.nowListSection()
    );
  },

  nowListSection() {
    const restaurantListContainer = $(
      ".restaurant-list-container"
    ) as HTMLElement;

    return restaurantListContainer.classList.length === 1
      ? "allList"
      : "likeList";
  },

  getRestaurantForShow(listSection: string) {
    if (listSection === "allList") {
      return RestaurantList.template(
        FilterSort.getNewList(RestaurantData.allList)
      );
    }
    return RestaurantList.template(RestaurantData.likeList);
  },
};
