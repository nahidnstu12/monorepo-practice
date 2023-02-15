import { TodoDto } from "./todo.model";
import { Todo, ITodo } from "./todo.schema";

export class TodoService {

    static async getAll(qs:any): Promise<TodoDto[]> {
        const todos: ITodo[] | void = await Todo.find({status: qs.status}).sort({ createdAt: -1 }).catch(console.log);
        return (todos || []).map((todo: ITodo) => ({ id: todo.id, title: todo.title, description: todo.description, status: todo?.status }))
    }

    static async create(todo: TodoDto): Promise<TodoDto> {
        const newTodo: ITodo | void = await Todo.create(todo).catch(console.log);
        if (newTodo) {
            return { id: newTodo?.id, title: newTodo?.title, description: newTodo?.description, status: newTodo?.status };
        }
        return null;
    }

    static async delete(id: string): Promise<boolean> {
        const deletedTodo: ITodo | void = await Todo.findByIdAndDelete(id).catch(console.log);
        return !!deletedTodo;
    }

    static async edit(id: string, data:TodoDto): Promise<TodoDto> {
       try {
        const todo: ITodo|void  = await Todo.findById(id).catch(console.log);
       
       
        if(todo){
            // const {_id, ...todo} = todo;
            
            todo.title = data.title || todo.title;
            todo.description = data.description || todo.description;
            todo.status = data.status || todo.status;
            // console.log("todo--",todo,"data--", data,"todo--", todo);
            const result: TodoDto = await Todo.findByIdAndUpdate(
              {  _id: id },
              { $set: {title: todo.title, description: todo.description, status: todo.status } },
              { new: true, useFindAndModify: false }
            );
            console.log("todo--",todo,"data--", data,"result", result);
            return result;
        }else{

          throw Error('not found');
        }

      } catch (err) {
        console.log(err);
      }
    }
}

