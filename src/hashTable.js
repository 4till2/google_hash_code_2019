const parsed = require('./parseInput');

const TagTable = {
    tags : {},
    addImage : function(tag, image) {
        if (!this.tags[tag]) {
            this.tags[tag] = [];
        }
       this.tags[tag].push(image);
    },
    getImages : function(tag) {
        return (this.tags[tag])
    },
    createTable(list){
        for (image in list.pics) {
            for (tag in list.pics[image].tags) {
                TagTable.addImage(list.pics[image].tags[tag], list.pics[image].id)
            }
        }
    }
}

module.exports = TagTable;
