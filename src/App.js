/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import './App.css';


const random_rgba = () => {
    let color = [
        '#f26957',
        '#8fc7f2',
        '#a988f2',
        '#f28dd0',
        '#9df28d',
        '#8df2ae',
        '#f2b28d',
        '#fc7672',
        '#a572fc',
        '#572222',
        '#3c2257'
    ]
    return color[Math.floor(Math.random()*color.length)];
}

let color = random_rgba();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [
                {
                    "text": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
                    "author": "Mahatma Gandhi"
                },
                {
                    "text": "That which does not kill us makes us stronger.",
                    "author": "Friedrich Nietzsche"
                },
                {
                    "text": "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
                    "author": "Bernard M. Baruch"
                },
                {
                    "text": "We must not allow other people’s limited perceptions to define us.",
                    "author": "Virginia Satir"
                },
                {
                    "text": "Do what you can, with what you have, where you are.",
                    "author": "Theodore Roosevelt"
                },
                {
                    "text": "This above all: to thine own self be true.",
                    "author": "William Shakespeare"
                },
                {
                    "text": "If you cannot do great things, do small things in a great way.",
                    "author": "Napoleon Hill"
                },
                {
                    "text": "If opportunity doesn’t knock, build a door.",
                    "author": "Milton Berle"
                },
                {
                    "text": "Wise men speak because they have something to say; fools because they have to say something.",
                    "author": "Plato"
                }
            ],
            quote: {
                text: 'Be yourself; everyone else is already taken.',
                author: 'Oscar Wilde'
            }
        }

        this.changeQuote = this.changeQuote.bind(this);
    }

    changeQuote = () => {
        let index =  Math.floor(Math.random()*this.state.quotes.length);
        this.setState((state) => ({
            quote: {
                text: state.quotes[index].text,
                author: state.quotes[index].author
            }
        }));
        color = random_rgba();
    }

    render() {
        return (    
        <div id="background" style={{color: color, background: color, height: '100%'}}>        
            <div id="quote-box" style = {{background: 'white'}}>
                <h2 id="text"><i className="fa fa-quote-left fa-2x"></i> {this.state.quote.text}</h2>
                <p id="author">- {this.state.quote.author}</p>
                <div id="buttons">
                <a target="_blank" type="button" href="twitter.com/intent/tweet" id="tweet-quote" style={{color:color}}><i className="fa fa-twitter"></i></a>
                <button onClick={this.changeQuote} id="new-quote" style={{color:color}}>New Quote</button>
                </div>
            </div>
            <a href="https://github.com/Cedgo1997" style={{color:"white", textAlign: 'center'}}>Made by César González <i className="fa fa-github"></i></a>
         </div>
        )
    }
}

export default App;