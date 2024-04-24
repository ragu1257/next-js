export default function Layout({
  children,
  dashboard,
  notifications,
  users,
  login,
}: Readonly<{
  children: React.ReactNode;
  dashboard: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div> {children}</div>
      <div style={{display: "flex"}}>
        <div>{dashboard}</div>
        <div>{notifications}</div>
        </div>
        <div>{users}</div>
  
    </>
  ): (login);
}
