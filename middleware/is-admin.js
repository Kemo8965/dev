export default function ({ $auth, redirect }) {
    if (!$auth.hasScope('admin')) {

      return redirect('/auth/admin-login')
    }
  }