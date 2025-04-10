"use strict";

//ILE IYAN ELEWE

// place order
// prepare food
//prepare soup
//add stain
//select drink
//food on the way
//enjoy meal

const menu = {
  food: ["yam", "semo"],
  soup: ["efo", "ila", "ewedu"],
  stain: ["goat meat", "brokoto", "assorted", "ponmo"],
  drink: ["water", "palm wine", "soft dink"],
};

function placeOrder(
  prepare_meal,
  food_select,
  soup_select,
  stain_select,
  drink_select
) {
  setTimeout(() => {
    console.log(
      `You have decided to eat ${
        menu.food[food_select] === "yam" ? "pounded yam" : "semo"
      }`
    );
    prepare_meal(soup_select, stain_select, drink_select);
  }, 2000);
}

function prepareFood(soup_select, stain_select, drink_select) {
  setTimeout(() => {
    console.log("food bn prepared");
    setTimeout(() => {
      console.log(`your ${menu.soup[soup_select]} is bn prepared too`);
      setTimeout(() => {
        console.log(`you picked ${menu.stain[stain_select]} as accessory`);
        setTimeout(() => {
          console.log(`you picked ${menu.drink[drink_select]} as drink`);
          setTimeout(() => {
            console.log("Food almost ready");
            setTimeout(() => {
              console.log("Enjoy your meal");
            }, 1000);
          }, 1000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 1000);
}

placeOrder(prepareFood, 1, 1, 2, 0);
