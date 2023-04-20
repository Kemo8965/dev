<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Calf Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="calfCopyForm" class="form">
  
           <h4> <span class="is-blue"> Cattle Breed</span></h4>
  
           <div class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input type="text" v-model="calfCopy.calfBreed" placeholder="Breed"></b-input>
             </div>
           </div>
  
           <h4> <span class="is-blue"> Calf Date Of Birth</span></h4>
  
           <div  class="columns">
              
             <div  class="column is-three-quarters">
                  
              <b-field label="Select a date">
              <b-input
               
                  id="DOB"
                  placeholder="Click to select..."
                  v-model="calfCopy.calfDateOfBirth"
                  >
              </b-input>
            </b-field>
  
             
             </div>
           </div>
  
           <h4> <b-tooltip label="Father to the calf" type="is-dark"><span class="is-blue"> Sire/Semen Code</span></b-tooltip></h4> 
  
         <div  class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input  type="text" v-model="calfCopy.sire" placeholder="Sire"></b-input>
             </div>
           </div>
  
            <h4><b-tooltip label="Mother to the calf" type="is-dark" position="is-right"> <span class="is-blue"> Dam</span></b-tooltip>  </h4>
  
         <div  class="columns">


          

            <div  class="column is-half">
              
            
             
  
              <h5 class="my-2">Purchased Cattle List</h5>
             <b-autocomplete
             
                  rounded
                  v-model="calfCopy.dam"
                  :data="purchasedEarTagIDs"
                  placeholder="select a dam from your herd"
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
                  <template #empty>No results found</template>
              </b-autocomplete>
  
              
             </div>
          
              
             <div  class="column is-half">
              
            
            
  
              <h5 class="my-2">Raised Cattle List</h5>
             <b-autocomplete
             
                  rounded
                  v-model="calfCopy.raisedDam"
                  :data="raisedEarTagIDs"
                  placeholder="select a dam from your herd"
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
                  <template #empty>No results found</template>
              </b-autocomplete>
  
              
             </div>
           </div>
  
  
  
           <h4> <span class="is-blue"> Calf Sex </span></h4>
  
           <div  class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-field  class="column is-full">
               
             <b-select  v-model="calfCopy.calfSex" placeholder="Select a sex">
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               
             </b-select>
             </b-field>
  
             </div>
           </div>
  
           <h4> <span class="is-blue"> Production Stage </span></h4>
  
           <div  class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input  type="text" v-model="calfCopy.productionStage" placeholder="Production Stage..."></b-input>
             </div>
           </div>
  
           <h4> <span class="is-blue">  Ear Tag ID</span></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="calfCopy.raisedEarTagID" placeholder="Ear Tag ID"></b-input>
             </div>
           </div>
  
  
          <h4> <span class="is-blue">  Ear Tag Color</span></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="calfCopy.earTagColor" placeholder="Ear Tag Color"></b-input>
             </div>
           </div>
  
            <h4> <span class="is-blue"> Color</span></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="calfCopy.calfColor" placeholder="Color"></b-input>
             </div>
           </div>
  
  
           <h4><b-tooltip label="This can be the general status of the calf eg. healthy, alive, still birth etc" type="is-dark" position="is-right"> <span class="is-blue">  Status</span> </b-tooltip></h4>
          <div  class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input  type="text" v-model="calfCopy.calfStatus" placeholder="Status"></b-input>
             </div>
           </div>
  
           <h4><b-tooltip label="This can be remarks about the birth/calf eg. difficulty in birth, weak etc" type="is-dark" position="is-right"> <span class="is-blue"> Remarks</span> </b-tooltip></h4>
          <div class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input   type="text" v-model="calfCopy.calfRemarks" placeholder="Remarks"></b-input>
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
    name: 'CalfModal',
  
     data() {
      return {
        data:[
          computed(()=>this.purchasedEarTagIDs),

          computed(()=>this.calfCopy),
  
          computed(()=>this.raisedEarTagIDs)
        ],
        date: new Date(),
         dates: [],
  
        isFullPage: true,
  
        calfForm:{
          
        calfBreed:null,
        calfDateOfBirth:null,
        sire:null,
        dam:null,
        raisedDam:null,
        calfSex:null,
        productionStage:null,
        calfWeight:null,
        earTagColor:null,
        raisedEarTagID:null,
        calfColor:null,
        calfStatus:null,
        calfRemarks:null
          
      },
       
      }
    },
  
     computed: {

       

                calfBreed:{   
                  get () {
                  return cloneDeep(this.$store.state.calfCopy.calfBreed)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 

              },

                calfDateOfBirth:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.calfDateOfBirth)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },


                sire:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.sire)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },


                dam:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.dam)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },


                raisedDam:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.raisedDam)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },

                
                calfSex:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.calfSex)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },


                calfWeight:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.calfWeight)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },

                productionStage:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.productionStage)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },
                
                raisedEarTagID:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.raisedEarTagID)
                  }
                },
                earTagColor:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.earTagColor)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },


                calfColor:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.calfColor)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },


                calfStatus:{
                  get(){
                    return cloneDeep(this.$store.state.calfCopy.calfStatus)
                  },
                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },
                calfRemarks:{

                  get(){
                    return cloneDeep(this.$store.state.calfCopy.calfRemarks)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_CALF_COPY', value))
                } 
                },




        ...mapState({
            
                calfBreed: state => state.calfCopy.calfBreed,
                calfDateOfBirth: state => state.calfCopy.calfDateOfBirth
            
            
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
        'calfForm',
        'calfForm.calfBreed',
        'calfForm.calfDateOfBirth',
        'calfForm.sire',
        'calfForm.dam',
        'calfForm.raisedDam',
        'calfForm.productionStage',
        'calfForm.calfSex',
        'calfForm.earTagColor',
        'calfForm.raisedEarTagID',
        'calfForm.calfStatus',
        'calfForm.calfRemarks',
        'calfForm.calfColor'
            
        
        
    ]),
  
        ...mapGetters('cattleData', {
         calf: 'selectedCalf',
         calfCopy:'selectedCalfCopy',      
        calfLoading: 'loading',
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

        ...mapActions('cattleData', ['addNewCalf','getAllCalves', 'updateCalfDetails', 'load']),

        updateMessage(){
            this.updateCalfDetails()
        },

        ...mapMutations({
      toggle: 'todos/toggle'
    }),
  
     loading() {
        return this.calfLoading 
      },


      
  
  
      async onSubmit() {
          await this.$buefy.dialog.confirm({
          title: 'Add New Calf',
          message: 'Proceed to update entry?',
          cancelText: 'Cancel',
          confirmText: 'Yes, entries are correct',
          type: 'is-warning is-light',
          hasIcon: true,
          onConfirm: async () => {
            
            await this.updateCalfDetails();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: 'Calf Successfully updated!',
              position: 'is-top',
              type: 'is-info is-light',
            })
             this.clearForm();
            showNotifications();
            this.$parent.close()
          },
        })
     
       
     
  
       
  
            function showNotifications(){
     const notification = new Notification("Calf data added.", {
         body: "Be sure to check your calf data periodically.",
         icon: '@/assets/pug3.jpg'
     }); 
  
          }
  
     
        
      },
  
      close() {
        this.$buefy.toast.open({
          message: 'Calf Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm(){
        this.calfForm = {
        calfBreed:null,
        calfDateOfBirth:null,
        sire:null,
        dam:null,
        calfSex:null,
        calfWeight:null,
        earTagColor:null,
        calfStatus:null
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
  