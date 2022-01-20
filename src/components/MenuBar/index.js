import React from 'react'

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light } from "@styled-icons/material-outlined/Lightbulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

import * as S from './styled'

const MenuBar = () => (

    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Back Home">
                <S.MenuBarItem>
                    <Home />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarLink to="/search/" title="Search">
                <S.MenuBarItem>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title="Change theme">
                <Light />
            </S.MenuBarItem>
            <S.MenuBarItem title="Change view">
                <Grid />
            </S.MenuBarItem>
            <S.MenuBarItem title="Go top">
                <Arrow />
            </S.MenuBarItem>
        </S.MenuBarGroup>

    </S.MenuBarWrapper>
)

export default MenuBar