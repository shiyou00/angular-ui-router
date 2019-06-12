import { HelloComponent } from "../hello/hello.component";
import { AboutComponent } from "../about/about.component";
import { FolderListComponent  } from "../folder-list/folder-list.component";
import { MessageListComponent } from "../message-list/message-list.component";
import { FooListComponent } from "../foo-list/foo-list.component";
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

const parentState = {
  name: 'folderlist',
  url: '/folder',
  component: FolderListComponent
};

const childState = {
  name: 'folderlist.messagelist',
  url: '/message',
  component: MessageListComponent
};


const childTwoState = {
  name: 'folderlist.foolist',
  url: '/foo',
  component: FooListComponent
};

export const allStates = [
  helloState,
  aboutState,
  parentState,
  childState,
  childTwoState
];
