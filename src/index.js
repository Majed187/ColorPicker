import namedColors from "color-name-list";
import nearestColors from "nearest-color";
(args => {
  // All code goes inside here

  args.forEach(arg => {
    const colors = namedColors.find(color => color.hex === arg);

    const nearColor = namedColors.reduce(
      (o, { name, hex }) => Object.assign(o, { [name]: hex }),
      {}
    );

    const nearest = nearestColors.from(nearColor);

    if (colors) {
      console.log(`your color is  ${colors.name}`);
    } else {
      console.log(
        `the nearColor is ${nearest(arg).value} for the color  is ${
          nearest(arg).name
        }`
      );
      // console.error(`${arg} this color is not exsit `);
    }
  });
})(process.argv.slice(2));
