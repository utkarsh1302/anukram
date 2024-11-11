import { Flex } from "antd";
import "./Login.css";
import LoginForm from "./LoginForm";

const componentClassName: string = "Login";

const Login = () => {
  return (
    <Flex className="h-full" style={{ backgroundColor: "#e6f0f5" }}>
      <div className={`${componentClassName}_bg h-full w-full`}></div>
      <Flex className={`${componentClassName}_loginContainer w-1/3 rounded-lg`}>
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default Login;
