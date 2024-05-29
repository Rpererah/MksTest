import { Skeleton } from '@mui/material'
import styled from 'styled-components'

export const LoadingLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 285px;
  width: 218px;
  background-color: ${(props) => props.theme.white};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const SquareImageContainer = styled(Skeleton)`
  && {
    height: 110px;
    width: 150px;
    margin: 0.5rem;
  }
`

export const ContainerSkeletonSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: -20px;
`

export const SkeletonTitleText = styled(Skeleton)`
  && {
    height: 50px;
    width: 110px;
  }
`

export const SkeletonTag = styled(Skeleton)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 64px;
    height: 26px;
  }
`
