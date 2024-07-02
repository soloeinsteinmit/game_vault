export default function Attributions({
  text = "text name here",
  logoText = "logo text here",
}) {
  return (
    <div className="flex flex-col gap-1 justify-start  bg-content1 border-1 border-default-200 p-3 rounded-small w-full max-w-[500px]">
      <p>{logoText}</p> <p className="text-default-500 text-sm">{text}</p>
    </div>
  );
}
