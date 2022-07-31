import * as qs from "qs";
import React from "react";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import styled from "@emotion/styled";
import { Typography } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const debounceParams = useDebounce(params, 200);
  const client = useHttp();
  useEffect(() => {
    setIsLoading(true);
    client("projects", { data: cleanObject(debounceParams) })
      .then(setList)
      .catch((error) => {
        setError(error);
        setList([]);
      })
      .finally(() => setIsLoading(false));
  }, [debounceParams]);
  useMount(() => {
    client("users", {}).then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel params={params} setParams={setParams} users={users} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isloading} dataSource={list} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
