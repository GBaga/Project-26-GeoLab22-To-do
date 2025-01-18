import { useState } from "react"
import "./input.css"
import { Props } from "../../../types/props";
import { TodoData } from "../../../types/todo";


export const Input = (props: Props) => {

    const [inputValue, setInputValue] = useState("");

    const saveTodoHandler = () => {

        if (!inputValue.trim()) {
            alert("Please enter a task.");
            return;
        }
        
        props.setTodo((prev) => {
            const newTodo: TodoData = {
            id: Math.random() + "",
            text: inputValue.trim(),
            markAsDone: false,
        };
        return [...prev, newTodo];
    });
    setInputValue("");
    }

  return (
    <form 
    onSubmit={(e) => {
        e.preventDefault();
        saveTodoHandler();
    }}
    >
        <h2>Enter your to do</h2>

        <input
        onChange={(e) => {
            setInputValue(e.target.value);
        }}   
        value={inputValue}   
        type="text" 
        />
        
        <button
        // onClick={saveTodoHandler}
        >Save new to do</button>

    </form>
  )
}
