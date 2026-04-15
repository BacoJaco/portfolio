import userData from "@/config/userData";
import Link from "next/link";
import { 
  Tooltip, 
  TooltipPopup, 
  TooltipProvider, 
  TooltipTrigger 
} from "../ui/tooltip";

const About = () => {
  const { about, personalInfo, projects } = userData;
  
  // Gets the first project to feature in the "Currently working on" section
  const currentProject = projects[0];

  return (
    <div className="border-b border-border border-dashed">
      <div className="border-x border-border border-dashed p-4 w-full mx-auto space-y-4 py-2 md:py-4">
        <div className="text-muted-foreground text-base tracking-tight">
          
          <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
            <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
              SUMMARY
            </h2>
          </div>

          {/* Renders your main about text */}
          <div className="mt-4 leading-relaxed">
            {about}
          </div>
        
          {/* Dynamically displays the first project from your userData */}
          {currentProject && (
            <div className="mt-6">
              <div className="text-muted-foreground leading-relaxed">
                I am currently working on&nbsp;
                <TooltipProvider delay={0}>
                  <Tooltip>
                    <TooltipTrigger className="inline-flex">
                        <span className="text-sm border-b cursor-pointer border-dashed border-foreground/60 text-foreground hover:text-primary transition-colors">
                          {currentProject.title}
                        </span>
                    </TooltipTrigger>
                    <TooltipPopup side="top" className="w-72 p-0 overflow-hidden">
                      {currentProject.imageSrc && (
                        <img
                          src={currentProject.imageSrc}
                          alt={currentProject.title}
                          className="w-full h-32 rounded object-cover mt-0.5"
                        />
                      )}
                      <p className="px-0.5 py-1.5 text-xs text-muted-foreground">
                        {currentProject.description}
                      </p>
                    </TooltipPopup>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}

          <br />
          <div>
            My resume can be found&nbsp;
            <Link
              href={personalInfo.resume || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b cursor-pointer border-dashed border-foreground/60 text-foreground hover:text-primary transition-colors"
            >
              here
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;