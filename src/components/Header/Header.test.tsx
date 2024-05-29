import { render, fireEvent } from '@testing-library/react'
import Header from './index'

describe('Header', () => {
  test('render correct', () => {
    const onToggle = jest.fn()
    const { getByTestId } = render(<Header onClickCartButton={onToggle} />)
    const button = getByTestId('toggle-button')
    fireEvent.click(button)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
