import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const Seo  = ({ title, description, children }) => {
    const sectionRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Change title and meta description when this section is visible
              document.title = title;
              const metaDescription = document.querySelector('meta[name="description"]');
              if (metaDescription) {
                metaDescription.setAttribute('content', description);
              }
            }
          });
        },
        { threshold: 0.5 } // Adjust threshold for triggering the observer
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [title, description]);
  
    return (
      <section ref={sectionRef}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {children}
      </section>
    );
  };

export default Seo;
