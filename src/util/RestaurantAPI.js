import { end } from "worker-farm"

const API = 'http://ginraidee.herokuapp.com'

export function getRestaurants(next) {
    console.log('NEXT >>>>' + next)
    let endPoint = API 
    if (next) {
        endPoint = endPoint + next
    } else {
        endPoint = endPoint + '/v1/restaurants?address=bangsue'
    }
    return fetch(endPoint).then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}