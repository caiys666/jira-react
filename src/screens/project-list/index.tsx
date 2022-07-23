import * as qs from "qs";
import React from "react";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";
import { List } from "./list";
import { SearchPanel } from "./search-panel";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debounceParams = useDebounce(params, 200);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debounceParams) }).then(setList);
  }, [debounceParams]);
  useMount(() => {
    client("users", {}).then(setUsers);
  });
  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
