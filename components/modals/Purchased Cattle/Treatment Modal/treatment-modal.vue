<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Treatment Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="purchasedTreatmentForm" class="form">

         <h4> <span class="is-blue"> Ear Tag ID</span></h4>

         <div class="columns">
                    
                    <div  class="column is-three-quarters">
                      <h5 class="my-2">Purchased Cattle List</h5>    
                  <b-autocomplete
                  rounded
                  v-model="purchasedEarTagID"
                  :data="purchasedEarTagIDs"
                  placeholder="select a cow from your herd"
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
  
                  <template #empty>No results found</template>
              </b-autocomplete>
  
             
                    </div>
                  </div>
  
            <h4> <span class="is-blue"> Symptoms Displayed</span></h4>

         <div class="columns">
           
           <div  class="column is-three-quarters">
            
           <b-input type="text" :disabled="!purchasedEarTagID" v-model="symptomsDisplayed" placeholder="Symptoms Displayed"></b-input>
           </div>


         </div>

        <h4> <span class="is-blue"> Diagnosis</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" :disabled="!symptomsDisplayed" v-model="diagnosis" placeholder="Diagnosis"></b-input>
           </div>
         </div>

          <h4> <span class="is-blue"> Drug(s) & Dosage Administered</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" v-model="drugsAdministered" placeholder="Drug(s) & Dosage Administered"></b-input>
           </div>
         </div>

          <h4><b-tooltip label="This can be remarks about the cow." type="is-dark" position="is-right"> <span class="is-blue"> Remarks</span> </b-tooltip></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" :disabled="!drugsAdministered" v-model="treatmentRemarks" placeholder="Remarks"></b-input>
           </div>
         </div>

        <h4><b-tooltip label="minimum period the animal should be withheld from sale or slaughter." type="is-dark" position="is-right"> <span class="is-blue"> Withdrawal Period</span> </b-tooltip></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text"  :disabled="!treatmentRemarks" v-model="withdrawalPeriod" placeholder="Withdrawal Period"></b-input>
           </div>
         </div>

        <div :disabled="!withdrawalPeriod" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            
            <p>Ear Tag ID:  {{purchasedEarTagID}}</p>
            <p>Symptoms Displayed:  {{symptomsDisplayed}}</p>
            <p>Diagnosis :  {{diagnosis}}</p>
            <p>Drugs Administered:  {{drugsAdministered}}</p>
            <p>Treatment Remarks :  {{treatmentRemarks}}</p>
            <p>Withdrawal Period:  {{withdrawalPeriod}}</p>
         
           </div>
         </div>


       <b-button :disabled="!withdrawalPeriod" @click="onSubmit" type="is-info">Add </b-button>

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

import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'TreatmentModal',

   data() {
     
    return {

      data:[
        computed(()=>this.purchasedEarTagIDs)
      ],
      name:'',
      selected: null,

      isFullPage: true,
     
      purchasedCattleTreatmentForm: {
      
             earTagID:null,
             symptomsDisplayed:null,
             diagnosis:null,
             drugsAdministered:null,
             treatmentRemarks:null,
             withdrawalPeriod:null          
        
      },
     
    }
  },

   computed: {

    filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                        
                        
                })
            },

      ...mapFields('treatmentData', [
      'purchasedCattleTreatmentForm',
      'purchasedCattleTreatmentForm.purchasedEarTagID',
      'purchasedCattleTreatmentForm.symptomsDisplayed',
      'purchasedCattleTreatmentForm.diagnosis',
      'purchasedCattleTreatmentForm.drugsAdministered',
      'purchasedCattleTreatmentForm.treatmentRemarks',
      'purchasedCattleTreatmentForm.withdrawalPeriod'
      
      
  ]),

      ...mapGetters('treatmentData', {
        cattles:'allTreatments',
        purchasedEarTagIDs:'allNewPurchasedFilteredEarTagIDs',
        raisedEarTagIDs:'allNewRaisedFilteredEarTagIDs',
       treatment: 'selectedTreatment',
      treatmentLoading: 'loading',
    }),

    
    // ...mapGetters('cattleData', {
    //     earTagIDs:'allFilteredEarTagIDs',

    // }),

   },

   

  // },

  mounted() {},

  

  methods: {
      ...mapActions('treatmentData', ['addNewPurchasedCattleTreatment','getAllPurchasedCattleTreatments', 'load']),

   //   ...mapActions('cattletData', ['getAllCattle', 'load']),

   loading() {
      return this.treatmentLoading 
    },


    async onSubmit() {

        await this.$buefy.dialog.confirm({
        title: 'Add New Treatment Data',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
        await this.addNewPurchasedCattleTreatment();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Treatment data Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
        },
      })

      await this.getAllPurchasedCattleTreatments();
   

            function showNotifications(){
   const notification = new Notification("Treatment data added.", {
       body: "Be sure to check your Treatment data periodically.",
       icon: '@/assets/pug3.jpg'
   }); 

      
        }

    },

    close() {
      this.$buefy.toast.open({
        message: 'Treatment Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
       this.treatmentForm= {
      
             earTagID:null,
             symptomsDisplayed:null,
             diagnosis:null,
             drugsAdministered:null         
        
      }
    }
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
