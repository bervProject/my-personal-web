import { useEffect, useState } from 'react';
import { Container, Heading, Table } from 'react-bulma-components';
import services from '../services';
import { showMonthYearOnly } from '../utils/date';

export default function Experience() {
  const [workExperience, setWorkExperience] = useState([]);
  const [eduExperience, setEduExperience] = useState([]);
  const [researchExperience, setResearchExperience] = useState([]);

  useEffect(() => {
    const experiencePromise = services.get(
      'classes/Experience?order=-startDate'
    );
    const eduPromise = services.get('classes/Education?order=-startDate');
    const researchPromise = services.get('classes/Research');
    Promise.allSettled([experiencePromise, eduPromise, researchPromise])
      .then((result) => {
        const experienceData = result[0];
        if (experienceData.status === 'fulfilled') {
          setWorkExperience(experienceData.value.data.results);
        }
        const eduData = result[1];
        if (eduData.status === 'fulfilled') {
          setEduExperience(eduData.value.data.results);
        }
        const researchData = result[2];
        if (researchData.status === 'fulfilled') {
          setResearchExperience(researchData.value.data.results);
        }
      })
      .finally(() => {
        // this.isLoading = false;
      });
  }, []);
  return (
    <Container>
      <Heading>Experience</Heading>
      <Heading subtitle>Work Experience</Heading>
      <Table>
        <thead>
          <tr>
            <th>Job Name</th>
            <th>Company Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {workExperience.map((data: any) => (
            <tr>
              <td>{data.job}</td>
              <td>{data.department}</td>
              <td>{data.description}</td>
              <td>{showMonthYearOnly(data.startDate)}</td>
              <td>{showMonthYearOnly(data.endDate)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Heading subtitle>Education</Heading>
      <Table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {eduExperience.map((data: any) => (
            <tr>
              <td>{data.degree}</td>
              <td>{data.location}</td>
              <td>{data.description}</td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Heading subtitle>Research</Heading>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Absract</th>
            <th>Paper</th>
            <th>Published Date</th>
          </tr>
        </thead>
        <tbody>
          {researchExperience.map((data: any) => (
            <tr>
              <td>{data.title}</td>
              <td><a href={data.abstract ?? "#"} target="_blank">{data.abstract}</a></td>
              <td><a href={data.paper ?? "#"} target="_blank">{data.paper}</a></td>
              <td>{data.publishDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
