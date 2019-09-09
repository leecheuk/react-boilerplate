import { addResource } from "../actions";

export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
export const ADD_RESOURCE = "ADD_RESOURCE";
export const DELETE_RESOURCE = "DELETE_RESOURCE";

export interface Resource {
    id: string
    data: string
}

export interface ResourceState {
    resources: Resource[]
}

export interface Notification {
    text: string | null
    isError: boolean
}

export interface NotificationState {
    text: string | null
    isError: boolean
}

export interface SetNotificationAction {
    type: typeof SET_NOTIFICATION
    notification: Notification
}

export interface ClearNotificationAction {
    type: typeof CLEAR_NOTIFICATION
}

export interface AddResourceAction {
    type: typeof ADD_RESOURCE
    payload: Resource
}

export interface DeleteResourceAction {
    type: typeof DELETE_RESOURCE
    payload: Resource
}

export interface StoreState {
    notification: Notification
    resources: Resource[]
}

export type NotificationActionTypes = SetNotificationAction | ClearNotificationAction
export type ResourceActionTypes = AddResourceAction | DeleteResourceAction
