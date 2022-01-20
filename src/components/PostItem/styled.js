import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    display: flex;
    color: #8899a6;
    text-decoration: none;

    &:hover {
        color: #1fa1f2;
    }
`

export const PostItemWrapper = styled.section`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 2rem 3rem;
    border-bottom: 1px solid #38444d;
`

export const PostItemTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 90px;
    min-height: 90px;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 50%;
    color: #fff;
    background: ${props => props.background};
`

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
    font-size: .9rem;
`

export const PostItemTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    margin: .2rem 0 .5rem;
`

export const PositItemDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;
`