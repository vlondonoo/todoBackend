import { Request, Response } from "express";
import Todo from '../models/Todo';

export default class TodoController {
  public static async listClosed(req: Request, res: Response) {
    const closedTodos = await Todo.findAll({ where: { 'state': 'CLOSED' } });
    res.json({ "list": closedTodos });
  }

  public static async listOpen(req: Request, res: Response) {
    const openTodos = await Todo.findAll({ where: { 'state': 'OPEN' } });
    res.json({ "list": openTodos });
  }

  /*B-addListMethods*/

  public static async create(req: Request, res: Response) {
    /*B-addFiles*/

    await Todo.create({
      message: req.body.message,
      state: "OPEN",
      /*B-addDbImage*/
    });
    res.json({ "res": "Todo created successfully" });
  }

  public static async delete(req: Request, res: Response) {
    const id = req.params.id;
    /*B-addDeleteImages*/
    await Todo.destroy({ where: { id: id } });
    res.json({ "res": "Todo deleted successfully" });
  }

  public static async update(req: Request, res: Response) {
    const id = req.params.id;
    const state = req.params.state;
    await Todo.update({state: state}, { where: { id: id } });
    res.json({ "res": "Todo updated successfully" });
  }
}