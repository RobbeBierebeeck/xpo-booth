const express = require('express');
const router = express.Router();
const replaceColor = require('replace-color')
const {writeFileSync} = require("fs");
const Jimp = require("jimp");

router.post('/upload', async function (req, res, next) {
    try {


        // to declare some path to store your converted image, to the root directory of the project
        const path = 'public/images/' + Date.now() + '.png';

        const imgdata = req.body.image.contents;

        // to convert base64 format into random filename
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');

        await writeFileSync(path, base64Data, {encoding: 'base64'});

        const jimpOverlayImage = await Jimp.read('https://www.goodfreephotos.com/albums/other-landscapes/mountain-peaks-clouds-and-landscape.jpg');

        await replaceColor({
            image: path,
            colors: {
                type: 'hex',
                targetColor: '#3bb14b',
                replaceColor: '#00FFFFFF'
            },
            deltaE: 35
        }).then((jimpObject) => {
            jimpObject.write(path);

        }).catch((err) => {
            console.log(err);

        });


           Jimp.read(path, (err, image) => {

                if (err) throw err;
                image   // resize
                    .composite(jimpOverlayImage, 0, 0, {
                        mode: Jimp.BLEND_DESTINATION_OVER,
                    })
                    .write(path); // save
            }
        );

        return res.send(path);

    } catch (e) {
        next(e);
    }


});

module.exports = router;