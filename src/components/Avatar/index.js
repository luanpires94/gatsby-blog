import React from 'react'
import AvatarImg from '../../images/profile.png'

import * as S from './styled'

function Avatar() {

  return (
    <div>
      <S.AvatarWrapper src={AvatarImg} />
    </div>
  )
}

export default Avatar