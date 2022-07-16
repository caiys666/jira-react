import React from "react";
import { useArray, useMount } from "utils";

interface PersonObj {
  name: string;
  age: number;
}
export const UserArray = () => {
  const personList: PersonObj[] = [
    { name: "cabbage", age: 23 },
    { name: "迪丽热巴", age: 29 },
  ];

  const { persons, clear, addUser, removeIndex } = useArray(personList);
  useMount(() => {});
  return (
    <div>
      <div>
        <button onClick={() => addUser({ name: "蔡永生", age: 24 })}>
          添加人
        </button>
        <button onClick={() => removeIndex(0)}>删除第一个</button>
        <button onClick={() => clear()}>删除所有人</button>
        <div>
          {persons.map((person, index) => (
            <div key={index}>
              <span>{index}</span>
              <span>{person.name}</span>
              <span>{person.age}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
