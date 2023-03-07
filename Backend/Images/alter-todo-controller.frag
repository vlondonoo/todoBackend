Fragment Images-alterAddCreateActions {
    Action: add
    Priority: high
    FragmentationPoints: addCreateActions
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

Fragment Images-alterAddTodoCreateValues {
    Action: add
    Priority: high
    FragmentationPoints: addTodoCreateValues
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-TodoController
    SourceCode: [ALTERCODE-FRAG]
        image: imageName,
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddDeleteActions {
    Action: add
    Priority: high
    FragmentationPoints: addDeleteActions
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