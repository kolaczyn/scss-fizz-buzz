import sass from "sass";
import { promises as fs } from "fs";

(async () => {
  const { css } = await sass.compile("input.scss");
  await fs.writeFile("output.css", css);
})();
