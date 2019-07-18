import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";

const newViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px"
    }
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
    }
  }
};

addParameters({
  viewport: { viewports: newViewports }
});

addParameters({ viewport: { viewports: newViewports } });

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
