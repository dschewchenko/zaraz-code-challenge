import { ComponentSettings, Manager } from "@managed-components/types";
import styles from "./styles.css";
import template from "./template.html";

export async function ticTacToeComponent(
  _manager: Manager,
  _settings: ComponentSettings,
) {
  return `<style>${styles}</style>${template}`;
}
