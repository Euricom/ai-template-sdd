export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Agent Detail</h1>
        <p className="text-xl text-gray-600">Agent ID: {id}</p>
        <p className="text-gray-500 mt-2">Placeholder - Coming Soon</p>
      </div>
    </main>
  );
}
