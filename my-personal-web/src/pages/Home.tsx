import {
  Button,
  Columns,
  Container,
  Content,
  Heading,
  Image,
} from 'react-bulma-components';
import { Link } from 'react-router-dom';
import CommunityBuilderLogo from '../assets/community.png';
import MyPicture from '../assets/me.jpg';

const { Column } = Columns;

export default function Home() {
  return (
    <Container>
      <Columns>
        <Column size="one-quarter">
          <Image src={MyPicture} size="16" />
        </Column>
        <Column>
          <Heading>Hello, I'm Bervianto Leo Pratama</Heading>
          <Heading subtitle>
            I'm a Software Engineer from Bandung, Indonesia
          </Heading>
          <Content>
            <p>
              I love sharing, blogging, and developing. I frequently contribute
              to communities, for example:
            </p>
            <ol>
              <li>
                <a href="https://www.dicoding.com/users/berviantoleo">
                  External Reviewer at Dicoding
                </a>
              </li>
              <li>
                <a href="https://www.dicoding.com/academies/428">
                  Course Contributor at Dicoding for "Belajar Implementasi
                  CI/CD" course
                </a>
              </li>
            </ol>
            <p>
              I focus on <b>Backend Development</b>, <b>DevOps</b>,{' '}
              <b>Microservices</b>, and <b>Cloud Computing</b>. I am also
              interested in Cyber Security, DevSecOps, Software Architecture,
              and Cloud Architecture.
            </p>
            <p>
              My technology stacks are <b>.NET</b>, <b>SQL Server</b>,{' '}
              <b>PostgreSQL</b>, and
              <b> Node.js</b>.
            </p>
          </Content>
        </Column>
      </Columns>
      <Content>
        <p>
          I am also{' '}
          <a href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=bervianto%2Bleo%2Bpratama&cb-cards.q_operator=AND">
            an active member
          </a>{' '}
          of AWS Community Builders.
        </p>
        <Columns>
          <Column size="one-quarter">
            <a href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=bervianto%2Bleo%2Bpratama&cb-cards.q_operator=AND">
              <Image src={CommunityBuilderLogo} size="2by1" />
            </a>
          </Column>
        </Columns>
        <p>
          Do you want to learn more about my experience? Visit my experience
          page.
        </p>
        <p>
          <Link to="/experience">
            <Button color="primary">Bring me to the experience page.</Button>
          </Link>
        </p>
      </Content>
    </Container>
  );
}
