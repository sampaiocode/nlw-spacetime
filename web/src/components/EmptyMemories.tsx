export function EmptyMemories() {
  return (
    <div className="p-16 flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, começe a{' '}
        <a href="" className="underline hover:text-gray-50 transition-colors">
          criar agora
        </a>
        !
      </p>
    </div>
  );
}
