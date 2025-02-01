import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { FaHouse, FaUser, FaNewspaper } from 'react-icons/fa6';
import { FaInfoCircle } from 'react-icons/fa';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: FaHouse,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: FaInfoCircle,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: FaUser,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: FaNewspaper,
        text: 'Статьи',
    },
];
