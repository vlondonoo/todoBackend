Fragment Images-alterAddImports {
    Action: add
    Priority: high
    FragmentationPoints: addImports
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-Index
    SourceCode: [ALTERCODE-FRAG]
     import fileUpload from "express-fileupload";  
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddAppUseCalls {
    Action: add
    Priority: high
    FragmentationPoints: addAppUseCalls
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-Index
    SourceCode: [ALTERCODE-FRAG]
     Index.app.use(fileUpload({ createParentPath: true }));
     Index.app.use(express.static("public"));  
    [/ALTERCODE-FRAG]
}
