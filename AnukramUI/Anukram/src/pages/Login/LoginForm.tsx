import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { ILoginRequest } from "../../services/LoginService/types";
import { APIPath, ApiUtils } from "../../utils/ApiUtils";
import { useNavigate } from "react-router-dom";
import { addUserDetails } from "../../store/userDetails";
import { useDispatch } from "react-redux";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values.email && values.password) {
      const requestData: ILoginRequest = {
        email: values.email,
        password: values.password,
      };
      await ApiUtils.axiosInstance
        .post(APIPath.LOGIN, requestData)
        .then(function (response) {
          dispatch(addUserDetails(response.data));
          history(`/projects`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Form
      name="normal_login"
      className="w-full p-6"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="E-mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="text-white">Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          size="large"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
