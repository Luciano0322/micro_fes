import { AppShell, Header, Title } from '@mantine/core'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs"><Title>Remote App</Title></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Outlet/>
    </AppShell>
  )
}

export default Layout