import Image from "next/image";
import Link from "next/link";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import CircleBox from "@/components/common/CircleBox";
import Row from "@/components/common/Row";
import socialLinks from "@/data/socialLinks";

const HomeSection1 = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--dialogColor)]">
      <ConstraintedBox classNames="p-4 pb-16 pt-8 sm:pt-16">
        <WrappedBox classes="justify-items-stretch">
          <Column classes="justify-center">
            <p className="max-w-sm">
              Hi 👋,{" "}
              <span className="text-[var(--primaryColor)]">My name is </span>
            </p>

            <h1 className="text-[var(--primaryColor)]">Noluvuyo Manxeba</h1>

            <p className="font-semibold max-w-sm">
              Graphic Designer & Fullstack Web Developer
            </p>

            <p className="mt-8 max-w-sm">
            I am a Full Stack Web developer based in Cape Town, South Africa. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
            As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in web development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
            Throughout my bootcamp with Hyperion Dev, I have worked on a wide range of projects, from simple static websites to applications. I am experienced in working with a variety of development tools and frameworks, including React, next.js, Node.js, and Express. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.

            </p>

            <button
              name="talk-btn"
              type="button"
              className="app__filled_btn mt-10"
              href="vuyongele@gmail.com"
            > 
              Let&apos;s Talk
            </button>

            <Column classes="mt-8">
              <p>Follow me here</p>
              <Row classes="mt-2">
                {socialLinks.map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="text-white bg-[var(--primaryColor)] p-2 rounded-full flex items-center justify-center mr-2 last:mr-0 hover:bg-[var(--primaryColor50)] transition duration-300 ease-in-out"
                    >
                      {link.icon}
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <CircleBox classes="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] pointer-events-none justify-self-center sm:justify-self-end">
            <Image
              src="/images/profile.JPEG"
              alt="profile"
              width={400}
              height={400}
              sizes="100%"
              priority
              placeholder="blur"
              blurDataURL="/images/profile.JPEG"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1",
              }}
            />
          </CircleBox>
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
