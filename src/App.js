/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [
                {
                    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
                    author: 'Mahatma Gandhi'
                },
                {
                    text: 'That which does not kill us makes us stronger.',
                    author: 'Friedrich Nietzsche'
                },
                {
                    text: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
                    author: 'Bernard M. Baruch'
                },
                {
                    text: 'We must not allow other people’s limited perceptions to define us.',
                    author: 'Virginia Satir'
                },
                {
                    text: 'Do what you can, with what you have, where you are.',
                    author: 'Theodore Roosevelt'
                }
            ],
            quote: {
                text: '',
                author: ''
            }
        }

        this.changeQuote = this.changeQuote.bind(this);
    }

    changeQuote = () => {
        let index =  Math.floor(Math.random()*this.state.quotes.length);
        this.setState({
            quote: {
                text: this.state.quotes[index].text,
                author: this.state.quotes[index].author
            }
        });
    }

    render() {
        return (
            <div id="quote-box">
                <h1 id="text">{this.state.quote.text}</h1>
                <p id="author">{this.state.quote.author}</p>
                <button onClick={this.changeQuote} id="new-quote">New</button>
            </div>
        )
    }
}

export default App;