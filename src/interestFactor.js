/*
** Calculates the interest factor by the following function
** min(pic1 diferent tags, pic1 and 2 common tags. pic2 different tags)
** parameters: 2 picture objects to compare
*/

const calcInterestFactor = (pic1, pic2) => {
    let pic1dif = [];
    let pic2dif = [];
    let common = [];
    for (tagP1 of pic1.tags) {
        if (pic2.tags.some((tag) => tag === tagP1)) {
            common.push(tagP1);
        }
        else {
            pic1dif.push(tagP1);
        }
    }
    for (tagP2 of pic2.tags) {
        if (pic1.tags.every((tag) => tag !== tagP2)) {
            pic2dif.push(tagP2);
        }
    }
    return Math.min(pic1dif.length, pic2dif.length, common.length);
}

/*
** Calculates the interest factor of all the images against all other images
** parameter: list of pictures
*/

const getAllInterestFactors = (pics) => {
    for (pic of pics.pics) {
        pic.interest = {};
        for (tmpPic of pics.pics) {
            if (tmpPic !== pic) {
                pic.interest[`${tmpPic.id}`] = calcInterestFactor(pic, tmpPic);
            }
        }
        if (pic.id % 50 === 0)
            console.log(`Finished calculating interests for pic #${pic.id}`);
    }
    return pics;
}

module.exports = {
    calcInterestFactor,
    getAllInterestFactors
}