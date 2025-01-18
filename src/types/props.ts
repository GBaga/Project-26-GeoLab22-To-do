import { TodoData } from "./todo";
import { Dispatch, SetStateAction } from "react";

export type Props = {
    setTodo: Dispatch<SetStateAction<TodoData[]>>;
};
