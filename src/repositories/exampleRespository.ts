import { exampleModel } from '../contracts/exampleModel'

export function fetchFromApi(): exampleModel[] {
    // mocked api-response
    const apiResponse = [
        {
            name: 'Ryan',
            age: 25,
        },
        {
            name: 'Paul',
            age: 30,
        },
        {
            name: 'Phil',
            age: 40,
        },
        {
            name: 'Eric',
            age: 35,
        },
    ]

    // map response
    return apiResponse.map((item) => {
        return {
            name: item.name ?? '',
            age: item.age ?? 0,
        }
    })
}
