import { setIssues, setProjectNames, setNewWorkItem } from '../reducers/issueReducer';
import { fetchAllService, searchService, getWorkItemService } from '../../http/issueApi';

export const fetchIssues = () => {
  return (dispatch) => {
    fetchAllService().then((data) => {
      dispatch(setIssues(data));
      let names = [];
      data.map((item) => names.push(item.project.name));
      let filteredNames = Array.from(new Set(names));
      dispatch(setProjectNames(filteredNames));
    });
  };
};

export const searchIssues = (search) => {
  return (dispatch) => {
    searchService(search).then((data) => {
      dispatch(setIssues(data));
    });
  };
};

export const getWorkItem = (id) => {
  return (dispatch) => {
    getWorkItemService(id).then((data) => {
      if (data) {
        data.name = data.author.name;
        data.duration = data.duration.presentation;
        dispatch(setNewWorkItem(data));
      } else {
        let noUser = { name: 'no such user', duration: 'no time avaliable' };
        dispatch(setNewWorkItem(noUser));
      }
    });
  };
};
