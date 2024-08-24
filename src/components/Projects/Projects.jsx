import Card from "../Card/Card";
import TopSection from "../TopSection/TopSection";
export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container max-w-[100vw] pt-20 w-full  dark:bg-bg-black bg-white">
          <div className="top  px-[70px] max-[992px]:p-12">
            <TopSection
              title="Portfolio"
              desc="My Creative Works Latest"
              span="Projects"
              btn={{ show: true, content: "View Github" }}
              img1="/img/arrow2.png"
            />
          </div>
          <div className="cards flex justify-between items-center  px-[70px] pt-14 gap-[58px] flex-wrap  max-[992px]:p-12">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}
