import { HelloComponent } from "../hello/hello.component";
import { AboutComponent } from "../about/about.component";
import { FolderListComponent  } from "../folder-list/folder-list.component";
import { MessageListComponent } from "../message-list/message-list.component";
import { FooListComponent } from "../foo-list/foo-list.component";
import { getListResolver } from "../resolves/getListResolve";
import { getMessageResolver } from "../resolves/getMessageResolve";

const helloState = {
  name: 'hello',
  url: '/hello',
  component: HelloComponent
};

const aboutState = {
  name: 'about',
  url: '/about?id',
  component: AboutComponent,
  onEnter: function(trans, state) {
    console.log("Entering " , state , trans);
  },
  onExit: function(trans, state) {
    console.log("Leaving " + state.name);
  },
  onRetain: function(trans, state) {
    console.log(state.name + " is still active!");
  },
  params: {
    id: {
      value: 'aabcc123' // 设置默认的参数值
    }
  }
};

const parentState = {
  name: 'folderlist',
  url: '/folder',
  component: FolderListComponent,
  resolve:[getListResolver]
};

const childState = {
  name: 'messagelist',
  parent:'folderlist',
  url: '/message',
  component: MessageListComponent,
  resolve:[getMessageResolver]
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
