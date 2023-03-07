Fragment Images-alterAddFiles {
    Action: add
    Priority: high
    FragmentationPoints: addFiles
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-TodoController
    SourceCode: [ALTERCODE-FRAG]
        let imageName = '';
        if (req.files && req.files.image){
        const image = req.files.image as any;
        imageName = `${Date.now()}_${image.name}`;
        const path = __dirname + "../../../public/images/" + imageName;
        image.mv(path);
        }
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddDbImage {
    Action: add
    Priority: high
    FragmentationPoints: addDbImage
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-TodoController
    SourceCode: [ALTERCODE-FRAG]
        image: imageName,
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddDeleteImages {
    Action: add
    Priority: high
    FragmentationPoints: addDeleteImages
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-TodoController
    SourceCode: [ALTERCODE-FRAG]
        const todoToDelete = await Todo.findByPk(id) as any;
        if(todoToDelete && todoToDelete.image){
            try {
                const path = __dirname + "../../../public/images/" + todoToDelete.image;
                fs.unlinkSync(path);
            } catch (err) {
                console.error(err);
            }
        }
    [/ALTERCODE-FRAG]
}