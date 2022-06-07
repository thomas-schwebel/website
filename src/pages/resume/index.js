import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css';

function githubLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -5 24 28"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  );
};

function Xp(props) {
    const {title, from, to, children} = props;

    return (
        <>
            <h4>{title} · <span className="date">{from} - {to}</span></h4>
            <div className="desc">
                {children}
            </div>
        </>
    );
}

function Resume() {
  
  return (
    <div className="Resume">
        <section id="photo">
            <img src={`${process.env.PUBLIC_URL}/me.png`} alt='me'/>
        </section>
        <section id="info">
            <div id="name">Thomas <br/>SCHWEBEL</div>
            <div id="contact">
                <ul>
                    <li><span role="img" aria-label="french flag">&#x1f1eb;&#x1f1f7;</span> French</li>
                    <li><span role="img" aria-label="home">&#127968;</span> Berlin, DE</li>
                    <li><span role="img" aria-label="email">&#9993;&#65039;</span> <a href="mailto:contact@thomas-schwebel.fr">contact@thomas-schwebel.fr</a></li>
                    <li id="tel"><span role="img" aria-label="tel">&#128222;</span> <a href="tel:+49 160 95 38 01 95">+49 160 95 38 01 95</a></li>
                    <li>{githubLogo()} <a href="https://github.com/thomas-schwebel">@thomas-schwebel</a></li>
                </ul>
            </div>
        </section>
        <section id="xp">
            <h1>Work XP</h1>
            <article>
                <h3>Freelancer</h3>
                <Xp
                    title="Software Engineer"
                    from="Jan 21"
                    to="now">
                        <p>Platform Team @ Adevinta<br/>
                        - Java 11, Spring boot, Google Cloud, Helm, Kubernetes<br/>
                        - Building a local SAML identity provider based on OAuth + OpenID Connect<br/>
                        - Identity migration from Keycloak, Auth0<br/>
                        - CI/CD pipeline migration</p>
                </Xp>
                <h3>Midlife Crisis - Earth</h3>
                <Xp
                    title="Trainee"
                    from="Jan 20"
                    to="Dec 20">
                    <p>
                        Disconnecting, sitting back and relaxing. Learning about myself and others (places and cultures).<br/>
                        Self organization, travel strategy and planning. Self-investment, nurturing mind and body.
                    </p>
                </Xp>
                <h3>mobile.de GmbH (eBay Inc) - Berlin, DE</h3>
                <Xp
                    title="Tech Lead / Senior Software Engineer"
                    from="Feb 18"
                    to="Dec 19">
                    <p>Driving architectural decisions within the team and collaborating with the platform team.<br/>
                    Building a hybrid server/client side rendering responsive search webapp.</p>	
                    <p>Java 8+ backend using a gaming framework, Golang reverse proxy, React.js frontend.<br/>
                    Dockerized Continuous Delivery on an OpenStack Cloud.</p>
                </Xp>
                <Xp
                    title="Software Engineer"
                    from="Feb 16"
                    to="Jan 18">
                    <p>Revamp of the product detail page. SEO and Advertising related services.<br/>
                    Maintenance and tech debt reduction. AB Testing.</p>	
                    <p>Java 8, Golang, ES6, grid layout</p>  
                </Xp>
                <Xp
                    title="Junior Software Engineer"
                    from="Nov 13"
                    to="Jan 16">
                    <p>Development and maintenance in an international and cross-functional team.<br/>
                        Migration from a monolith to a service oriented architecture.</p>
                    <p>Java 7, jQuery</p>  
                </Xp>
            </article>  
            <article>
                <h3>Sproov - Berlin, DE</h3>
                <Xp
                    title="Backend Developer"
                    from="Sept 13"
                    to="Nov 13">
                    <p>Back-end, Ruby On Rails, TDD.</p>
                </Xp>
            </article>  
            <article>
                <h3>La vita è bella - World</h3>
                <Xp
                    title="Chief Life Explorer"
                    from="Sept 12"
                    to="Sept 13">
                    <p>Responsible for enjoying life, traveling, discovering new places and cultures in our beautiful world.</p>
                </Xp>
            </article>
            <article>
                <h3>Mogreet Inc - Los Angeles, USA</h3>
                <Xp
                    title="Messaging Engineer"
                    from="Mar 12"
                    to="Aug 12">
                    <p>In charge of the maintenance, enhancement and support of the company's core technology, the mobile messaging platform that allow to deliver videos, pictures, audio and text to mobile devices.</p>	
                    <p>Ruby, Rails, Shell, Git, Memcache, Mobile Messaging, SMPP, MM7 and SMIL</p>
                </Xp>
                <Xp
                    title="Software Engineer Intern"
                    from="Sept 10"
                    to="Feb 11">
                    <p>Software development of services and applications delivering mobile messaging services.</p>	
                    <p>RubyCocoa GUI, Ruby SDK, mobile website, Facebook App</p>   
                </Xp>
            </article>
        </section>
        <section id="edu">
            <h1>Education</h1>
            <article>
                <h3>Master Degree - UTBM, France</h3>
                <Xp
                    title="Computer Science"
                    from="2009"
                    to="2012">
                    <p>
                        French Engineering School<br/>
                        Speciality in Software Engineering<br/>
                        Minor in Business Management<br/>
                    </p>
                </Xp>
            </article> 
            <article>
                <h3>DUT - University of Strasbourg, France</h3>
                <Xp
                    title="Computer Science"
                    from="2007"
                    to="2009">
                    <p>
                        Technological University Diploma: a 2-year intensive diploma
                    </p>
                </Xp>
            </article> 
        </section>
        <section id="about">
            <h1>About</h1>
            <article>
                <p>Freelance "Fullstack" <b>Software Engineer</b> eager to learn and grow technically.<br/><br/>
                    Backend > Frontend, Styling not so much, Happy to automate CI/CD.<br/><br/>
                    Affable and fun to work with, I like to pay attention to details when I build elegant and simple solutions that allow to move fast while breaking things :-)<br/><br/>
                    Looking for a creative place with a great culture where people are enabled.</p>
            </article>
        </section>
        <section id="skills">
            <h1>Skills</h1>
            <article>
                <ul>
                    <li>Java 8+</li>
                    <li>Golang</li>
                    <li>JavaScript ES6+</li>
                    <li>React.js</li>
                    <li>jQuery</li>
                    <li>Jenkins</li>
                    <li>Docker</li>
                    <li>Cloud</li>
                    <li>Git</li>
                    <li>Agile</li>
                    <li>OKR</li>
                    <li>Quality Control</li>
                </ul>
            </article>
        </section>
        <section id="lang">
            <h1>Languages</h1>
            <article>
                <span role="img" aria-label="french flag">&#x1f1eb;&#x1f1f7;</span> French · native<br/>
                <span role="img" aria-label="american flag">&#127482;&#127480;</span> English · fluent<br/>
                <span role="img" aria-label="german flag">&#127465;&#127466;</span> German · very good<br/>
                <span role="img" aria-label="italian flag">&#127470;&#127481;</span> Italian · good<br/>
            </article>
        </section>
        <section id="links">
            <h1>Links</h1>
            <article>
                <span role="img" aria-label="photos">&#x1f4f7;</span> <Link to="/photos">Some stuff I photographied</Link><br/>
                {githubLogo()} <Link to="/code">Some stuff I coded</Link><br/>
            </article>
        </section>
        <section id="footer" className="center">
            <p id="footnote">© Thomas SCHWEBEL 2020</p>
        </section>
    </div>
  );
}

export default Resume;