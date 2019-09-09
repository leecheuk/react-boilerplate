import { ResourceState, ResourceActionTypes } from '../constants/actionTypes'

const initialState: ResourceState = {
    resources: []
}

const resources = (
        state = initialState, 
        action: ResourceActionTypes
    ) : ResourceState => {
    switch (action.type) {
        case 'ADD_RESOURCE':
            return {
                resources: [
                    ...state.resources,
                    action.payload
                ]
            }
        case 'DELETE_RESOURCE':
            return {
                resources: state.resources.filter(r => r.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default resources