import { describe, expect, it, vi } from 'vitest';
import { screen, render, fireEvent} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {Movie} from '../features/movies/Movie'
import { renderWithClient } from './utils';

vi.mock("show-details", () => ({
  mockShowDetails: vi.fn()
}));

describe("Movies", () => {
  it("it should display a movie by id", async () => {

  // ARANGE
  const mockId = 1;
  const mockTitle = 'The Pirates';

 const result = renderWithClient(<Movie id={mockId} title={mockTitle} showDetails={mockShowDetails} />)

 const showDetailsButton =  screen.getByText(/Show details/i);
 const isfired = fireEvent.click(mockShowDetails);

  // ACT

  // EXPECT

  expect(screen.getByText(`${mockId}`)).toBeInTheDocument();
  expect(screen.getByText(`${mockTitle}`)).toBeInTheDocument();
  expect(showDetailsButton).toHaveBeenCalledTimes(1);
    
  await userEvent.click(screen.getByRole('button', {name: 'Show details'}))
  
  //expect(mockShowDetails).toHaveBeenCalledWith(mockId);

})
})
