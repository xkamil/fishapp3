import markerFilter from "./markerFilter";

const markerType = {
   FISH: {
      filter: markerFilter.FISH,
      icon: "/fish.png"
   },
   FISH_GROUP: {
      filter: markerFilter.FISH,
      icon: "/fish_group.png"
   },
   SHOP: {
      filter: markerFilter.SHOP,
      icon: "/shop.png"
   },
   SHOP_GROUP: {
      filter: markerFilter.SHOP,
      icon: "/shop_group.png"
   },
};

export default markerType;