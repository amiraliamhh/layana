import * as React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { List } from './List'

let container: any = null
describe('components - list', () => {
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    test('renders without error', () => {
        act(() => {
            render(<List title="test" />, container)
        })
        expect(container).toBeTruthy()
    })
})