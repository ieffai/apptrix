import { $authHost } from '../../http/index';
import { setIssues, setProjectNames, setNewWorkItem } from '../reducers/issueReducer';

export const fetchIssues = () => {
  return async (dispatch) => {
    try {
      const { data } = await $authHost.get('/issues', {
        params: {
          fields: 'id,summary,project(name)',
        },
      });
      dispatch(setIssues(data));
      let names = [];
      data.map((item) => names.push(item.project.name));
      let filteredNames = Array.from(new Set(names));
      dispatch(setProjectNames(filteredNames));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};

export const searchIssues = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await $authHost.get('/issues', {
        params: {
          fields: 'id,summary,project(name)',
          query: `project:${search}`,
        },
      });
      dispatch(setIssues(data));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};

export const getWorkItem = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await $authHost.get(`/workItems/128-${id}`, {
        params: {
          fields: 'id,author(name),duration(presentation),creator(name),updated',
        },
      });

      data.name = data.author.name;
      data.duration = data.duration.presentation;
      dispatch(setNewWorkItem(data));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};
