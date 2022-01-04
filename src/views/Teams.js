// map through teams & render component for each team
import React, { useEffect, useState } from 'react';
import { getTeams } from '../services/teamData';
import TeamList from '../components/TeamList';

export default function Teams() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Teams loading...</h1>;

  return <TeamList teams={teams} />;
}
