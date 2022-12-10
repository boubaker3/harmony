import { createSlice } from '@reduxjs/toolkit'
export const userTypeReducer=createSlice({name:"userType",initialState:{userType:"client"},
                                            reducers:{
                                                toClient:(state)=>{
                                                    state.userType="client";
                                                },
                                                toChef:(state)=>{
                                                         state.userType="chef";
                                                     
                                                },
                                                toShipper:(state)=>{
                                                    state.userType="shipper";
                                                
                                           },
                                            } 
                                           });
export const{toClient,toChef,toShipper} =userTypeReducer.actions;
export default userTypeReducer.reducer;