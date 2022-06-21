import { AppShell } from 'ui';

function App() {
  return (
    <div>
      <AppShell 
        title="Movies" 
        routes={[
          {
            path: "/",
            element: () => <div>This is Home Page</div>,
          },
          {
            path: "/playlist",
            element: () => <div>This is Playlist Page</div>,
          },
        ]}
        navLinks={[
          {
            label: "Home",
            path: "/"
          },
          {
            label: "Playlist",
            path: "/playlist"
          }
        ]}
      />
    </div>
  );
}

export default App;
