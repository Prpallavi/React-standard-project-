/* import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


describe("The components are rendered", () => {
    it("renders App component without crashing", () => {
      shallow(<App />);
    });
  
    it("renders Form component without crashing", () => {
      shallow(<Form />);
    });
  
    it("renders FormList component without crashing", () => {
      shallow(<FormList />);
    });
  
    it("renders title without crashing", () => {
      const wrapper = shallow(<App />);
  
      const header = <h1>Become a volunteer</h1>;
      expect(wrapper.contains(header)).toBe(true);
    });
  
    it("renders form inputs", () => {
      const wrapper = shallow(<Form />);
  
      expect(wrapper.find('input[name="volunteerName"]')).toHaveLength(1);
      expect(wrapper.find('input[name="hours"]')).toHaveLength(1);
      expect(wrapper.find('select[name="jobTitle"]')).toHaveLength(1);
    });
  
    it("renders submit button without crashing", () => {
      const wrapper = shallow(<Form />);
  
      const label = wrapper.find("#submit-button").text();
      expect(label).toBe("Submit");
    });
  }); */