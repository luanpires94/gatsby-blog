import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 3.75rem;
    height: 100vh;
    padding: .8rem 0;
    background: #192734;
    border-left: 1px solid #38444d;
    position: fixed;
    right: 0;
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuBarLink = styled(Link)`
    display: block;
`
export const MenuBarItem = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    padding: 1.1rem;
    cursor: pointer;
    color: #8899a6;
    position: relative;
`