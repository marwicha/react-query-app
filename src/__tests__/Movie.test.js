import { screen, render} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {Movie} from '../features/movies/Movie'

describe("Movies", () => {
  test("it should display a movie by id", async () => {

  const mockId = 1;
  const mockTitle = 'The Pirates';
  const mockShowDetails = jest.fn();

  render(<Movie id={mockId} title={mockTitle} showDetails={mockShowDetails} />);

  expect(screen.getByText(`${mockId}`)).toBeInTheDocument();
  expect(screen.getByText(`${mockTitle}`)).toBeInTheDocument();
    
  await userEvent.click(screen.getByRole('button', {name: 'Show details'}))
  
  expect(mockShowDetails).toHaveBeenCalledWith(mockId);

})
})
