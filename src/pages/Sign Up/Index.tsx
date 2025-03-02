import Header from "../../components/Header/Index";
import NewSignUpForm from "../../components/NewSignUpForm/Index";
import { GlobalMain } from "../../shared/GlobalStyle";
import axios from "axios";

export default function SignUp(){

  const handleCreateAccount = async (userData: {
    username: string;
    email: string;
    password: string;
    role: string[];
}) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/authservice/auth/register",
            userData,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Account created successfully:", response.data);
        alert("Account created successfully!");
    } catch (error) {
        console.error("Error creating account:", error);
        alert("Failed to create account. Please try again.");
    }
};


    return (<>
        <Header/>
        <GlobalMain>
            <NewSignUpForm onCreateAccount={handleCreateAccount}/>
        </GlobalMain>
    </>)
}