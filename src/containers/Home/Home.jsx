"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { CARDS } from "./constants";
import { CardItem } from "@/components/Cards";

import "react-tabs/style/react-tabs.css";

const Home = () => {
  return (
    <div className="wide">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Manpower Supply</Tab>
          <Tab>Mobile App / Websites</Tab>
          <Tab>UI/UX Design</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
            {CARDS.map((item, idx) => (
              <CardItem
                src={item.src}
                title={item.title}
                href={item.href}
                key={idx}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel></TabPanel>

        <TabPanel></TabPanel>

        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
