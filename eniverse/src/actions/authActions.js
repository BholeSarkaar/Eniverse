import { constants } from "./constants"
import axiosInstance from "../helpers/axios";

export const login=(user)=>{
    console.log(user);
    return async (dispatch)=>{
        const res=await axiosInstance.post('/admin/signin',{
            ...user
        });
        if(res.status===200){
            const {token,user}=res.data;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user));
            dispatch({
                type:constants.LOGIN_SUCCESS,
                payload:{token,user}
            });
        }else{
            if(res.status===400){
                dispatch({
                    type:constants.LOGIN_FAILURE,
                    payload:{
                        error:res.data.error
                    }
                })
            }
        }
    }
}

export const isUserLoggedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem("token");
        if(token){
            const user=JSON.parse(localStorage.getItem("user"));
            dispatch({
                type:constants.LOGIN_SUCCESS,
                payload:{token,user}
            });
        }else{
            dispatch({
                    type:constants.LOGIN_FAILURE,
                    payload:{message:"User needs to login"}
            })
        }
    }
}

export const signout=()=>{
    return async dispatch=>{
        localStorage.clear();
        dispatch({
            type:constants.LOGOUT_REQUEST
        })
}
}