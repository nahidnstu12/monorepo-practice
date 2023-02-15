import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface IProps {
  status?: string
  colors?:any
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://todos-api-lws.herokuapp.com/api/',
    baseUrl: 'http://localhost:3333/api',
    credentials: "same-origin",
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (params?:string) => {
        
        return `/todos?${params}`;
      },
      keepUnusedDataFor: 600,
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    editTodo: builder.mutation({
      query: ({ id, data }) => {
        console.log("api--",id, data);
        
        return({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: {status: data},
      })},
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = apiSlice;
