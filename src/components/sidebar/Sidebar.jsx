import { useState } from "react";
import { Button } from "../../styles/globalStyles";
import {
  SideBar,
  SideBarBtns,
  SidBarTitle,
  Group,
  GroupHeader,
  SidebarContainer
} from "../../pages/dashboard/Dashboard.styled";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";
import { MenAcc, WomenAcc, SideBtns, CatBtns } from "../../data/data";
import { Accordion } from "../";
import { v4 as uuidv4 } from "uuid";

const SideBarCom = ({ dispatch, filterProducts }) => {
  const [isOpenW, setIsOpenW] = useState(false);
  const [isOpenM, setIsOpenM] = useState(false);

  return (
    <SideBar className="Sidebar">
      <SidebarContainer className="Sidebar-container">
        <SidBarTitle>
          <p style={{ color: "var(--primary)" }}>Choose a category</p>
        </SidBarTitle>
        <SideBarBtns className="Sidebar-Btns">
          {SideBtns.map(btn => {
            return (
              <Button
                onClick={() => dispatch(filterProducts(btn.onclick))}
                key={uuidv4()}
              >
                {btn.value}
              </Button>
            );
          })}
          {CatBtns.map(btn => {
            return (
              <Button
                onClick={() => dispatch(filterProducts(btn.onclick))}
                key={uuidv4()}
              >
                {btn.onclick.substring(btn.onclick.indexOf("/") + 1)}
              </Button>
            );
          })}
          <Group
            onClick={() => {
              setIsOpenW(!isOpenW), setIsOpenM(false);
            }}
          >
            <GroupHeader>
              <p>Women's</p>
              <p>{isOpenW ? <BsChevronUp /> : <BsChevronDown />}</p>
            </GroupHeader>
            {WomenAcc &&
              WomenAcc.map(el => {
                return (
                  <Accordion
                    key={uuidv4()}
                    title={el.onclick.substring(el.onclick.indexOf("-") + 1)}
                    onclick={el.onclick}
                    isOpen={isOpenW}
                  />
                );
              })}
          </Group>
          <Group
            onClick={() => {
              setIsOpenM(!isOpenM), setIsOpenW(false);
            }}
          >
            <GroupHeader>
              <p>Men's</p>
              <p>{isOpenM ? <BsChevronUp /> : <BsChevronDown />}</p>
            </GroupHeader>
            {MenAcc &&
              MenAcc.map(el => {
                return (
                  <Accordion
                    key={uuidv4()}
                    title={el.onclick.substring(el.onclick.indexOf("-") + 1)}
                    onclick={el.onclick}
                    isOpen={isOpenM}
                  />
                );
              })}
          </Group>
        </SideBarBtns>
      </SidebarContainer>
    </SideBar>
  );
};
export default SideBarCom;
