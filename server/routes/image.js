const express = require("express");
const router = express.Router();
const replaceColor = require("replace-color");
const {writeFileSync} = require("fs");
const Jimp = require("jimp");
const { HOST } = process.env;


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


        writeFileSync(__dirname + "/../public/images/" + imageName, base64Data, "base64");


        await replaceColor({
            image: __dirname + "/../public/images/" + imageName,
            colors: {
                type: "hex",
                targetColor: color, //3bb14b
                replaceColor: "#00FFFFFF",
            },
            deltaE: deltaE,
        })
            .then((jimpObject) => {
                jimpObject.write(__dirname + "/../public/images/" + imageName);
            })
            .catch((err) => {
                console.log(err);
            });





        await Jimp.read(
            __dirname + "/../public/images/overlay/" + req.body.overlay + ".png",
            (err, overlay) => {
                Jimp.read(__dirname + "/../public/images/" + imageName
                    , (err, image) => {
                        image
                            .composite(overlay, 0, 0, {
                                mode: Jimp.BLEND_DESTINATION_OVER,
                            })
                            .write(
                                __dirname + "/../public/images/" + imageName
                            ); // save

                        return res.send({
                            url: req.protocol + "://" + HOST + "/images/" + imageName,
                        });
                    });
            }
        );
    } catch (e) {
        next(e);
    }
});

module.exports = router;
