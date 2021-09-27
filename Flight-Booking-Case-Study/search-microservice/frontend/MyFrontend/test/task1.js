let expect=require('chai').expect;
let app=require('../../../backend/main');
let chaiHttp=require('chai-http');
const should = require('should');
var chai=require('chai');


//Assertion Style
chai.should();
chai.use(chaiHttp);


describe('Testing routes',async()=>{
    describe('POST /register',()=>{
      it('Should return 200',(done)=>
      {
        const task=
        {
            Flight_id:"104",
            name:"AirAsia",
            starting:"Hyderabad",
            ending:"Goa",
            departure:"2021-09-20",
            total:"3000",
            type1:"Economic",
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
    describe('GET /user/starting/ending/departure/type1',()=>{
      it('Should return 200',(done)=>
      {
        chai.request(app)
        .get('/user/starting/ending/departure/type1')
        .end((err,res)=>
        {
            res.should.have.status(200);
          //expect(res).to.have.status(200);
          done();
        });
      }).timeout(10000);
    });
  });