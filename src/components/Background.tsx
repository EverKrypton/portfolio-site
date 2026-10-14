export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__grid" />
      <div className="bg__glow bg__glow--violet" />
      <div className="bg__glow bg__glow--emerald" />
      <div className="bg__noise" />
    </div>
  );
}
