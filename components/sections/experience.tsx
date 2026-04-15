import userData from "@/config/userData";
import ExperienceCard from "../ui/experience-card";

const Experience = () => {
  const { experience } = userData;

  return (
    <div className="border-b border-border border-dashed">
      <div className="border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-2 md:py-4">
        <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
            LEADERSHIP
          </h2>
        </div>
        <div className="group/experience flex flex-col justify-center gap-4">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              id={exp.id}
              role={exp.role}
              companyName={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              link={exp.link}
              description={exp.description}
              logo={exp.logo} // Pass the logo down
              isFirst={index === 0}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;