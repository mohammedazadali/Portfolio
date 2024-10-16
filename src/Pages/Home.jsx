import React from 'react'
import Hero from '../Components/Hero'
import Review from '../Components/Review'
import About from '../Components/About'
import CTA from '../Components/CTA'
import Skill from '../Components/Skill'
import Seo from '../ui/Seo'
import Project from '../Components/Projects'
import Projects from '../Components/Projects'
import Services from '../Components/Services'

const Home = () => {
  return (
    <>
    <Seo
    title={"Mohammed Azad Ali – Full-Stack Developer | Web & Machine Learning Solutions"}
    description={"Welcome to the portfolio of Mohammed Azad Ali, a full-stack developer offering expertise in web development, React, Node.js, machine learning, and software solutions. Explore projects, services, and client success stories."}/>
    <section>
        <Hero/>
        <Services/>
        <About/>
        <Skill/>
        <Projects/>
        <Review/>
        <CTA/>
    </section>
    </>
  )
}

export default Home