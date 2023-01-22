import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Columns, Section, Tag } from 'react-bulma-components';

const { Column } = Columns;

const {
  Header: CardHeader,
  Image: CardImage,
  Content: CardContent,
  Footer: CardFooter,
} = Card;

const { Item: CardFooterItem } = CardFooter;

const { Title: CardHeaderTitle } = CardHeader;
const { Group: TagGroup } = Tag;

export default function DevTo({ username }: { username: string }) {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dev.to/api/articles?username=${username}&per_page=9`)
      .then((result) => {
        setPostData(result.data);
      });
  }, []);

  return (
    <Section>
      <Columns>
        {postData.map((data: any) => (
          <Column size="one-third">
            <Card>
              <CardImage src={data.social_image} size="2by1"></CardImage>
              <CardHeader>
                <CardHeaderTitle>{data.title}</CardHeaderTitle>
              </CardHeader>
              <CardContent>
                <TagGroup>
                  {data.tag_list.map((tag: any) => (
                    <Tag color="primary">{tag}</Tag>
                  ))}
                </TagGroup>
                <p>{new Date(data.published_timestamp).toLocaleDateString()}</p>
              </CardContent>
              <CardFooter>
                <CardFooterItem>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <Button color="primary">Link</Button>
                  </a>
                </CardFooterItem>
              </CardFooter>
            </Card>
          </Column>
        ))}
      </Columns>
      <a href={`https://dev.to/${username}`} target="_blank" rel="noreferrer">
        <Button color="primary" fullwidth>See More</Button>
      </a>
    </Section>
  );
}
