import data from "../data/data.json";
import { nanoid } from "nanoid";
export const Cert = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className="font-bold text-3xl">Certifications</h1>
      <ul>
        {data.cert.map((cert) => (
          <li
            className="flex flex-col justify-center items-center list-none"
            key={nanoid()}
          >
            <p>{cert.title}</p>
            <img src={cert.img} alt={cert.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
