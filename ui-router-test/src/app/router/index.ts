import { HelloComponent } from "../hello/hello.component";
import { AboutComponent } from "../about/about.component";

const helloState = {
  name: 'hello',
  url: '/hello',
  component: HelloComponent
};

const aboutState = {
  name: 'about',
  url: '/about',
  component: AboutComponent
};

export const allStates = [
  helloState,
  aboutState
];
