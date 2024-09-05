const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
        </header>
        <main className="container mx-auto mt-6">
          {children}
        </main>
      </div>
    );
  };
  
  export default Layout;
  