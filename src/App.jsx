import { BrowserRouter } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import AnimatedCursor from "react-animated-cursor";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "./context/ModalContext";

function App() {
  const About = lazy(() => import("./components/About"));
  const Experience = lazy(() => import("./components/Experience"));
  const Tech = lazy(() => import("./components/Tech"));
  const Works = lazy(() => import("./components/Works"));
  const Feedbacks = lazy(() => import("./components/Feedbacks"));
  const ContactSection = lazy(() => import("./shared/ContactSection"));
  const Navbar = lazy(() => import("./components/Navbar"));
  const Hero = lazy(() => import("./components/Hero"));

  return (
    <Fragment>
      <ModalProvider>
        {window.innerWidth > 500 && <AnimatedCursor color="93, 134, 185" />}
        <BrowserRouter>
          <div className="relative bg-primary">
           
            <div className="">
              <Suspense>
                <Navbar />
                <Hero />
              </Suspense>
            </div>
            <Suspense>
              <About />
            </Suspense>
            <Suspense>
              <Experience />
            </Suspense>
            <Suspense>
              <Tech />
            </Suspense>
            <Suspense>
              <Works />
            </Suspense>
            <Suspense>
              <Feedbacks />
            </Suspense>
            <Suspense>
              <ContactSection />
            </Suspense>
          </div>
        </BrowserRouter>
      </ModalProvider>
    </Fragment>
  );
}

export default App;
