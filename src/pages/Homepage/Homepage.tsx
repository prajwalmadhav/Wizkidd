import Footer from '../../components/LandingPage/Footer/Footer';
import NavBar from '../../components/LandingPage/NavBar/Navbar';
import Hero from './../../components/LandingPage/Hero/Hero';
import Features2 from '../../components/LandingPage/Features/Features2';
import Features3 from '../../components/LandingPage/Features/Features3';
import Testimonials from './../../components/LandingPage/Testimonials/Testimonials';
import Features5 from '../../components/LandingPage/Features/Features5';
import Features6 from '../../components/LandingPage/Features/Features6';
import Features7 from '../../components/LandingPage/Features/Features7';
import Features1 from '../../components/LandingPage/Features/Features1';
import Features33 from '../../components/LandingPage/Features/Features33';
import { useRedirectToDashboard } from '../../hooks';
import { Navigate } from 'react-router-dom';

export default function Homepage() {
  const userLoggedIn = useRedirectToDashboard();
  //   console.log(userLoggedIn);
  if (userLoggedIn) return <Navigate to={'/profile'} />;

  return (
    <>
      <NavBar />
      <Hero />
      <Features1 />
      <Features2 />

      <Features7 />
      <Features3 />
      <Features33 />
      {/* <Features4 /> */}
      <Features5 />
      <Features6 />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
