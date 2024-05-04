'use client';

import { Flex, Stack, Text, Divider, Image, Title, Center, Grid, Card, Button, List } from '@mantine/core';
import { IconArrowUpRight, IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import Timeline from 'antd/es/timeline';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import supabase from '@/assets/skills/supabase.png';
import portrait from '@/assets/portrait.png';
import swift from '@/assets/skills/swift.png';
import flutter from '@/assets/skills/flutter.png';
import react from '@/assets/skills/react.png';
import ts from '@/assets/skills/typescript.png';
import js from '@/assets/skills/javascript.png';
import node from '@/assets/skills/node.png';
import python from '@/assets/skills/python.png';
import clang from '@/assets/skills/clang.png';
import firebase from '@/assets/skills/firebase.png';
import wordventure from '@/assets/icons/wordventure.png';
import nextjs from '@/assets/skills/nextjs.svg';
import { getSchoolYear } from '@/utils/getSchoolYear';
import Section from '@/components/Section';
import classes from './style.module.css';

const TopContent = () => {
  const skills: StaticImageData[] = [swift, flutter, react, nextjs, ts, js, node, python, clang, firebase, supabase];

  return (
    <Stack mt={15} mx={15} maw={1000} w="100%">
      <div className={classes.blurryGradient} />

      <Section title="Projects">
        <Card
          p={20}
          my={15}
          w="100%"
          style={{ borderRadius: '40px', backgroundColor: 'rgba(230, 230, 230, 0.2)' }}
          shadow="lg"
        >
          <Title order={2}>Word Venture</Title>
          <Flex w="100%" justify="space-between">
            <Image src={wordventure.src} maw={200} radius={40} m={10} />

            <Stack w="100%" align="end" justify="space-between">
              <Text w="100%" ta="center">
                Word Venture is AI integrated word book app!
              </Text>
              <Button component={Link} href="/wordventure" variant='transparent' size="sm">
                <IconArrowUpRight color="gray" />
              </Button>
            </Stack>
          </Flex>
        </Card>
      </Section>

      <Divider />

      <Section title="Profile">
        <Flex align="center">
          <Image src={portrait.src} width={200} mr={15} />
          <Stack gap={8}>
            <Title order={1}>Yu Takahashi</Title>
            <Text color="gray">he/him</Text>
          </Stack>
        </Flex>
        <Text ta="start">
          <span style={{ fontWeight: 'bold' }}>Kwansei Gakuin University</span> (Japan)
          <br />
          <span style={{ paddingLeft: '20px' }}>School of Engineering</span>
          <br />
          <span style={{ paddingLeft: '20px' }}>Department of Information Engineering</span>
          <br />
          <span style={{ paddingLeft: '20px', color: 'gray' }}>{getSchoolYear()} year</span>
        </Text>
        <Flex justify="flex-end" w="100%">
          <Button
            component={Link}
            href="https://github.com/taka-2120"
            style={{ color: 'black' }}
            variant="transparent"
            size="sm"
          >
            <IconBrandGithub />
          </Button>
          <Button
            component={Link}
            href="https://twitter.com/yutk_941"
            style={{ color: 'black' }}
            variant="transparent"
            size="sm"
          >
            <IconBrandX />
          </Button>
        </Flex>
      </Section>

      <Divider />

      <Section title="Skills">
        <Grid mb={50} gutter={{ base: 5, xs: 4, md: 2, lg: 2, xl: 2 }}>
          {skills.map((skill, index) => (
            <Grid.Col key={skill.src + index} span={4} my={8}>
              <Center>
                <Image src={skill.src} width={100} mr={15} radius={20} />
              </Center>
            </Grid.Col>
          ))}
        </Grid>
      </Section>

      <Divider />

      <Section title="Affiliations">
        <List listStyleType="disc">
          <List.Item style={{ textAlign: 'start' }}>Tech.Uni (Representative)</List.Item>
          <List.Item style={{ textAlign: 'start' }}>Re-era, inc. (Software Engineer)</List.Item>
        </List>
      </Section>

      <Divider />

      <Section title="History">
        <Timeline
          style={{ fontFamily: 'monospace', width: 'fit-content' }}
          mode="left"
          items={[
            {
              label: '2022/09/01 ~ 2022/10/30',
              children: 'Development of flutter apps for Android TV and mobile devices at Crosshare.inc',
            },
            {
              label: '2022/10/01 ~ 2023/08/31',
              children: 'Became the deputy representative at Tech.Uni\nDevelopment of the discord bot for Tech.Uni',
            },
            {
              label: '2022/11/01 ~ 2023/05/31',
              children: 'Development of SwiftUI app at a start-up team',
            },
            {
              label: '2023/08/01 ~ ',
              children: 'Joined Re-era.inc as an engineer',
            },
            {
              label: '2023/09/01 ~ ',
              children: 'Became the representative at Tech.Uni',
            },
          ]}
        />
      </Section>
    </Stack>
  );
};

export default TopContent;
