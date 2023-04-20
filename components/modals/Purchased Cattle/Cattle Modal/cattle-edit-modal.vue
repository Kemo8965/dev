<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">cattle Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="cattleForm" class="form">
  
           <h4> <span class="is-blue"> Cattle Breed</span></h4>
  
           <div class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input type="text" v-model="cattle.cattleBreed" placeholder="Breed"></b-input>
             </div>
           </div>
  
           <h4> <span class="is-blue"> cattle Date Of Birth</span></h4>
  
           <div  class="columns">
              
             <div  class="column is-three-quarters">
                  
              <b-field label="Select a date">
              <b-input
               
                  id="DOB"
                  placeholder="Click to select..."
                  v-model="cattle.cattleDateOfBirth"
                  >
              </b-input>
            </b-field>
  
             
             </div>
           </div>
  
           <h4> <b-tooltip label="Father to the cattle" type="is-dark"><span class="is-blue"> Sire/Semen Code</span></b-tooltip></h4> 
  
         <div  class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input  type="text" v-model="cattle.cattleSire" placeholder="Sire"></b-input>
             </div>
           </div>
  
            <h4><b-tooltip label="Mother to the cattle" type="is-dark" position="is-right"> <span class="is-blue"> Dam</span></b-tooltip>  </h4>
  
         <div  class="columns">
              
             <div  class="column is-half">
             <b-input
            
                  rounded
                  v-model="cattle.cattleDam"
                 
                  placeholder="Dam"
                  
                 >
                 
             </b-input>
  
  
              
             </div>
           </div>

           <h4><b-tooltip multilined label="Production stage of the animal ie. Immature heifer, pregnant, lactating" type="is-dark" position="is-right"> <span class="is-blue"> Cattle Production Stage</span></b-tooltip>  </h4>
  
           <div  class="columns">
              
              <div  class="column is-half">
              <b-input
             
                   rounded
                   v-model="cattle.cattleProductionStage"
                  
                   placeholder="Cattle Production Stage"
                   
                  >
                  
              </b-input>
   
   
               
              </div>
            </div>
  
  
  
           <h4> <span class="is-blue"> Cattle Sex </span></h4>
  
           <div  class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-field  class="column is-full">
               
             <b-select  v-model="cattle.cattleSex" placeholder="Select a sex">
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               
             </b-select>
             </b-field>
  
             </div>
           </div>
  
           <h4> <span class="is-blue"> Cattle Weight</span></h4>
  
           <div  class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input  type="text" v-model="cattle.cattleWeight" placeholder="Weight"></b-input>
             </div>
           </div>
  
           <h4> <span class="is-blue">  Ear Tag ID</span></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="cattle.purchasedEarTagID" placeholder="Ear Tag ID"></b-input>
             </div>
           </div>
  
  
          <h4> <span class="is-blue">  Ear Tag Color</span></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="cattle.earTagColor" placeholder="Ear Tag Color"></b-input>
             </div>
           </div>
  
            <h4> <span class="is-blue">Cattle Color</span></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="cattle.cattleColor" placeholder="Color"></b-input>
             </div>
           </div>
  
  
           <h4><b-tooltip label="This can be the general status of the cattle eg. healthy, alive, still birth etc" type="is-dark" position="is-right"> <span class="is-blue">  Status</span> </b-tooltip></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="cattle.cattleStatus" placeholder="Status"></b-input>
             </div>
           </div>
  
           <h4><span class="is-blue"> Remarks</span></h4>
          <div class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input   type="text" v-model="cattle.cattleRemarks" placeholder="Remarks"></b-input>
             </div>
           </div>
  
  
  
  
  
         <b-button  @click="onSubmit" type="is-info">Update </b-button>
  
         </b-form>
  
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="close" />
        <!-- <b-button
          label="Submit"
          type="is-primary"
          icon-left="account"
          @click="onSubmit"
        /> -->
      </footer>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import {_, cloneDeep } from 'lodash'
  import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
import { state } from '~/store'
  export default {
    name: 'cattleModal',
  
     data() {
      return {
        data:[
          computed(()=>this.purchasedEarTagIDs),

          computed(()=>this.cattle),
  
          computed(()=>this.raisedEarTagIDs)
        ],
        date: new Date(),
         dates: [],
  
        isFullPage: true,
  
        cattleForm:{
          
        cattleBreed:null,
        cattleDateOfBirth:null,
        cattleSire:null,
        cattleDam:null,
        cattleSex:null,
        cattleProductionStage:null,
        cattleWeight:null,
        earTagColor:null,
        purchasedEarTagID:null,
        cattleColor:null,
        cattleStatus:null,
        cattleRemarks:null
          
      },
       
      }
    },
  
     computed: {

       

                cattleBreed:{   
                  get () {
                  return cloneDeep(this.$store.state.cattle.cattleBreed)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 

              },

                cattleDateOfBirth:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleDateOfBirth)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },


                cattleSire:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.sire)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },


                cattleDam:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.dam)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },

                
                cattleSex:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleSex)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },

                cattleProductionStage:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleProductionStage)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },


                cattleWeight:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleWeight)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },
                
                earTagID:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.purchasedEarTagID)
                  }
                },
                earTagColor:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.earTagColor)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },


                cattleColor:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleColor)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },


                cattleStatus:{
                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleStatus)
                  },
                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },
                cattleRemarks:{

                  get(){
                    return cloneDeep(this.$store.state.cattle.cattleRemarks)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CATTLE', value))
                } 
                },




        ...mapState({
            
                cattleBreed: state => state.cattle.cattleBreed,
                cattleDateOfBirth: state => state.cattle.cattleDateOfBirth
            
            
        }),
          
        
  
      filteredDataArray() {
                  return this.data.filter((option) => {
                      return option
                          .toString()
                          .toLowerCase()
                          .indexOf(this.name.toLowerCase()) >= 0
                          
                          
                  })
              },
  
        ...mapFields('cattleData', [
        'cattleForm',
        'cattleForm.cattleBreed',
        'cattleForm.cattleDateOfBirth',
        'cattleForm.cattleSire',
        'cattleForm.cattleAge',
        'cattleForm.cattleDam',
        'cattleForm.cattleSex',
        'cattleForm.earTagColor',
        'cattleForm.purchasedEarTagID',
        'cattleForm.cattleStatus',
        'cattleForm.cattleRemarks',
        'cattleForm.cattleColor'
            
        
        
    ]),
  
        ...mapGetters('cattleData', {
         cattle: 'selectedCattle',
         cattleCopy:'selectedcattleCopy',      
        cattleLoading: 'loading',
      }),
  
      ...mapGetters('treatmentData', {
          cattles:'allTreatments',
          purchasedEarTagIDs:'allNewPurchasedFilteredEarTagIDs',
          raisedEarTagIDs:'allNewRaisedFilteredEarTagIDs',
         treatment: 'selectedTreatment',
        treatmentLoading: 'loading',
      }),
      
  
     },
  
     
  
    // },
  
    mounted() {},
  
      created(){ 
        
      },
  
    methods: {

        ...mapActions('cattleData', ['addNewcattle','getAllCattle', 'updateCattleDetails', 'load']),

        updateMessage(){
            this.updateCattleDetails()
        },

    
     loading() {
        return this.cattleLoading 
      },


      
  
  
      async onSubmit() {
          await this.$buefy.dialog.confirm({
          title: 'Add New cattle',
          message: 'Proceed to update entry?',
          cancelText: 'Cancel',
          confirmText: 'Yes, entries are correct',
          type: 'is-warning is-light',
          hasIcon: true,
          onConfirm: async () => {
            
            await this.updateCattleDetails();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: 'cattle Successfully updated!',
              position: 'is-top',
              type: 'is-info is-light',
            })
             this.clearForm();
            showNotifications();
            this.$parent.close()
          },
        })
     
       
     
  
       
  
            function showNotifications(){
     const notification = new Notification("cattle data added.", {
         body: "Be sure to check your cattle data periodically.",
         icon: '@/assets/pug3.jpg'
     }); 
  
          }
  
     
        
      },
  
      close() {
        this.$buefy.toast.open({
          message: 'cattle Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm(){
        this.cattleForm = {
        cattleBreed:null,
        cattleDateOfBirth:null,
        sire:null,
        dam:null,
        cattleSex:null,
        cattleWeight:null,
        earTagColor:null,
        cattleStatus:null
        }
      },
  
       // ---------------------------DAY MONTH YEAR  --------------------------------------------------//
  
    },

  
  }
  </script>
  
  <style scoped>
  .modal-width-auto {
    width: auto;
  }
  
  .yellow{
    color: rgb(193, 108, 28);
  }
  .summary{
    font-size: 1.6rem;
  }
  .summary-content p{
    margin-top: 12px;
    margin-bottom: 12px;
  }
  
  .summary-content {
    padding-bottom: 10px;
  }
  
  .is-blue{
    color: rgb(0, 118, 228);
  font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
    
  }
  
  p{
    font-size: 1.1rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>
  