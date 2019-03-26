import React from "react";
import { shallow } from 'enzyme';
import HatenaBookmark from "../src/HatenaBookmark";

describe("Should be Rendered without any throw", () => {
  const component = shallow(<HatenaBookmark url='your any url'/>);
  expect(component.instance()).not.toBeNull();
});

describe("Component Test", () => {
  it("Compare URL", () => {
    const hatenaBookmark = shallow(
      <HatenaBookmark url='https://google.com'/>
    );
    expect(hatenaBookmark.instance().props.url).toEqual('https://google.com');
  });
})