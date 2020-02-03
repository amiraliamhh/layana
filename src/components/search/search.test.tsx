import * as React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'isomorphic-fetch'

import { Search } from './Search'
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

    test('input value should change', async () => {
        const { getByRole } = render(<Search />)
        const input = getByRole('textbox')

        fireEvent.change(input, { target: { value: 'test' } })
        expect((input as any).value).toBe('test')
    })

    test('clicking search button should not call fetch when input is empty', async () => {
        const fetchMock =jest.spyOn(global, 'fetch' as any).mockImplementation(() => Promise.resolve({
            json() {
                return { results: [] }
            }
        }))
        await act(async () => {
            const { container } = render(<Search />)
            const searchBtn = container.querySelector('button.search-btn') as HTMLElement
            await fireEvent.click(searchBtn)
        })

        expect(fetchMock).not.toBeCalled()
    })

    test('clicking search button should call fetch when input is not empty', async () => {
        const fetchMock = jest.spyOn(global, 'fetch' as any).mockImplementation(() => Promise.resolve({
            json() {
                return { results: [] }
            }
        }))
        await act(async () => {
            const { container } = render(<Search />)
            const searchBtn = container.querySelector('button.search-btn') as HTMLElement
            const input = container.querySelector('input') as HTMLElement
            await fireEvent.change(input, { target: { value: 'test' } })
            await fireEvent.click(searchBtn)
        })

        expect(fetchMock).toBeCalled()
    })

    test('clicking search button should call fetch when input is not empty', async () => {
        const result = {
            title: 'test',
            poster_path: '/',
            release_date: '2020-01-01',
            id: 1
        }
        const fetchMock = jest.spyOn(global, 'fetch' as any).mockImplementation(() => Promise.resolve({
            json() {
                return { results: [result] }
            }
        }))
        let con: unknown = null
        await act(async () => {
            con = render(<Search />).container
            const searchBtn = (con as HTMLElement).querySelector('button.search-btn') as HTMLElement
            const input = (con as HTMLElement).querySelector('input') as HTMLElement
            await fireEvent.change(input, { target: { value: 'test' } })
            await fireEvent.click(searchBtn)
        })

        const results = (con as HTMLElement).querySelectorAll('.results .result')

        expect(fetchMock).toBeCalled()
        expect(results.length).toBe(1)
    })

    test('results should be shown in the dom', async () => {
        const result = {
            title: 'test',
            poster_path: '/',
            release_date: '2020-01-01',
            id: 1
        }
        jest.spyOn(global, 'fetch' as any).mockImplementation(() => Promise.resolve({
            json() {
                return { results: [result] }
            }
        }))
        let container: unknown = null
        await act(async () => {
            container = render(<Search />).container
            const searchBtn = (container as HTMLElement).querySelector('button.search-btn') as HTMLElement
            const input = (container as HTMLElement).querySelector('input') as HTMLElement
            await fireEvent.change(input, { target: { value: 'test' } })
            await fireEvent.click(searchBtn)
        })
        const description = (container as HTMLElement).querySelector('.results .result .description h4')
        const imageSrc = (container as HTMLElement)
            .querySelector('.results .result .actions-container img.poster')
            ?.getAttribute('src')
        const year = (container as HTMLElement)
            .querySelector('.results .result .description span.year')
            ?.textContent

        expect(description?.textContent).toBe('test')
        expect(imageSrc).toMatch(/\/$/)
        expect(year).toBe('2020')
    })
})
