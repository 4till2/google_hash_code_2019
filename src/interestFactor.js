/*
** Calculates the interest factor by the following function
** min(pic1 diferent tags, pic1 and 2 common tags. pic2 different tags)
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

const testModule = () => {
    pic1 = {
        direction: 'V',
        tags: ['bird', 'home', 'zipper', 'bruno', 'hello']
    }
    pic2 = {
        direction: 'V',
        tags: ['benito', 'home', 'jose', 'bruno', 'confusion', 'hello', 'nsdaf']
    }
    console.log(calcInterestFactor(pic1, pic2));
}

module.export = {
    calcInterestFactor
}