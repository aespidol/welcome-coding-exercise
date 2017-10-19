import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './components/Welcome';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Checking Markup of Welcome Component', ()=>{
  const customImgLink = "https://www.askideas.com/media/13/Welcome-Were-Glad-Youre-Here.jpg";
  const wrapper = shallow(<Welcome/>)
  const customWrapper = shallow(<Welcome imgLink={customImgLink} />)
  it('renders without breaking', ()=>{
    expect(wrapper.length).toEqual(1)
  })
  it('renders welcome heading', ()=>{
    const welcomeHeading = <h1>Welcome to T-Mobile</h1>;
    expect(wrapper.contains(welcomeHeading)).toEqual(true);
  })
  it('renders subheading', ()=>{
    const subHeading = <h2>We're excited to meet you</h2>;
    expect(wrapper.contains(subHeading)).toEqual(true);
  })
  it('renders default image', ()=>{
    const defaultImg = <img src="http://via.placeholder.com/400x200" className="img-responsive" alt="Welcome" />
    expect(wrapper.contains(defaultImg)).toEqual(true);
  })
  it('renders custom image', ()=>{
    const customImg = <img src={customImgLink} className="img-responsive" alt="Welcome" />
    expect(customWrapper.contains(customImg)).toEqual(true);
  })
})
