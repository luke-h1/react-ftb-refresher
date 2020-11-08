import React, { useState, useEffect } from 'react';
import TechItem from '../TechItem/TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);
    console.log(techs);
  };
  if (loading) {
    return <h1>Loading....</h1>;
  } 
  return (
    <>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <ul className="collection">
            {techs.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TechListModal;
