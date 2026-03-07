"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import kartavyaprofilepic from "../assests/kartavyaprofilepic.jpeg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const my = () => {
  const [github, setGithub] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [mail, setMail] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const height = isMobile ? 300 : 600;

  return (
    <div>
      <Navbar />
      <div className="lg:mt-20 lg:m-[6%] m-[2%]">
        <div className="flex lg:flex-row flex-col-reverse pt-6 lg:pt-20">
          {/* LEFT CONTENT */}
          <div className="lg:w-[45%] p-2">
            <h1 className="pt-5 lg:pt-0 text-3xl lg:text-4xl font-bold">
              Software Engineer & GenAI Developer
            </h1>

            <div className="lg:pt-10 pt-5 text-gray-500 block pr-1">
              <div>
                Hey there! I'm <b>Kartavya Gupta</b>, a software engineer
                specializing in full-stack development and AI-powered
                applications. Currently working at Capgemini, I build scalable
                web applications using modern frameworks and integrate
                Generative AI capabilities to solve real-world problems.
              </div>

              <div className="pt-2">
                My expertise spans both frontend technologies like
                <b> React, Next.js, and SAP UI5</b>, and backend systems with
                <b> Python, FastAPI, and Django</b>. I'm particularly focused on
                building intelligent systems using{" "}
                <b>LLMs, LangChain, and AI agent workflows</b>.
              </div>

              <div className="pt-2">
                I also bring experience in{" "}
                <b>SEO and product-focused development</b>, ensuring that
                applications are not only technically strong but also optimized
                for visibility and real-world usage.
              </div>

              <div className="pt-2">
                I enjoy tackling complex challenges, learning new technologies,
                and building impactful digital products.
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex pt-8">
              <Link href="https://www.instagram.com/mera___safarnama/">
                <Instagram
                  color={instagram ? undefined : "#474747"}
                  onMouseEnter={() => setInstagram(true)}
                  onMouseLeave={() => setInstagram(false)}
                />
              </Link>

              <Link href="https://github.com/kartavya512">
                <Github
                  color={github ? undefined : "#474747"}
                  className="ml-5"
                  onMouseEnter={() => setGithub(true)}
                  onMouseLeave={() => setGithub(false)}
                />
              </Link>

              <Link href="https://www.linkedin.com/in/kartavya-gupta-b50294194/">
                <LinkedinIcon
                  color={linkedin ? undefined : "#474747"}
                  className="ml-5"
                  onMouseEnter={() => setlinkedin(true)}
                  onMouseLeave={() => setlinkedin(false)}
                />
              </Link>

              <Link href="mailto:kartavyagupta51@gmail.com">
                <Mail
                  color={mail ? undefined : "#474747"}
                  className="ml-5"
                  onMouseEnter={() => setMail(true)}
                  onMouseLeave={() => setMail(false)}
                />
              </Link>
            </div>

            {/* RESUME */}
            <Link href="https://drive.google.com/drive/folders/1xo96EyKSV0-6qoT5bT8k5EErDegl8ZXy">
              <div className="pt-6 font-bold opacity-60 hover:opacity-100">
                Download CV
              </div>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:pl-32 flex justify-center lg:justify-end lg:pt-0 pt-12 rounded-lg">
            <Image
              src={kartavyaprofilepic}
              alt="Kartavya Gupta"
              width={450}
              height={600}
              className="rounded"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default my;
