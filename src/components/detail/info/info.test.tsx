import * as React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { Info } from './Info'

let container: HTMLElement|null = null
describe('components - detail - info', () => {
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container as HTMLElement)
        ;(container as HTMLElement).remove()
        container = null
    })

    test('image src should match the one in prop', () => {
        act(() => {
            render(<Info image="test" />, container)
        })
        expect((container as HTMLElement).querySelector('img')?.getAttribute('src')).toBe('test')
    })

    test('text should be *Is Your Favourite!* when isFavourite is true', () => {
        act(() => {
            render(<Info image="test" isFavourite={true} />, container)
        })
        expect((container as HTMLElement).querySelector('.add-fav span')?.textContent).toBe('Is Your Favourite!')
    })

    test('text should be *Add To Favourites* when isFavourite is false', () => {
        act(() => {
            render(<Info image="test" isFavourite={false} />, container)
        })
        expect((container as HTMLElement).querySelector('.add-fav span')?.textContent).toBe('Add To Favourites')
    })

    test('text should be *Is In Your Watch Later List!* when isInWatchLater is true', () => {
        act(() => {
            render(<Info image="test" isInWatchLater={true} />, container)
        })
        expect((container as HTMLElement).querySelector('.add-watch-later span')?.textContent).toBe('Is In Your Watch Later List!')
    })

    test('text should be *Add To Watch Later* when isInWatchLater is false', () => {
        act(() => {
            render(<Info image="test" isInWatchLater={false} />, container)
        })
        expect((container as HTMLElement).querySelector('.add-watch-later span')?.textContent).toBe('Add To Watch Later')
    })
})
