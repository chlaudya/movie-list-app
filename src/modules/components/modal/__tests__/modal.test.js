import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Modal from "modules/components/modal";

const mockModalProps = {
  visible: true,
  movieTitle: "Test Title",
  movieImages: "http://test-images",
};

describe("<Modal />", () => {
  it("should render component successfully", () => {
    const wrapper = shallow(<Modal {...mockModalProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have the default class `Modal`", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.props().children.props.className).toEqual("Modal");
  });

  it("should accept props `movieTitle`, when its provided", () => {
    const wrapper = shallow(<Modal movieTitle={mockModalProps.movieTitle} />);
    expect(wrapper.props().children.props.title).toEqual(
      mockModalProps.movieTitle
    );
  });

  it("should accept props `movieImages`, when its provided", () => {
    const wrapper = shallow(<Modal movieImages={mockModalProps.movieImages} />);
    const images = <img src="http://test-images" width="50%" />;
    expect(wrapper.contains(images)).toEqual(true);
  });

  it("should accept props `closeModal`, when its provided", () => {
    const testAction = jest.fn();
    const wrapper = shallow(<Modal closeModal={testAction} />);
    const closeModal = wrapper.props().children.props.onCancel;
    expect(closeModal).toEqual(testAction);
  });
});
