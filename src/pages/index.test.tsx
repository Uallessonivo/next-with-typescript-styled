import { render, screen } from '@testing-library/react'
import Home from '.'

describe('Render test', () => {
  it('should render Hello World', () => {
    render(<Home />)
    screen.getByText('Hello World')
  })
})
