import {
  Container,
  Columns,
  Heading,
  Button,
  Section,
  Image,
} from 'react-bulma-components';
import {
  certIdRoleBased,
  certIdFundamental,
  accredibles,
} from '../data/certifications';
import useScript from '../hooks/useScript';

const { Column } = Columns;

export default function Certification() {
  useScript('https://cdn.credly.com/assets/utilities/embed.js');
  return (
    <Container>
      <Heading>Certification</Heading>
      <a href="https://www.credly.com/users/bervianto-leo-pratama" target="_blank">
        <Button color="primary">Credly Profile</Button>
      </a>
      <Section>
        <Columns>
          <Column size="half">
            <Section>
              <Heading subtitle>Role Based</Heading>
              <Columns>
                {certIdRoleBased.map((cert) => (
                  <Column size="one-third">
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={cert}
                      data-share-badge-host="https://www.credly.com"
                    />
                  </Column>
                ))}
              </Columns>
            </Section>
          </Column>
          <Column size="half">
            <Section>
              <Heading subtitle>Fundamental</Heading>
              <Columns>
                {certIdFundamental.map((cert) => (
                  <Column size="one-third">
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={cert}
                      data-share-badge-host="https://www.credly.com"
                    />
                  </Column>
                ))}
              </Columns>
            </Section>
          </Column>
        </Columns>
      </Section>
      <Section>
        <Heading subtitle>Google Cloud Certification</Heading>
        <Section>
          <Columns>
            {accredibles.map((data) => (
              <a
                href={`https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/${data}`}
                target="_blank"
              >
                <Image
                  size="16"
                  src={`https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/${data}`}
                  alt={data}
                />
              </a>
            ))}
          </Columns>
        </Section>
      </Section>
    </Container>
  );
}
