<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Mortality Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="purchasedCattleMortalitiesForm" class="form">

         <h4> <span class="is-blue"> Ear Tag ID</span></h4>

         <div class="columns">
                    
                    <div  class="column is-three-quarters">
                     <b-tooltip position="is-right" type="is-dark" label="This shows a list of cattle you purchased"> <h5 class="my-2">Purchased Cattle List</h5> </b-tooltip>   
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
  

           

        <h4> <span class="is-blue"> Cause Of Death</span></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" v-model="causeOfDeath" placeholder="Cause Of Death"></b-input>
           </div>
         </div>

          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="Date Of Death">
            <b-datepicker
            :disabled="!causeOfDeath"
                placeholder="Click to select..."
                v-model="dateOfDeath"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>

         <h4><b-tooltip label="Any remarks about the animal eg. difficulty in birth, weak etc" type="is-dark" position="is-right"> <span class="is-blue"> Remarks</span> </b-tooltip></h4>
        <div class="columns">
          
           <div  class="column is-three-quarters">
              
            <b-input type="text" :disabled="!dateOfDeath" v-model="mortalityRemarks" placeholder="Remarks"></b-input>
           </div>
         </div>

         <div :disabled="!calfRemarks" class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

            
            <p>Ear Tag ID:  {{purchasedEarTagID}}</p>
      
           <p>Cause Of Death:  {{causeOfDeath}}</p>
            <p>Date Of Death:  {{dateOfDeath}}</p>
           <p>Mortality Remarks:  {{mortalityRemarks}}</p>
         
           </div>
         </div>


       <b-button :disabled="!mortalityRemarks" @click="onSubmit" type="is-info">Add </b-button>

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
  name: 'MortModal',

   data() {
    return {
      data:[
        computed(()=>this.purchasedEarTagIDs),
        computed(()=>this.raisedEarTagIDs)
      ],
      isFullPage: true,

      purchasedCattleMortalitiesForm: {
            purchasedEarTagID:null,
            raisedEarTagID:null,
             causeOfDeath:null,
             dateOfDeath:null,
             mortalityRemarks:null         
        
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

      ...mapFields('mortalitiesData', [
      'purchasedCattleMortalitiesForm',
      'purchasedCattleMortalitiesForm.purchasedEarTagID',
      'purchasedCattleMortalitiesForm.causeOfDeath',
      'purchasedCattleMortalitiesForm.dateOfDeath',
      'purchasedCattleMortalitiesForm.mortalityRemarks'  
      
      
  ]),

      ...mapGetters('mortalitiesData', {
      mortality: 'selectedPurchasedCattleMortality',
     mortalityLoading: 'loading',
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
      ...mapActions('mortalitiesData', ['addNewPurchasedCattleMortality','getAllPurchasedCattleMortalities', 'load']),

   loading() {
      return this.mortalityLoading 
    },


    async onSubmit() {

         await this.$buefy.dialog.confirm({
        title: 'Add New Mortality',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
          await this.addNewPurchasedCattleMortality();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Mortality Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
        },
      })
   

            function showNotifications(){
   const notification = new Notification("Mortality data added.", {
       body: "Be sure to check your mortality data periodically.",
       icon: '@/assets/pug3.jpg'
   }); 

        }

     
    },

    close() {
      this.$buefy.toast.open({
        message: 'Mortalities Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){

      this.mortalitiesForm ={
             earTagID:null,
             causeOfDeath:null,
             dateOfDeath:null         
        
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
