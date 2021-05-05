import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.css';



var calculatePayment =function(principal,years,rate){
  var monthlyRate = rate / 100 / 12;
  var monthyPayment = principal * monthlyRate / (1 -(Math.pow(1/(1+monthlyRate),years*12)));
  var balance =principal;
  for( var y=0;y<years;y++){
    var interestY =0;
    var principalY =0;
    for(var m=0;m<12;m++){
      var interestM = balance * maonthlyRate;
      var principalM =monthyPayment -interestM;
      interestY =interestY + interestM;
      principalY =principalY +principalM;
      balance = balance - principalM;
    }
  }
 return {monthlyPayment: monthyPayment};
};

var Header = React.createClass({
render:function(){
  return(
    <header>
      <h1>{this.props.title}</h1>
    </header>
  )
}

});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
