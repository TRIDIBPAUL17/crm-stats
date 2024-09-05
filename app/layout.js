// app/layout.js
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 p-4">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
        </header>
        <main className="container mx-auto mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
