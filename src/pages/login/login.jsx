import React,{Component} from 'react'
import login from '../../assets/images/logo.png'
import './login.less'
import { Form, Icon, Input, Button, message } from 'antd';

const Item=Form.Item

class Login extends Component{
    constructor(props){
        super(props);
    }

/*
用户名/密码的的合法性要求
1). 必须输入
2). 必须大于等于 4 位
3). 必须小于等于 12 位
4). 必须是英文、数字或下划线组成
*/

    //处理表单提交
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.form.validateFields((error,value)=>{
            if(!error){
                //提交数据给服务器进行验证
                console.log(value)
            }
        })
    }


  
    render(){

        const {getFieldDecorator}=this.props.form
             
        return(
           <div className='login'>

               <header className='login-header'>
                   <img src={login} />
                   <h1>深蓝后台管理系统</h1>
               </header>

               <section className='login-content'>
                    <h2>用户登录</h2>


                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                        {
                            getFieldDecorator('username',{
                                rules:[{ required: true,message: '请输入用户名！' },
                                    {min:4,max:12,message:'用户必须大于4小于12位'},
                                    {pattern:/^[0-9a-zA-Z_]+$/,message:'用户名必须是数字字母或下划线'}]
                            })(<Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="text"
                                placeholder="用户名" />
                                )
                        }                
                                                     
                        </Item>

                        <Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[{ required: true,message: '请输入密码！' },
                                    {min:4,max:12,message:'密码必须大于4小于12位'},
                                    {pattern:/^[0-9a-zA-Z_]+$/,message:'密码必须是数字字母或下划线'}]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }
                            
                                
                            
                            
                            
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>                    
               </section>

           </div> 
        )
    }
}
const WrapLoin=Form.create()(Login)
export default WrapLoin
