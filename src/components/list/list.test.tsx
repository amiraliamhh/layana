import * as React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { List } from './List'

let container: HTMLElement|null = null
describe('components - list', () => {
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container as HTMLElement)
        ;(container as HTMLElement).remove()
        container = null
    })

    test('should render title prop', () => {
        act(() => {
            render(<List title="test" />, container)
        })
        expect((container as HTMLElement).querySelector('h2')?.textContent).toBe('test')
    })

    test('should have 3 elements with `item` class when an array of 3 is passed as items prop.', () => {
        const item = {
            title: 'test',
            image: 'image',
            year: '2020'
        }
        const items = [item, item, item]
        act(() => {
            render(<List title="test" items={items} />, container)
        })
        expect((container as HTMLElement).querySelectorAll('.item')?.length).toBe(items.length)
    })

    test('items contents should match the ones passed in prop', () => {
        const item = {
            title: 'test',
            image: 'image',
            year: '2020'
        }
        const items = [item]
        act(() => {
            render(<List title="test" items={items} />, container)
        })
        expect((container as HTMLElement).querySelector('.item img')?.getAttribute('src')).toBe(item.image)
        expect((container as HTMLElement).querySelector('.item h3')?.textContent).toBe(item.title)
        expect((container as HTMLElement).querySelector('.item p')?.textContent).toBe(item.year)
    })
})