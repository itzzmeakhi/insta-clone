import { 
  getProviders, 
  signIn as signInToProvider 
} from "next-auth/react";

const SignIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            onClick={() => signInToProvider(provider.id, { callbackUrl: "/" })}>
              Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );  
}

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}

export default SignIn;