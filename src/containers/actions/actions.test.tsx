import * as React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import 'isomorphic-fetch'

import { Actions } from './Actions'

let container: HTMLElement|null = null
describe('containers - acrions', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container as HTMLElement)
    ;(container as HTMLElement).remove()
    container = null
  })

  test('fav text should be *Add To Favourites* by default', async () => {
    const movie = {
      image: 'test_image',
      title: 'test',
      year: 2020
    }
    act(() => {
      render(<Actions movie={movie} id="1" />, container)
    })
    const text = (container as HTMLElement)
    .querySelector('.actions .add-favourite span')
    ?.textContent
    expect(text).toBe('Add To Favourites')
  })

  test('watch later text should be *Add To Watch Later* by default', () => {
    const movie = {
      image: 'test_image',
      title: 'test',
      year: 2020
    }
    act(() => {
      render(<Actions movie={movie} id="1" />, container)
    })
    const text = (container as HTMLElement)
    .querySelector('.actions .add-to-watch-later span')
    ?.textContent
    expect(text).toBe('Add To Watch Later')
  })
})
