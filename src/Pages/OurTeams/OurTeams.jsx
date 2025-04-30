import React, { useEffect, useState } from "react";
import Teams from "./Teams";

const OurTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="max-w-screen-xl container mx-auto">
      <div className="text-center mt-10 mb-10">
        <p className="text-primary mb-5">OUR TEAM</p>

        <h1 className="text-2xl font-bold md:text-4xl mb-10">
          Meet The Experts
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {teams.map((team) => (
          <Teams key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default OurTeams;
