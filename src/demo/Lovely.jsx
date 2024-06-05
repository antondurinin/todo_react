function LovelyMeal(props) {
  if (props.count === 1) {
    console.log("🚀 ~ LovelyMeal ~ props.count:", props.count);
    return "Pizza";
  } else {
    return "Cesadilia";
  }
}

const HatedMeal = ({ count, emoji }) => {
  console.log("🚀 ~ HatedMeal ~ count:", count);
  if (count === 1) {
    return "Cesadilia" + emoji;
  } else {
    return "Pizza" + emoji;
  }
};
// function HatedMeal({ count, emoji }) {
//   console.log("🚀 ~ HatedMeal ~ count:", count);
//   if (count === 1) {
//     return "Cesadilia" + emoji;
//   } else {
//     return "Pizza" + emoji;
//   }
// }

export { HatedMeal, LovelyMeal };
