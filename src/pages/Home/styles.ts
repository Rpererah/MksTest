import styled from 'styled-components'

export const MainLayout = styled.main`
  display: flex;
  padding: 2rem 9rem;
  flex: 1;
  height: calc(100vh - 101px - 34px);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 30px;
  max-height: 100%;
  overflow-y: auto;

  @media (max-width: 700px) {
    height: calc(100vh - 48px - 34px);
  }
`
