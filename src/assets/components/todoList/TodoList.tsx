import { TodoData } from "../../../types/todo";
import "./todoList.css";

type Props = {
  todoList: TodoData[];
  setTodo: React.Dispatch<React.SetStateAction<TodoData[]>>;
};

export const TodoList: React.FC<Props> = (props) => {
  const markAsDoneHandler = (id: string) => {
    props.setTodo((prev) => {
      const updatedTodos = prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            markAsDone: !todo.markAsDone,
          };
        } else {
          return todo;
        }
      });
      return updatedTodos;
    });
  };

  const deleteTodoHandler = (id: string) => {
    props.setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  if (props.todoList.length === 0) {
    return (
      <div className="todo-empty-message">
        There are no To-Do items, please add some.
      </div>
    );
  }

  return (
    <div className="todo-list">
      {props.todoList.map((item) => (
        <div 
        style={{
          textDecoration: item.markAsDone ? "line-through" : "none",
        }}
        className="todo-item" key={item.id}>
          <div   
          className="todo-item-text">{item.text}</div>
          <button
            onClick={() => markAsDoneHandler(item.id)} // Pass the item's id here
            style={{ margin: "10px 10px 0 0" }}
          >
            {item.markAsDone ? "Mark as not Done" : "Mark as Done"}
          </button>

          <button onClick={() => deleteTodoHandler(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
