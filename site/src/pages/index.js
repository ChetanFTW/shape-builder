import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, Main, lightTheme, darkTheme } from "../styles/styles";
import { useDarkMode } from "../components/useDarkMode";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShapeBuilder from "../components/ShapeBuilder";
import { SistentThemeProviderWithoutBaseLine, Box, Button } from "@sistent/sistent";

const Kbd = styled.kbd`
  background-color: ${({ theme }) =>
  theme.mode === "light" ? "#f4f4f4" : "#2b2b2b"};
  border: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#d1d5da" : "#444")};
  border-bottom-color: ${({ theme }) =>
    theme.mode === "light" ? "#c6cbd1" : "#444"};
  border-radius: 3px;
  box-shadow: inset 0 -1px 0
    ${({ theme }) => (theme.mode === "light" ? "#c6cbd1" : "#444")};
  color: ${({ theme }) => (theme.mode === "light" ? "#444" : "#e6e6e6")};
  display: inline-block;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  padding: 3px 6px;
  margin-right: 6px;
  vertical-align: middle;
`;

const InstructionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 16px;
  font-size: 0.9rem;
  color: ${({ theme }) => (theme.mode === "light" ? "#666" : "#aaa")};

  span {
    display: flex;
    align-items: center;
  }
`;

const IndexPage = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const activeTheme = { ...themeMode, mode: theme };
  const [, setOpen] = useState(false);

  return (
    <SistentThemeProviderWithoutBaseLine>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Main>
          <section className="hero">
            <h1>Shape Builder</h1>
            <h2> Instructions</h2>
            <p className="desc-text">
              Click on the grid to start creating a polygon. Each click adds a point.
            </p>
             {/* Key Strokes Section */}
              <div style={{ textAlign: "center", marginTop: "2rem", width: "100%" }}>
                <h2> Controls</h2> 
                <InstructionsContainer theme={activeTheme}>
                  <span>
                    <Kbd theme={activeTheme}>ENTER</Kbd> /{" "}
                    <Kbd theme={activeTheme}>ESC</Kbd> Close shape
                  </span>

                  <span>
                    <Kbd theme={activeTheme}>CTRL</Kbd> Snap to grid
                  </span>

                  <span>
                    <Kbd theme={activeTheme}>CTRL</Kbd> +{" "}
                    <Kbd theme={activeTheme}>Z</Kbd> Undo
                  </span>
                </InstructionsContainer>
              </div>
          </section>
          <ShapeBuilder />
        </Main>
        <Footer />
      </ThemeProvider>
    </SistentThemeProviderWithoutBaseLine>
  );
};

export default IndexPage;

export const Head = () => <title>Meshery – Shape Builder</title>;