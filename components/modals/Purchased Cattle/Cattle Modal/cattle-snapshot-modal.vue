<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Cattle Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
        
        <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Cattle Ear Tag ID</span></h4>
            <p >
              <span class="tag earTagID"> {{cattle.purchasedEarTagID}} </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Cattle Breed</span></h4>
            <p >
              <span class="tag  breed"> {{cattle.cattleBreed}} </span>
              
            </p>
           </div>
         </div>

    


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Date Of Birth</span></h4>
            <p >
             <span class="tag  is-light">  {{cattle.cattleDateOfBirth}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Date Purchased</span></h4>
            <p >
              <span class="tag  is-light"> {{cattle.datePurchased}} </span>
              
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Age</span></h4>
            <p >
              <span class="tag is-success is-light"> {{cattle.cattleAge}} </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Cattle Production Stage</span></h4>
            <p >
              <span
          :class="[
            'tag',
            {
              'is-info ': cattle.cattleProductionStage === 'Immature Heifer'
            },

       
            {
              'pink  ' : cattle.cattleProductionStage=== 'Pregnant' ,
            },

            
            {
              'is-primary is-light' : cattle.cattleProductionStage=== 'Calved & Lactating' ,
            },

           
          ]"> {{cattle.cattleProductionStage}} </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Cattle Sex</span></h4>
            <p >
             <span
          :class="[
            'tag',
            {
              'is-info ': cattle.cattleSex === 'Male'
            },

       
            {
              'pink  ' : cattle.cattleSex === 'Female' ,
            },

           
          ]"
          > {{cattle.cattleSex}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4><b-tooltip label="The price at which you purchased this heifer/cow/bull from the supplier"  position="is-right" type="is-dark"><span class="is-blue"></span> <span class="is-blue"> Cattle Price</span> </b-tooltip></h4>
            <p >
             <span
          :class="[
            'tag',
            {
              'is-danger ':cattle.cattlePrice < 20000.00
            },

       
            {
              'is-success  ' :cattle.cattlePrice > 35000.00 ,
            },

           
          ]"
          > ZMW {{ cattle.cattlePrice }}</span>
              
            </p>
           </div>
         </div>

           <div v-if="cattle.cattleSex=== 'Female'" class="columns">
           <div  class="column is-half">
             <h4> <b-tooltip label="A summation of all the daily milking yields of this cow."  position="is-right" type="is-dark"><span class="is-blue"> Total Cumulative Milking Yield</span></b-tooltip></h4>
            <p >
             <span
          :class="[
            'tag',
            {
              'is-danger ':cattle.totalDMR < 30
            },

       
            {
              'orange  ' :cattle.totalDMR > 30 ,
            },

           
          ]"
          >  {{cattle.totalDMR}} L </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Ear Tag color</span></h4>
            <p >
            <span
          :class="[
            'tag',
            {
              'is-danger ': cattle.earTagColor === 'Red' || cattle.earTagColor === 'red'
            },

             {
              'is-info ': cattle.earTagColor === 'Blue' || cattle.earTagColor === 'blue'
            },

            {
              'is-warning  ' : cattle.earTagColor === 'Yellow' || cattle.earTagColor === 'yellow' ,
            },

            {
              'is-success  ' : cattle.earTagColor === 'Green' || cattle.earTagColor === 'green' ,
            },

           
          ]"
          >  {{cattle.earTagColor}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Supplier</span></h4>
            <p  placeholder="Supplier Name">
            <span class="tag is-primary">{{cattle.supplierName}}</span>  
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Color</span></h4>
            <p  placeholder="Supplier Name">
            <span class="tag is-light">{{cattle.cattleColor}}</span>  
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Remarks</span></h4>
            <p  placeholder="Supplier Name">
            <span class="tag is-primary">{{cattle.cattleRemarks}}</span>  
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Status</span></h4>
            <p  placeholder="Supplier Name">
            <span
          :class="[
            'tag',
            {
              'is-danger ': cattle.cattleStatus === 'Mortality' || cattle.cattleStatus === 'Still birth' || cattle.cattleStatus === 'still birth',
            },

            {
              'is-warning  ' : cattle.cattleStatus === 'sick' || cattle.cattleStatus === 'Under Treatment' ,
            },

            {
              'is-success  ' : cattle.cattleStatus === 'Healthy' || cattle.cattleStatus === 'Calving' || cattle.cattleStatus === 'calving' ||cattle.cattleStatus === 'In-calf' ||cattle.cattleStatus === 'Treated' ||cattle.cattleStatus === 'breastfeeding' ,
            },

            {
              'pink  ' : cattle.cattleStatus === 'pregnant' || cattle.cattleStatus === 'Pregnant',
            },


           
          ]"
          >  {{cattle.cattleStatus}} </span>
            </p>
           </div>
         </div>

       

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />

      <b-tooltip type="is-warning is-light"  label="Put in Treatment">
       <b-button
        
        type="is-warning"
        icon-left="alert"
        @click="onSubmit"
      />
      </b-tooltip>

      <b-tooltip type="is-success is-light" label="Mark as Treated">
       <b-button
        class="mx-2"
        type="is-success"
        icon-left="check"
        @click="onTreated"
      />
      </b-tooltip>

      <b-tooltip type="pink"  label="Mark as Pregnant">
      <b-button
        v-if="cattle.cattleSex === 'Female'"
      
        type="pink"
        icon-left="cow"
        @click="inCalf"
      />
      </b-tooltip>



      <b-tooltip type="is-primary is-light"  label="Mark as Calved & Lactating">
      <b-button
        v-if="cattle.cattleSex === 'Female'"
        class="mx-2"
        type="is-primary is-light"
        icon-left="cup"
        @click="calved"
      />
      </b-tooltip>


      <b-tooltip type="is-danger is-light"  label="Mark as Mortaliity">
      <b-button
        class="mx-2"      
        type="is-danger"
        icon-left="cow"
        @click="onMortality"
      />
      </b-tooltip>

      <b-tooltip type="is-danger is-light"   label="Delete">
      <b-button
        type="is-secondary-outline "     
        class="del"
        icon-left="delete"
        @click="deleteRaisedCattle"
      />
      </b-tooltip>

    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CattleSnapshotModal',

   data() {
    return {
      isFullPage: true,

      cattleForm:{
      purchasedEarTagID:null,  
      cattleBreed:null,
      cattleDateOfBirth:null,
      datePurchased:null,
      cattleSex:null,
      cattleWeight:null,
      earTagColor:null,
      supplierName:null,
      cattleStatus:null
        
    },
     
    }
  },

  computed: {
     ...mapGetters('cattleData', {
      cattle: 'selectedCattle',
      cattleLoading: 'loading',
    }),

    loading() {
      return this.cattleLoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('cattleData', ['load', 'selectCattle', 'putInTreatment', 'markAsTreated', 'markAsInCalf', 'markAsCalved','markAsMortality', 'deleteRaisedCattle']),

    async onSubmit() {
      
      await this.putInTreatment();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },



      async onTreated() {
      
      await this.markAsTreated();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },


 async inCalf(){
  await this.markAsInCalf();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
},

async calved(){
  await this.markAsCalved();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
},

 async onMortality(){
  await this.markAsMortality();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },

    async deleteRaisedCattle(){
  await this.deleteRaisedCattle();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
    },


    close() {
      this.$buefy.toast.open({
        message: 'Task Snapshot closed.',
        duration: 2000,
        position: 'is-top',
        type: 'is-warning ',
      })
      this.$parent.close()
    },
  },
}
</script>

<style scoped>
.modal-width-auto {
  width: auto;
}

.earTagID{
  background-color: rgb(157, 248, 236);
}
.del{
  background-color: rgb(214, 145, 145);
}
.breed{
  background-color: rgb(196, 252, 170);
}
.pink{
  background-color: pink;
}

.orange{
  background-color: rgb(255, 195, 150);
}

.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
