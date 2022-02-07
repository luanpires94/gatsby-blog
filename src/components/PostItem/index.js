import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({
    slug,
    category,
    date,
    timeToRead,
    title,
    description,
    background
}) => (

    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            <S.PostItemTag background={background}>{category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>
                    {date} . {timeToRead} minute of reading
                </S.PostItemDate>
                <S.PostItemTitle>
                    {title}
                </S.PostItemTitle>
                <S.PostItemDescription>
                    {description}
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

PostItem.propTypes = {
    slug: propTypes.string,
    background: propTypes.string,
    category: propTypes.string,
    date: propTypes.string,
    timeToRead: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
}

export default PostItem