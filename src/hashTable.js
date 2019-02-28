
let TagTable = {
    tags : {},
    addImage : function(tag, image) {
        if (!this.tags[tag]) {
            this.tags[tag] = [];
        }
       this.tags[tag].push(image);
    },
    getImages : function(tag) {
        return (this.tags[tag])
    }
}

/*  for all images 
        for all tags in image   
           add image to tag in table */