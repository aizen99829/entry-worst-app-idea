import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "FridgeLine: the app that lets you join a virtual queue for your own fridge, so you can experience the DMV from your own kitchen, complete with push notifications and a ticket number nobody will ever call.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
