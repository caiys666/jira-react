import * as qs from "qs";
import React from "react";
import { useState } from "react";
import { useDebounce } from "utils";
import { useHttp } from "utils/http";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const client = useHttp();
  const debounceParams = useDebounce(params, 200);
  const { isLoading, error, data: list } = useProjects(debounceParams);
  const { data: users } = useUsers();
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel params={params} setParams={setParams} users={users || []} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
