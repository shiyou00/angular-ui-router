import { UIView } from "@uirouter/angular";
import { baseRouterName } from "../shared/consts";
import { ManageComponent } from "../pages/manage/manage.component";
import { IndexComponent } from "../pages/index/index.component";

// UI架子，默认会注入到app.component.html的ui-view中
const baseState = {
  name: baseRouterName,
  url: "",
  component: IndexComponent,
  redirectTo: `${baseRouterName}.manage`, // 定向
  breadcrumb: {
    title: "首页"
  }
};

// 内容，会注入到`${baseRouterName}.manage`中的<div style="padding: 0 24px; min-height: 280px;" ui-view></div>
const manageState = {
  name: `${baseRouterName}.manage`,
  url: "/manage",
  component: ManageComponent,
  breadcrumb: {
    title: "管理页"
  }
};

export const adminStates = [
  baseState,
  manageState
];
