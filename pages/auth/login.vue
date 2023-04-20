<template>
<div class="  form-card-2">
  <div class="grid is-full-height mt-0">
    
    <div class="card-1 form-card-1 ">

   
     <FormulateForm
        id="result"
      
        #default="{ isLoading }"
        v-model="form"
        :class="['card-content']"
        @submit="onLogin"
      >
        <h1 class="header center mb-4">
          <span class="is-blue">Login</span> 
          <span class="is-blue">with</span> 
        
          
           <br>  <a
          class="navbar-item"
          href="#"
        >
         <span class="litmas">e </span>
          
          

           <span class="ml-2 dairy">Learners Portal </span>
        </a>

      
        </h1>
       
      <div>
     

       <FormulateInput
          type="email"
          name="email"
          class="email"
          label="Email"
          validation="bail|required|email"
          data-has-icons-right
          
        >
          <template #suffix>
            <span class="icon is-right">
              <i class="mdi mdi-account"></i>
            </span>
          </template>
        </FormulateInput>
        </div>
       
      
      
        <FormulateInput
          type="password"
          name="password"
          label="Password"
          validation="required"
          data-has-icons-left
          class="password is-full-width"
        >
          <template #suffix>
            <span class="icon is-left">
              <i class="mdi mdi-key"></i>
            </span>
          </template>
        </FormulateInput>
        
         <p class="reset-pass">
          <nuxt-link to="/auth/forgot-password"><span class="reset"> Forgot password?</span></nuxt-link>
        </p> 
<!-- 
        <p class="reset-pass">
          <nuxt-link to="/auth/admin-login"><span class="reset">Admin Login</span></nuxt-link>
        </p>  -->

        <FormulateInput
          class="mt-4 mb-10"
          expanded
          type="submit"
          tag="input"
          native-type="submit"
          value="Login"
        />
        <b-loading :active="isLoading" is-full-page></b-loading>
      
        <!-- <p class="mt-5">
          Not a Member yet? 
          <nuxt-link to="/auth/register"><span class="sign-up"> Sign up here</span></nuxt-link>
        </p> -->

        
      </FormulateForm>


     
    </div>

    <!-- <div class="card form-card-3 ">
       <img
            src="@/assets/litmas3.png"
            alt="Litmas"
            height="20"
          >
    </div> -->

   

    </div>
  </div>
</template>

<script>
//import { mapActions, mapGetters } from 'vuex'


export default {
  
    auth: 'guest',
  data() {
    return {
      form: {
        
        email: 'user@learners.com',
        password: '12345678',
      },
      hasError: true,
      isLoading: false,
      isFullPage: true,
    }
  },

//    computed: {
//      ...mapGetters('users', {
//         loading: 'loading',
//          Users: 'allUsers',
//     }),
//   },

  methods: {
 //  ...mapActions('user', ['getUser']),

 //  ...mapActions('users', ['getAllUsers']),

  async onLogin(){
     this.$buefy.toast.open({
          duration: 3000,
          message: 'Welcome!',
          position: 'is-top',
          type: 'is-success',
        })
  
     
 
     this.$router.push({ path: '/user-index' })

       
  
  },
    async loginUser(user) {

      try {

        console.log("Checking login status....")
        const { data: response } = await this.$auth.loginWith('local', {
            data: this.form 
          })
          //   const user = response.data
        //  console.log(response.data)
          this.$auth.setUser(user)
          
          // Check browser support
          if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("email", this.$auth.user.email);

            localStorage.setItem ("password", this.$auth.user.password);


            // Retrieve
            document.getElementById("result").innerHTML = localStorage.getItem("email");
            document.getElementById("result").innerHTML = localStorage.getItem("password");
          } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
          }
       
        
      

            
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Welcome!',
          position: 'is-top',
          type: 'is-success',
        })
  

        this.$router.push({ path: '/' })

       // await this.getAllUsers();
        //   await this.getUser(form);

      } catch (error) {
        this.form.password = null
        const message = error.response
          ? error.response.data.message
          : error.message
        this.$buefy.toast.open({
          duration: 8000,
          message: 'Please check your details again. If problem persists, your subscription may need to be renewed.',
          position: 'is-top',
          type: 'is-danger is-light',
        })
      }
    },
  },
}
</script>

<style>

@media only screen and (max-width: 500px) {
  
.is-blue {
  color: rgb(5, 65, 105);
  font-size: 0.8rem;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.grid {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: grid;
  grid-template-rows: 1fr minmax(min-content, auto) 1fr;
  grid-template-columns: 1fr minmax(min-content, auto) 1fr;
}
.form-card-1 {
   height: 50vh;  
  grid-row: 1/3;
  grid-column: 2/3;
  width: 100%;
  
  background-color: rgba(171, 223, 249, 0.863);
}

.card-content {
  padding-top: 0.5rem;
  width: auto;
}

.form-card-2 {
  height: 70vh;
  grid-row: 1/3;
  grid-column: 2/3; 
  width: 60%;
  
  background-repeat: no-repeat;
  background-size: cover;
   
    
     
}

.form-card-3 {
  height: 50vh;
  grid-row: 2/3;
  grid-column: 3/3;
  width: 90%;
  background-color: rgba(232, 242, 247, 0.863);
  /* background: url('@/assets/cow3.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  padding-right: 0.5rem;
 

}

}


/**--------------------------------------MIN WIDTH GREATER THAN 500----------------------------------------------------------------------- */

.login-form{
  padding-bottom: 4rem;
}
#result{
 margin-bottom: 2rem; 
}
.litmas-svg{
  height: 60px;
  width: 100px;
}

.dairy{
  color: rgba(40, 180, 5, 0.712);
  font-family: cursive;
}
.card{
 padding: 20px;
}

.sign-up{
    color: rgb(24, 153, 204);
}

.reset{
    text-align: right;
    float: right;
    color: rgb(176, 230, 50);
}

.reset-pass{
    float: right;
    margin-bottom: 20px;
}
.formulate-input::v-deep .email {
  background-color: red;
}

.header{
  font-size: 2rem;
  color: gray;
}

.center {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
}
.is-blue {
  color: rgb(5, 65, 105);
  font-size: 1.8rem;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.is-green {
  color: rgb(31, 108, 172);
  font-size: 2.8rem;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.register {
  padding-left: 5rem;
}

.email {
  width: 100%;
  border-radius: 30%;
}

.password {
  width: 100%;
}
.grid {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: grid;
  grid-template-rows: 1fr minmax(min-content, auto) 1fr;
  grid-template-columns: 1fr minmax(min-content, auto) 1fr;
}
.form-card-1 {
   height: 60vh;  
  grid-row: 1/3;
  grid-column: 1/3;
  width: 80%;
  
  background-color: rgba(171, 208, 226, 0.863);
}

.card-content {
  padding-top: 2.5rem;
  width: auto;
}

.form-card-2 {
  height: 60vh;
  grid-row: 1/3;
  grid-column: 3/3; 
  width: 90%;
  
  background-repeat: no-repeat;
  background-size: cover;
   
    
     
}

/* .form-card-3 {
  height: 60vh;
  grid-row: 1/3;
  grid-column: 2/3;
  width: 80%;
  background-color: rgba(232, 242, 247, 0.863);
   background: url('@/assets/cow3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-right: 9rem;
 

} */

/* .box{
    /*background-color: rgb(35, 87, 134); 
    /* background: url('../../assets/images/p2.jpg'); */
    /* margin-top: 0.9rem;
    padding-top: 0.2rem;
    padding-bottom: 1rem;
    padding-left: 0rem;
    padding-right: 0rem; 
 
} */
</style>