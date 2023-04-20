<template>
  <div class="nav-padding">

    <nav
    
    v-if="$auth.loggedIn"
      class="navbar pl-6 header has-shadow color fixed col-md-8"
      role="navigation"
      aria-label="main navigation"
    
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
         <span class="litmas">e </span>
         

          <span class="litmas">Learners </span>

          <span class="ml-2 dairy">Portal</span>
        </a>

       

        <div class="right">

          <!-- <b-button @click="open = true"
                label="Menu"
                class="color"
                icon-left="apps"
                 /> -->

             <b-dropdown v-model="isPublic" aria-role="list" position="is-bottom-left">

        <template v-if="isPublic" #trigger>
            <b-button
                label="Menu"
                class="color"
                icon-left="person"
                icon-right="menu-down" />
        </template>

        <template v-else #trigger>
            <b-button
                label="Menu"
                class="color"
                icon-left="apps"
                icon-right="menu-down" />

        </template>


        <b-dropdown-item  aria-role="listitem"  >
            <div class="media">
                <b-icon class="media-left" icon="account"></b-icon>
                <div class="media-content">
                    <h3>Logged in as</h3>
                    <!-- <small> <span class="blue"> {{this.$auth.user.email}} </span></small> -->
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item  aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>Personal </h3>
                    <small> Profile</small>
                </div>
            </div>
        </b-dropdown-item>

         <b-dropdown-item @click="logout" :value="true" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="logout"></b-icon>
                <div class="media-content">
                    <h3>Options </h3>
                    <small> Logout</small>
                </div>
            </div>
        </b-dropdown-item>

    </b-dropdown>


         <!-- <b-navbar-dropdown icon="home-outline" label="Menu">
                <b-navbar-item href="#">
                 <span class="blue"> {{this.$auth.user.email}} </span>
                </b-navbar-item>

                <b-navbar-item href="#">
                  Profile
                </b-navbar-item>

                <b-navbar-item @click="logout">
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown> -->
        </div>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content  columns" >
      <section class="sidebar-layout ">
             <b-sidebar
             v-if="$auth.loggedIn"
                position="fixed"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                :overlay="overlay"
                :fullheight="fullheight"
               :fullwidth="fullwidth"
                :delay="expandWithDelay ? 500 : null"
                type="is-light"
                :right="right"
                open
                class="sidebar"
                
            >
                <div class="p-5">
                   
                   
                    <b-menu class=" height is-custom-mobile">
                        <b-menu-list label="Menu">
                            <b-menu-item icon="home-outline" @click="index" label="Home"></b-menu-item>
                          
                                <b-menu-item id="tasks"  icon="file-outline" @click="tasks" label="Tasks"></b-menu-item>
                              
                                <b-menu-item icon="cow"  @click="inventory" label="Herd">  </b-menu-item>

                                <b-menu-item  icon="book-outline"  @click="records" label="Records">  </b-menu-item>

                                <b-menu-item  icon="book-outline"  @click="chart" label="Charts">  </b-menu-item>

                                

                              
                               
                               
                           

                             <b-menu-item  icon="account-outline"  @click="admin" label="Admin Panel">
                                <b-menu-item icon="account-multiple-outline" @click="customers" label="Customers"></b-menu-item>
                                <b-menu-item icon="cash" @click="checkProfile" label="Revenue"></b-menu-item>
                                 <b-menu-item icon="book-multiple" @click="costs" label="Application Costs"></b-menu-item>
                                   <b-menu-item  icon="download"   @click="files" label="Files">  </b-menu-item>

                            </b-menu-item>


                            <b-menu-item  @click="sales" icon="graph-outline" label="Income & Expenses">
                               
                            </b-menu-item>

                            <b-menu-item  @click="sales" icon="cash" label="Sales & Expenses">
                               
                              </b-menu-item>
                        </b-menu-list>
                        <b-menu-list>
                            <b-menu-item label="Expo" icon="link"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list label="Actions">
                            <b-menu-item icon="logout" @click="logout" label="Logout"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>
      <b-loading :active="isLoading" is-full-page></b-loading>
            
        </section>
      

      <div class="container column is-20">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {

     isPublic: false,
      isLoading: false,
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,

      items: [

        {
          title: 'Login',
          icon: 'account-user',
          to: { name: 'login' },
          
        },

        
        {
          title: 'Logout',
          icon: 'account-user',
          to: { name: 'login' }
        },

        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Tasks',
          icon: 'papers',
          to: { name: 'tasks' },
          hash: 'tasks'
        },

        {
          title: 'Inventory',
          icon: 'store',
          to: { name: 'inventory' }
        },

        {
          title: 'Records',
          icon: 'book',
          to: { name: 'records' }
        },

         {
          title: 'Sales',
          icon: 'book',
          to: { name: 'sales' }
        },


          {
          title: 'Customers',
          icon: 'book',
          to: { name: 'customers' }
        },

        {
          title: 'Admin Panel',
          icon: 'book',
          to: { name: 'admin-panel' }
        },

        {
          title: 'Costs',
          icon: 'chart',
          to: { name: 'costs' }
        },

         {
          title: 'Charts',
          icon: 'chart',
          to: { name: 'chart' }
        },

         {
          title: 'Files',
          icon: 'download',
          to: { name: 'files' }
        },
      ]
    }
  },

  methods:{
     index(){
      this.$router.push("/")
    },

     admin(){
      this.$router.push("admin-panel")
    },

      login(){
      this.$router.push("login")
    },

    tasks(){
      this.$router.push("tasks")
    },
    inventory(){
      this.$router.push("inventory")
    },
    records(){
      this.$router.push("records")
    },

     sales(){
      this.$router.push("sales")
    },

    costs(){
      this.$router.push("costs")
    },

     files(){
      this.$router.push("files")
    },

     customers(){
      this.$router.push("customers")
    },

     resetPassword(){
      this.$router.push("records")
    },
     checkProfile(){
      this.$router.push("records")
    },

      chart(){
      this.$router.push("chart")
    },
    // async logout(){

    //   this.isLoading= true;
    //  await  this.$auth.logout()
    //   this.$router.push("auth/login")
    //   this.isLoading= false;
    // },

     async logout() {

      await this.$buefy.dialog.confirm({
        title: 'Log out',
        message: 'Are you sure you want to <b>log out</b>?',
        cancelText: 'Cancel',
        confirmText: 'Yes',
        type: 'is-warning',
        hasIcon: true,
        onConfirm: async () => {
          
          await this.$auth.logout()
           
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Until next time!',
            position: 'is-top',
            type: 'is-info is-light',
          })
          this.$router.push({ path: '/auth/login' })
          
        },
      })
    },

  }
}
</script>

<style>

.container{
  padding-top: 70px;
  padding-left: 220px;
  float: right;
}
.navbar {
  position: fixed;
  width: 50%;
  margin-left: 260px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.sidebar{
  margin-top: 4rem;
  overflow-x: hidden;
  overflow-y: auto;
}


.dairy{
  color: rgba(40, 180, 5, 0.712);
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
}

.litmas{
  font-size: 20px;
  margin-left: 8px;
  color:rgb(17, 127, 155)
}
.navbar{
  width:100%;
 
}
.color{
  background-color: rgb(202, 226, 248);
}
.right{
  float: right;
  margin-top: 7px;
  margin-left: 550px;
  font-size: 17px;
}

@media only screen and (max-width: 850px) {
 .right{
  float: right;
  margin-top: 1px;
  margin-left: 600px;
  font-size: 17px;
}
}


@media only screen and (min-width: 1600px) {
 .right{
  float: right;
  margin-top: 1px;
  margin-left: 1100px;
  font-size: 17px;
}
}

.height{
  height: 100vh;
}


.blue{
  color: rgb(44, 113, 192);
}
</style>

