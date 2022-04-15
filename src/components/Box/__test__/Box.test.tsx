import { render, screen } from '@testing-library/react';
import { Box } from '../Box';

describe('Box Component', () => {
  it('should render the number passed as props', () => {
    render(<Box color="red" value={1} />);
    const pElement = screen.getByText('1');
    expect(pElement).toBeInTheDocument();
  });
});
