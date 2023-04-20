import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_PURCHASED_CATTLE_TREATMENT,
         SET_ALL_PURCHASED_CATTLE_TREATMENTS, 
         GET_ALL_PURCHASED_CATTLE_TREATMENTS,
         SET_SELECTED_PURCHASED_CATTLE_TREATMENT,

         ADD_RAISED_CATTLE_TREATMENT,
         SET_ALL_RAISED_CATTLE_TREATMENTS, 
         GET_ALL_RAISED_CATTLE_TREATMENTS,
         SET_SELECTED_RAISED_CATTLE_TREATMENT,

        ADD_NEW_PURCHASED_FILTERED_EAR_TAG_IDS,
        ADD_NEW_RAISED_FILTERED_EAR_TAG_IDS,
    
        GET_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS,
        GET_ALL_NEW_RAISED_FILTERED_EAR_TAG_IDS,
        REMOVE_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS,
        REMOVE_ALL_NEW_RAISED_FILTERED_EAR_TAG_IDS,
        SET_LOADING,
        
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allPurchasedCattleTreatments:[],
    allRaisedCattleTreatments:[],

    allFilteredEarTagIDs:[],
    allNewPurchasedFilteredEarTagIDs:[],
    allNewRaisedFilteredEarTagIDs:[],

    selectedPurchasedCattleTreatment: null,
    selectedRaisedCattleTreatment: null,

    purchasedCattleTreatmentForm: {
      
        purchasedEarTagID:null,
        symptomsDisplayed:null,
        diagnosis:null,
        drugsAdministered:null,
        treatmentRemarks:null,
        withdrawalPeriod:null ,
        createdBy:null        
   
 },

 raisedCattleTreatmentForm: {
      
    raisedEarTagID:null,
    symptomsDisplayed:null,
    diagnosis:null,
    drugsAdministered:null,
    treatmentRemarks:null,
    withdrawalPeriod:null ,
    createdBy:null        

},

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedPurchasedCattleTreatment(state) {
        return state.selectedPurchasedCattleTreatment
      },

    allPurchasedCattleTreatments(state){
        return state.allPurchasedCattleTreatments
    },

    selectedRaisedCattleTreatment(state) {
        return state.selectedRaisedCattleTreatment
      },

    allRaisedCattleTreatments(state){
        return state.allRaisedCattleTreatments
    },

    // allFilteredEarTagIDs(state){
    //     return state.allFilteredEarTagIDs
    // },
    allNewPurchasedFilteredEarTagIDs(state){
        return state.allNewPurchasedFilteredEarTagIDs
    },

    allNewRaisedFilteredEarTagIDs(state){
        return state.allNewRaisedFilteredEarTagIDs
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING TreatmentS
    [ADD_PURCHASED_CATTLE_TREATMENT](state, newPurchasedCattleTreatment){
        state.allPurchasedCattleTreatments.push(newPurchasedCattleTreatment)
    },

   
    [SET_SELECTED_PURCHASED_CATTLE_TREATMENT](state, newPurchasedCattleTreatment) {
        state.selectedPurchasedCattleTreatment = newPurchasedCattleTreatment
      },
    [SET_ALL_PURCHASED_CATTLE_TREATMENTS](state, payload) {
        state.allPurchasedCattleTreatments = payload
    },
    [GET_ALL_PURCHASED_CATTLE_TREATMENTS](state, payload){
        state.allPurchasedCattleTreatments = payload
    },

    [ADD_RAISED_CATTLE_TREATMENT](state, newRaisedCattleTreatment){
        state.allRaisedCattleTreatments.push(newRaisedCattleTreatment)
    },

   
    [SET_SELECTED_RAISED_CATTLE_TREATMENT](state, newRaisedCattleTreatment) {
        state.selectedRaisedCattleTreatment = newRaisedCattleTreatment
      },
    [SET_ALL_RAISED_CATTLE_TREATMENTS](state, payload) {
        state.allRaisedCattleTreatments = payload
    },
    [GET_ALL_RAISED_CATTLE_TREATMENTS](state, payload){
        state.allRaisedCattleTreatments = payload
    },



    [ADD_NEW_PURCHASED_FILTERED_EAR_TAG_IDS](state, payload){
        state.allNewPurchasedFilteredEarTagIDs.push(payload)
    },

    [GET_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS](state, payload){
        state.allNewPurchasedFilteredEarTagIDs = payload
    },

    [REMOVE_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS](state, payload){
        state.allNewPurchasedFilteredEarTagIDs = payload
    },


    [ADD_NEW_RAISED_FILTERED_EAR_TAG_IDS](state, payload){
        state.allNewRaisedFilteredEarTagIDs.push(payload)
    },

    [GET_ALL_NEW_RAISED_FILTERED_EAR_TAG_IDS](state, payload){
        state.allNewRaisedFilteredEarTagIDs = payload
    },

    [REMOVE_ALL_NEW_RAISED_FILTERED_EAR_TAG_IDS](state, payload){
        state.allNewRaisedFilteredEarTagIDs = payload
    },


    // [GET_ALL_FILTERED_EAR_TAG_IDS](state, payload){
    //     state.allFilteredEarTagIDs = payload
    // },

    
   

  
  

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/treatments/AllTreatments`)

           if (newLoad.data.createdBy === this.$auth.user.email){

           // console.log(newLoad);
          }

          const {data: allCattle} = await api.get(`/cattle/allCattle`)

          const filteredCattle = allCattle.data.filter( c => 
          c.createdBy === this.$auth.user.email
          );

         // console.log(filteredCattle[0].earTagID);
          let filteredEarTagIDs = [];

          for(let i =0; i < filteredCattle.length; i++){
          // console.log(filteredCattle[i].earTagID);
           filteredEarTagIDs += filteredCattle[i].earTagID
          }

        // console.log(filteredEarTagIDs);

           // await dispatch('getInactivePolicies')
       // console.log(newLoad.data)
             commit(SET_ALL_TREATMENTS, newLoad.data);
            
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL TreatmentS
    async getAllPurchasedCattleTreatments({ state, commit,_,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)
           

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allTreatments} = await api.get(`/treatments/purchased/allTreatments`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
            const {data: allCattle} = await api.get(`/cattle/allCattle`)

            const {data: allCalves} = await api.get(`/cattle/allCalves`)

           // console.log(allCalves)

            const filteredCattle = allCattle.data.filter( c => 
            c.createdBy === this.$auth.user.email && c.cattleStatus !== 'Mortality'
            );

           // console.log(filteredCattle[0].earTagID);
          
          
            let filteredEarTagIDs = ["Your Purchased Cattle List:"];
 
            for(let i =0; i < filteredCattle.length; i++){

            

            let purchasedEarTagIDs =  rootGetters['treatmentData/allNewPurchasedFilteredEarTagIDs']
          //  console.log(purchasedEarTagIDs);
            
            commit(REMOVE_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
         

          //  console.log(filteredCattle[i].purchasedEarTagID); 

            
            commit(ADD_NEW_PURCHASED_FILTERED_EAR_TAG_IDS, filteredCattle[i].purchasedEarTagID);

           // filteredEarTagIDs += filteredCattle[i].earTagID


            }
           
 
          console.log(filteredEarTagIDs);



          //---------------------------RAISED CATTLE LIST-----------------------------------//

          const filteredCalves = allCalves.data.filter( rc => 
            rc.createdBy === this.$auth.user.email && rc.calfStatus !== 'Mortality'
            );

          //  console.log(filteredCalves);

        //   // console.log(filteredCalves[0].earTagID);
          
          
            let filteredRaisedEarTagIDs = ["Your Raised Cattle List:"];
 
            for(let i =0; i < filteredCalves.length; i++){

            

                let raisedEarTagIDs =  rootGetters['treatmentData/allNewRaisedFilteredEarTagIDs']
              //  console.log(raisedEarTagIDs);
                
                commit(REMOVE_ALL_NEW_RAISED_FILTERED_EAR_TAG_IDS, filteredRaisedEarTagIDs);
             
    
              //  console.log(filteredCalves[i].raisedEarTagID); 
    
                
                commit(ADD_NEW_RAISED_FILTERED_EAR_TAG_IDS, filteredCalves[i].raisedEarTagID);
    
               // filteredEarTagIDs += filteredCattle[i].earTagID
    
    
                }
               
     
              console.log(filteredRaisedEarTagIDs);
    


        //   // console.log(filteredEarTags);
           

          // console.log(allTreatments.data);
          // console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredTreatments = allTreatments.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );

        
 


         // console.log(filteredTreatments);
       




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PURCHASED_CATTLE_TREATMENTS, filteredTreatments);
       //    commit(ADD_NEW_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
 
          // commit(GET_ALL_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
         // commit(GET_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getAllRaisedCattleTreatments({ state, commit,_,rootGetters }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)
           

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allTreatments} = await api.get(`/treatments/raised/allTreatments`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
            const {data: allCattle} = await api.get(`/cattle/allCattle`)

            const {data: allCalves} = await api.get(`/cattle/allCalves`)

           // console.log(allCalves)

            const filteredCattle = allCattle.data.filter( c => 
            c.createdBy === this.$auth.user.email && c.cattleStatus !== 'Mortality'
            );

           // console.log(filteredCattle[0].earTagID);
          
          
            let filteredEarTagIDs = ["Your Purchased Cattle List:"];
 
            for(let i =0; i < filteredCattle.length; i++){

            

            let purchasedEarTagIDs =  rootGetters['treatmentData/allNewPurchasedFilteredEarTagIDs']
          //  console.log(purchasedEarTagIDs);
            
            commit(REMOVE_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
         

          //  console.log(filteredCattle[i].purchasedEarTagID); 

            
            commit(ADD_NEW_PURCHASED_FILTERED_EAR_TAG_IDS, filteredCattle[i].purchasedEarTagID);

           // filteredEarTagIDs += filteredCattle[i].earTagID


            }
           
 
          console.log(filteredEarTagIDs);



          //---------------------------RAISED CATTLE LIST-----------------------------------//

          const filteredCalves = allCalves.data.filter( rc => 
            rc.createdBy === this.$auth.user.email && rc.calfStatus !== 'Mortality'
            );

          //  console.log(filteredCalves);

        //   // console.log(filteredCalves[0].earTagID);
          
          
            let filteredRaisedEarTagIDs = ["Your Raised Cattle List:"];
 
            for(let i =0; i < filteredCalves.length; i++){

            

                let raisedEarTagIDs =  rootGetters['treatmentData/allNewRaisedFilteredEarTagIDs']
              //  console.log(raisedEarTagIDs);
                
                commit(REMOVE_ALL_NEW_RAISED_FILTERED_EAR_TAG_IDS, filteredRaisedEarTagIDs);
             
    
              //  console.log(filteredCalves[i].raisedEarTagID); 
    
                
                commit(ADD_NEW_RAISED_FILTERED_EAR_TAG_IDS, filteredCalves[i].raisedEarTagID);
    
               // filteredEarTagIDs += filteredCattle[i].earTagID
    
    
                }
               
     
              console.log(filteredRaisedEarTagIDs);
    


        //   // console.log(filteredEarTags);
           

          // console.log(allTreatments.data);
          // console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredRaisedTreatments = allTreatments.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );

        
 


         // console.log(filteredTreatments);
       




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_RAISED_CATTLE_TREATMENTS, filteredRaisedTreatments);
       //    commit(ADD_NEW_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
 
          // commit(GET_ALL_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
         // commit(GET_ALL_NEW_PURCHASED_FILTERED_EAR_TAG_IDS, filteredEarTagIDs);
       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },


    //ADD NEW Treatment TO ALL TreatmentS
    async addNewPurchasedCattleTreatment({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newPurchasedCattleTreatment = cloneDeep(state.purchasedCattleTreatmentForm);

            newPurchasedCattleTreatment.createdBy = this.$auth.user.email;
            
          // console.log(newTreatment);

          



            const response = await api.post(`/treatments/purchased/addNewTreatment`, newPurchasedCattleTreatment);

            

           // console.log(response.data);

           // console.log(response.data);

            commit(ADD_PURCHASED_CATTLE_TREATMENT, response.data);
           
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    async addNewRaisedCattleTreatment({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newRaisedCattleTreatment = cloneDeep(state.raisedCattleTreatmentForm);

            newRaisedCattleTreatment.createdBy = this.$auth.user.email;
            
          // console.log(newTreatment);

          



            const response2 = await api.post(`/treatments/raised/addNewTreatment`, newRaisedCattleTreatment);

            

           // console.log(response.data);

           // console.log(response.data);

            commit(ADD_RAISED_CATTLE_TREATMENT, response2.data);
           
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },


    

    selectPurchasedCattleTreatment({ commit }, newTreatment) {
        try {
            commit(SET_SELECTED_PURCHASED_CATTLE_TREATMENT, newTreatment)
           // console.log(newTreatment._id)
        } catch (error) {
           // console.log('Error')
        }
        
      },

      selectRaisedCattleTreatment({ commit }, newTreatment) {
        try {
            commit(SET_SELECTED_RAISED_CATTLE_TREATMENT, newTreatment)
           // console.log(newTreatment._id)
        } catch (error) {
           // console.log('Error')
        }
        
      },

     

}


  
    
