import * as React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

let container: HTMLElement|null = null
describe('components - search', () => {
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container as HTMLElement)
        ;(container as HTMLElement).remove()
        container = null
    })

    test('', () => {
        expect(true).toBeTruthy()
    })
})
