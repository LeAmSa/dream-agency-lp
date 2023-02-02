import {
  AboutUs,
  Footer,
  Header,
  Hero,
  RecentWork,
  Testimonials,
  WhatWeDo,
} from "./components";

import { services, works, testimonials } from "./mockups";

function App() {
  return (
    <div className="relative text-purple overflow-x-hidden">
      <Header />

      <Hero />

      <WhatWeDo services={services} />

      <AboutUs />

      <RecentWork works={works} />

      <Testimonials testimonials={testimonials} />

      <Footer />
    </div>
  );
}

export default App;
