import { boilModel } from '../contracts/boilModel'

export function fetchBoil(): boilModel[] {
    const apiResponse = [
        {
            one: 'Boilerz',
            two: 'Bailerz',
        },
        {
            one: 'Beilerz',
            two: 'Builerz',
        },
    ]

    return apiResponse.map((item) => {
        return {
            one: item.one ?? '',
            two: item.two ?? '',
        }
    })
}
