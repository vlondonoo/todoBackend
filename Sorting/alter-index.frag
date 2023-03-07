Fragment Sorting-alterAddListEndpoints {
    Action: add
    Priority: high
    FragmentationPoints: addListEndpoints
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-Index
    SourceCode: [ALTERCODE-FRAG]
     Index.app.get('/todos/open/:direction', TodoController.listSortedOpen);
    Index.app.get('/todos/closed/:direction', TodoController.listSortedClosed);   
    [/ALTERCODE-FRAG]
}