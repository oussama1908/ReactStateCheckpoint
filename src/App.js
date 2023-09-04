import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    currentTime: 0,
    person: {
      fullName: 'John Doe',
      bio: 'A passionate developer.',
      imgSrc: 'https://focus.belfasttelegraph.co.uk/thumbor/zJgCFuGpo1FtKzF35c78Gng2KYs=/0x10:1920x1069/960x640/prod-mh-ireland/1cf00c14-952b-11ed-84d7-0210609a3fe2' , // Make sure this path is correct
      profession: 'Software Engineer',
    },
    show: false,
    // mountTime: new Date(),
  };

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
      currentTime: 0, // Reset the currentTime when toggling
    }));

  };

  componentDidMount() {
   
    this.startTimer(); 
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Clear the timer when the component unmounts
  }

  startTimer() {
    this.timer = setInterval(() => {
     
      this.setState((prevState) => ({
        currentTime: prevState.currentTime + 1,
      }));
    }, 1000);
  }

  render() {
    console.log('Rendering component');
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <img style={{ width: '200px' , height:'250px' }}  src={imgSrc} alt="Profile" />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        {show && <p>Time since mount: {this.state.currentTime} seconds</p>}
      </div>
    );
  }
}

export default App;
