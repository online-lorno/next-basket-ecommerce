'use client'

import { Promotion } from './Promotion'
import { useAppSelector } from '@/lib/hooks/redux'
import {
  getCartProducts,
  getFavorites,
} from '@/redux/customer/customerSelector'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'

const navListMenuItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
  },
  {
    title: 'Blog',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
  },
  {
    title: 'Support',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
  },
  {
    title: 'News',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon: NewspaperIcon,
  },
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: RectangleGroupIcon,
  },
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: TagIcon,
  },
]

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  )

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 px-2 py-2 pr-2 font-medium text-main"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Shop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          About
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Blog
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Contact
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Pages
        </ListItem>
      </Typography>
    </List>
  )
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false)
  const favorites = useAppSelector(getFavorites)
  const cartProducts = useAppSelector(getCartProducts)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    )
  }, [])

  return (
    <header>
      <Promotion />
      <Navbar className="max-w-full rounded-none px-4 py-2">
        <div className="mx-auto flex max-w-screen-3xl items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-[119px]">
            <Typography
              as={Link}
              href="/"
              variant="h6"
              className="cursor-pointer py-1.5 text-2xl font-bold lg:ml-2"
            >
              Bandage
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="text"
              size="sm"
              color="blue-gray"
              className="flex items-center gap-2 text-sm capitalize text-primary"
            >
              <UserIcon className="h-4 w-4" />
              Log In / Register
            </Button>
            <Button variant="text" size="sm" color="blue-gray">
              <MagnifyingGlassIcon className="h-5 w-5 text-primary" />
            </Button>
            {cartProducts.length > 0 ? (
              <Badge
                content={cartProducts.length}
                className="right-[10px] top-[18px] bg-transparent text-xs text-primary"
              >
                <Button variant="text" size="sm" color="blue-gray">
                  <ShoppingCartIcon className="h-5 w-5 text-primary" />
                </Button>
              </Badge>
            ) : (
              <Button variant="text" size="sm" color="blue-gray">
                <ShoppingCartIcon className="h-5 w-5 text-primary" />
              </Button>
            )}
            {favorites.length > 0 ? (
              <Badge
                content={favorites.length}
                className="right-[10px] top-[18px] bg-transparent text-xs text-primary"
              >
                <Button variant="text" size="sm" color="blue-gray">
                  <HeartIcon className="h-5 w-5 text-primary" />
                </Button>
              </Badge>
            ) : (
              <Button variant="text" size="sm" color="blue-gray">
                <HeartIcon className="h-5 w-5 text-primary" />
              </Button>
            )}
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              variant="text"
              size="sm"
              color="blue-gray"
              className="flex items-center gap-2 text-sm capitalize text-primary"
              fullWidth
            >
              <UserIcon className="h-4 w-4" />
              Log In / Register
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </header>
  )
}
