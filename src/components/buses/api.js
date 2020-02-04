import axios from 'axios'
import apiUrl from '../../apiConfig'
import {withRouter} from "react-router-dom"

    

    export const index = (admin) => {
        return axios({
        url:apiUrl + "/bus/",
        method: "get",
        headers:{
            "Authorization":`Bearer ${admin.token}`
        }
        })
        }

    export const showDriver = (user) => {
            return axios({
            url:apiUrl + "/buses/driver" ,
            method: "get",
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
            })
        }
        // export const show = (user,busId) => {
        //     return axios({
        //     url:apiUrl + "/buses/" + busId,
        //     method: "get",
        //     headers:{
        //         "Authorization":`Bearer ${user.token}`
        //     }
        //     })
        // }
       export const create = (admin,newBus) => {
                return axios({
                url:apiUrl + "/buses/new",
                method: "post",
                headers:{
                    "Authorization":`Bearer ${admin.token}`
                },
                data:{
                    bus:newBus
                }
                })
                
                
        }
   
            export const update = (admin,updateBus,busId) =>{
                console.log(admin,updateBus,busId)
                return axios({
                    method:"patch", 
                    url: apiUrl + `/buses/${busId}/update`, 
                    headers:{
                        "Authorization":`Bearer ${admin.token}`
                    },
                    data:{
                       bus: updateBus
                    }
                })
            }

    export const updateStudent = (admin,bus,Bus_id) => {
            return axios({
                    url:apiUrl + "/buses/" + Bus_id,
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
    // export const destroyStudents = (admin,Bus_id,st_id) => {
    //                     return axios({
    //                     url:apiUrl + "/buses/" + Bus_id +"/students/" + st_id,
    //                     method: "delete",
    //                     headers:{
    //                         "Authorization":`Bearer ${admin.token}`
    //                     }
    //                     })
    //             }
