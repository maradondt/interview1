import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const mock = new AxiosMockAdapter(axios);

export type UserEntity = {
  name: string;
  id: number;
};

export const users: Record<number, UserEntity> = {
  1: { name: 'John Smith', id: 1 },
  2: { name: 'Signal Signalov', id: 2 },
  3: { name: 'Steve Voz', id: 3 },
};

mock
  .onGet('/users', {
    params: {
      asymmetricMatch: (params: { id: number }) => {
        if (!params?.id) return false;
        return !!users[params.id];
      },
    },
  })
  .reply((config) => {
    const id = config.params?.id as number;
    if (!id) return [404];
    return new Promise((res) => {
      setTimeout(() => {
        res([200, users[id]]);
      }, id * 500);
    });
  })
  .onAny()
  .reply(500);

export const fetchUser = ({ id, ...conf }: { id: number } & AxiosRequestConfig) => {
  return axios.get<UserEntity>('/users', { params: { id }, ...conf }).then((r) => {
    return r.data;
  });
};
