import styled from 'styled-components';


export const MainSection = styled.section`
  background-color: white;
  display: flex;
  border: 2px solid #000;
  border-radius: 20px;

    

`; 

 export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  height: 510px;
  img{
    border-radius: 20px;
  }
 
`;



export const YellowShapeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-color: #ffeb3b;
  transform: rotate(-20deg);
  z-index: -1;
`;


export const RightSection = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-left: 70px;
  padding-right: 70px;
  h2{
    font-size:20px;
    }

   
  
  
`;

export const FormGroup = styled.form`
  width: 100%;
`;


export const Label = styled.label`
  display: block;
  margin-top: 30px;
  font-weight: bold;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 5%;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 15px;
`;


export const CreateAccountBtn = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const LoginLink = styled.a`
  color: red;
  text-decoration: none;
`;


export const SocialAuth = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  color: white;
`;

export const GoogleBtn = styled(SocialBtn)`
  background-color: #fff;
  border: solid 1px;
  font-size: 12px;
  border-radius: 10px;
  border-color: #000;
  color: #000;
`;

export const GithubBtn = styled(SocialBtn)`
  background-color: #333;
`;

export const SocialIcon = styled.img`
  width: 15px;
  margin-right: 10px;
  height: 15px;
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding-top: 20px;
  text-align: center;
  color: #777;
`;


export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-top: 12px;
  font-weight: bold;
  text-decoration: underline;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const ErrorRegex = styled.p`
  width: 200px;
  color: red;
  font-size:12px;
`;