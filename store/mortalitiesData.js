import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { SET_LOADING,
         ADD_PURCHASED_CATTLE_MORTALITY,  
         SET_ALL_PURCHASED_CATTLE_MORTALITIES, 
         GET_ALL_PURCHASED_CATTLE_MORTALITIES,    
         SET_SELECTED_PURCHASED_CATTLE_MORTALITY, 


         ADD_RAISED_CATTLE_MORTALITY,
         SET_ALL_RAISED_CATTLE_MORTALITIES, 
         GET_ALL_RAISED_CATTLE_MORTALITIES,  
         SET_SELECTED_RAISED_CATTLE_MORTALITY, 
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allPurchasedCattleMortalities:[],
    allRaisedCattleMortalities:[],
   
    selectedPurchasedCattleMortality: null,
    selectedRaisedCattleMortality: null,

    purchasedCattleMortalitiesForm: {
        purchasedEarTagID:null,
        causeOfDeath:null,
        dateOfDeath:null,
        mortalityRemarks:null,
        createdBy:null        
   
    },

    raisedCattleMortalitiesForm: {
        raisedEarTagID:null,
        causeOfDeath:null,
        dateOfDeath:null,
        mortalityRemarks:null,
        createdBy:null        

    },


})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedPurchasedCattleMortality(state) {
        return state.selectedPurchasedCattleMortality
      },

    selectedRaisedCattleMortality(state) {
    return state.selectedRaisedCattleMortality
    },

    allPurchasedCattleMortalities(state){
        return state.allPurchasedCattleMortalities
    },

    allRaisedCattleMortalities(state){
        return state.allRaisedCattleMortalities
    },
    
  

}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING MortalitiesS
    [ADD_PURCHASED_CATTLE_MORTALITY](state, newPurchasedCattleMortality){
        state.allPurchasedCattleMortalities.push(newPurchasedCattleMortality)
    },


    [SET_SELECTED_PURCHASED_CATTLE_MORTALITY](state, newPurchasedCattleMortality) {
        state.selectedPurchasedCattleMortality = newPurchasedCattleMortality
      },
    [SET_ALL_PURCHASED_CATTLE_MORTALITIES](state, payload) {
        state.allPurchasedCattleMortalities = payload
    },
    [GET_ALL_PURCHASED_CATTLE_MORTALITIES](state, payload){
        state.allPurchasedCattleMortalities = payload
    },

    //--------------------------RAISED CATTLE ----------------------------------------//

    [ADD_RAISED_CATTLE_MORTALITY](state, newRaisedCattleMortality){
        state.allRaisedCattleMortalities.push(newRaisedCattleMortality)
    },


    [SET_SELECTED_RAISED_CATTLE_MORTALITY](state, newRaisedCattleMortality) {
        state.selectedRaisedCattleMortality = newRaisedCattleMortality
      },
    [SET_ALL_RAISED_CATTLE_MORTALITIES](state, payload) {
        state.allRaisedCattleMortalities = payload
    },
    [GET_ALL_RAISED_CATTLE_MORTALITIES](state, payload){
        state.allRaisedCattleMortalities = payload
    },



}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/mortalities/allMortalities`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_MORTALITIES, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL Mortalities
    async getAllPurchasedCattleMortalities({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allMortalities} = await api.get(`/mortalities/purchased/allMortalities`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allMortalities.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredPurchasedCattleMortalities = allMortalities.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredPurchasedCattleMortalities);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PURCHASED_CATTLE_MORTALITIES, filteredPurchasedCattleMortalities);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getAllRaisedCattleMortalities({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allMortalities} = await api.get(`/mortalities/raised/allMortalities`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allMortalities.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredRaisedCattleMortalities = allMortalities.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredRaisedCattleMortalities);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_RAISED_CATTLE_MORTALITIES, filteredRaisedCattleMortalities);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },




    //ADD NEW Mortalities TO ALL MortalitiesS
    async addNewPurchasedCattleMortality({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newPurchasedCattleMortality = cloneDeep(state.purchasedCattleMortalitiesForm);

           newPurchasedCattleMortality.createdBy = this.$auth.user.email;
           newPurchasedCattleMortality.purchasedEarTagID =newPurchasedCattleMortality.purchasedEarTagID;
              
           newPurchasedCattleMortality.dateOfDeath =newPurchasedCattleMortality.dateOfDeath.toLocaleDateString()
           
           console.log(newPurchasedCattleMortality);

           
            const response = await api.post(`/mortalities/purchased/addNewPurchasedCattleMortality`, newPurchasedCattleMortality);

            

            console.log(response.data);

            commit(ADD_PURCHASED_CATTLE_MORTALITY, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    async addNewRaisedCattleMortality({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newRaisedCattleMortality = cloneDeep(state.raisedCattleMortalitiesForm);

            newRaisedCattleMortality.createdBy = this.$auth.user.email;

            newRaisedCattleMortality.raisedEarTagID = newRaisedCattleMortality.raisedEarTagID;
           
            newRaisedCattleMortality.dateOfDeath = newRaisedCattleMortality.dateOfDeath.toLocaleDateString()
           
           console.log(newRaisedCattleMortality);

           
            const response = await api.post(`/mortalities/raised/addNewRaisedCattleMortality`, newRaisedCattleMortality);

            

            console.log(response.data);

            commit(ADD_RAISED_CATTLE_MORTALITY, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectPurchasedCattleMortality({ commit }, newPurchasedCattleMortality) {
        try {
            commit(SET_SELECTED_PURCHASED_CATTLE_MORTALITY, newPurchasedCattleMortality)
            console.log(newPurchasedCattleMortality._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

      selectRaisedCattleMortality({ commit }, newRaisedCattleMortality) {
        try {
            commit(SET_SELECTED_RAISED_CATTLE_MORTALITY, newRaisedCattleMortality)
            console.log(newRaisedCattleMortality._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}


  
    
