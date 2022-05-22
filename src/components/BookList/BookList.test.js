// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookList from './BookList';
import {screen, render, waitFor} from "@testing-library/react";



describe("BookList",  () =>{
    test("should render book list", async () =>{
        await render(<BookList />);
        // await waitFor(() => {
        //     const books = screen.getByTestId('book');
        //     expect(books.length).toEqual(4)
        // });
        await screen.findByText('Book List');
        expect(screen.getAllByRole('row').length).toEqual(5);
    });
});

