import React from 'react';
import { Button, Form, Input, Space } from 'antd';


const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};
const LoginComponent = () => {
  const [form] = Form.useForm();


  const onSubmit = (event)=>{
event.preventDefault()
console.log(event)

  }

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onSubmit}>
      <Form.Item
        name="username"
        label="UserName"
        rules={[
          {
            required: true,
            message:"Please Enter Valid Username"
          },
        ]}
      >
        <Input  placeholder='Enter UserName' />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message:"Please Enter Valid Password"
          },
        ]}
      >
        <Input type='password' placeholder='Enter Password'/>
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default LoginComponent;

