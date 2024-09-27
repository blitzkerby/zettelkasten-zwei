```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterComponent = () => {
  const [universities, setUniversities] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [majors, setMajors] = useState([]);
  const [universityMajors, setUniversityMajors] = useState([]);
  const [scholarshipMajors, setScholarshipMajors] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    location: '',
    major: '',
    scholarshipAmount: 0,
  });

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      const universitiesResponse = await axios.get('/api/universities');
      const scholarshipsResponse = await axios.get('/api/scholarships');
      const majorsResponse = await axios.get('/api/majors');
      const universityMajorsResponse = await axios.get('/api/university-majors');
      const scholarshipMajorsResponse = await axios.get('/api/scholarship-majors');

      setUniversities(universitiesResponse.data);
      setScholarships(scholarshipsResponse.data);
      setMajors(majorsResponse.data);
      setUniversityMajors(universityMajorsResponse.data);
      setScholarshipMajors(scholarshipMajorsResponse.data);
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const filteredUniversities = universities.filter((university) => {
    const universityMajorIds = universityMajors
      .filter((um) => um.university_id === university.id)
      .map((um) => um.major_id);

    const majorMatch = filter.major
      ? universityMajorIds.includes(parseInt(filter.major))
      : true;

    return (
      university.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      university.location.toLowerCase().includes(filter.location.toLowerCase()) &&
      majorMatch
    );
  });

  const filteredScholarships = scholarships.filter((scholarship) => {
    const scholarshipMajorIds = scholarshipMajors
      .filter((sm) => sm.scholarship_id === scholarship.id)
      .map((sm) => sm.major_id);

    const majorMatch = filter.major
      ? scholarshipMajorIds.includes(parseInt(filter.major))
      : true;

    return (
      scholarship.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      scholarship.amount >= filter.scholarshipAmount &&
      majorMatch
    );
  });

  return (
    <div>
      <h1>Filter Component</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filter.location}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="scholarshipAmount"
          placeholder="Scholarship Amount"
          value={filter.scholarshipAmount}
          onChange={handleFilterChange}
        />
        <select
          name="major"
          value={filter.major}
          onChange={handleFilterChange}
        >
          <option value="">Select Major</option>
          {majors.map((major) => (
            <option key={major.id} value={major.id}>
              {major.name}
            </option>
          ))}
        </select>
      </div>
      <h2>Filtered Universities</h2>
      <ul>
        {filteredUniversities.map((university) => (
          <li key={university.id}>{university.name}</li>
        ))}
      </ul>
      <h2>Filtered Scholarships</h2>
      <ul>
        {filteredScholarships.map((scholarship) => (
          <li key={scholarship.id}>{scholarship.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;

```