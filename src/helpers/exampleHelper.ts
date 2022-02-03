import { exampleModel } from '../contracts/exampleModel'

export function mergeAges(example: exampleModel[]) {
    let age = 0
    example.map((x) => (age = age + x.age))

    return age
}
