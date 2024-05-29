import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 285px;
  width: 217px;
`

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  height: 285px;
  width: 217px;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const ImageLayout = styled.img`
  height: 110px;
  padding: 4px;
  margin-bottom: 4px;
  max-width: fit-content;
`
export const TitleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const TitleText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  flex: 1;
`

export const PriceTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme.white};
  font-size: 0.938rem;
  font-weight: bold;
  width: 64px;
  height: 26px;
`

export const DescribeText = styled.p`
  margin-top: 4px;
  font-size: 0.75rem;
  font-weight: 300;
  padding-bottom: 0.5rem;
`
export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue};
  width: 218px;
  height: 31.91px;
  font-weight: 600;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: -31.91px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
