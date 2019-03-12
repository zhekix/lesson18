import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';
import Heading from './Heading';

class HomePage extends Component {
  state = {}
  inputRef = React.createRef();
  formRef = React.createRef();
  
  componentDidMount() {
    console.log(this);

    setTimeout(()=>{
      // this.inputRef.current.focus();
    },100);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.formRef.current.reset();
  }
  
  render() {
    console.log(this.props);

    // красный цвет
    // курсив
    // заглавные буквы
    return (
      <>
        <h1 style={styles}>Самый красивый заголовок</h1>
        <Heading>
          Самый красивый заголовок #2
        </Heading>
        <form onSubmit={this.handleSubmit} className="form-inline" ref={this.formRef}>
          <input placeholder="Текст" className="form-control mr-2" ref={this.inputRef} />
          <input placeholder="Имя" className="form-control mr-2" ref="zhenyaRef" />
          <input placeholder="Возраст" className="form-control mr-2" ref={(el) => { this.vasyaRef = el }} />
          <button type="submit" className="btn btn-secondary">Отправить</button>
        </form>
        <Card price={100} />
      </>
    );
  }
}

const styles = { 
  color: "red", 
  fontStyle: "italic", 
  textTransform: "uppercase" 
}

const mapStateToProps = state => {
  return {
    //..
  }
}
export default connect(mapStateToProps, {})(HomePage);
