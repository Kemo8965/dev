export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth.currentUser) {
    if($auth.hasScope('admin')){

      return redirect('/auth/admin-login')
    }
    else{
      return redirect('/auth/login')
    }
    
  }
}
