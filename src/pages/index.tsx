import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.css'
import { Container } from "@mantine/core";
import { NavBar } from "@/components/NavBar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export enum NavItem {
  CARDS,
  OFFERS,
  FRIENDS,
}

export default function Home() {
  const [navItem, setNavItem] = useState<NavItem>(NavItem.CARDS);
  return (
    <>
      <Head>
        <title>Loyalty Mockup</title>
        <meta name="description" content="Loyalty Mockup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Container sx={{ border: "1px solid red" }}>
          Default container
          <NavBar
            currentItem={navItem}
            setNavItem={setNavItem}
            items={[NavItem.CARDS, NavItem.OFFERS, NavItem.FRIENDS]}
          />
        </Container>
      </body>
    </>
  );
}
