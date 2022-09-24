import bcrypt from 'bcryptjs'


const users = [{
    name:'Admin user',
    email:'Admin@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
},{
    name:'Ruel',
    email:'Ruel@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
},{
    name:'Pawit',
    email:'Pawit@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
},{
    name:'Angie',
    email:'Angie@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
},



]
export default users