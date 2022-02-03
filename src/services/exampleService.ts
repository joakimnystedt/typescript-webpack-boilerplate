import { mergeAges } from '../helpers/exampleHelper'
import { fetchFromApi } from '../repositories/exampleRespository'

export const getPersons = fetchFromApi()
export const getMergedAges = mergeAges(getPersons)
