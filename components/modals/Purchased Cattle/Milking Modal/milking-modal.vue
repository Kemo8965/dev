<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Milking Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="purchasedMilkingForm" class="form">

         <h4> <span class="is-blue">Ear Tag ID</span></h4>

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

            <!-- <h5 class="my-2">Raised Cattle List</h5>
           <b-autocomplete
           
                rounded
                v-model="raisedEarTagID"
                :data="raisedEarTagIDs"
                placeholder="select a dam from your herd"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete> -->
                  </div>
                </div>



          <h4> <span class="is-blue"> 1st Milking</span></h4>
                <div class="columns">
                  
                  <div  class="column is-three-quarters">
                    <b-search></b-search>  
                    <b-input rounded type="number" icon="cup" step=".01" v-model="firstMilking" placeholder="1st milking in Litres"></b-input>
                  </div>
                </div>


           <h4> <span class="is-blue"> 2nd Milking</span></h4>
                <div class="columns">
                  
                  <div  class="column is-three-quarters">
                      
                    <b-input rounded type="number" icon="cup" step=".01" :disabled="!firstMilking" v-model="secondMilking" placeholder="2nd milking in Litres"></b-input>
                  </div>
                </div>



           <h4> <span class="is-blue"> Date</span></h4>
          <div class="columns">
            
           <div  class="column is-three-quarters">
                
            <b-field label="">
            <b-datepicker
           
                placeholder="Click to select..."
                v-model="milkingDate"
                >
            </b-datepicker>
          </b-field>

           
           </div>
         </div>



                  <div class=" card my-4">
             
           <div class=" summary-content">
             <h2 class="tag is-info is-light mb-4 summary">Summary</h2>
              <p class="yellow">Before adding your data, <br> confirm correct entries using the summary below </p>

           
            <p>Ear Tag ID(Purchased):  {{purchasedEarTagID}}</p>
           <p>1st Milking:  {{firstMilking}}</p>
            <p>2nd Milking:  {{secondMilking}}</p>
            <p>Milking Date:  {{milkingDate}}</p>

           
           </div>
         </div>

       <b-button v-if="firstMilking" @click="onSubmit" type="is-info">Add </b-button>

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
  name: 'MilkingModal',

   data() {
    return {
      data:[
        computed(()=>this.purchasedEarTagIDs),

        computed(()=>this.raisedEarTagIDs)
      ],

      isFullPage: true,

      purchasedMilkingForm: {
      
              purchasedEarTagID:null,
              firstMilking:null,
              secondMilking:null,
              milkingDate:null       
        
      },

     
      
      // data: [
      //               'Angular',
      //               'Angular 2',
      //               'Aurelia',
      //               'Backbone',
      //               'Ember',
      //               'jQuery',
      //               'Meteor',
      //               'Node.js',
      //               'Polymer',
      //               'React',
      //               'RxJS',
      //               'Vue.js'
      //           ],
     
    }
  },

   computed: {


      ...mapFields('cattleData', [
      'purchasedMilkingForm',
      'purchasedMilkingForm.purchasedEarTagID',
      'purchasedMilkingForm.firstMilking',
      'purchasedMilkingForm.secondMilking',
      'purchasedMilkingForm.milkingDate'
  
      
      
  ]),

  ...mapGetters('treatmentData', {
        cattles:'allTreatments',
        purchasedEarTagIDs:'allNewPurchasedFilteredEarTagIDs',
        raisedEarTagIDs:'allNewRaisedFilteredEarTagIDs',
       treatment: 'selectedTreatment',
      treatmentLoading: 'loading',
    }),


      ...mapGetters('cattleData', {
       dmr: 'selectedPurchasedCattleDMR',
       allDMRs:'allPurchasedCattleDMRs',
      DMRLoading: 'loading',
      earTagOptions: 'earTagOptions'
    }),

   },

   

  // },

  mounted() {},

  async created() {

  },
  

  methods: {
      ...mapActions('cattleData', ['addNewPurchasedCattleDMR','getAllPurchasedCattleDMRs', 'load']),

   loading() {
      return this.DMRLoading 
    },

    
         async  filteredDataArray() {

           const earTagOptions = await this.getAllDMRs();

              console.log(earTagOptions.earTagID);

                // return this.data.filter((option) => {
                //     return option
                //         .toString()
                        
                // })
            },


    async onSubmit() {
             await this.$buefy.dialog.confirm({
        title: 'Add New Milking Data',
        message: 'Proceed to add new entry?',
        cancelText: 'Cancel',
        confirmText: 'Yes, entries are correct',
        type: 'is-warning is-light',
        hasIcon: true,
        onConfirm: async () => {
          
           await this.addNewPurchasedCattleDMR();

          this.$buefy.toast.open({
            duration: 3000,
            message: 'Milking Data Successfully Added!',
            position: 'is-top',
            type: 'is-info is-light',
          })
           this.clearForm();
          showNotifications();
          this.$parent.close()
      
     
        },

      })

       function showNotifications(){
   const notification = new Notification("Milking data added.", {
       body: "Be sure to check your milking data periodically.",
      
   }); 

        }


    },

    close() {
      this.$buefy.toast.open({
        message: 'Milking Snapshot closed.',
        duration: 2000,
        position: 'is-bottom',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm(){
      this.purchasedMilkingForm ={
        purchasedEarTagID:null,
        firstMilking:null,
        secondMilking:null,
        thirdMilking:null, 
        milkingDate:null    
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

                  <!-- <b-autocomplete 
                  rounded  
                  :data="filteredDataArray" 
                  v-model="earTagID" 
                  placeholder="ear tag ID" 
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
                     <template #empty>No results found</template>
                  </b-autocomplete> -->