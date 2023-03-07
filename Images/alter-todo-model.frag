Fragment Images-alterAddModelImages {
    Action: add
    Priority: high
    FragmentationPoints: addModelImages
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-Todo
    SourceCode: [ALTERCODE-FRAG]
        image: {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    [/ALTERCODE-FRAG]
}