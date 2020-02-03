
import apiUrl from '../../apiConfig';
import axios from 'axios'


export const index = (user) => {
return axios({
    method: "get",
    url:apiUrl + `/students`,

headers:{
    "Authorization":`Bearer ${user.token}`
}
})
}

export const show = (user,studentid) => {
    return axios({url:apiUrl + `/students/` +studentid,
    method: "get",
    headers:{
        "Authorization":`Bearer ${user.token}`
    }
    })
    }

export const create = (user,student) => {
        return axios({url:apiUrl + `/students`,
        method: "post",
        data:{student: student},
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
        })
        }
        // export const update = (guardianid,studentid) => {

    // return axios({url:apiUrl + `/cars/${guardianid}/students` + studentid,
    //         method: "put",
    //         data:{car:car}
    //         })
    //         }        
        

export const destroy = (user,studentid) => {
        return axios({url:apiUrl +`/students/` + studentid,
        method: "delete",
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
        })
        }

