import React, { useEffect, useState } from 'react';

import Spinner from '@atlaskit/spinner';
import { OverLay, SpinnerWrapper } from './style';

export default function () {
    const [loading, setloading] = useState(false)
    const open = () => {
        setloading(true)
    }
    const close = () => {
        setloading(false)
    }
    useEffect(() => {
        window.openLoading = open
        window.closeLoading = close
    }, [])
    return (
      loading && 
      <OverLay>
          <SpinnerWrapper>
              <Spinner size='large' invertColor={true} />
          </SpinnerWrapper>
      </OverLay>
    )
}
