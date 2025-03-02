import {LoginContainer, Title, Input, Button, Divider, SocialButton,SocialLogin,Footer} from "./style";

export default function FormSignUp(){
    return(<>
   <LoginContainer>
            <Title>Create your Free Account</Title>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Create Account</Button>
            <Divider><span>OR</span></Divider>
            <SocialLogin>
                <SocialButton>Sign up with Google</SocialButton>
                <SocialButton>Sign up with Github</SocialButton>
            </SocialLogin>
            <Footer>
                Already have an account? <a href="#">Log in</a>
            </Footer>
        </LoginContainer>
    
    </>);
}