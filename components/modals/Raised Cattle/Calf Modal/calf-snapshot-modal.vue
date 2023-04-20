<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Calf Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">

          <div class="columns">
           <div  class="column is-half">
             <h4> <span class="toggle is-blue"> Calf Ear Tag ID</span></h4>
            <p >
             <span class="tag earTagID "> {{calf.raisedEarTagID}} </span>
             
            </p>

             <!-- <b-input v-model="earTagID" class="toggle"></b-input> -->
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Calf Breed</span></h4>
            <p >
             <span class="tag breed "> {{calf.calfBreed}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Date Of Birth</span></h4>
            <p >
             <span class="tag  is-light"> {{calf.calfDateOfBirth}} </span>
              
            </p>
           </div>
         </div>

           <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Age</span></h4>
            <p >
             <span class="tag age "> {{calf.age}} </span>
              
            </p>
           </div>
         </div>

           <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Stage</span></h4>
            <p >
            <span
          :class="[
            'tag',
            {
              'is-danger is-light ': calf.stage === 'Calf Stage' ||  calf.stage === 'Still a Calf'
            },

            {
              'is-warning is-light ': calf.stage === 'Weaner Stage'
            },

            {
              'is-info is-light ': calf.stage === 'Yearling Stage'
            },

       
            {
              'is-success is-light  ' : calf.stage === 'Bulling Heifer Stage' ||  calf.stage === 'Now a Bulling Heifer' ,
            },

           
          ]"
          > {{calf.stage}} </span>
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Production Stage</span></h4>
            <p >
              <span
          :class="[
            'tag',
            {
              'is-warning is-light ': calf.productionStage === 'Immature Heifer'
            },

       
            {
              'pink  ' : calf.productionStage === 'Pregnant' ,
            },

           
          ]">  {{calf.productionStage}} </span>
              
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Sire</span></h4>
            <p >
             <span class="tag is-info is-light"> {{calf.sire}} </span>
              
            </p>
           </div>
         </div>

          <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Dam</span></h4>
            <p >
             <span class="tag is-primary is-light"> {{calf.dam}} </span>
              
            </p>
           </div>

           <div  class="column is-half">
             <h4> <span class="is-blue"> Raised Dam</span></h4>
            <p >
             <span class="tag is-primary is-light"> {{calf.raisedDam}} </span>
              
            </p>
           </div>

         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Calf Sex</span></h4>
            <p >
            <span
          :class="[
            'tag',
            {
              'is-info ': calf.calfSex === 'Male'
            },

       
            {
              'is-primary  ' : calf.calfSex === 'Female' ,
            },

           
          ]"
          > {{calf.calfSex}} </span>
              
            </p>
           </div>
         </div>

         <!-- <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Calf Weight</span></h4>
            <p >
              <span
          :class="[
            'tag',
            {
              'is-danger ': calf.calfWeight < 35.5
            },

       
            {
              'is-success  ' : calf.calfWeight > 35.5 ,
            },

           
          ]"
          > {{calf.calfWeight}} kg </span>
              
            </p>
           </div>
         </div> -->

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Ear Tag color</span></h4>
            <p >
             <span
          :class="[
            'tag',
            {
              'is-danger ': calf.earTagColor === 'Red' || calf.earTagColor === 'red'
            },

             {
              'is-info ': calf.earTagColor === 'Blue' || calf.earTagColor === 'blue'
            },

            {
              'is-warning  ' : calf.earTagColor === 'Yellow' || calf.earTagColor === 'yellow' ,
            },

            {
              'is-success  ' : calf.earTagColor === 'Green' ,
            },

           
          ]"
          >  {{calf.earTagColor}} </span>
              
            </p>
           </div>
         </div>

         

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Status</span></h4>
            <p  placeholder="Status">
             <span
          :class="[
            'tag',
            {
              'is-danger ': calf.calfStatus === 'Still Birth' || calf.calfStatus === 'Still birth' || calf.calfStatus === 'still birth',
            },

            {
              'is-warning  ' : calf.calfStatus === 'sick' || calf.calfStatus === 'under treatment' ,
            },

            {
              'is-success  ' : calf.calfStatus === 'Alive' || calf.calfStatus === 'alive' || calf.calfStatus === 'Healthy' || calf.calfStatus === 'healthy' || calf.calfStatus === 'breastfeeding' ,
            },

           
          ]"
          > {{calf.calfStatus}} </span>
            </p>
           </div>
         </div>

       
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue"> Remarks</span></h4>
            <p >
             <span class="tag is-info is-light"> {{calf.calfRemarks}} </span>
              
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
        v-if="calf.calfSex === 'Female' && calf.stage === 'Bulling Heifer Stage'"
      
        type="pink"
        icon-left="cow"
        @click="inCalf"
      />
      </b-tooltip>

      <b-tooltip type="is-primary is-light"  label="Mark as Lactating">
      <b-button
         v-if="calf.calfSex === 'Female' && calf.stage === 'Bulling Heifer Stage'"
        class="mx-2"
        type="is-primary is-light"
        icon-left="cup"
        @click="inCalf"
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
  name: 'CalfSnapshotModal',

   data() {
    return {
      isFullPage: true,

      calfForm:{
        
      calfBreed:null,
      calfDateOfBirth:null,
      sire:null,
      dam:null,
      calfSex:null,
      calfWeight:null,
      earTagColor:null,
      calfStatus:null
        
    },
     
    }
  },

  computed: {
     ...mapGetters('cattleData', {
      calf: 'selectedCalf',
      calfLoading: 'loading',
    }),

    loading() {
      return this.calfLoading 
    },

  },

  mounted() {},



  methods: {
    ...mapActions('cattleData', ['load', 'selectCalf', 'putCalfInTreatment','markCalfAsInCalf', 'markCalfAsTreated', 'deleteRaisedCattle']),

    async onSubmit() {
       await this.putCalfInTreatment();
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
      
      await this.markCalfAsTreated();
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
  await this.markCalfAsInCalf();
       const msg = await Promise.resolve('Operation successful')
     
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })
      this.$parent.close()
},

 onMortality(){
  console.log("Pegged!")
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
        message: 'Calf Snapshot closed.',
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

.age{
  background-color: rgb(217, 219, 250);
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

.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

.pink{
  background-color: pink;
}

p{
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
