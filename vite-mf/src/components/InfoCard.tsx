import { FC } from "react"
import { Card, Image, Group, Text, Badge, Button } from "@mantine/core"

const InfoCard:FC = () => {
  return (
    <div style={{ width: 340, margin: 'auto' }}>
       <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={`https://picsum.photos/id/237/200/300`} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt={2} mb={5}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </div>
  )
}

export default InfoCard