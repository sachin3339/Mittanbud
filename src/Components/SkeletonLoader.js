import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({skeletonCount}) => {
    return (
        <SkeletonTheme baseColor="#BEBEBE">
            <Skeleton count={skeletonCount}/>
        </SkeletonTheme>
    )
}

export default SkeletonLoader