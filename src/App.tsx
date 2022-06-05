import { useState } from "react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/listItem";
import { AddArea } from "./components/addArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Estudar programação",
      done: false,
    },
    {
      id: 2,
      name: "Tomar água",
      done: false,
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista da Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
