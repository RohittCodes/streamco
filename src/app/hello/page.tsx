"use client";

import { useConvexAuth } from 'convex/react'
import React from 'react'

const Page = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    console.log(isAuthenticated);
  return (
    <div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && isAuthenticated && <div>Authenticated</div>}
        {!isLoading && !isAuthenticated && <div>Not authenticated</div>}
    </div>
  )
}

export default Page