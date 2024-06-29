import { useTheme } from "next-themes";
import { Switch, useSwitch } from "@nextui-org/switch";
import VisuallyHidden from "./VisuallyHidden";
import { PiSunDimFill, PiMoonFill } from "react-icons/pi";

export const ThemeSwitch = (props) => {
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    ...props,
    onChange: () => setTheme(isSelected ? "light" : "dark"),
  });

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-10 h-10",
              "flex items-center justify-center",
              "rounded-medium bg-transparent hover:bg-default-100 mr-[-0px]",
            ],
          })}
        >
          {isSelected ? (
            <PiSunDimFill className="text-large" />
          ) : (
            <PiMoonFill className="text-large" />
          )}
        </div>
      </Component>
    </div>
  );
};
