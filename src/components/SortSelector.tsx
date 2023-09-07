import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
        <MenuItem>item 4</MenuItem>
        <MenuItem>item 5</MenuItem>
        <MenuItem>item 65</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
