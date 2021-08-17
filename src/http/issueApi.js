import { $authHost } from '.';

export const fetchAllService = async () => {
  try {
    const { data } = await $authHost.get('/issues', {
      params: {
        fields: 'id,summary,project(name)',
      },
    });
    return data;
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

export const searchService = async (search) => {
  try {
    const { data } = await $authHost.get('/issues', {
      params: {
        fields: 'id,summary,project(name)',
        query: `project:${search}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};

export const getWorkItemService = async (id) => {
  try {
    let { data } = await $authHost.get(`/workItems/128-${id}`, {
      params: {
        fields: 'id,author(name),duration(presentation),creator(name),updated',
      },
    });
    return data;
  } catch (error) {
    console.log(error.response?.data?.message);
  }
};
