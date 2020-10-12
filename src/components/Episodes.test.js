import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App'
import { fetchShow as mockFetchShow } from '../api/fetchShow'
import { mockData } from '../mockdata'
import userEvent from '@testing-library/user-event'
import Episodes from './Episodes'

jest.mock('../api/fetchShow')
console.log(mockData)


describe('testing app can make api calls', () => {

    test('app renders without errors', async () => {
        render(<Episodes episodes={mockData.data._embedded.episodes}/>)
    })

    test('fetches showdata and renders data', async () => {
        render(<Episodes episodes={mockData.data._embedded.episodes} />)

       expect(screen.queryAllByTestId('episodes')).toHaveLength(3)
    })
})