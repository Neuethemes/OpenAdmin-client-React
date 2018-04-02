import React from "react";
import { Route, Switch } from "react-router-dom";

import SidebarLeftComponent from "../../components/layout/SidebarLeft";
import SidebarRightComponent from "../../components/layout/SidebarRight";
import ToolbarComponent from "../../components/layout/Toolbar";
import FooterComponent from "../../components/layout/Footer";

import DashboardPage from "./pages/Dashboard";
import GridPage from "./pages/Grid";
import FormsPage from "./pages/Forms";
import ChartsPage from "./pages/Charts";
import WidgetsPage from "./pages/Widgets";
import TablesPage from "./pages/Tables";
import ButtonsPage from "./pages/Buttons";
import TypographyPage from "./pages/Typography";
import IconsPage from "./pages/Icons";
import NavsPage from "./pages/Navs";
import BadgesPage from "./pages/Badges";
import ProgressPage from "./pages/Progress";
import NotFoundPage from "./pages/NotFound";

export const HomeView = () => {
  return (
    <div className="row">

      <SidebarLeftComponent/>

      <div className="main-wrapper">

        <ToolbarComponent/>

        <main>

          <div>
            <Switch>
              <Route exact path="/" component={DashboardPage}/>
              <Route path="/dashboard" component={DashboardPage}/>
              <Route path="/charts" component={ChartsPage}/>
              <Route path="/widgets" component={WidgetsPage}/>
              <Route path="/tables" component={TablesPage}/>
              <Route path="/grid" component={GridPage}/>
              <Route path="/buttons" component={ButtonsPage}/>
              <Route path="/typography" component={TypographyPage}/>
              <Route path="/icons" component={IconsPage}/>
              <Route path="/navs" component={NavsPage}/>
              <Route path="/badges" component={BadgesPage}/>
              <Route path="/progress" component={ProgressPage}/>
              <Route path="/forms" component={FormsPage}/>
              <Route path="*" component={NotFoundPage}/>
            </Switch>
          </div>

        </main>

        <FooterComponent/>
      </div>

      <SidebarRightComponent/>

    </div>
  );
};
