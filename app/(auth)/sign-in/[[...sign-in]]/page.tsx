import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="auth-page-sign-in">
      <SignIn />
    </main>
  )
}

export default SignInPage