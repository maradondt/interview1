/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from 'axios';
import { FC } from 'react';
import { fetchUser } from './2-GetUser-task/api';

type Props = {
  userId: number | null;
};

/**
 * Написать компонент который будет получать пользователя по {{userId}} и выводить основные данные
 *
 * Для запроса использовать fetchUser
 */
export const User: FC<Props> = ({ userId }) => {
  // Write your solution here:
  const user = userId && fetchUser({ id: userId });
  if (!user) return null;

  return (
    <div className="stack column">
      <div>UserId: </div>
      <div>UserName: </div>
    </div>
  );
};
