/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import '@testing-library/jest-dom/extend-expect'
 import { fireEvent, render } from '@testing-library/react'
 import Form from './Form'


 describe('UnitForm component', () => {
     test('renders form', () => {
         const addUnit = jest.fn()

         const component = render(
            <Form addUnit={addUnit} />
         )

         const form = component.container.querySelector('form')
         expect(form).toHaveTextContent('Unit Title')
     })

     test('calls callback function on submission', done => {
        const addUnit = jest.fn(() => done())

        const component = render(
           <Form addUnit={addUnit} />
        )

        const form = component.container.querySelector('form')
        const codeInput = component.getByLabelText('Unit Code:')
        const titleInput = component.getByLabelText('Unit Title:')
        // const offering = component.getByLabelText('Unit Offerings:')

        fireEvent.change(codeInput, {target: {value: 'CODE'}})
        fireEvent.change(titleInput, {target: {value: 'TITLE'}})
        // fireEvent.change(offering, {target: {value: ['S1']}})
        fireEvent.submit(form)
        
        // const completedForm = {}

        expect(addUnit.mock.calls).toHaveLength(1)
        console.log(addUnit.mock.calls[0][0])
        expect(addUnit.mock.calls[0][0].newUnitCode).toBe('CODE')
        expect(addUnit.mock.calls[0][0].newUnitTitle).toBe('TITLE')
     })
 })