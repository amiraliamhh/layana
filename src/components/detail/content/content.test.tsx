import * as React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { Content } from './Content'

let container: HTMLElement|null = null
describe('components - detail - content', () => {
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container as HTMLElement)
        ;(container as HTMLElement).remove()
        container = null
    })

    test('title should be inside h1 tag', () => {
        act(() => {
            render(<Content
                title="test"
                overview="overview_test"
                voteAvg={10}
                language="lang_test"
                release="2020"
            />, container)
        })
        expect((container as HTMLElement).querySelector('h1')?.textContent).toBe('test')
    })

    test('overview should be inside a p tag with overview className', () => {
        act(() => {
            render(<Content
                title="test"
                overview="overview_test"
                voteAvg={10}
                language="lang_test"
                release="2020"
            />, container)
        })
        expect((container as HTMLElement).querySelector('p.overview')?.textContent).toBe('overview_test')
    })

    test('voteAvg should be inside li tag with voteAvg className', () => {
        act(() => {
            render(<Content
                title="test"
                overview="overview_test"
                voteAvg={10}
                language="lang_test"
                release="2020"
            />, container)
        })
        expect((container as HTMLElement).querySelector('li.voteAvg span')?.textContent).toBe('10')
    })

    test('language should match the prop', () => {
        act(() => {
            render(<Content
                title="test"
                overview="overview_test"
                voteAvg={10}
                language="lang_test"
                release="2020"
            />, container)
        })
        expect((container as HTMLElement).querySelector('li.lang span')?.textContent).toBe('lang_test')
    })

    test('release should match the prop', () => {
        act(() => {
            render(<Content
                title="test"
                overview="overview_test"
                voteAvg={10}
                language="lang_test"
                release="2020"
            />, container)
        })
        expect((container as HTMLElement).querySelector('li.release span')?.textContent).toBe('2020')
    })
})
