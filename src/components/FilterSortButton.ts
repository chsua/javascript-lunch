import { $, FilterSort, Render } from "../until/ControlDom";
import { MakeNewList } from "../domain/MakeNewList";
import { RestaurantService } from "../domain/RestaurantService";

const FilterSortButton = {
  template() {
    return `
      <select name="category" id="category-filter" class="restaurant-filter">
        <option value="전체">전체</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="아시안">아시안</option>
        <option value="기타">기타</option>
      </select>
      <select name="sorting" id="sorting-filter" class="restaurant-filter">
        <option value="name">이름순</option>
        <option value="distance">거리순</option>
      </select>`;
  },

  FilterSort() {
    const restaurantFilterContainer = $(".restaurant-filter-container");
    restaurantFilterContainer?.addEventListener("change", () => {
      FilterSort.setState();
      Render.restaurantList(MakeNewList.getNewList(RestaurantService.list));
    });
  },
};

export default FilterSortButton;
