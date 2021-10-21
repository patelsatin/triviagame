import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Question from '../component/Question';
import Header from '../component/Header'


it("Checking that the component should render correctly",()=>{
    const {queryByTestId,queryByPlaceholderText} = render(<Question />);
    
    expect(queryByTestId("question")).toBeTruthy();
    expect(queryByPlaceholderText("Enter your answer here..")).toBeTruthy();
    
});

it("Checking that the Header component should render correctly",()=>{
    const {queryByTestId} = render(<Header />);
    
    expect(queryByTestId("header")).toBeTruthy();
  
});

describe("If answer box is empty",()=>{
        it("getDetails function should not be called",()=>{
            const getDetails=jest.fn();
            const {queryByTestId} = render (<Question  />)
            fireEvent.click(queryByTestId('submit-button'))
            expect(getDetails).not.toHaveBeenCalled();
        })
});

