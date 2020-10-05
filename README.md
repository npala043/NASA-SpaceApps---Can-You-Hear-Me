<h2>Summary</h2>
Our project provides a user with an interactive webpage, showcasing a visualization of how information would travel from Earth to Mars, and vice versa. This page will offer an approximate calculation of Mars' distance from Earth, determining how long data will take to travel that distance. It will also educate users on potential obstacles during transmission, both mechanical and atmospheric.

<h2>How We Addressed This Challenge</h2>

Our team developed a webpage that visualizes the transmission of data and potential obstacles over millions of KMs between Earth and Mars.

As we progress further into the commercialization of the space industry, expertise and efficacy in communication over long distances will be crucial in supporting humanity's future endeavors.

Our webpage will provide an approximate calculation of Mars' distance from Earth and use this figure to determine how long it would take data to travel that distance. This is visualized as a bundle of static which travels at 60x speed, demonstrating the huge distances traveled in space even at the speed of light. It will also demonstrate potential obstacles in clear data transmission, such as equipment malfunctions, signal strength degradation over time, and environmental hazards such as the sun, sandstorms, clouds, and other atmospheric debris.

This project aims to visualize and bring to light important aspects of data transmission over millions of KMs in order to educate others (and ourselves) on problems which will become more and more relevant to our everyday lives as we progress technologically.

<h2>How We Developed This Project</h2>

We were inspired by the idea of exploring and the challenge of sending data across space and, in this challenge, specifically to Mars.

We started by simplifying the background information as much as possible. Considering the current challenges being faced by sending data to/from Mars, we tried to come up with a way of demonstrating these challenges visually.

Our first approach was a simple locally hosted website to show an animation of the data traveling to/from Mars with the status of the data, its signal strength, the distance travelled, etc.

We used Visual Studio Code with Live Share to start coding our project using HTML, CSS, and JavaScript.

One of the first problems we encountered was how to get Live Share to work for all of our team members, but once we figured it out, we got ourselves organized and went to coding right away on a basic layout for the website. We started the project with only 3 group members, but along the way we recruited 2 more people that were looking for a team to join to help with the research and design portions of this challenge.

The second challenge we faced as we continued to develop our idea was finding a way to obtain a real-time distance between planets to calculate how fast the data will travel in certain conditions and dates. Since we were unable to find an api that contained the real-time data, we realized that if we wanted to make a real-time calculation on the position of Mars to Earth we would need to understand mathematics to a degree that can't be learned within two days. We made a second breakthrough when we came across this website, which used calculations to approximate the distance between the two planets. This inspired us to implement an approximate real-time calculation of the Earth/Mars distance based on the date using data from another part of the same website based off of the cos calculations for the closest and farthest points of orbital pattern of Mars within two-years.

<h2>How We Used Space Agency Data in This Project</h2>
When we were looking for ways to obtain real-time distances between planets, we started searching for APIs or libraries to use. After searching with no avail, we reached out to CSA and they provided us with an API that we could use. With this API, we were able to get closer to obtaining the distances between Earth and Mars and work with some formulas.

<h2>Project Demo</h2>

[Link Here]

<h2>Project Code</h2>

https://github.com/npala043/NASA-SpaceApps---Can-You-Hear-Me

<h2>Data & Resources</h2>
1. Earth-Mars Comparison

Astronomical unit

Communications | Rover

Cosmic ray

Data degradation

https://mars.nasa.gov/msl/mission/communications/#radio-waves

https://solarsystem.nasa.gov/moons/mars-moons/in-depth/#overview

In what part of the electromagnetic spectrum does the Sun emit energy?

Mars Live Position and Data | TheSkyLive.com

Measurement and Analysis of Radio Wave Coverage in Industrial Environments

Overview | Mars

Radio propagation

Radio Wave Propagation Handbook for Communication on and Around Mars

Solar System Calculator - by Don Cross

Ultra high frequency

What interferes with radio waves in space?

What Is the Distance Between Earth and Mars?

<h2>Tags</h2>

#communication, #earth, #mars, #radiowaves, #satellite, #data
