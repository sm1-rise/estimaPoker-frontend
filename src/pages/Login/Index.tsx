import axios from "axios";
import Header from "../../components/Header/Index";
import LoginForm from "../../components/LoginForm/Index";
import { GlobalMain } from "../../shared/GlobalStyle";

export default function Login(){

    const handleLogin = async (userData: {
        email: string;
        password: string;
    }) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/authservice/auth/login",
                userData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            
            console.log("Login successful:", response.data);
            alert("Login successful!");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Failed to log in. Please try again.");
        }
};
    return (<>
        <Header/>
        <GlobalMain>
        <LoginForm onLoginAccount={handleLogin}/>
        </GlobalMain>
    </>);
}