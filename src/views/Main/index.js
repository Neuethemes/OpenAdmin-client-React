import React from "react";
import { Route, Switch } from "react-router-dom";

import LayoutSidebarLeft from "../../components/layout/SidebarLeft";
import LayoutSidebarRight from "../../components/layout/SidebarRight";
import LayoutToolbar from "../../components/layout/Toolbar";
import LayoutFooter from "../../components/layout/Footer";

import PageDashboard from "./pages/Dashboard";
import PageGrid from "./pages/Grid";
import PageForms from "./pages/Forms";
import PageCharts from "./pages/Charts";
import PageWidgets from "./pages/Widgets";
import PageTables from "./pages/Tables";
import PageButtons from "./pages/Buttons";
import PageTypography from "./pages/Typography";
import PageIcons from "./pages/Icons";
import PageNavs from "./pages/Navs";
import PageBadges from "./pages/Badges";
import PageProgress from "./pages/Progress";
import PageNotFound from "./pages/NotFound";

const LayoutMain = () => {
  return (
    <div className="row">

      <LayoutSidebarLeft/>

      <div className="main-wrapper">

        <LayoutToolbar/>

        <main>

          <div>
            <Switch>
              <Route exact path="/" component={PageDashboard}/>
              <Route path="/dashboard" component={PageDashboard}/>
              <Route path="/charts" component={PageCharts}/>
              <Route path="/widgets" component={PageWidgets}/>
              <Route path="/tables" component={PageTables}/>
              <Route path="/grid" component={PageGrid}/>
              <Route path="/buttons" component={PageButtons}/>
              <Route path="/typography" component={PageTypography}/>
              <Route path="/icons" component={PageIcons}/>
              <Route path="/navs" component={PageNavs}/>
              <Route path="/badges" component={PageBadges}/>
              <Route path="/progress" component={PageProgress}/>
              <Route path="/forms" component={PageForms}/>
              <Route path="*" component={PageNotFound}/>
            </Switch>
          </div>

        </main>

        <LayoutFooter/>
      </div>

      <LayoutSidebarRight/>

    </div>
  );
};

export default LayoutMain;
