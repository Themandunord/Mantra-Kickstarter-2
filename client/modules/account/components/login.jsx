import React from 'react';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.props.logIn(values.email, values.password);
                }
            }
        );
    };

    render() {
        const {form, error} = this.props;
        const {getFieldDecorator} = form;

        return (
            <div className='login'>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input
                                size="large"
                                prefix={<Icon type="mail" className='prefixIcon' />}
                                placeholder="user@example.com"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }],
                        })(
                            <Input
                                size="large"
                                prefix={<Icon type="lock" className='prefixIcon' />}
                                type="password"
                                placeholder="******"
                            />
                        )}
                    </FormItem>
                    <FormItem className='additional'>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox className='autoLogin'>Keep sign-in</Checkbox>
                        )}
                        <a className='forgot' href="">Forgot password</a>
                        <Link className='register' to="/user/register">Register</Link>
                        <Button size="large" loading={false} className='submit' type="primary" htmlType="submit">
                            Sign-in
                        </Button>
                    </FormItem>
                </Form>
                
                {/*<div className='other'>
                   Other login methods
                    <span className='iconAlipay' />
                    <span className='iconTaobao' />
                    <span className='iconWeibo' />
                    
                      </div>*/}
            </div>
        );
    }
}

export default Form.create()(Login);
