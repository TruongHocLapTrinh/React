import { useState } from "react";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import InputDisplay from "./components/InputDisplay";
import ToggleVisibility from "./components/ToggleVisibility";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragDropList from "./components/DragDropList";

function App() {
  const [name, setName] = useState("Adam");
  const [age, setAge] = useState(35);

  return (
    // <div>
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e) => {setName(e.target.value);
    //       console.log(e.target.value)
    //     }}
    //   />
    //   <p>My name is {name}</p>

    //   <input
    //     type="number"
    //     value={age}
    //     onChange={(e) => setAge(parseInt(e.target.value, 10))}
    //   />
    //   <p>My age is {age}</p>
    // </div>
    <>
      <Counter />
      <ProductList />
      <InputDisplay />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </>
  );
}

export default App;
