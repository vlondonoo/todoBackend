Fragment Images-alterAddDependencies {
    Action: add
    Priority: high
    FragmentationPoints: addDependencies
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-package
    SourceCode: [ALTERCODE-FRAG]
    "express-fileupload": "^1.4.0",
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddDevDependencies {
    Action: add
    Priority: high
    FragmentationPoints: addDevDependencies
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-package
    SourceCode: [ALTERCODE-FRAG]
    "@types/express-fileupload": "^1.4.1",
    [/ALTERCODE-FRAG]
}