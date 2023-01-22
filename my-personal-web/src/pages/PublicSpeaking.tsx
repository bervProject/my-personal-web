import { Button, Container, Heading, Table } from 'react-bulma-components';
import { speakingData } from '../data/publicSpeaking';
import { showDate } from '../utils/date';

export default function PublicSpeaking() {
  return (
    <Container>
      <Heading>Public Speaking Histories</Heading>
      <Table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Topics</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {speakingData.map((data) => (
            <tr>
              <td>{data.event}</td>
              <td>{data.topics}</td>
              <td>{showDate(data.date)}</td>
              <td>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <Button color="primary">Visit</Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <a
        href="https://berviantoleo.notion.site/Speaker-Experiences-e2a28dba41c94e158d5dc3d901d8bb17"
        target="_blank" rel="noreferrer"
      >
        <Button color="link">More Details</Button>
      </a>
    </Container>
  );
}
