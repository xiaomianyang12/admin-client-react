import React,{Component} from 'react'
import login from '../../assets/images/logo.png'
import './login.less'
import { Form, Icon, Input, Button, message } from 'antd';



class Login extends Component{
    constructor(props){
        super(props);
    }

  

    render(){
       

        
        return(
           <div className='login'>

               <header className='login-header'>
                   <img src={login} />
                   <h1>深蓝后台管理系统</h1>
               </header>

               <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                           
                                <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="text"
                                    placeholder="账户名" />
                                    
                                    
                            
                        </Form.Item>
                        <Form.Item>
                            
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                    />
                            
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
               </section>

           </div> 
        )
    }
}

export default Login
