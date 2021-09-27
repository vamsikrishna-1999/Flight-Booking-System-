process.env.NODE_ENV = 'test';

let expect=require('chai').expect;
let book=require('../../../backend/models/User');
let app=require('../../../backend/main');
let chaiHttp=require('chai-http');
var chai=require('chai');
const request=require('supertest');
const conn=require('../../../backend/main');
//Assertion Style
chai.should();
chai.use(chaiHttp);





describe('Testing routes',async()=>
{
    describe('POST /register',()=>
    {
      
      it('Should return 200',(done)=>
      {
        const task=
        {
            email:"ssrst@gmail.com",
            completed:false
        }
        chai.request(app)
        .post('/register')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(200);
          done();
        });
      }).timeout(10000);
    });
  });


  describe('Testing routes',async()=>{

    
    describe('POST /register',()=>{
      it('Should return 403',(done)=>
      {
        const task=
        {
            email:"abc@gmail.com",
            completed:false
        }
        chai.request(app)
        .post('/register')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(403);
          done();
        });
      }).timeout(10000);
    });
  });



  describe('Testing routes',async()=>{
    
    describe('POST /login',()=>{
      it('Should return 200',(done)=>
      {
        const task=
        {
            email:"abc@gmail.com",
            pwd:"123456",
            completed:false
        }
        chai.request(app)
        .post('/login')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(200);
          done();
        });
      }).timeout(10000);
    });
  });


  describe('Testing routes',async()=>{
    
    describe('POST /login',()=>{
      it('Should return 403',(done)=>
      {
        const task=
        {
            email:"ssrst@gmail.com",
            pwd:"123456",
            completed:false
        }
        chai.request(app)
        .post('/login')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(403);
          done();
        });
      }).timeout(10000);
    });
  });


 