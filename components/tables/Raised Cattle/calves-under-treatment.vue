<template>
  <div>
    <div class="card p-5 mr-8">
        <div class="card-body">
            <b-field grouped group-multiline>
      <b-select v-model="perPage">
        <option
          v-for="(option, index) in pageOptions"
          :key="index"
          :value="option"
        >
          {{ option }} entries
        </option>
      </b-select>

     <div class="buttons">

        <!-- <b-tooltip label="Add details of each cow here" type="is-dark">
           <b-button class="mx-2" icon-left="plus-circle" icon-right="cow" type="is-success" @click="addNewCalf">Add New Calf</b-button>
        </b-tooltip> -->
       
        

          <b-tooltip label="Refresh" type="is-dark">
             <b-button class="mx-2" icon-left="refresh" type="is-info"  @click="refresh">Refresh</b-button>
        </b-tooltip>

      </div>

      
    </b-field>
    <b-table
      :data="tableData"
      :loading="loading"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      mobile-cards
      
      default-sort="selectPriority"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
      
    >
  
       <!-- :sticky-header="stickyHeaders" -->

        <b-table-column
        v-slot="props"
        field="calfBreed"
        label="Ear Tag ID"
        searchable
        
      >
      
      <span class="tag earTagID ">  {{ props.row.earTagID }} </span>

       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>
    
       <b-table-column
        v-slot="props"
        field="calfBreed"
        label="Breed"
        sortable
        
      >
      
       <span class="tag breed "> {{ props.row.calfBreed }} </span>

       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>




      <!-- <b-table-column
        v-slot="props"
        field="dateOfBirth"
        label="D.O.B"
        sortable
      >
       <span class="tag  is-light">  {{ props.row.calfDateOfBirth }} </span>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="datePurchased"
        label="Date Purchased"
        sortable
      >
        <span class="tag  is-light"> {{ props.row.datePurchased }} </span>
      </b-table-column> -->

       <!-- <b-table-column
        v-slot="props"
        field="age"
        label="Age"
        sortable
      >
        <span class="tag  is-light"> {{ props.row.age }} </span>
      </b-table-column> -->

       <b-table-column
        v-slot="props"
        field="age"
        label="Stage"
        sortable
      >
         <span
          :class="[
            'tag',
            {
              'is-danger is-light ': props.row.stage ===  'Calf Stage' || props.row.stage ===  'Still a Calf',
            },

            {
              'is-info is-light': props.row.stage ===  'Yearling Stage',
            },
            {
              'is-warning is-light ' : props.row.stage ===  'Weaner Stage',
            },

            {
              'is-success is-light': props.row.stage === 'Bulling Heifer Stage',
            },
          ]"
          > {{ props.row.stage }} </span>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="calfSex"
        label="Sex"
         sortable
      >
        <span
          :class="[
            'tag',
            {
              'is-info ': props.row.calfSex === 'Male'
            },

       
            {
              'pink' : props.row.calfSex === 'Female' ,
            },

           
          ]"
          >  {{ props.row.calfSex }} </span>
      </b-table-column>

      <!-- <b-table-column
        v-slot="props"
        field="calfWeight"
        label=" Weight (KG)"
        sortable
      >
        <span class="tag is-primary is-light"> {{ props.row.calfWeight }} Kg</span> 
      </b-table-column> -->

      <!-- <b-table-column
        v-slot="props"
        field="supplierName"
        label="Supplier"
        sortable
      >
       {{ props.row.supplierName }} 
      </b-table-column> -->

       <!-- <b-table-column
        v-slot="props"
        field="supplierName"
        label="Total Cumulative Milking Yield"
        sortable
      >
       <span class="tag is-primary ">  {{ props.row.totalDMR }} </span>
      </b-table-column> -->

    
        <b-table-column
        v-slot="props"
        field="earTagColor"
        label="Ear Tag "
        searchable
      >

      <span
          :class="[
            'tag',
            {
              'is-danger ': props.row.earTagColor ===  'Red',
            },

            {
              'is-info ': props.row.earTagColor ===  'Blue',
            },
            {
              'is-warning  ' : props.row.earTagColor ===  'Yellow',
            },

            {
              'is-primary  ' : props.row.earTagColor ===  'Purple',
            },

            {
              'is-success ': props.row.earTagColor === 'Green' || props.row.earTagColor === 'green',
            },
          ]"
          >  {{ props.row.earTagColor }} </span
        >
       
      </b-table-column>

     <b-table-column
        v-slot="props"
        field="calfStatus"
        label="Status"
        searchable
      >

      <span
          :class="[
            'tag',
            {
              'is-danger is-light': props.row.calfStatus ===  'Culled',
            },

            {
              'is-warning is-light ' : props.row.calfStatus ===  'Under Treatment' ,
            },

            {
              'is-primary is-light ' : props.row.calfStatus ===  'Calfing' || props.row.calfStatus === 'Calving' ,
            },

            {
              'is-success is-light': props.row.calfStatus === 'Treated' || props.row.calfStatus === 'Healthy',
            },
          ]"
          >  {{ props.row.calfStatus }} </span
        >
       
      </b-table-column>
      
      
     <b-table-column v-slot="props" label="Options">
        <span class="buttons">
         
          <b-tooltip label="View more details about this cow" type="is-dark" position="is-left">
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            ></b-button
          >
          </b-tooltip>
          
        </span>

        
      </b-table-column>

       <!-- <b-table-column v-slot="props" label="">
        <span class="buttons">
          
          <b-tooltip label="Delete" type="is-dark">
          <b-button
            type="is-secondary-outline "
            icon-left="delete"
            @click="captureReceipt(props.row)"
            class="del"
            ></b-button
          >
          </b-tooltip>

          
        </span>
      </b-table-column> -->

      


      
                

      


      <template #empty>
       
       <b-tooltip  label="Once freshed, your details will appear here" type="is-dark">
          <h4 class="is-size-4 text-center has-text-centered">No Calf Data yet. &#x1F4DA;. Click the <span class="tag is-info"> refresh button</span> right above</h4>
       </b-tooltip>
      </template>
    </b-table>
        </div>
    </div>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import CalfModal from '~/components/modals/Raised Cattle/Calf Modal/calf-modal.vue'
import CalfSnapshotModal from '~/components/modals/Raised Cattle/Calf Modal/calf-snapshot-modal.vue'
export default {
  name: 'UnreceiptedDebitsTable',

  data() {  
  
    
    return {
       stickyHeaders: true,
      isPaginated: true,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25, 50, 100],
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
    }
  },


  computed: {
    
    ...mapGetters('cattleData', {
        loading: 'loading',
        calfs: 'allCalvesUnderTreatment',
      }),
    
     isEmpty() {
     return this.calfs.length === 0
     },

    

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.calfs
    },
  },

  async created() {
  // await this.load()
   this.selectCalf(this.calfs[0])



  },

  

  methods: {
   

     ...mapActions('cattleData', ['addNewCalf','getAllCalves', 'load', 'selectCalf']),

     async refresh(){
    //  this.isLoading = true
      await this.getAllCalves();
   //   this.isLoading = false
 
    },


    captureReceipt(calf) {
      this.selectCalf(calf)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: CalfSnapshotModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Snapshot closed`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)
    },

     addNewCalf() {
      
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: CalfModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Calf Snapshot closed!`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)
    },
  }

 

  
}

  
</script>

<style scoped>


.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.is-proc{
 background-color: rgb(78, 159, 252);
 color: aliceblue;
}

.preview{
  background-color: rgb(177, 219, 243);
}

.earTagID{
  background-color: rgb(157, 248, 236);
}
.breed{
  background-color: rgb(196, 252, 170);
}
.pink{
  background-color: pink;
}
.del{
  background-color: rgb(214, 145, 145);
}

.content-area {
  grid-column: 2/3;
}

.text-center{
  margin-left: 100px;
}
</style>
