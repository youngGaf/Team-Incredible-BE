<<<<<<< HEAD
const request = require("supertest");
var should = require("should");
const expect = require("chai").expect;
var app = require('../../app');


describe('POST api/v1/login', ()=>{
    //sample correct JSON data which is in database
    describe('Signing in with a verified email and password', ()=>{
        it('should respond 200', (done)=>{
            request(app)
                .post('/login')
                .send({username:'boyroberto@gmail.com',password:'emirateboy'})
                .expect(200)
                .expect('message', 'Success')
                done();
        });
    });
    describe('Signing in with an uverified email and password', ()=>{
        //sample incorrect JSON data which is not in database
        it('should respond with 404', (done)=>{
        request.agent(app)
            .post('/login')
            .send({username:"incorrect@gmail.com", password:"Patch"})
                .expect(404)
                .expect('msg', 'user not found')
                done();
        });
    });  
=======
//require assert to confirm test cases
const assert = require('assert');
//require functions from app.js
const app = require('../../app');



/*READ ME
This test should simulate the use of API to consume data and 
push to auth.microapi.dev sucessfully
using the app() in index.js
cmd> npm run test 

Note! this test would not pass until the condition is satisfied, 
modification may still be required. Ref (Gafar_01)*/

describe('POST /login', ()=>{
    //sample correct JSON data which is in database
    it('should respond 200', (done)=>{
        request(app)
            .post('/api/v1/login')
            .send({username:'team.incredible@gmail.com',password:'Incredible'})
            .expect(200)
            
    });
    //sample incorrect JSON data which is not in database
    it('should respond with 404', (done)=>{
        request(app)
            .post('/api/v1/login')
            .send({username:"incorrect@gmail.com", password:"Patch"})
            .expect(404)
    });
>>>>>>> 84297ed9601f331108c086cba5f6aecf2f202723
});
