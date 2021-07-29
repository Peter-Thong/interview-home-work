import React, { useState, useEffect, useRef } from "react";

import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setTerm }) => {
  const [state, setState] = useState("");

  const initial = useRef(true);

  useEffect(() => {
    //prevent action in the first render
    if (initial.current) {
      initial.current = false;
      return;
    }

    //set timer, after user finish typing  .5s then take action
    const timer = setTimeout(() => {
      setTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search post"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
