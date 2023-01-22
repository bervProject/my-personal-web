import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Heading,
  Table,
} from 'react-bulma-components';
import DevTo from '../components/DevTo';
import services from '../services';

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    services
      .get('classes/Blog')
      .then((result) => {
        setBlogData(result.data.results);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // this.isLoading = false;
      });
  }, []);

  return (
    <Container>
      <Heading>Blog</Heading>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((data: any) => (
            <tr>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>
                <a href={data.link} target="_blank">
                  <Button color="primary">Link</Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Heading>Dev.to Posts</Heading>
      <DevTo username="berviantoleo" />
    </Container>
  );
}
