import apis from "@/http/apis.js";

const resource = 'tasks'

export const allTasks = () => apis.get(resource)
export const createTask = task => apis.post(resource, task)
export const updateTask = (id, task) => apis.put(`${resource}/${id}`, task)
export const removeTask = id => apis.delete(`${resource}/${id}`)
export const completeTask = (id, task) => apis.put(`${resource}/${id}/complete`, task)