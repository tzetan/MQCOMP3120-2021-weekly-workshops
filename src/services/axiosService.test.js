/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom/extend-expect'
 import axios from 'axios'

 import axiosService from './axiosService'

 jest.mock('axios')

 describe('axiosService', () => {
     test('getAll', done => {
         const thedata = [1, 2, 3]
         axios.get.mockResolvedValue({data: thedata})

         axiosService.getAll().then(data => {
             expect(data).toBe(thedata)
             expect(axios.get.mock.calls).toHaveLength(1)
             expect(axios.get.mock.calls[0][0]).toBe('/api/units')

             done()
         })
     })

     test('create', done => {
         const thedata = [1, 2, 3]
         const theContent = {code: 'CODE', title: 'TITLE'}
         axios.post.mockResolvedValue({data: thedata})

         axiosService.create(theContent).then(data => {
             expect(data).toBe(thedata)
             expect(axios.post.mock.calls).toHaveLength(1)
             expect(axios.post).toBeCalledWith(
                 '/api/units',
                 theContent
             )

            done()
         })
     })
 })