import { $authHost } from '../../http/index';
import { setIssues, setProjectNames } from '../reducers/issueReducer';

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
