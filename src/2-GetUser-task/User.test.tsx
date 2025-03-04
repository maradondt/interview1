// // import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { User } from './solution';
// import { fetchUser, users } from './api';

// // jest.mock('../api');

// // const mockFetchUser = fetchUser as jest.MockedFunction<typeof fetchUser>;

// describe('User Component', () => {
//   it('should render user data when userId is provided', async () => {
//     const id = 1;
//     const user = users[id];
//     // mockFetchUser.mockResolvedValueOnce(user);

//     render(<User userId={id} />);

//     expect(screen.getByTestId(`loader`)).toBeInTheDocument();
//     await waitFor(() => expect(screen.getByText(`UserId: 1`)).toBeInTheDocument());
//   });

//   it('should render nothing when userId is null', () => {
//     render(<User userId={null} />);
//     expect(screen.queryByText(/UserId:/)).toBeNull();
//   });

//   it('should render nothing when user is not found', async () => {
//     // mockFetchUser.mockResolvedValueOnce(null);

//     render(<User userId={999} />);

//     await waitFor(() => expect(screen.queryByText(/UserId:/)).toBeNull());
//   });
// });
