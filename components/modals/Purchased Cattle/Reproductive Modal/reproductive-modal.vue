<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Reproduction Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="purchasedCattleReproductiveForm" class="form">

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
  


        <!-- <h4> <span class="is-blue"> Age at 1st Calving </span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" v-model="ageAtFirstCalving" placeholder="Age at 1st calving"></b-input>
           </div>
         </div> -->

         <h4> <span class="is-blue"> No. of Services Per Insemination </span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="number" :disabled="!purchasedEarTagID" v-model="numberOfServicesPerInsemination" placeholder="No. of Services Per Insemination"></b-input>
           </div>
         </div>
          <b-tooltip label="refers to the period from one calvng to the next. Usually about one year." type="is-dark" position="is-right">
          <h4> <span class="is-blue">Calving Interval</span></h4>
          </b-tooltip>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="number" :disabled="!numberOfServicesPerInsemination" v-model="calvingInterval" placeholder="Calving Interval"></b-input>
           </div>
         </div>

          <b-tooltip multilined label="Animals that calve easily and milk calmly help reduce labour time.
                        Calving Ease(CE) is scored on a scale from 1 to 5.
                        A score of 1 represents an unassisted calving, 2 is some assistance,
                        3 is mechanical assistance, 4 is a C-section, and 5 is an abnormal presentation." type="is-dark" position="is-right">
          
          <h4> <span class="is-blue"> Calving Ease Index </span></h4>

          </b-tooltip>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="number" :disabled="!calvingInterval" v-model="calvingEaseIndex" placeholder="Calving Ease Indexo"></b-input>
           </div>
         </div>

         <h4> <span class="is-blue"> Abortions Per Lifecycle </span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="number" :disabled="!calvingEaseIndex" v-model="abortionsPerLifecycle" placeholder="Abortions Per Lifecycle"></b-input>
           </div>
         </div>
         
          <div :disabled="!abortionsPerLifecycle" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            
            <p>Ear Tag ID:  {{purchasedEarTagID}}</p>
           <p>Number of Services Per Insemination:  {{numberOfServicesPerInsemination}}</p>
            <p>calving Interval:  {{calvingInterval}} days</p>
            <p>calving Ease Index:  {{calvingEaseIndex}}</p>
            <p>Abortions Per Lifecycle:  {{abortionsPerLifecycle}}</p>
           
         
           </div>
         </div>
         

       <b-button :disabled="!abortionsPerLifecycle" @click="onSubmit" type="is-info">Add </b-button>

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
  name: 'reproductiveModal',

   data() {
    return {
      data:[
        computed(()=>this.purchasedEarTagIDs)
      ],
      isFullPage: true,

      purchasedCattleReproductiveForm: {
      
              purchasedEarTagID:null,
              ageAtFirstCalving:null,
              numberOfServicesPerInsemination:null,         
              calvingInterval:null,
              calvingEaseIndex:null,
              abortionsPerLifecycle:null
      },
     
    }
  },

   computed: {

      ...mapFields('reproductiveData', [
      'purchasedCattleReproductiveForm',
      'purchasedCattleReproductiveForm.purchasedEarTagID',
       'purchasedCattleReproductiveForm.ageAtFirstCalving',
      'purchasedCattleReproductiveForm.numberOfServicesPerInsemination',
       'purchasedCattleReproductiveForm.calvingInterval',
      'purchasedCattleReproductiveForm.calvingEaseIndex',
      'purchasedCattleReproductiveForm.abortionsPerLifecycle'
      
      
  ]),

      ...mapGetters('reproductiveData', {
       reproductive: 'selectedPurchasedCattleReproductive',
     // Loading: 'loading',
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

  

  methods: {
      ...mapActions('reproductiveData', ['addNewPurchasedCattleReproductive','getAllPurchasedCattleReproductives', 'load']),

   loading() {
      return this.load();
    },


    async onSubmit() {

     // this.Loading= true
      await this.addNewPurchasedCattleReproductive();
      const msg = await Promise.resolve('Reproductive Successfully Created!')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 1200,
        position: 'is-top-right',
        type: 'is-success',
      })
     // this.Loading= false

      this.clearForm();
      this.$parent.close()
    },

    close() {
      this.$buefy.toast.open({
        message: 'Reproductive Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){

      this.reproductiveForm= {
      
              purchasedEarTagID:null,
              ageAtFirstCalving:null,
              numberOfServicesPerInsemination:null,         
              calvingInterval:null,
              calvingEaseIndex:null,
              abortionsPerLifecycle:null
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
