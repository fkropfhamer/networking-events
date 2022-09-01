import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'events-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/v1/events',
        prepareHeaders(headers) {
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchEvents: builder.query({ query: () => '/' })
        }
    }
});

export const { useFetchEventsQuery } = apiSlice;