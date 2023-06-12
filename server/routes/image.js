const express = require("express");
const router = express.Router();
const replaceColor = require("replace-color");
const { writeFileSync } = require("fs");
const Jimp = require("jimp");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/upload", async (req, res, next) => {
  try {
    const color = req.body.color;
    const deltaE = req.body.deltaE;

    // to declare some path to store your converted image, to the root directory of the project
    const imageName = Date.now() + ".png";
    const path = "public/images/" + imageName;

    const imgdata = req.body.image.contents;

    // to convert base64 format into random filename
    const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, "");

    await writeFileSync(path, base64Data, { encoding: "base64" });

    await replaceColor({
      image: path,
      colors: {
        type: "hex",
        targetColor: color, //3bb14b
        replaceColor: "#00FFFFFF",
      },
      deltaE: deltaE,
    })
      .then((jimpObject) => {
        jimpObject.write(path);
      })
      .catch((err) => {
        console.log(err);
      });

    await Jimp.read(
      "https://www.goodfreephotos.com/albums/other-landscapes/mountain-peaks-clouds-and-landscape.jpg",
      (err, overlay) => {
        Jimp.read(path, (err, image) => {
          image
            .composite(overlay, 0, 0, {
              mode: Jimp.BLEND_DESTINATION_OVER,
            })
            .write(path); // save

          return res.send({
            url:
              req.protocol + "://" + req.get("host") + "/images/" + imageName,
          });
        });
      }
    );
  } catch (e) {
    next(e);
  }
});

module.exports = router;
