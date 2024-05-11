import Teams from "@/components/TeamsCard/TeamsCard";

export default async function page() {
  const data = await fetch("https://661a370b125e9bb9f29b8cb1.mockapi.io/teams");
  const members: Member[] = await data.json();
  return (
    <main className="text-black pt-8 w-dvw overflow-y-auto md:h-dvh bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <Teams members={members} />
    </main>
  );
}
