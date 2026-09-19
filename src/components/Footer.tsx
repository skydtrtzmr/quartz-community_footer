import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { i18n } from "../i18n";
import style from "./styles/footer.scss";

export interface FooterOptions {
  links: Record<string, string>;
  /** 版权文案主体（默认"源悦科技"），页脚显示为 "<copyright> © 2026" */
  copyright?: string;
  /** 版权链接（可选），提供后 copyright 变为可点击链接 */
  copyrightUrl?: string;
}

export default ((opts?: FooterOptions) => {
  const copyright = opts?.copyright ?? "源悦科技";

  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {opts?.copyrightUrl ? (
            <a href={opts.copyrightUrl}>{copyright}</a>
          ) : (
            <span>{copyright}</span>
          )}{" "}
          &copy; {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
