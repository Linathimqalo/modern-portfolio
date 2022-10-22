import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, socials, projects }: Props) => {
  return (
    <div
      className="text-white bg-[#242424] h-screen snap-y 
    snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Linathi Mqalo Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      {/*About */}
      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>

      {/*Experience */}
      <section className="snap-center" id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      {/*Skills */}
      <section className="snap-start" id="skills">
        <Skills skills={skills} />
      </section>

      {/*Projects */}
      <section className="snap-start" id="projects">
        <Projects projects={projects} />
      </section>

      {/*Contact */}
      <section className="snap-start" id="contactme">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              alt="Home"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLuLab5iefjvAD2wVjPIHFEOFPIUlPURY2w&usqp=CAU"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      revalidate: 100,
    },
    //Next.js will attempt to keep re-generating the page;
    //Whenever a request comes in
    //At most once every 100 seconds
    
  };
};
