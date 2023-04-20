import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_PURCHASED_CATTLE_REPRODUCTIVE_RECORD,
         SET_ALL_PURCHASED_CATTLE_REPRODUCTIVE_RECORDS, 
         GET_ALL_PURCHASED_CATTLE_REPRODUCTIVE_RECORDS,  
         SET_LOADING,
         SET_SELECTED_PURCHASED_CATTLE_REPRODUCTIVE_RECORD ,

         ADD_RAISED_CATTLE_REPRODUCTIVE_RECORD,
         SET_ALL_RAISED_CATTLE_REPRODUCTIVE_RECORDS, 
         GET_ALL_RAISED_CATTLE_REPRODUCTIVE_RECORDS,  
         SET_SELECTED_RAISED_CATTLE_REPRODUCTIVE_RECORD ,
   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allPurchasedCattleReproductives:[],
    allRaisedCattleReproductives:[],
    selectedPurchasedCattleReproductive: null,
    selectedRaisedCattleReproductive: null,

    purchasedCattleReproductiveForm: {
      
        purchasedEarTagID:null,
        ageAtFirstCalving:null,
        numberOfServicesPerInsemination:null,         
        calvingInterval:null,
        calvingEaseIndex:null,
        abortionsPerLifecycle:null,
        createdBy:null
},

raisedCattleReproductiveForm: {
      
    raisedEarTagID:null,
    ageAtFirstCalving:null,
    numberOfServicesPerInsemination:null,         
    calvingInterval:null,
    calvingEaseIndex:null,
    abortionsPerLifecycle:null,
    createdBy:null
},

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedPurchasedCattleReproductive(state) {
        return state.selectedPurchasedCattleReproductive
      },

    allPurchasedCattleReproductives(state){
        return state.allPurchasedCattleReproductives
    },

    selectedRaisedCattleReproductive(state) {
        return state.selectedRaisedCattleReproductive
      },

    allRaisedCattleReproductives(state){
        return state.allRaisedCattleReproductives
    },
    


}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING ReproductiveS
    [ADD_PURCHASED_CATTLE_REPRODUCTIVE_RECORD](state, newPurchasedCattleReproductive){
        state.allPurchasedCattleReproductives.push(newPurchasedCattleReproductive)
    },

  
    [SET_SELECTED_PURCHASED_CATTLE_REPRODUCTIVE_RECORD](state, newPurchasedCattleMortality) {
        state.selectedPurchasedCattleReproductive = newPurchasedCattleMortality
      },
    [SET_ALL_PURCHASED_CATTLE_REPRODUCTIVE_RECORDS](state, payload) {
        state.allPurchasedCattleReproductives = payload
    },
    [GET_ALL_PURCHASED_CATTLE_REPRODUCTIVE_RECORDS](state, payload){
        state.allPurchasedCattleReproductives = payload
    },


    [ADD_RAISED_CATTLE_REPRODUCTIVE_RECORD](state, newRaisedCattleReproductive){
        state.allRaisedCattleReproductives.push(newRaisedCattleReproductive)
    },

  
    [SET_SELECTED_RAISED_CATTLE_REPRODUCTIVE_RECORD](state, newRaisedCattleMortality) {
        state.selectedRaisedCattleReproductive = newRaisedCattleMortality
      },
    [SET_ALL_RAISED_CATTLE_REPRODUCTIVE_RECORDS](state, payload) {
        state.allRaisedCattleReproductives = payload
    },
    [GET_ALL_RAISED_CATTLE_REPRODUCTIVE_RECORDS](state, payload){
        state.allRaisedCattleReproductives = payload
    },


}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/reproductiveRecords/allReproductiveRecords`)

           if (newLoad.data.createdBy === this.$auth.user.email){

            console.log(newLoad);
          }

           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_REPRODUCTIVE_RECORDS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL ReproductiveS
    async getAllPurchasedCattleReproductives({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allReproductives} = await api.get(`/reproductiveRecords/purchased/allReproductiveRecords`)

           const { data:fetchUsers } = await api.get(`/auth/allUsers`)
            
          
           

           console.log(allReproductives.data);
           console.log(fetchUsers.data)
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredPurchasedReproductives = allReproductives.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredPurchasedReproductives);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PURCHASED_CATTLE_REPRODUCTIVE_RECORDS, filteredPurchasedReproductives);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    async getAllRaisedCattleReproductives({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allReproductives} = await api.get(`/reproductiveRecords/raised/allReproductiveRecords`)

           
            
          
           

           console.log(allReproductives.data);
           
         

           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
           const filteredRaisedReproductives = allReproductives.data.filter( t => 
           t.createdBy === this.$auth.user.email
          );


          console.log(filteredRaisedReproductives);




           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_RAISED_CATTLE_REPRODUCTIVE_RECORDS, filteredRaisedReproductives);

       
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW Reproductive TO ALL ReproductiveS
   
    async addNewPurchasedCattleReproductive({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newReproductive = cloneDeep(state.purchasedCattleReproductiveForm);
           newReproductive.numberOfServicesPerInsemination = parseInt(newReproductive.numberOfServicesPerInsemination)
           newReproductive.abortionsPerLifecycle = parseInt(newReproductive.abortionsPerLifecycle)

            newReproductive.createdBy = this.$auth.user.email;
           
           console.log(newReproductive);

           
            const response = await api.post(`/reproductiveRecords/purchased/addNewReproductiveRecord`, newReproductive);

            console.log(response.data);

            commit(ADD_PURCHASED_CATTLE_REPRODUCTIVE_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },
   
    async addNewRaisedCattleReproductive({ state, commit}){
        try {
            commit(SET_LOADING, true);


            const newReproductive = cloneDeep(state.raisedCattleReproductiveForm);
           newReproductive.numberOfServicesPerInsemination = parseInt(newReproductive.numberOfServicesPerInsemination)
           newReproductive.abortionsPerLifecycle = parseInt(newReproductive.abortionsPerLifecycle)

            newReproductive.createdBy = this.$auth.user.email;
           
           console.log(newReproductive);

           
            const response = await api.post(`/reproductiveRecords/raised/addNewReproductiveRecord`, newReproductive);

            console.log(response.data);

            commit(ADD_RAISED_CATTLE_REPRODUCTIVE_RECORD, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

    selectPurchasedCattleReproductive({ commit }, newPurchasedCattleReproductive) {
        try {
            commit(SET_SELECTED_PURCHASED_CATTLE_REPRODUCTIVE_RECORD, newPurchasedCattleReproductive)
            console.log(newPurchasedCattleReproductive._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

      selectRaisedCattleReproductive({ commit }, newRaisedCattleReproductive) {
        try {
            commit(SET_SELECTED_RAISED_CATTLE_REPRODUCTIVE_RECORD, newRaisedCattleReproductive)
            console.log(newRaisedCattleReproductive._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}


  
    
