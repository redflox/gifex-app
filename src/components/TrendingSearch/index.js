import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingSearch = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTredingSearch() {
    const { isNearScreen, elementRef } = useNearScreen({ distance: '150px' })

    return (
        <div ref={elementRef}>
            <Suspense fallback={<Spinner/>}>
                {isNearScreen ?
                    <TrendingSearch />
                    :
                    <Spinner />
                }
            </Suspense>
        </div>
    )

}