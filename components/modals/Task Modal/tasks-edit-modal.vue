<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Task Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form v-model="taskForm" class="form">
  
           <h4> <span class="is-blue"> Enter Your Task Description</span></h4>
  
           <div class="columns">
              
             <div  class="column is-three-quarters">
              
             <b-input type="text" v-model="task.taskDescription" placeholder="task description"></b-input>
             </div>
           </div>
  
              <h4> <span class="is-blue"> Set Priority</span></h4>
  
           <div class="columns">
            
             <b-field  class="column is-full">
               
             <b-select v-model="task.selectPriority" placeholder="Select a Priority">
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
             </b-select>
             </b-field>
           </div>
  
          <h4> <span class="is-blue">  Assign Task To</span></h4>
          <div class="columns">
            
             <div  class="column is-three-quarters">
                
              <b-input type="text" v-model="task.assignTask" placeholder="assigned to"></b-input>
             </div>
           </div>
  
           <h4> <span class="is-blue">Date Assigned</span></h4>
            <div class="columns">
              
             <div  class="column is-three-quarters">
                  
              <b-field label="">
              <b-input

                  placeholder="Click to select..."
                  v-model="task.dateAssigned"
                  >
              </b-input>
            </b-field>
  
             
             </div>
           </div>
  
  
            
             <h4> <span class="is-blue">Due Date</span></h4>
            <div class="columns">
              
             <div  class="column is-three-quarters">
                  
              <b-field label="">
              <b-input

                  placeholder="Click to select..."
                  v-model="task.dueDate"
                  >
              </b-input>
            </b-field>
  
             
             </div>
           </div>
  
  
  
  
         <b-button @click="onSubmit" type="is-info">Update </b-button>
  
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
  
  import { mapActions, mapGetters } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  export default {
    name: 'TaskModal',
  
     data() {
      return {
        isFullPage: true,
        taskForm: {
        
                taskDescription:null,
                selectPriority:null,
                assignTask:null,
                dateAssigned:null,
                dueDate:null         
          
        },
       
      }
    },
  
     computed: {

        taskDescription:{   
                  get () {
                  return cloneDeep(this.$store.state.task.taskDescription)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_TASK', value))
                } 

              },

              
        selectPriority:{   
                  get () {
                  return cloneDeep(this.$store.state.task.selectPriority)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_TASK', value))
                } 

              },

              
        assignTask:{   
                  get () {
                  return cloneDeep(this.$store.state.task.assignTask)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_TASK', value))
                } 

              },

              
        dateAssigned:{   
                  get () {
                  return cloneDeep(this.$store.state.task.dateAssigned)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_TASK', value))
                } 

              },

              
        dueDate:{   
                  get () {
                  return cloneDeep(this.$store.state.task.dueDate)
                  },

                  set (value) {
                cloneDeep(this.$store.commit('UPDATE_SELECTED_TASK', value))
                } 

              },


  
        ...mapFields('taskData', [
        'taskForm',
        'taskForm.taskDescription',
        'taskForm.selectPriority',
        'taskForm.assignTask',
        'taskForm.dateAssigned',
        'taskForm.dueDate'  
        
        
    ]),
  
        ...mapGetters('taskData', {
         task: 'selectedTask',
        taskLoading: 'loading',
      }),
  
     },
  
     
  
    // },
  
    mounted() {},
  
    
  
    methods: {
        ...mapActions('taskData', ['addNewTask','getAllTasks', 'updateTaskDetails', 'load']),
  
     loading() {
        return this.taskLoading 
      },
  
  
      async onSubmit() {
  
         await this.$buefy.dialog.confirm({
          title: 'UpdateTask Data',
          message: 'Proceed to update entry?',
          cancelText: 'Cancel',
          confirmText: 'Yes, entries are correct',
          type: 'is-warning is-light',
          hasIcon: true,
          onConfirm: async () => {
            
           await this.updateTaskDetails();
  
            this.$buefy.toast.open({
              duration: 3000,
              message: 'Task data Successfully Updated!',
              position: 'is-top',
              type: 'is-info is-light',
            })
             this.clearForm();
            showNotifications();
            this.$parent.close()
          },
        })
     
  
              function showNotifications(){
     const notification = new Notification("Task data added.", {
         body: "Be sure to check your sales data periodically.",
         icon: '@/assets/pug3.jpg'
     }); 
  
        
          }
  
      },
  
      close() {
        this.$buefy.toast.open({
          message: 'Task Snapshot closed.',
          duration: 2000,
          position: 'is-bottom',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
  
      clearForm() {
  
       this.taskForm = {
        
                taskDescription:null,
                selectPriority:null,
                assignTask:null,
                dateAssigned:null,
                dueDate:null         
          
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
  