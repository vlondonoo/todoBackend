Fragment Images-alterAddImageImport {
    Action: add
    Priority: high
    FragmentationPoints: addImageImport
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-Index
    SourceCode: [ALTERCODE-FRAG]
     import fileUpload from "express-fileupload";  
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddUseFunctions {
    Action: add
    Priority: high
    FragmentationPoints: addUseFunctions
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-Index
    SourceCode: [ALTERCODE-FRAG]
     Index.app.use(fileUpload({ createParentPath: true }));
     Index.app.use(express.static("public"));  
    [/ALTERCODE-FRAG]
}
