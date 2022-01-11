import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  quotes: Array<Quote>;
  quote: Quote;
}

interface Quote {
  text: string;
  author: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        text: '',
        author: '',
      },
      quotes: [
        {
          text: 'You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.',
          author: 'David Goggins',
        },
        {
          text: "Trust is hard to come by. That's why my circle is small and tight. I'm kind of funny about making new friends.",
          author: 'Eminem',
        },
        {
          text: 'You would be amazed what the ordinary guy knows.',
          author: 'Matt Drudge',
        },
        {
          text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
          author: 'Dwayne Johnson',
        },
        {
          text: 'The moment anyone tries to demean or degrade you in any way, you have to know how great you are. Nobody would bother to beat you down if you were not a threat.',
          author: 'Cicely Tyson',
        },
        {
          text: "I've grown most not from victories but from setbacks. If winning is God's reward, then losing is how he teaches us.",
          author: 'Serena Williams',
        },
        {
          text: 'How does this advance my personal position? You need to think about that 24/7.',
          author: 'Gerri Kellman',
        },
        {
          text: 'I care about decency and humanity and kindness. Kindness today is an act of rebellion.',
          author: 'Pink',
        },
        {
          text: "If you don't fall, how are you going to know what getting up is like?",
          author: 'Steph Curry',
        },
        {
          text: 'My only goal is to stay focused on my craft and make sure my life is as sharp as it can be to attack any character that is given to me.',
          author: 'Michael K. Williams',
        },
      ],
    };
    this.updateQuote = this.updateQuote.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  updateQuote() {
    this.setState({
      quote: this.getRandomQuote(),
    });
  }

  getRandomQuote(): Quote {
    const index = Math.trunc(Math.random() * this.state.quotes.length);
    return this.state.quotes[index];
  }

  componentDidMount() {
    this.updateQuote();
  }

  render() {
    const quote = this.state.quote;
    return (
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quote&text=${quote.text} - ${quote.author}`}
          target="_blank"
        >
          Tweet
        </a>
        <button id="new-quote" onClick={this.updateQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
