import React from 'react';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';

const FormItem = Form.Item;

class Register extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.props.register({
                        email: values.email,
                        password: values.password
                    });
                }
            }
        );
    };

    checkPassword = (rule, value, callback) => {
        if (value) {
            // const {form} = this.props;
            // form.validateFields(['confirm'], {force: true});
            callback();
        }
    };

    checkConfirm = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('The passwords are not equals');
        } else {
            callback();
        }
    };

    render() {
        const {form, error} = this.props;
        const {getFieldDecorator} = form;

        return (
            <div className='register_main'>
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
                                prefix={<Icon type="mail" className='prefixIcon'/>}
                                placeholder="user@example.com"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true, message: 'Please input your password!',
                                }, {
                                    validator: this.checkPassword,
                                }
                            ],
                        })(
                            <Input
                                size="large"
                                prefix={<Icon type="lock" className='prefixIcon'/>}
                                type="password"
                                placeholder="******"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true, message: 'Please input your password again!',
                                },
                                {
                                    validator: this.checkConfirm,
                                }
                            ],
                        })(
                            <Input
                                size="large"
                                prefix={<Icon type="lock" className='prefixIcon'/>}
                                type="password"
                                placeholder=""
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            size="large"
                            loading={false}
                            className='submit'
                            type="primary"
                            htmlType="submit"
                        >
                            Register
                        </Button>
                        <Link className='login' to="/login">
                            Already have an account ?
                        </Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Register);
