import { Skeleton } from '@mui/material'
import {
  ContainerSkeletonSquare,
  LoadingLayout,
  SkeletonTag,
  SkeletonTitleText,
  SquareImageContainer,
} from './styles'

export default function Loading() {
  return (
    <LoadingLayout>
      <SquareImageContainer variant="circular" />
      <ContainerSkeletonSquare>
        <SkeletonTitleText variant="text" />
        <SkeletonTag />
      </ContainerSkeletonSquare>
      <Skeleton variant="text" width={200} height={90} />
    </LoadingLayout>
  )
}
