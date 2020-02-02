import axios from 'axios'
import apiUrl from '../../apiConfig'

    

    export const index = (admin) => {
        return axios({url:apiUrl + "/buses",
        method: "get",
        headers:{
            "Authorization":`Bearer ${admin.token}`
        }
        })
        }
    export const show = (admin,id) => {
            return axios({url:apiUrl + "/buses/" +id,
            method: "get",
            headers:{
                "Authorization":`Bearer ${admin.token}`
            }
            })
        }
        export const getDrivers = (admin) => {
            return axios({url:apiUrl + "/buses/new",
            method: "get",
            headers:{
                "Authorization":`Bearer ${admin.token}`
            }
            })
            }
    export const create = (admin,bus) => {
                return axios({url:apiUrl + "/buses/new",
                method: "post",
                data:{bus:bus},
                headers:{
                    "Authorization":`Bearer ${admin.token}`
                }
                })
        }
    export const update = (admin,bus,id) => {
            return axios({url:apiUrl + "/buses/" + id,
                    method: "patch",
                    data:{bus:bus},
                    headers:{
                        "Authorization":`Bearer ${admin.token}`
                    }
                    })
        } 
    export const updateStudent = (admin,bus,Bus_id,st_id) => {
            return axios({
                    url:apiUrl + "/buses/" + Bus_id +"/students/" + st_id,
                    method: "patch",
                    data:{bus:bus},
                    headers:{
                        "Authorization":`Bearer ${admin.token}`
                    }
                    })
        } 
    export const destroy = (admin,id) => {
            return axios({
            url:apiUrl + "/buses/" + id,
            method: "delete",
            headers:{
                "Authorization":`Bearer ${admin.token}`
            }
            })
    }        
    export const destroyStudents = (admin,Bus_id,st_id) => {
                        return axios({
                        url:apiUrl + "/buses/" + Bus_id +"/students/" + st_id,
                        method: "delete",
                        headers:{
                            "Authorization":`Bearer ${admin.token}`
                        }
                        })
                }