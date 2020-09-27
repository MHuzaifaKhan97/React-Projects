import React, { Component } from 'react';
import '../App.css';

class Converter extends Component {

    state = {
        currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
        base: "USD",
        amount: "",
        convertTo: "EUR",
        result: "",
        date: ""
      };
    
      handleSelect = e => {
        this.setState(
          {
            [e.target.name]: e.target.value,
            result: null
          },
          this.calculate
        );
      };
    
      handleInput = e => {
        this.setState(
          {
            amount: e.target.value,
            result: null,
            date: null
          },
          this.calculate
        );
      };
    
      calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
          return;
        } else {
          fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
            .then(res => res.json())
            .then(data => {
              const date = data.date;
              const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
              this.setState({
                result,
                date,
                currencies:Object.keys(data.rates)
              });
            });
        }
      };

      componentDidMount(){
        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          this.setState({
            currencies:Object.keys(data.rates)
          });
        });
      }
      handleSwap = e => {
        const base = this.state.base;
        const convertTo = this.state.convertTo;
        e.preventDefault();
        this.setState(
          {
            convertTo: base,
            base: convertTo,
            result: null
          },
          this.calculate
        );
      };


    render() {
        const { currencies, base, amount, convertTo, result, date } = this.state;

        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark py-3 bg-dark">
                        <a href="/" className="navbar-brand text-uppercase"> Currency Converter </a>
                        <button className="navbar-toggler">
                            <i className="navbar-toggler-icon"></i>
                        </button>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 text-white">
                                <div className="currency-box">
                                    <h3>{amount === "" ? "0" : amount} {base} is equivalent to</h3>
                                    <h1>{amount === "" ? "0" : result === null ? "Calculating..." : result}{" "} {convertTo} </h1>
                                    <div className="form-group">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-9 col-sm-9 col-xsm-9 form-group">
                                                    <input type="number" value={amount} onChange={(e) => this.handleInput(e)} className="form-control" />
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xsm-3 form-group">
                                                    <select className="form-control" name="base" value={base} onChange={(e) => this.handleSelect(e)} >
                                                        {
                                                            currencies.map((currency) => {
                                                                return <option key={currency} value={currency}>
                                                                    {currency}
                                                                </option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-9 form-group">
                                                    <input type="number" disabled={true} value={amount === "" ? "0" : result === null ? "Calculating..." : result} className="form-control" />
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    <select className="form-control" name="convertTo" value={convertTo} onChange={(e) => this.handleSelect(e)} >
                                                        {
                                                            currencies.map((currency) => {
                                                                return <option key={currency} value={currency}>
                                                                    {currency}
                                                                </option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <h1 onClick={(e) => this.handleSwap(e)} className="text-white"> &#8595;&#8593;</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default Converter;