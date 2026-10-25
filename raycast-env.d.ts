/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Display Mode - Choose how the island is anchored */
  "islandStyle": "auto" | "notch" | "pill",
  /** Hover to Expand - Expand the island when the cursor hovers over the notch */
  "hoverToExpand": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `toggle-island` command */
  export type ToggleIsland = ExtensionPreferences & {}
  /** Preferences accessible in the `island-settings` command */
  export type IslandSettings = ExtensionPreferences & {}
  /** Preferences accessible in the `media-controller` command */
  export type MediaController = ExtensionPreferences & {}
  /** Preferences accessible in the `volume-mixer` command */
  export type VolumeMixer = ExtensionPreferences & {}
  /** Preferences accessible in the `system-monitor` command */
  export type SystemMonitor = ExtensionPreferences & {}
  /** Preferences accessible in the `focus-timer` command */
  export type FocusTimer = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `toggle-island` command */
  export type ToggleIsland = {}
  /** Arguments passed to the `island-settings` command */
  export type IslandSettings = {}
  /** Arguments passed to the `media-controller` command */
  export type MediaController = {}
  /** Arguments passed to the `volume-mixer` command */
  export type VolumeMixer = {}
  /** Arguments passed to the `system-monitor` command */
  export type SystemMonitor = {}
  /** Arguments passed to the `focus-timer` command */
  export type FocusTimer = {}
}

