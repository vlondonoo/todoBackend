Fragment Sorting-alterAddListMethods {
    Action: add
    Priority: high
    FragmentationPoints: addListMethods
    PointBracketsLan: java
    Destinations: Backend-BasicStructure-TodoController
    SourceCode: [ALTERCODE-FRAG]
      public static async listSortedClosed(req: Request, res: Response) {
        const closedTodos = await Todo.findAll({
        where: { 'state': 'CLOSED' },  order: [['message', req.params.direction]]
        });
        res.json({ "list": closedTodos });
        }

        public static async listSortedOpen(req: Request, res: Response) {
            const openTodos = await Todo.findAll({ 
            where: { 'state': 'OPEN' },  order: [['message', req.params.direction]]
            });
            res.json({ "list": openTodos });
        }  
    [/ALTERCODE-FRAG]
}