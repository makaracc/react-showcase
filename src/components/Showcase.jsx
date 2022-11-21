import data from "../data/data.json";
import { nanoid } from "nanoid";
export const Showcase = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="font-bold text-3xl ">Projects</h1>
      <ul className="flex flex-row">
        {data.projects.map((project) => (
          <div
            key={nanoid()}
            className="flex flex-col bg-slate-400 rounded-xl p-3"
          >
            <img
              loading="lazy"
              src={project.image}
              alt={project.name}
              width={300}
            />
            <p className="text-xs text-center">{project.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
