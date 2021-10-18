import React from "react";
import { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { ROUTE } from "@constants/routes";
import PAGE_ROUTER from "@constants/page-router";
import ScrollToTop from "./ScrollToTop";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function PageRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <div>
          <ScrollToTop />
          <Switch>
            <Route path="*">
              <AnimationApp />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

function AnimationApp() {
  let location = useLocation();

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Switch>
            {PAGE_ROUTER.map((e) => (
              <Route key={e.code} path={e.path} exact={e.exact}>
                {e.component}
              </Route>
            ))}

            <Route path="*">
              <Redirect to={ROUTE.HOME} />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
