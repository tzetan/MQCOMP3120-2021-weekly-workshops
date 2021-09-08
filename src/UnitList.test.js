/**
 * @jest-environment jsdom
 */

import React from 'React'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import fs from 'fs'
import UnitList from './UnitList'


const sampleData = (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)

    return data.units
}

describe ("List component", () => {
    test('renders content', () => {
        const contents = sampleData('server/units.json')
        const handleDelete = jest.fn()

        const component = render(
            <UnitList units={contents} handleDelete={handleDelete} />
        )

        contents.map(c => expect(component.container).toHaveTextContent(c.title))
    })

    test('snapshot test', () => {
        const contents = sampleData('server/units.json')
        const handleDelete = jest.fn()

        const component = render(
            <UnitList units={contents} handleDelete={handleDelete} />
        )

        expect(component).toMatchSnapshot()
    })


    test('Delete button calls callback function', () => {
        const contents = sampleData('server/units.json')
        const handleDelete = jest.fn()

        const component = render(
            <UnitList units={contents} handleDelete={handleDelete} />
        )

        // test clicking of the delete button 
        const button = component.getAllByText("Delete")[0]
        fireEvent.click(button)

        // test if the button is only clicked once
        expect(handleDelete.mock.calls).toHaveLength(1)
        // the record should be passed as the first argument to the function
        expect(handleDelete.mock.calls[0][0]).toBe(contents[0])
    })
})