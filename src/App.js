import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김재원',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '930302',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길순',
  'birthday': '920611',
  'gender': '여자',
  'job': '프로그래머'
}]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => { return (<Customer key={c.id} id={c.id}             image={c.image} name={c.name} gender={c.gender} job={c.job}/>);})}
      </div>
    );
  }
}

export default App;
