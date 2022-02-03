import { boilModel } from '../contracts/boilModel'
import { fetchBoil } from '../repositories/boilRespository'

export default function boiler(): boilModel[] {
    return fetchBoil()
}
