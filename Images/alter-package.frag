Fragment Images-alterAddpackages {
    Action: add
    Priority: high
    FragmentationPoints: addPackages
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-package
    SourceCode: [ALTERCODE-FRAG]
    "express-fileupload": "^1.4.0",
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddPackagesDependencies {
    Action: add
    Priority: high
    FragmentationPoints: addPackagesDependencies
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-package
    SourceCode: [ALTERCODE-FRAG]
    "@types/express-fileupload": "^1.4.1",
    [/ALTERCODE-FRAG]
}