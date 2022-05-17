// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookList from './components/BookList/BookList';
import {screen, render} from "@testing-library/react";

import {rest} from "msw";
import{setupServer} from "msw/node";



describe("BookList", () =>{
    test("should returnatitle", () =>{
        render(<BookList />);

        const todoItem = screen.getByText(/In Search of Lost Time/i);
        console.log(todoItem);
        // const result = await BookList();
        expect(todoItem).toBeInTheDocument("In Search of Lost Time");
    });
});

// const { REACT_APP_MY_API_KEY } = process.env;

// const bookResponse = rest.get(`${REACT_APP_MY_API_KEY}books`,(req,res,ctx)=>{
//     return res(
//         ctx.json([{
//             id: 1,
//             title: "In Search of Lost Time",
//             description: "Swann's Way, the first part of In Search of Lost Time perdu",
//             publicationDate: "2022-04-23T00:00:00+02:00",
//             genre: "Classics",
//             author: 1,
//         }])
//     );
// });
//
//
// const server = new setupServer(bookResponse);
//
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
//
// it("it should have the correct title", async () =>{
//     render(<BookList />);
//     // eslint-disable-next-line testing-library/no-await-sync-query
//     const todoItem = await screen.getByText("In Search of Lost Time");
//     expect(todoItem).toBeInTheDocument()
// });
